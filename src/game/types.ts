export type PathKey = 'karier' | 'akademik' | 'eksplorasi';

export interface Stats {
  finansial: number; // Kesiapan Finansial (0-100)
  mental: number;    // Energi & Mental (0-100)
  tujuan: number;    // Kejelasan Tujuan (0-100)
}

export type StatKey = keyof Stats;

export interface PathScores {
  karier: number;
  akademik: number;
  eksplorasi: number;
}

export interface Choice {
  id: string;
  keyLabel: 'A' | 'B' | 'C';
  label: string;
  sublabel: string;
  effects: Partial<Stats>;
  pathAffinity: PathKey;
  pathWeight: number;
  /** Conversational consequence shown at the top of the next scene */
  reactionText: string;
  /** Short log entry saved for the ending journal summary */
  journalNote: string;
  nextSceneId: string | 'ENDING';
}

export interface Scene {
  id: string;
  chapterNumber: number;
  totalChapters: number;
  dayLabel: string;
  timeLocation: string;
  title: string;
  illustrationId: 'post_defense' | 'dining_table' | 'two_emails' | 'coffee_talk' | 'midnight_desk' | 'graduation_morning';
  /** Optional dynamic opening line depending on previous path tendency or stats */
  getDynamicLead?: (state: {
    stats: Stats;
    pathScores: PathScores;
    lastReaction: string | null;
    history: JournalEntry[];
  }) => string | null;
  paragraphs: string[];
  promptQuestion: string;
  choices: Choice[];
}

export interface JournalEntry {
  chapterNumber: number;
  sceneTitle: string;
  choiceLabel: string;
  journalNote: string;
  pathAffinity: PathKey;
}

export interface Ending {
  id: PathKey;
  badgeLabel: string;
  title: string;
  subtitle: string;
  illustrationId: 'ending_karier' | 'ending_akademik' | 'ending_eksplorasi';
  paragraphs: string[];
  getMentalNuance: (stats: Stats) => string;
  reflectiveQuote: string;
  quoteAuthorNote: string;
  actionReminder: string;
}

export type GamePhase = 'title' | 'playing' | 'gameover';

export interface GameState {
  phase: GamePhase;
  currentSceneId: string;
  stats: Stats;
  lastDeltas: Partial<Stats> | null;
  deltaTick: number;
  pathScores: PathScores;
  lastReaction: string | null;
  history: JournalEntry[];
  endingId: PathKey | null;
}
