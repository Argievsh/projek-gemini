import React from 'react';
import { getStatStatusLabel } from '../game/engine';
import { Ending, JournalEntry, Stats } from '../game/types';
import { StoryImage } from './StoryImage';

interface EndingViewProps {
  ending: Ending;
  stats: Stats;
  lastReaction: string | null;
  history: JournalEntry[];
  isDark: boolean;
  onToggleTheme: () => void;
  onReplay: () => void;
  onDownloadStandalone: () => void;
}

export const EndingView: React.FC<EndingViewProps> = ({
  ending,
  stats,
  lastReaction,
  history,
  isDark,
  onToggleTheme,
  onReplay,
  onDownloadStandalone,
}) => {
  const nuanceText = ending.getMentalNuance(stats);

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-16 animate-journal-in">
      <article className="bg-[#FDFBF7] dark:bg-[#1C2024] border border-[#DFD8CA] dark:border-[#2A2F35] rounded-lg p-6 sm:p-10 shadow-[0_2px_18px_rgba(30,29,27,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
        {/* Top utility row */}
        <div className="flex items-center justify-between gap-4 font-ui text-xs text-[#635E56] dark:text-[#9AA0A6] pb-5 border-b border-[#E8E2D6] dark:border-[#2A2F35]">
          <span>Refleksi Akhir · {ending.badgeLabel}</span>
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-2.5 py-1 rounded border border-[#DFD8CA] dark:border-[#2E343B] hover:bg-[#EFEAE0] dark:hover:bg-[#23282E] transition-colors cursor-pointer whitespace-nowrap"
          >
            {isDark ? 'Mode: Malam' : 'Mode: Kertas'}
          </button>
        </div>

        {/* Ending Emblem & Title */}
        <header className="mt-6 flex flex-col items-center text-center">
          <StoryImage
            id={ending.illustrationId}
            aspectClass="aspect-[4/3]"
            className="w-full max-w-md mb-6"
          />
          <h1 className="font-prose text-2xl sm:text-3xl font-bold text-[#1E1D1B] dark:text-[#EAE6DF] text-balance">
            {ending.title}
          </h1>
          <p className="font-prose text-sm sm:text-base text-[#635E56] dark:text-[#9AA0A6] mt-2">
            {ending.subtitle}
          </p>
        </header>

        {/* Closing reaction + epilogue paragraphs */}
        <div className="mt-8 space-y-4 font-prose text-[15px] sm:text-base leading-[1.75] text-[#282623] dark:text-[#DDD8CE] max-w-[65ch] mx-auto">
          {lastReaction && (
            <p className="italic text-[#635E56] dark:text-[#9AA0A6]">{lastReaction}</p>
          )}
          {ending.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          <p className="p-4 rounded-md bg-[#F4EFE5] dark:bg-[#22272C] border border-[#E5DEC9] dark:border-[#2F353C] text-sm leading-relaxed text-[#3F3C37] dark:text-[#C8C3BA]">
            {nuanceText}
          </p>
        </div>

        {/* Mandatory Reflective Validation Quote */}
        <section
          aria-label="Pesan reflektif personal"
          className="mt-8 py-6 px-5 sm:px-8 rounded-md bg-[#2A4D41]/6 dark:bg-[#5EA38C]/10 border border-[#2A4D41]/20 dark:border-[#5EA38C]/25 max-w-[65ch] mx-auto text-center"
        >
          <blockquote className="font-prose text-base sm:text-lg italic leading-relaxed text-[#1E1D1B] dark:text-[#EAE6DF]">
            “{ending.reflectiveQuote}”
          </blockquote>
          <p className="font-ui text-xs text-[#2A4D41] dark:text-[#7BB8A2] mt-3 font-medium">
            {ending.actionReminder}
          </p>
          <p className="font-ui text-[11px] text-[#635E56] dark:text-[#9AA0A6] mt-1">
            {ending.quoteAuthorNote}
          </p>
        </section>

        {/* Final 3 Psychological Indicators Snapshot */}
        <section
          aria-label="Ringkasan kondisi akhir"
          className="mt-8 pt-6 border-t border-[#E8E2D6] dark:border-[#2A2F35] max-w-[65ch] mx-auto"
        >
          <h2 className="font-ui text-xs font-semibold text-[#635E56] dark:text-[#9AA0A6] mb-3">
            Kondisi Bekalmu Saat Ini
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded border border-[#E5DEC9] dark:border-[#2E343B] bg-[#FAF7F1] dark:bg-[#171A1E]">
              <div className="font-ui text-[11px] text-[#635E56] dark:text-[#9AA0A6]">
                Kesiapan Finansial
              </div>
              <div className="font-ui text-lg font-bold text-[#1E1D1B] dark:text-[#EAE6DF] mt-1 tabular-nums">
                {stats.finansial}%{' '}
                <span className="text-xs font-normal text-[#635E56] dark:text-[#9AA0A6]">
                  · {getStatStatusLabel('finansial', stats.finansial)}
                </span>
              </div>
            </div>
            <div className="p-3.5 rounded border border-[#E5DEC9] dark:border-[#2E343B] bg-[#FAF7F1] dark:bg-[#171A1E]">
              <div className="font-ui text-[11px] text-[#635E56] dark:text-[#9AA0A6]">
                Energi & Mental
              </div>
              <div className="font-ui text-lg font-bold text-[#1E1D1B] dark:text-[#EAE6DF] mt-1 tabular-nums">
                {stats.mental}%{' '}
                <span className="text-xs font-normal text-[#635E56] dark:text-[#9AA0A6]">
                  · {getStatStatusLabel('mental', stats.mental)}
                </span>
              </div>
            </div>
            <div className="p-3.5 rounded border border-[#E5DEC9] dark:border-[#2E343B] bg-[#FAF7F1] dark:bg-[#171A1E]">
              <div className="font-ui text-[11px] text-[#635E56] dark:text-[#9AA0A6]">
                Kejelasan Tujuan
              </div>
              <div className="font-ui text-lg font-bold text-[#1E1D1B] dark:text-[#EAE6DF] mt-1 tabular-nums">
                {stats.tujuan}%{' '}
                <span className="text-xs font-normal text-[#635E56] dark:text-[#9AA0A6]">
                  · {getStatStatusLabel('tujuan', stats.tujuan)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Journal Log */}
        <section
          aria-label="Jejak keputusan jurnal"
          className="mt-6 pt-6 border-t border-[#E8E2D6] dark:border-[#2A2F35] max-w-[65ch] mx-auto"
        >
          <h2 className="font-ui text-xs font-semibold text-[#635E56] dark:text-[#9AA0A6] mb-3">
            Jejak Langkah yang Kamu Ambil
          </h2>
          <ol className="space-y-2.5 font-prose text-xs sm:text-[13px] text-[#46423C] dark:text-[#C5C0B7]">
            {history.map((entry) => (
              <li
                key={entry.chapterNumber}
                className="flex items-start gap-3 pb-2 border-b border-[#EFEAE0] dark:border-[#252A30] last:border-b-0"
              >
                <span className="font-ui text-[11px] text-[#635E56] dark:text-[#9AA0A6] shrink-0 mt-0.5 tabular-nums">
                  0{entry.chapterNumber}.
                </span>
                <span>{entry.journalNote}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-[#E8E2D6] dark:border-[#2A2F35] flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            data-start="true"
            onClick={onReplay}
            className="w-full sm:w-auto font-ui text-sm font-semibold px-6 py-3 rounded-md bg-[#2A4D41] hover:bg-[#203D33] dark:bg-[#5EA38C] dark:hover:bg-[#70B59E] text-[#FDFBF7] dark:text-[#111517] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A4D41] whitespace-nowrap"
          >
            Mainkan Ulang
          </button>

          <button
            type="button"
            onClick={onDownloadStandalone}
            className="w-full sm:w-auto font-ui text-xs font-medium px-5 py-3 rounded-md border border-[#DFD8CA] dark:border-[#2E343B] bg-[#FAF7F1] dark:bg-[#171A1E] hover:bg-[#EFEAE0] dark:hover:bg-[#23282E] text-[#3F3C37] dark:text-[#C8C3BA] transition-colors cursor-pointer whitespace-nowrap"
          >
            Unduh Versi HTML Tunggal (.html)
          </button>
        </div>
      </article>
    </main>
  );
};
