'use client';

import { useEffect, useState } from 'react';
import { Home, Layers, Briefcase, FolderGit2, ChevronUp, ChevronDown } from 'lucide-react';

const sections = [
  { id: 'overview', label: 'Home', icon: Home },
  { id: 'stack', label: 'Stack', icon: Layers },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setProgress(Math.min(scrolled, 1));
      setAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const circumference = 2 * Math.PI * 14;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <button
      onClick={() => window.scrollTo({ top: atTop ? document.documentElement.scrollHeight : 0, behavior: 'smooth' })}
      className="relative flex items-center justify-center w-11 h-11 shrink-0"
      aria-label={atTop ? 'Scroll to bottom' : 'Scroll to top'}
    >
      <svg className="absolute inset-0 -rotate-90" width="44" height="44" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-neutral-200 dark:text-neutral-800"
        />
        <circle
          cx="22"
          cy="22"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-neutral-900 dark:text-white transition-[stroke-dashoffset] duration-150"
        />
      </svg>
      {atTop ? (
        <ChevronDown size={14} className="text-neutral-900 dark:text-white" />
      ) : (
        <ChevronUp size={14} className="text-neutral-900 dark:text-white" />
      )}
    </button>
  );
}

export default function FloatingTOC() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(top.target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
      <div className="flex items-center gap-1 h-11 pl-2.5 pr-2.5 rounded-2xl bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        <ScrollProgress />
        <div className="w-[1px] h-5 bg-neutral-200 dark:bg-neutral-800 mx-1" />
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-2 h-full px-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                  : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
              }`}
            >
              <Icon size={16} strokeWidth={2} />
              <span className="text-sm font-medium">{section.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}