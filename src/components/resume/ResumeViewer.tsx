'use client';

import dynamic from 'next/dynamic';

// pdf.js only runs in the browser, so the viewer skips server rendering.
const PdfViewer = dynamic(() => import('./PdfViewer'), { ssr: false });

export default function ResumeViewer(props: { url: string; fileName: string }) {
  return <PdfViewer {...props} />;
}
