/** Runs before first paint; all theme changes go through this controller. */
export const THEME_INIT_SCRIPT = `(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const normalize = value => value === 'light' || value === 'dark' ? value : 'system';
  let preference = 'system';
  try { preference = normalize(localStorage.getItem('theme')); } catch {}

  const apply = () => {
    const resolved = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
    root.classList.toggle('dark', resolved === 'dark');
    root.style.colorScheme = resolved;
    root.dataset.theme = preference;
    window.dispatchEvent(new CustomEvent('portfolio:theme-applied'));
  };

  window.addEventListener('portfolio:theme-change', event => {
    if (!['light', 'dark', 'system'].includes(event.detail)) return;
    preference = event.detail;
    try { localStorage.setItem('theme', preference); } catch {}
    apply();
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'theme' && event.key !== null) return;
    preference = normalize(event.newValue);
    apply();
  });
  system.addEventListener('change', () => {
    if (preference === 'system') apply();
  });
  apply();
})();`;

export function toggleTheme() {
  const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
  window.dispatchEvent(new CustomEvent("portfolio:theme-change", { detail: next }));
}
