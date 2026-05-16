import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { localeNames, localeFlags } from './i18n';
import type { Locale } from './i18n';

interface LanguageSwitcherProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

const allLocales = Object.keys(localeNames) as Locale[];

export default function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
        style={{
          background: open ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
          border: `1px solid ${open ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
          color: '#ccc',
        }}
      >
        <Globe size={16} />
        <span>{localeFlags[locale]} {localeNames[locale]}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 py-2 rounded-xl z-50 min-w-[200px] max-h-[400px] overflow-y-auto"
          style={{
            background: '#151515',
            border: '1px solid #2a2a2a',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}
        >
          {allLocales.map((l) => (
            <button
              key={l}
              onClick={() => { onChange(l); setOpen(false); }}
              className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors"
              style={{
                color: l === locale ? '#F5C842' : '#aaa',
                background: l === locale ? 'rgba(245,200,66,0.08)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (l !== locale) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                if (l !== locale) (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              <span className="text-lg">{localeFlags[l]}</span>
              <span className="font-medium">{localeNames[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

