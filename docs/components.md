# Component Library Documentation

## SkillPill

```tsx
function SkillPill({ name }: { name: string })
```
- **name**: `string` – Name of the skill to display. The component renders a pill with the skill label and optional icon.

## ProjectCard

```tsx
function ProjectCard({ project, index }: { project: Project; index: number })
```
- **project**: `Project` – Object containing `name`, `description`, `url`, `tags`, `badge` etc.
- **index**: `number` – Position of the card in the list, used for reveal animation delay.

## ExperienceItem

```tsx
function ExperienceItem({ job, index }: { job: Experience; index: number })
```
- **job**: `Experience` – Contains `company`, `role`, `duration`, `description`, `techStack`.
- **index**: `number` – Used for staggered reveal animation.

## StatsBand

```tsx
function StatsBand({ stats }: { stats: Stat[] })
```
- **stats**: `Stat[]` – Array of objects with `label` and `value` displayed in the band.

## ActiveNav

```tsx
function ActiveNav({ items }: { items: NavItem[] })
```
- **items**: `NavItem[]` – Navigation entries with `id`, `label`, `href`.

*All components respect the design‑system CSS variables defined in `globals.css`.*
