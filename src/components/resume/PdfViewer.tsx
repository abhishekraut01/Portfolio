'use client';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  ArrowSquareOutIcon,
  ArrowsInLineHorizontalIcon,
  DownloadSimpleIcon,
  FilePdfIcon,
  MinusIcon,
  PlusIcon,
} from '@phosphor-icons/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Must be set in the same module that renders <Document> (see react-pdf docs).
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;
const PAGE_MAX_WIDTH = 820;

type Props = {
  url: string;
  fileName: string;
};

export default function PdfViewer({ url, fileName }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [frameWidth, setFrameWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  // zoom follows the gesture instantly; renderZoom re-renders the page sharply
  // once the gesture pauses. In between, CSS zoom scales the last render.
  const [zoom, setZoom] = useState(1);
  const [renderZoom, setRenderZoom] = useState(1);
  const anchorRef = useRef<{ x: number; y: number; from: number } | null>(null);
  const [failed, setFailed] = useState(false);
  // Height / width of the PDF page, read once it loads (US Letter until then).
  const [pageRatio, setPageRatio] = useState(11 / 8.5);

  const clampZoom = (z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));

  // Zoom keeping the point under (x, y) of the scroll box in place.
  const zoomTo = (next: number, x?: number, y?: number) => {
    const box = scrollRef.current;
    setZoom((current) => {
      const target = clampZoom(next);
      if (box && target !== current) {
        anchorRef.current = {
          x: x ?? box.clientWidth / 2,
          y: y ?? 0,
          from: anchorRef.current?.from ?? current,
        };
      }
      return target;
    });
  };

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => setFrameWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Ctrl/Cmd + wheel and trackpad pinch (sent as ctrl + wheel) zoom the
  // resume instead of the browser. Needs a non-passive listener.
  useEffect(() => {
    const box = scrollRef.current;
    if (!box) return;
    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const rect = box.getBoundingClientRect();
      const factor = Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.002));
      setZoom((current) => {
        const target = clampZoom(current * factor);
        if (target !== current) {
          anchorRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            from: anchorRef.current?.from ?? current,
          };
        }
        return target;
      });
    };
    box.addEventListener('wheel', onWheel, { passive: false });
    return () => box.removeEventListener('wheel', onWheel);
  }, []);

  // Keep the anchor point still after a zoom change.
  useLayoutEffect(() => {
    const box = scrollRef.current;
    const anchor = anchorRef.current;
    if (!box || !anchor) return;
    anchorRef.current = null;
    const ratio = zoom / anchor.from;
    box.scrollLeft = (box.scrollLeft + anchor.x) * ratio - anchor.x;
    box.scrollTop = (box.scrollTop + anchor.y) * ratio - anchor.y;
  }, [zoom]);

  useEffect(() => {
    const id = setTimeout(() => setRenderZoom(zoom), 180);
    return () => clearTimeout(id);
  }, [zoom]);

  const fitWidth = Math.min(frameWidth, PAGE_MAX_WIDTH);
  const pageWidth =
    fitWidth > 0 ? Math.round(fitWidth * renderZoom) : undefined;

  return (
    <div className="bg-card overflow-hidden rounded-xl border border-dashed border-black/20 dark:border-white/10">
      {/* Toolbar */}
      <div className="bg-background/80 flex items-center justify-between gap-2 border-b border-dashed border-black/20 px-3 py-2 backdrop-blur-sm dark:border-white/10">
        <div className="flex min-w-0 items-center gap-2">
          <FilePdfIcon className="text-muted-foreground size-5 shrink-0" />
          <span className="truncate text-sm font-medium">{fileName}</span>
          {numPages > 0 && (
            <span className="text-muted-foreground hidden shrink-0 text-xs sm:inline">
              {numPages} {numPages === 1 ? 'page' : 'pages'}
            </span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            aria-label="Zoom out"
            disabled={zoom <= MIN_ZOOM}
            onClick={() => zoomTo(zoom - ZOOM_STEP)}
          >
            <MinusIcon />
          </Button>
          <button
            type="button"
            onClick={() => zoomTo(1)}
            title="Fit to width"
            className="text-muted-foreground hover:text-foreground w-12 text-center text-xs tabular-nums transition-colors"
          >
            {Math.round(zoom * 100)}%
          </button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            aria-label="Zoom in"
            disabled={zoom >= MAX_ZOOM}
            onClick={() => zoomTo(zoom + ZOOM_STEP)}
          >
            <PlusIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-8 sm:inline-flex"
            aria-label="Fit to width"
            title="Fit to width"
            disabled={zoom === 1}
            onClick={() => zoomTo(1)}
          >
            <ArrowsInLineHorizontalIcon />
          </Button>

          <span className="mx-1 h-5 w-px bg-black/15 dark:bg-white/15" />

          <Button
            asChild
            variant="ghost"
            size="icon"
            className="size-8"
            aria-label="Open in new tab"
            title="Open in new tab"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ArrowSquareOutIcon />
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="ml-1 h-8"
            track={{
              name: 'button_click',
              data: { buttonId: 'resume_download', section: 'resume_viewer' },
            }}
          >
            <a href={url} download={fileName}>
              <DownloadSimpleIcon />
              <span className="hidden sm:inline">Download</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Pages */}
      {/* data-lenis-prevent: let this box scroll natively instead of the page */}
      <div
        ref={scrollRef}
        data-lenis-prevent
        className="bg-muted/40 max-h-[80vh] overflow-auto overscroll-contain p-3 sm:p-6"
      >
        <div ref={frameRef} className="w-full">
          {failed ? (
            <div className="text-muted-foreground py-16 text-center text-sm">
              The preview could not load.{' '}
              <a href={url} className="text-foreground underline">
                Open the PDF
              </a>{' '}
              instead.
            </div>
          ) : (
            // w-max + min-w-full: centred when it fits, scrollable from the
            // left edge when zoomed wider than the box.
            <div
              className="w-max min-w-full"
              style={{ zoom: zoom / renderZoom }}
            >
              <Document
                file={url}
                onLoadSuccess={({ numPages: n }) => setNumPages(n)}
                onLoadError={() => setFailed(true)}
                loading={<PageSkeleton />}
                className="flex flex-col items-center gap-6"
              >
                {pageWidth &&
                  Array.from({ length: numPages }, (_, i) => (
                    // Fixed-size frame so the scroll position survives the
                    // brief moment the page re-renders at a new zoom.
                    <div
                      key={i}
                      style={{
                        width: pageWidth,
                        height: Math.round(pageWidth * pageRatio),
                      }}
                    >
                      <Page
                        pageNumber={i + 1}
                        width={pageWidth}
                        loading={null}
                        onLoadSuccess={(page) =>
                          i === 0 &&
                          setPageRatio(page.originalHeight / page.originalWidth)
                        }
                        className="overflow-hidden rounded-md shadow-lg ring-1 ring-black/10 dark:ring-white/10"
                      />
                    </div>
                  ))}
              </Document>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PageSkeleton() {
  return (
    <Skeleton
      className="mx-auto w-full rounded-md"
      style={{ maxWidth: PAGE_MAX_WIDTH, aspectRatio: '1 / 1.294' }}
    />
  );
}
