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
import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Must be set in the same module that renders <Document> (see react-pdf docs).
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const ZOOM_STEPS = [0.75, 1, 1.25, 1.5, 2];
const PAGE_MAX_WIDTH = 820;

type Props = {
  url: string;
  fileName: string;
};

export default function PdfViewer({ url, fileName }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [frameWidth, setFrameWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(1);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => setFrameWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const zoom = ZOOM_STEPS[zoomIndex];
  const fitWidth = Math.min(frameWidth, PAGE_MAX_WIDTH);
  const pageWidth = fitWidth > 0 ? Math.round(fitWidth * zoom) : undefined;

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
            disabled={zoomIndex === 0}
            onClick={() => setZoomIndex((i) => Math.max(0, i - 1))}
          >
            <MinusIcon />
          </Button>
          <button
            type="button"
            onClick={() => setZoomIndex(1)}
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
            disabled={zoomIndex === ZOOM_STEPS.length - 1}
            onClick={() =>
              setZoomIndex((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))
            }
          >
            <PlusIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-8 sm:inline-flex"
            aria-label="Fit to width"
            title="Fit to width"
            disabled={zoomIndex === 1}
            onClick={() => setZoomIndex(1)}
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
      <div className="bg-muted/40 max-h-[85vh] overflow-auto p-3 sm:p-6">
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
            <Document
              file={url}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              onLoadError={() => setFailed(true)}
              loading={<PageSkeleton />}
              className="flex flex-col items-center gap-6"
            >
              {pageWidth &&
                Array.from({ length: numPages }, (_, i) => (
                  <Page
                    key={i}
                    pageNumber={i + 1}
                    width={pageWidth}
                    loading={<PageSkeleton />}
                    className="overflow-hidden rounded-md shadow-lg ring-1 ring-black/10 dark:ring-white/10"
                  />
                ))}
            </Document>
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
