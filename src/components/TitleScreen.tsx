import React from 'react';
import { StoryImage } from './StoryImage';

interface TitleScreenProps {
  isDark: boolean;
  isMuted: boolean;
  onToggleTheme: () => void;
  onToggleMute: () => void;
  onStart: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  isDark,
  isMuted,
  onToggleTheme,
  onToggleMute,
  onStart,
}) => {
  return (
    <main className="min-h-screen flex flex-col justify-between px-5 sm:px-8 py-6 sm:py-8 max-w-3xl mx-auto animate-journal-in">
      {/* Minimal top utility strip */}
      <div className="flex items-center justify-between font-ui text-xs text-[#635E56] dark:text-[#9AA0A6]">
        <span>Jurnal Interaktif · 6 Babak</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleMute}
            aria-label={isMuted ? 'Nyalakan suara' : 'Bisukan suara'}
            className="px-2.5 py-1.5 rounded border border-[#DFD8CA] dark:border-[#2A2F35] hover:bg-[#EFEAE0] dark:hover:bg-[#1E2227] transition-colors cursor-pointer whitespace-nowrap"
          >
            {isMuted ? 'Suara: Mati' : 'Suara: Nyala'}
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Ganti ke mode Kertas Hangat' : 'Ganti ke mode Malam Slate'}
            className="px-2.5 py-1.5 rounded border border-[#DFD8CA] dark:border-[#2A2F35] hover:bg-[#EFEAE0] dark:hover:bg-[#1E2227] transition-colors cursor-pointer whitespace-nowrap"
          >
            {isDark ? 'Mode: Malam' : 'Mode: Kertas'}
          </button>
        </div>
      </div>

      {/* Centered Editorial Journal Cover */}
      <section className="my-auto py-6 sm:py-10">
        <div className="bg-[#FDFBF7] dark:bg-[#1C2024] border border-[#DFD8CA] dark:border-[#2A2F35] rounded-lg p-5 sm:p-8 md:p-10 shadow-[0_2px_18px_rgba(30,29,27,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col items-center text-center">
            <StoryImage
              id="cover"
              aspectClass="aspect-[16/9]"
              className="w-full max-w-md mb-6"
            />

            <p className="font-ui text-xs tracking-wide text-[#635E56] dark:text-[#9AA0A6] mb-3">
              Catatan Setelah Sidang · S2 atau Kerja?
            </p>

            <h1 className="font-prose text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1D1B] dark:text-[#EAE6DF] max-w-lg text-balance mb-4">
              Persimpangan Toga
            </h1>

            <p className="font-prose text-[15px] sm:text-base leading-relaxed text-[#46423C] dark:text-[#C5C0B7] max-w-[56ch] mb-8">
              Sebuah ruang refleksi singkat untukmu yang baru saja menyelesaikan sidang skripsi—di tengah riuh ekspektasi keluarga, linimasa teman sebaya, dan pertanyaan paling jujur tentang langkah berikutnya.
            </p>

            <div className="w-full max-w-md border-t border-b border-[#E8E2D6] dark:border-[#2A2F35] py-4 mb-8 grid grid-cols-3 gap-2 font-ui text-xs text-[#635E56] dark:text-[#9AA0A6]">
              <div>
                <div className="font-semibold text-[#1E1D1B] dark:text-[#EAE6DF]">5–7 Menit</div>
                <div>Durasi Baca</div>
              </div>
              <div>
                <div className="font-semibold text-[#1E1D1B] dark:text-[#EAE6DF]">3 Aspek</div>
                <div>Psikologis</div>
              </div>
              <div>
                <div className="font-semibold text-[#1E1D1B] dark:text-[#EAE6DF]">3 Akhir</div>
                <div>Reflektif</div>
              </div>
            </div>

            <button
              type="button"
              data-start="true"
              onClick={onStart}
              className="font-ui text-sm font-semibold px-7 py-3.5 rounded-md bg-[#2A4D41] hover:bg-[#203D33] dark:bg-[#5EA38C] dark:hover:bg-[#70B59E] text-[#FDFBF7] dark:text-[#111517] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A4D41] whitespace-nowrap"
            >
              Mulai Membuka Jurnal
            </button>
          </div>
        </div>
      </section>

      {/* Bottom flat control hint */}
      <footer className="text-center font-ui text-xs text-[#787166] dark:text-[#8E959E]">
        Tekan Enter / Spasi untuk mulai · Gunakan tombol 1–3 untuk memilih saat bermain
      </footer>
    </main>
  );
};
