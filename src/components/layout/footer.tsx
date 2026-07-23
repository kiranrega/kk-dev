import { VisitorCounter } from "@/components/features/visitor-counter";

export function Footer() {
  return (
    <footer className="mt-8 mb-8 py-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <span>Designed & Developed by </span>
          <span className="font-semibold text-foreground">Kiran Kumar Rega</span>
        </div>
        <div className="flex items-center gap-4">
          <VisitorCounter repo="kiranrega/kiranrega" />
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
      <div className="mt-3 text-xs text-muted text-center sm:text-left">
        Hyderabad, India
      </div>
    </footer>
  );
}
