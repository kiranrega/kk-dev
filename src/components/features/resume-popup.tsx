"use client";

import { useId, useRef, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, FileText, LoaderCircle, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getResumePreviewUrl } from "@/lib/resume";
import styles from "./resume-popup.module.css";

export function ResumePopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const backdropPressed = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [previewStatus, setPreviewStatus] = useState<"loading" | "loaded" | "error">("loading");
  const id = useId();
  const resumeUrl = siteConfig.links.resume.trim();
  const previewUrl = getResumePreviewUrl(resumeUrl, siteConfig.resume.previewUrl);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-controls={id}
        onClick={() => {
          setPreviewStatus("loading");
          setIsOpen(true);
          dialogRef.current?.showModal();
        }}
        className="group inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-3 text-sm font-medium text-foreground transition-colors hover:border-muted-foreground hover:bg-muted/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        <FileText size={16} aria-hidden="true" />
        <span>Resume</span>
        <ArrowUpRight size={14} className="text-muted-foreground" aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        id={id}
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        className={`${styles.dialog} bg-card text-foreground`}
        onClose={() => setIsOpen(false)}
        onPointerDown={(event) => {
          backdropPressed.current = event.target === event.currentTarget;
        }}
        onClick={(event) => {
          if (backdropPressed.current && event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
          backdropPressed.current = false;
        }}
        onKeyDown={(event) => event.stopPropagation()}
      >
        <div className={styles.panel}>
          <header className="sticky top-0 z-10 flex shrink-0 items-center justify-between gap-3 border-b border-border bg-card px-5 py-3 sm:px-7">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <FileText size={14} aria-hidden="true" />
              The career edition
            </span>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close resume popup"
              className="-mr-2 grid size-11 shrink-0 cursor-pointer place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 pt-6 pb-5 sm:px-7 sm:pt-7 sm:pb-6">
            <h2 id={`${id}-title`} className="shrink-0 font-pixel text-3xl leading-tight sm:text-4xl">
              My work, on paper.
            </h2>
            <p id={`${id}-description`} className="mt-3 shrink-0 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.resume.description}
            </p>

            <div className={`${styles.documentStage} mt-6 flex min-h-96 flex-1 flex-col overflow-hidden rounded-2xl border border-border p-2 sm:p-3`}>
              <div className={`${styles.document} relative min-h-0 flex-1 overflow-hidden rounded-xl border border-border bg-card`}>
                {isOpen && previewUrl && previewStatus !== "error" ? (
                  <iframe
                    src={previewUrl}
                    title={`${siteConfig.name} — complete resume PDF`}
                    className="absolute inset-0 h-full w-full border-0 bg-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-foreground"
                    onLoad={() => setPreviewStatus("loaded")}
                    onError={() => setPreviewStatus("error")}
                  />
                ) : null}
                {!previewUrl || previewStatus === "error" ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center text-sm text-muted-foreground">
                    <FileText size={28} strokeWidth={1.5} aria-hidden="true" />
                    <p>{resumeUrl ? "The PDF preview is unavailable. You can still open or download the resume below." : "The complete resume will be available here soon."}</p>
                  </div>
                ) : previewStatus === "loading" ? (
                  <div role="status" className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card text-sm text-muted-foreground">
                    <LoaderCircle size={24} className="animate-spin motion-reduce:animate-none" aria-hidden="true" />
                    Loading resume…
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-border px-5 pt-3 pb-4 sm:px-7">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
              <span className="flex min-w-0 items-center gap-2">
                <FileText size={14} className="shrink-0" aria-hidden="true" />
                <span className="min-w-0 wrap-anywhere">{siteConfig.resume.fileName}</span>
              </span>
              {previewUrl ? (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 underline-offset-4 hover:text-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  Open PDF <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="sr-only"> in a new tab</span>
                </a>
              ) : null}
            </div>

            {resumeUrl ? (
              <a
                href={resumeUrl}
                download={siteConfig.resume.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                <ArrowDownToLine size={18} aria-hidden="true" />
                Download resume
                <span className="sr-only"> (opens in a new tab if not downloaded)</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="mt-2 flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2.5 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background opacity-50"
              >
                <ArrowDownToLine size={18} aria-hidden="true" />
                Resume coming soon
              </button>
            )}
          </div>

          <footer className="flex shrink-0 flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-border bg-background/60 px-5 py-3 text-xs text-muted-foreground sm:px-7">
            <span>Good things start with a conversation.</span>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex min-h-11 items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </footer>
        </div>
      </dialog>
    </>
  );
}
