import React from 'react';
import { Scene, Ending } from '../game/types';

type IllustrationId =
  | 'cover'
  | Scene['illustrationId']
  | Ending['illustrationId'];

interface Props {
  id: IllustrationId;
  className?: string;
}

export const JournalIllustration: React.FC<Props> = ({ id, className = '' }) => {
  switch (id) {
    case 'cover':
      return (
        <svg
          viewBox="0 0 240 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Desk horizon */}
          <line x1="20" y1="128" x2="220" y2="128" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
          {/* Open journal */}
          <path
            d="M48 122V56C48 52 51 49 55 49H116C118 49 120 51 120 53V122C112 117 100 116 84 116C68 116 56 118 48 122Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M192 122V56C192 52 189 49 185 49H124C122 49 120 51 120 53V122C128 117 140 116 156 116C172 116 184 118 192 122Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Journal text lines */}
          <line x1="62" y1="67" x2="104" y2="67" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="62" y1="78" x2="100" y2="78" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="62" y1="89" x2="94" y2="89" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="62" y1="100" x2="88" y2="100" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.3" strokeLinecap="round" />

          {/* Forking compass path on right page */}
          <path
            d="M156 105V86M156 86C156 76 142 73 139 63M156 86C156 76 170 73 173 63"
            stroke="#2A4D41"
            className="dark:stroke-[#7BB8A2]"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="139" cy="61" r="2.5" fill="#2A4D41" className="dark:fill-[#7BB8A2]" />
          <circle cx="173" cy="61" r="2.5" fill="#2A4D41" className="dark:fill-[#7BB8A2]" />
          <circle cx="156" cy="106" r="2" fill="currentColor" fillOpacity="0.6" />

          {/* Graduation tassel / cap silhouette floating lightly */}
          <path
            d="M120 18L148 28L120 38L92 28L120 18Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M104 33V41C104 43 111 46 120 46C129 46 136 43 136 41V33" stroke="currentColor" strokeWidth="1.3" />
          <path d="M144 30V43" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case 'post_defense':
      return (
        <svg viewBox="0 0 160 64" fill="none" className={className} aria-hidden="true">
          <line x1="12" y1="54" x2="148" y2="54" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
          {/* Phone standing */}
          <rect x="40" y="16" width="24" height="38" rx="3" stroke="currentColor" strokeWidth="1.4" />
          <line x1="46" y1="24" x2="58" y2="24" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="46" y1="31" x2="56" y2="31" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="46" y1="37" x2="54" y2="37" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.2" strokeLinecap="round" />
          {/* Warm tea mug */}
          <path d="M96 34H118V48C118 51.5 115 54 111 54H103C99 54 96 51.5 96 48V34Z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M118 37H122C124 37 125 38.5 125 40.5C125 42.5 124 44 122 44H118" stroke="currentColor" strokeWidth="1.3" />
          <path d="M103 27C103 24 106 23 105 20" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M111 28C111 25 114 24 113 21" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'dining_table':
      return (
        <svg viewBox="0 0 160 64" fill="none" className={className} aria-hidden="true">
          <line x1="16" y1="52" x2="144" y2="52" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
          {/* Plate */}
          <ellipse cx="80" cy="46" rx="26" ry="6" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx="80" cy="45" rx="16" ry="3.2" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.1" />
          {/* Two glasses / cups */}
          <path d="M36 30H48L46 52H38L36 30Z" stroke="currentColor" strokeWidth="1.3" />
          <path d="M112 30H124L122 52H114L112 30Z" stroke="currentColor" strokeWidth="1.3" />
          {/* Morning window sun */}
          <circle cx="80" cy="19" r="7" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" />
          <line x1="80" y1="7" x2="80" y2="10" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="68" y1="19" x2="64" y2="19" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="92" y1="19" x2="96" y2="19" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'two_emails':
      return (
        <svg viewBox="0 0 160 64" fill="none" className={className} aria-hidden="true">
          {/* Left envelope */}
          <rect x="26" y="18" width="46" height="30" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M26 20L49 36L72 20" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          {/* Right envelope */}
          <rect x="88" y="18" width="46" height="30" rx="2" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" />
          <path d="M88 20L111 36L134 20" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.3" strokeLinejoin="round" />
          {/* Divider */}
          <line x1="80" y1="14" x2="80" y2="52" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="3 3" strokeWidth="1.2" />
        </svg>
      );

    case 'coffee_talk':
      return (
        <svg viewBox="0 0 160 64" fill="none" className={className} aria-hidden="true">
          <line x1="18" y1="54" x2="142" y2="54" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
          {/* Iced coffee cup */}
          <path d="M52 24H72L69 54H55L52 24Z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M62 24L67 12" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" strokeLinecap="round" />
          {/* Notebook & pen */}
          <rect x="88" y="34" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <line x1="94" y1="41" x2="114" y2="41" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="94" y1="47" x2="108" y2="47" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'midnight_desk':
      return (
        <svg viewBox="0 0 160 64" fill="none" className={className} aria-hidden="true">
          <line x1="18" y1="54" x2="142" y2="54" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
          {/* Desk lamp */}
          <path d="M38 54H54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M46 54V32L56 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M53 17L65 24L59 29L50 22L53 17Z" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" strokeLinejoin="round" />
          {/* Laptop */}
          <rect x="82" y="28" width="40" height="22" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <line x1="76" y1="54" x2="128" y2="54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="102" y1="30" x2="102" y2="48" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.1" />
        </svg>
      );

    case 'graduation_morning':
      return (
        <svg viewBox="0 0 160 64" fill="none" className={className} aria-hidden="true">
          <line x1="14" y1="52" x2="146" y2="52" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" />
          {/* Rising sun over open road */}
          <path d="M58 52C58 39.8 67.8 30 80 30C92.2 30 102 39.8 102 52" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.5" />
          <line x1="80" y1="14" x2="80" y2="23" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="53" y1="25" x2="59" y2="31" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="107" y1="25" x2="101" y2="31" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );

    case 'ending_karier':
      return (
        <svg viewBox="0 0 160 72" fill="none" className={className} aria-hidden="true">
          <rect x="44" y="24" width="72" height="36" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M68 24V18C68 15.8 69.8 14 72 14H88C90.2 14 92 15.8 92 18V24" stroke="currentColor" strokeWidth="1.5" />
          <path d="M44 38H116" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" />
          <rect x="75" y="34" width="10" height="8" rx="1" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" />
        </svg>
      );

    case 'ending_akademik':
      return (
        <svg viewBox="0 0 160 72" fill="none" className={className} aria-hidden="true">
          <path d="M42 54V22C42 19 45 17 48 17H78C79.5 17 80 18.5 80 20V54C73 50 56 50 42 54Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M118 54V22C118 19 115 17 112 17H82C80.5 17 80 18.5 80 20V54C87 50 104 50 118 54Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="99" cy="34" r="6" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.4" />
          <line x1="103" y1="39" x2="109" y2="45" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'ending_eksplorasi':
      return (
        <svg viewBox="0 0 160 72" fill="none" className={className} aria-hidden="true">
          <circle cx="80" cy="36" r="22" stroke="currentColor" strokeWidth="1.5" />
          <path d="M80 20L85 36L80 52L75 36L80 20Z" stroke="#2A4D41" className="dark:stroke-[#7BB8A2]" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="80" cy="36" r="2.2" fill="currentColor" />
        </svg>
      );
  }
};
