import React from 'react';
import { PathKey } from '../game/types';

interface ChoiceIllustrationProps {
  choiceId: string;
  pathAffinity: PathKey;
}

const BG_TINT: Record<PathKey, string> = {
  karier: 'bg-[#EEF3F0] dark:bg-[#1D2824] border-[#C9D8D0] dark:border-[#2E423A]',
  akademik: 'bg-[#EEF1F5] dark:bg-[#1E242C] border-[#CBD3DE] dark:border-[#323D4B]',
  eksplorasi: 'bg-[#F5F0E6] dark:bg-[#27231D] border-[#DFD4C0] dark:border-[#3F382C]',
};

export const ChoiceIllustration: React.FC<ChoiceIllustrationProps> = ({
  choiceId,
  pathAffinity,
}) => {
  return (
    <div
      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-md border shrink-0 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-[1.03] ${BG_TINT[pathAffinity]}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 sm:w-14 sm:h-14">
        {renderChoiceArt(choiceId)}
      </svg>
    </div>
  );
};

function renderChoiceArt(choiceId: string): React.ReactNode {
  switch (choiceId) {
    // Babak 1
    case 'b1_c1':
      // Catatan kas & ponsel telungkup
      return (
        <g>
          <rect x="12" y="14" width="26" height="36" rx="2" fill="#FDFBF7" stroke="#2A4D41" strokeWidth="1.8" />
          <line x1="17" y1="22" x2="33" y2="22" stroke="#2A4D41" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="28" x2="29" y2="28" stroke="#7A5E3B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="34" x2="31" y2="34" stroke="#2A4D41" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="35" y="28" width="16" height="24" rx="2.5" fill="#D8E2DC" stroke="#1E1D1B" strokeWidth="1.6" />
          <line x1="40" y1="48" x2="46" y2="48" stroke="#1E1D1B" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      );
    case 'b1_c2':
      // Laptop beasiswa & kaca pembesar
      return (
        <g>
          <rect x="12" y="16" width="38" height="25" rx="2" fill="#FDFBF7" stroke="#46637A" strokeWidth="1.8" />
          <path d="M8 45H54" stroke="#46637A" strokeWidth="2" strokeLinecap="round" />
          <line x1="18" y1="24" x2="32" y2="24" stroke="#46637A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="30" x2="28" y2="30" stroke="#46637A" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="42" cy="30" r="8" fill="#E3ECF3" stroke="#1E1D1B" strokeWidth="1.7" />
          <line x1="47.5" y1="35.5" x2="53" y2="41" stroke="#1E1D1B" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case 'b1_c3':
      // Teh hangat & bulan sabit tenang
      return (
        <g>
          <path d="M18 32H40V43C40 47.4 36.4 51 32 51H26C21.6 51 18 47.4 18 43V32Z" fill="#EFE4D2" stroke="#7A5E3B" strokeWidth="1.8" />
          <path d="M40 35H44.5C46.4 35 48 36.6 48 38.5C48 40.4 46.4 42 44.5 42H40" stroke="#7A5E3B" strokeWidth="1.8" />
          <path d="M25 25C25 22 28 21 27 18" stroke="#7A5E3B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M33 26C33 23 36 22 35 19" stroke="#7A5E3B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M49 14A6.5 6.5 0 1 1 42 21A5 5 0 0 0 49 14Z" fill="#D8B67F" stroke="#7A5E3B" strokeWidth="1.4" />
        </g>
      );

    // Babak 2
    case 'b2_c1':
      // ID Card kantor & tas kerja
      return (
        <g>
          <rect x="14" y="24" width="36" height="24" rx="3" fill="#DDE7E1" stroke="#2A4D41" strokeWidth="1.8" />
          <path d="M25 24V19C25 17.3 26.3 16 28 16H36C37.7 16 39 17.3 39 19V24" stroke="#2A4D41" strokeWidth="1.8" />
          <line x1="14" y1="34" x2="50" y2="34" stroke="#2A4D41" strokeWidth="1.6" />
          <rect x="29" y="31" width="6" height="6" rx="1" fill="#FDFBF7" stroke="#2A4D41" strokeWidth="1.5" />
        </g>
      );
    case 'b2_c2':
      // Gulungan ijazah/beasiswa & pita emas
      return (
        <g>
          <rect x="14" y="20" width="36" height="24" rx="4" fill="#FDFBF7" stroke="#46637A" strokeWidth="1.8" />
          <line x1="20" y1="28" x2="36" y2="28" stroke="#46637A" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="20" y1="34" x2="32" y2="34" stroke="#46637A" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="42" cy="36" r="6" fill="#E8C98D" stroke="#7A5E3B" strokeWidth="1.6" />
          <path d="M39 41L38 50L42 47L46 50L45 41" fill="#E8C98D" stroke="#7A5E3B" strokeWidth="1.4" strokeLinejoin="round" />
        </g>
      );
    case 'b2_c3':
      // Kalender 3 bulan & kompas
      return (
        <g>
          <rect x="13" y="16" width="30" height="28" rx="2.5" fill="#FDFBF7" stroke="#7A5E3B" strokeWidth="1.8" />
          <line x1="13" y1="24" x2="43" y2="24" stroke="#7A5E3B" strokeWidth="1.6" />
          <circle cx="22" cy="31" r="1.8" fill="#7A5E3B" />
          <circle cx="28" cy="31" r="1.8" fill="#7A5E3B" />
          <circle cx="34" cy="31" r="1.8" fill="#7A5E3B" />
          <circle cx="22" cy="37" r="1.8" fill="#7A5E3B" strokeOpacity="0.4" />
          <circle cx="43" cy="41" r="10" fill="#F2E4CB" stroke="#7A5E3B" strokeWidth="1.7" />
          <path d="M43 34L45.5 41L43 48L40.5 41L43 34Z" fill="#7A5E3B" />
        </g>
      );

    // Babak 3
    case 'b3_c1':
      // Grafik studi kasus & jam wawancara
      return (
        <g>
          <rect x="12" y="16" width="28" height="32" rx="2" fill="#FDFBF7" stroke="#2A4D41" strokeWidth="1.8" />
          <path d="M17 38L23 31L28 34L35 24" stroke="#2A4D41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="43" cy="40" r="10" fill="#DCE8E2" stroke="#2A4D41" strokeWidth="1.7" />
          <path d="M43 35V40L47 42" stroke="#2A4D41" strokeWidth="1.7" strokeLinecap="round" />
        </g>
      );
    case 'b3_c2':
      // Proposal riset & botol tinta
      return (
        <g>
          <rect x="14" y="14" width="28" height="36" rx="2" fill="#FDFBF7" stroke="#46637A" strokeWidth="1.8" />
          <line x1="20" y1="22" x2="36" y2="22" stroke="#46637A" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="20" y1="28" x2="34" y2="28" stroke="#46637A" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="34" x2="30" y2="34" stroke="#46637A" strokeOpacity="0.55" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="38" y="34" width="14" height="16" rx="2" fill="#CFDCE6" stroke="#1E1D1B" strokeWidth="1.6" />
          <rect x="41" y="29" width="8" height="5" rx="1" fill="#46637A" />
        </g>
      );
    case 'b3_c3':
      // Timbangan eksplorasi seimbang dua arah
      return (
        <g>
          <line x1="32" y1="16" x2="32" y2="48" stroke="#7A5E3B" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="48" x2="42" y2="48" stroke="#7A5E3B" strokeWidth="2" strokeLinecap="round" />
          <line x1="15" y1="24" x2="49" y2="24" stroke="#7A5E3B" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M15 24L11 35H19L15 24Z" fill="#EFE4D2" stroke="#7A5E3B" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M49 24L45 35H53L49 24Z" fill="#EFE4D2" stroke="#7A5E3B" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
      );

    // Babak 4
    case 'b4_c1':
      // Monitor kantor & gelembung diskusi tim
      return (
        <g>
          <rect x="13" y="17" width="32" height="22" rx="2.5" fill="#FDFBF7" stroke="#2A4D41" strokeWidth="1.8" />
          <line x1="24" y1="44" x2="34" y2="44" stroke="#2A4D41" strokeWidth="2" strokeLinecap="round" />
          <line x1="29" y1="39" x2="29" y2="44" stroke="#2A4D41" strokeWidth="1.8" />
          <rect x="34" y="26" width="18" height="14" rx="3" fill="#D5E3DC" stroke="#2A4D41" strokeWidth="1.6" />
          <line x1="38" y1="31" x2="48" y2="31" stroke="#2A4D41" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="38" y1="35" x2="45" y2="35" stroke="#2A4D41" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      );
    case 'b4_c2':
      // Tumpukan buku riset & tanda tanya keingintahuan
      return (
        <g>
          <rect x="14" y="36" width="34" height="10" rx="1.5" fill="#D7E2EB" stroke="#46637A" strokeWidth="1.7" />
          <rect x="17" y="26" width="30" height="10" rx="1.5" fill="#FDFBF7" stroke="#46637A" strokeWidth="1.7" />
          <circle cx="32" cy="17" r="6" fill="#E8C98D" stroke="#7A5E3B" strokeWidth="1.5" />
          <path d="M32 14.5C33.2 14.5 34 15.2 34 16.2C34 17.3 32 17.5 32 18.8" stroke="#7A5E3B" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      );
    case 'b4_c3':
      // Jalan berliku & jam jeda tenang
      return (
        <g>
          <path d="M14 48C22 48 22 36 32 36C42 36 42 22 50 18" stroke="#7A5E3B" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="3 3" />
          <circle cx="50" cy="18" r="4" fill="#D8B67F" stroke="#7A5E3B" strokeWidth="1.5" />
          <circle cx="22" cy="24" r="9" fill="#FDFBF7" stroke="#7A5E3B" strokeWidth="1.7" />
          <path d="M22 19V24L25.5 26" stroke="#7A5E3B" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      );

    // Babak 5
    case 'b5_c1':
      // Tangga batu pijakan & matahari terbit
      return (
        <g>
          <path d="M12 46H24V38H36V30H50" stroke="#2A4D41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="42" cy="19" r="6" fill="#E8C98D" stroke="#7A5E3B" strokeWidth="1.6" />
          <line x1="16" y1="22" x2="26" y2="22" stroke="#2A4D41" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      );
    case 'b5_c2':
      // Buku terbuka dengan sinar bohlam ide
      return (
        <g>
          <path d="M14 46V28C14 26 16 25 18 25H31V46C26 43 19 43 14 46Z" fill="#FDFBF7" stroke="#46637A" strokeWidth="1.7" />
          <path d="M50 46V28C50 26 48 25 46 25H33V46C38 43 45 43 50 46Z" fill="#FDFBF7" stroke="#46637A" strokeWidth="1.7" />
          <circle cx="32" cy="16" r="5" fill="#F2D89B" stroke="#7A5E3B" strokeWidth="1.5" />
          <line x1="32" y1="8" x2="32" y2="10" stroke="#7A5E3B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="24" y1="12" x2="26" y2="14" stroke="#7A5E3B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="40" y1="12" x2="38" y2="14" stroke="#7A5E3B" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      );
    case 'b5_c3':
      // Jurnal daftar ritme sehat & centang
      return (
        <g>
          <rect x="16" y="14" width="32" height="36" rx="2.5" fill="#FDFBF7" stroke="#7A5E3B" strokeWidth="1.8" />
          <path d="M22 25L25 28L30 22" stroke="#2A4D41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="34" y1="25" x2="42" y2="25" stroke="#7A5E3B" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M22 35L25 38L30 32" stroke="#2A4D41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="34" y1="35" x2="42" y2="35" stroke="#7A5E3B" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      );

    // Babak 6
    case 'b6_c1':
      // Jembatan kota & tas kerja langkah pertama
      return (
        <g>
          <path d="M10 44H54" stroke="#2A4D41" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 44C20 26 44 26 48 44" stroke="#2A4D41" strokeWidth="1.8" />
          <circle cx="32" cy="18" r="5" fill="#E8C98D" stroke="#7A5E3B" strokeWidth="1.5" />
          <line x1="32" y1="28" x2="32" y2="44" stroke="#2A4D41" strokeWidth="1.5" />
        </g>
      );
    case 'b6_c2':
      // Amplop aplikasi S2 terkirim & segel akademik
      return (
        <g>
          <rect x="13" y="20" width="38" height="26" rx="2.5" fill="#FDFBF7" stroke="#46637A" strokeWidth="1.8" />
          <path d="M13 22L32 35L51 22" stroke="#46637A" strokeWidth="1.7" strokeLinejoin="round" />
          <circle cx="32" cy="35" r="5" fill="#D8B67F" stroke="#7A5E3B" strokeWidth="1.5" />
        </g>
      );
    case 'b6_c3':
    default:
      // Kompas penunjuk arah & horizon terbuka
      return (
        <g>
          <circle cx="32" cy="32" r="16" fill="#FDFBF7" stroke="#7A5E3B" strokeWidth="1.8" />
          <path d="M32 20L36 32L32 44L28 32L32 20Z" fill="#D8B67F" stroke="#7A5E3B" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="32" cy="32" r="2.2" fill="#1E1D1B" />
        </g>
      );
  }
}
