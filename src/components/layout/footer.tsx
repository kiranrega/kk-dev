import { CornerPluses } from "./plus";

export function Footer() {
  return (
    <footer className="relative mb-24 border-x border-edge screen-line-before screen-line-after px-4 py-8 sm:px-5">
      <CornerPluses bottom />
      <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span>Designed & Developed by </span>
          <span className="font-semibold text-foreground">Kiran Kumar Rega</span>
        </div>
        <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
      <div className="mt-3 text-center font-mono text-xs text-muted sm:text-left">
        Hyderabad, India
      </div>
    </footer>
  );
}
