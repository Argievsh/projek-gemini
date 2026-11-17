import { ENDINGS, SCENES } from './storyData';
import { Choice, Ending, GamePhase, GameState, PathKey, Scene, Stats } from './types';

export const INITIAL_STATS: Stats = {
  finansial: 50,
  mental: 55,
  tujuan: 40,
};

export function clampStat(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function createInitialState(initialPhase: GamePhase = 'title'): GameState {
  return {
    phase: initialPhase,
    currentSceneId: SCENES[0].id,
    stats: { ...INITIAL_STATS },
    lastDeltas: null,
    deltaTick: 0,
    pathScores: {
      karier: 0,
      akademik: 0,
      eksplorasi: 0,
    },
    lastReaction: null,
    history: [],
    endingId: null,
  };
}

export function getSceneById(sceneId: string): Scene | undefined {
  return SCENES.find((s) => s.id === sceneId);
}

export function getStatStatusLabel(key: keyof Stats, value: number): string {
  if (key === 'finansial') {
    if (value >= 75) return 'Mandiri';
    if (value >= 50) return 'Cukup';
    if (value >= 30) return 'Terbatas';
    return 'Kritis';
  }
  if (key === 'mental') {
    if (value >= 75) return 'Tenang';
    if (value >= 50) return 'Stabil';
    if (value >= 30) return 'Lelah';
    return 'Rentan';
  }
  // tujuan
  if (value >= 75) return 'Jernih';
  if (value >= 50) return 'Terarah';
  if (value >= 30) return 'Meraba';
  return 'Kabur';
}

export function determineEnding(state: Pick<GameState, 'pathScores' | 'stats' | 'history'>): PathKey {
  const { karier, akademik, eksplorasi } = state.pathScores;
  const lastChoicePath = state.history.length > 0 ? state.history[state.history.length - 1].pathAffinity : null;

  // If scores are close or tied, factor in final chapter choice and mental/financial state
  const entries: Array<{ key: PathKey; score: number }> = [
    { key: 'karier', score: karier + (lastChoicePath === 'karier' ? 1.5 : 0) + (state.stats.finansial >= 75 ? 0.5 : 0) },
    { key: 'akademik', score: akademik + (lastChoicePath === 'akademik' ? 1.5 : 0) + (state.stats.tujuan >= 75 ? 0.5 : 0) },
    { key: 'eksplorasi', score: eksplorasi + (lastChoicePath === 'eksplorasi' ? 1.5 : 0) + (state.stats.mental >= 75 ? 0.5 : 0) },
  ];

  entries.sort((a, b) => b.score - a.score);
  return entries[0].key;
}

export function getEndingById(endingId: PathKey | null): Ending {
  return ENDINGS[endingId ?? 'eksplorasi'];
}

export function applyChoice(state: GameState, choice: Choice): GameState {
  const currentScene = getSceneById(state.currentSceneId);
  if (!currentScene || state.phase !== 'playing') {
    return state;
  }

  const nextStats: Stats = {
    finansial: clampStat(state.stats.finansial + (choice.effects.finansial ?? 0)),
    mental: clampStat(state.stats.mental + (choice.effects.mental ?? 0)),
    tujuan: clampStat(state.stats.tujuan + (choice.effects.tujuan ?? 0)),
  };

  const nextDeltas: Partial<Stats> = {
    finansial: nextStats.finansial - state.stats.finansial,
    mental: nextStats.mental - state.stats.mental,
    tujuan: nextStats.tujuan - state.stats.tujuan,
  };

  const nextPathScores = {
    ...state.pathScores,
    [choice.pathAffinity]: state.pathScores[choice.pathAffinity] + choice.pathWeight,
  };

  const nextHistory = [
    ...state.history,
    {
      chapterNumber: currentScene.chapterNumber,
      sceneTitle: currentScene.title,
      choiceLabel: choice.label,
      journalNote: choice.journalNote,
      pathAffinity: choice.pathAffinity,
    },
  ];

  if (choice.nextSceneId === 'ENDING') {
    const endingId = determineEnding({
      pathScores: nextPathScores,
      stats: nextStats,
      history: nextHistory,
    });
    return {
      ...state,
      phase: 'gameover',
      stats: nextStats,
      lastDeltas: nextDeltas,
      deltaTick: state.deltaTick + 1,
      pathScores: nextPathScores,
      lastReaction: choice.reactionText,
      history: nextHistory,
      endingId,
    };
  }

  return {
    ...state,
    phase: 'playing',
    currentSceneId: choice.nextSceneId,
    stats: nextStats,
    lastDeltas: nextDeltas,
    deltaTick: state.deltaTick + 1,
    pathScores: nextPathScores,
    lastReaction: choice.reactionText,
    history: nextHistory,
    endingId: null,
  };
}
