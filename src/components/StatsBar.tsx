import React from 'react';
import { getStatStatusLabel } from '../game/engine';
import { StatKey, Stats } from '../game/types';

interface StatsBarProps {
  stats: Stats;
  lastDeltas: Partial<Stats> | null;
  deltaTick: number;
  chapterNumber: number;
  totalChapters: number;
  isDark: boolean;
  isMuted: boolean;
  onToggleTheme: () => void;
  onToggleMute: () => void;
  onRestart: () => void;
}

const STAT_META: Array<{
  key: StatKey;
  label: string;
  shortLabel: string;
  barClass: string;
  icon: React.ReactNode;
}> = [
  {
    key: 'finansial',
    label: 'Kesiapan Finansial',
    shortLabel: 'Finansial',
    barClass: 'bg-[#2A4D41] dark:bg-[#7BB8A2]',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 5.5V14.5M12.2 7.5C12.2 6.7 11.2 6.2 10 6.2C8.8 6.2 7.8 6.8 7.8 7.6C7.8 8.6 8.8 9 10 9.4C11.2 9.8 12.2 10.3 12.2 11.4C12.2 12.3 11.2 13 10 13C8.8 13 7.8 12.4 7.8 11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'mental',
    label: 'Energi & Mental',
    shortLabel: 'Mental',
    barClass: 'bg-[#46637A] dark:bg-[#82A8C9]',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
        <path d="M10 16.5C10 16.5 3.5 12.3 3.5 7.4C3.5 5.2 5.2 3.5 7.2 3.5C8.5 3.5 9.4 4.2 10 5.1C10.6 4.2 11.5 3.5 12.8 3.5C14.8 3.5 16.5 5.2 16.5 7.4C16.5 12.3 10 16.5 10 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'tujuan',
    label: 'Kejelasan Tujuan',
    shortLabel: 'Tujuan',
    barClass: 'bg-[#7A5E3B] dark:bg-[#D1A973]',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 4.5L11.7 10L10 15.5L8.3 10L10 4.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const StatsBar: React.FC<StatsBarProps> = ({
  stats,
  lastDeltas,
  deltaTick,
  chapterNumber,
  totalChapters,
  isDark,
  isMuted,
  onToggleTheme,
  onToggleMute,
  onRestart,
}) => {
  return (
    <aside
      aria-label="Status psikologis karakter"
      className="sticky top-0 z-20 border-b border-[#DFD8CA] dark:border-[#2A2F35] bg-[#F7F4EE]/95 dark:bg-[#14171A]/95 backdrop-blur-xs"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex flex-col gap-2">
        {/* Top utility & chapter progress row */}
        <div className="flex items-center justify-between gap-3 font-ui text-xs text-[#635E56] dark:text-[#9AA0A6]">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-semibold text-[#1E1D1B] dark:text-[#EAE6DF] whitespace-nowrap">
              Persimpangan Toga
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums whitespace-nowrap">
              Babak {chapterNumber}/{totalChapters}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={onToggleMute}
              aria-label={isMuted ? 'Nyalakan suara (M)' : 'Bisukan suara (M)'}
              title={isMuted ? 'Nyalakan suara (M)' : 'Bisukan suara (M)'}
              className="px-2 py-1 rounded border border-transparent hover:border-[#DFD8CA] dark:hover:border-[#2E343B] hover:bg-[#EFEAE0] dark:hover:bg-[#1E2227] text-[#635E56] dark:text-[#9AA0A6] hover:text-[#1E1D1B] dark:hover:text-[#EAE6DF] transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A4D41]"
            >
              {isMuted ? (
                <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M3 8H6.5L11 4.5V15.5L6.5 12H3V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M14 7.5L17.5 12.5M17.5 7.5L14 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M3 8H6.5L11 4.5V15.5L6.5 12H3V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M14 7.2C14.9 8.1 15.4 9 15.4 10C15.4 11 14.9 11.9 14 12.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
              <span className="hidden sm:inline">{isMuted ? 'Bisu' : 'Suara'}</span>
            </button>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Ganti ke tema Kertas Hangat (T)' : 'Ganti ke tema Malam Slate (T)'}
              title={isDark ? 'Tema Kertas (T)' : 'Tema Malam (T)'}
              className="px-2 py-1 rounded border border-transparent hover:border-[#DFD8CA] dark:hover:border-[#2E343B] hover:bg-[#EFEAE0] dark:hover:bg-[#1E2227] text-[#635E56] dark:text-[#9AA0A6] hover:text-[#1E1D1B] dark:hover:text-[#EAE6DF] transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A4D41]"
            >
              {isDark ? (
                <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 3V4.5M10 15.5V17M3 10H4.5M15.5 10H17M5.1 5.1L6.2 6.2M13.8 13.8L14.9 14.9M14.9 5.1L13.8 6.2M6.2 13.8L5.1 14.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M15.8 12.2A6.2 6.2 0 0 1 7.8 4.2A6.5 6.5 0 1 0 15.8 12.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              )}
              <span className="hidden sm:inline">{isDark ? 'Kertas' : 'Malam'}</span>
            </button>

            <button
              type="button"
              onClick={onRestart}
              aria-label="Mulai ulang cerita dari awal (R)"
              title="Ulangi dari awal (R)"
              className="px-2 py-1 rounded border border-transparent hover:border-[#DFD8CA] dark:hover:border-[#2E343B] hover:bg-[#EFEAE0] dark:hover:bg-[#1E2227] text-[#635E56] dark:text-[#9AA0A6] hover:text-[#1E1D1B] dark:hover:text-[#EAE6DF] transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A4D41]"
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M4.5 9.5A5.5 5.5 0 1 1 6.1 13.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4.5 5.5V9.5H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="hidden sm:inline">Ulang</span>
            </button>
          </div>
        </div>

        {/* 3 Psychological Stats Meters */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-5">
          {STAT_META.map((item) => {
            const value = stats[item.key];
            const delta = lastDeltas?.[item.key] ?? 0;
            const statusText = getStatStatusLabel(item.key, value);

            return (
              <div key={item.key} className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center justify-between gap-1 font-ui text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 text-[#3F3C37] dark:text-[#C8C3BA] truncate">
                    {item.icon}
                    <span className="hidden sm:inline truncate">{item.label}</span>
                    <span className="sm:hidden truncate">{item.shortLabel}</span>
                  </span>

                  <span className="flex items-center gap-1 shrink-0 tabular-nums">
                    {delta !== 0 && deltaTick > 0 && (
                      <span
                        key={`${item.key}-${deltaTick}`}
                        className={`animate-delta-float text-[10px] font-semibold ${
                          delta > 0
                            ? 'text-[#2A4D41] dark:text-[#7BB8A2]'
                            : 'text-[#8B3A3A] dark:text-[#E08A8A]'
                        }`}
                      >
                        {delta > 0 ? `+${delta}` : delta}
                      </span>
                    )}
                    <span className="font-semibold text-[#1E1D1B] dark:text-[#EAE6DF]">
                      {value}%
                    </span>
                  </span>
                </div>

                <div
                  role="progressbar"
                  aria-label={`${item.label}: ${value}% (${statusText})`}
                  aria-valuenow={value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="h-1.5 w-full rounded-xs bg-[#E3DDD0] dark:bg-[#24292F] overflow-hidden"
                >
                  <div
                    className={`h-full transition-all duration-300 ease-out ${item.barClass}`}
                    style={{ width: `${value}%` }}
                  />
                </div>

                <div className="hidden sm:flex items-center justify-between font-ui text-[10px] text-[#787166] dark:text-[#8E959E]">
                  <span>{statusText}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
