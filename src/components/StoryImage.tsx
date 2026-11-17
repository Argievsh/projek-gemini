import React, { useState } from 'react';
import { JournalIllustration } from './JournalIllustrations';
import { Ending, Scene } from '../game/types';

export type StoryImageId =
  | 'cover'
  | Scene['illustrationId']
  | Ending['illustrationId'];

const IMAGE_MAP: Record<StoryImageId, { src: string; alt: string }> = {
  cover: {
    src: '/src/assets/images/cover_journal_desk_1794893184262.jpg',
    alt: 'Meja kayu dengan jurnal terbuka, topi toga, pena, dan secangkir teh hangat di dekat jendela pagi.',
  },
  post_defense: {
    src: '/src/assets/images/babak_1_kos_malam_1794893185141.jpg',
    alt: 'Kamar kos di malam hari usai sidang skripsi dengan selempang kelulusan, tumpukan draf, dan ponsel di meja.',
  },
  dining_table: {
    src: '/src/assets/images/babak_2_meja_makan_1794893185714.jpg',
    alt: 'Meja makan keluarga di pagi hari yang hangat dengan sarapan, koran, dan dua cangkir teh.',
  },
  two_emails: {
    src: '/src/assets/images/babak_3_dua_peluang_1794893185603.jpg',
    alt: 'Dua jalur di atas meja kerja: map portofolio kantor di sisi kiri dan naskah riset serta pena di sisi kanan.',
  },
  coffee_talk: {
    src: '/src/assets/images/babak_4_kedai_kopi_1794893187100.jpg',
    alt: 'Sudut kedai kopi dekat kampus pada sore hari dengan dua gelas es kopi susu dan buku catatan.',
  },
  midnight_desk: {
    src: '/src/assets/images/babak_5_tengah_malam_1794893186850.jpg',
    alt: 'Meja belajar pukul dua dini hari diterangi satu lampu meja hangat dengan laptop dan jurnal kosong terbuka.',
  },
  graduation_morning: {
    src: '/src/assets/images/babak_6_pagi_wisuda_1794893187366.jpg',
    alt: 'Pintu kamar yang terbuka ke cahaya matahari pagi dengan sepatu tertata dan kotak toga wisuda.',
  },
  ending_karier: {
    src: '/src/assets/images/ending_karier_langkah_1794893187154.jpg',
    alt: 'Lulusan baru membawa tas selempang berjalan mantap melintasi jembatan kota di pagi yang cerah.',
  },
  ending_akademik: {
    src: '/src/assets/images/ending_akademik_riset_1794893188606.jpg',
    alt: 'Sudut baca perpustakaan universitas dengan jendela lengkung tinggi, tumpukan buku, dan buku catatan riset.',
  },
  ending_eksplorasi: {
    src: '/src/assets/images/ending_eksplorasi_kompas_1794893189450.jpg',
    alt: 'Jurnal perjalanan, kompas kuningan, kamera film, dan cangkir kopi di bangku kayu menghadap perbukitan pagi.',
  },
};

interface StoryImageProps {
  id: StoryImageId;
  aspectClass?: string;
  className?: string;
}

export const StoryImage: React.FC<StoryImageProps> = ({
  id,
  aspectClass = 'aspect-[16/9]',
  className = '',
}) => {
  const [failed, setFailed] = useState(false);
  const meta = IMAGE_MAP[id];

  if (failed) {
    return (
      <div
        className={`${aspectClass} ${className} rounded-md border border-[#DFD8CA] dark:border-[#2E343B] bg-[#F4EFE5] dark:bg-[#171A1E] flex items-center justify-center p-6`}
      >
        <JournalIllustration
          id={id}
          className="w-44 h-auto text-[#1E1D1B] dark:text-[#EAE6DF] opacity-85"
        />
      </div>
    );
  }

  return (
    <figure
      className={`${aspectClass} ${className} rounded-md overflow-hidden border border-[#DFD8CA] dark:border-[#2E343B] bg-[#EFEAE0] dark:bg-[#171A1E]`}
    >
      <img
        src={meta.src}
        alt={meta.alt}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="w-full h-full object-cover dark:brightness-90 dark:contrast-105 transition-transform duration-500 ease-out"
      />
    </figure>
  );
};
