import { CornerPluses } from "./plus";

export function Hatch() {
  return (
    <div className="relative h-6 w-full border-x border-edge screen-line-before screen-line-after">
      <CornerPluses bottom />
      <div className="page-hatch pointer-events-none absolute inset-0" />
    </div>
  );
}
