/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { EndingView } from './components/EndingView';
import { SceneView } from './components/SceneView';
import { StatsBar } from './components/StatsBar';
import { TitleScreen } from './components/TitleScreen';
import { applyChoice, createInitialState, getEndingById, getSceneById } from './game/engine';
import { soundEngine } from './game/sound';
import { buildStandaloneHtml } from './game/standaloneHtml';
import { SCENES } from './game/storyData';
import { Choice, GameState } from './game/types';

function shouldAutostart(): boolean {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).get('autostart') === '1';
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>(() =>
    createInitialState(shouldAutostart() ? 'playing' : 'title')
  );
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Sync document.body.dataset.state for deterministic game state tracking
  useEffect(() => {
    document.body.dataset.state = gameState.phase;
  }, [gameState.phase]);

  // Sync .dark class on <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleToggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const handleToggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      soundEngine.setMuted(next);
      return next;
    });
  }, []);

  const handleStart = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    soundEngine.playChoice(0);
    setGameState(createInitialState('playing'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleReplay = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    soundEngine.playChoice(1);
    setGameState(createInitialState('playing'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectChoice = useCallback((choice: Choice, index: number) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    if (choice.nextSceneId === 'ENDING') {
      soundEngine.playEnding();
    } else {
      soundEngine.playChoice(index);
    }
    setGameState((prev) => applyChoice(prev, choice));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDownloadStandalone = useCallback(() => {
    const html = buildStandaloneHtml();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'persimpangan-toga.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  // Keyboard shortcuts: Enter/Space on title, 1/2/3 in scenes, M/T/R utilities
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (gameState.phase === 'title' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleStart();
        return;
      }

      if (e.key === 'm' || e.key === 'M') {
        handleToggleMute();
        return;
      }
      if (e.key === 't' || e.key === 'T') {
        handleToggleTheme();
        return;
      }
      if ((e.key === 'r' || e.key === 'R') && gameState.phase !== 'title') {
        handleReplay();
        return;
      }

      if (gameState.phase === 'playing') {
        const scene = getSceneById(gameState.currentSceneId);
        if (!scene) return;
        const idx = e.key === '1' ? 0 : e.key === '2' ? 1 : e.key === '3' ? 2 : -1;
        if (idx >= 0 && scene.choices[idx]) {
          e.preventDefault();
          handleSelectChoice(scene.choices[idx], idx);
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [gameState.phase, gameState.currentSceneId, handleStart, handleReplay, handleSelectChoice, handleToggleMute, handleToggleTheme]);

  if (gameState.phase === 'title') {
    return (
      <TitleScreen
        isDark={isDark}
        isMuted={isMuted}
        onToggleTheme={handleToggleTheme}
        onToggleMute={handleToggleMute}
        onStart={handleStart}
      />
    );
  }

  if (gameState.phase === 'gameover') {
    const ending = getEndingById(gameState.endingId);
    return (
      <EndingView
        ending={ending}
        stats={gameState.stats}
        lastReaction={gameState.lastReaction}
        history={gameState.history}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        onReplay={handleReplay}
        onDownloadStandalone={handleDownloadStandalone}
      />
    );
  }

  const currentScene = getSceneById(gameState.currentSceneId) ?? SCENES[0];

  return (
    <div className="min-h-screen flex flex-col">
      <StatsBar
        stats={gameState.stats}
        lastDeltas={gameState.lastDeltas}
        deltaTick={gameState.deltaTick}
        chapterNumber={currentScene.chapterNumber}
        totalChapters={currentScene.totalChapters}
        isDark={isDark}
        isMuted={isMuted}
        onToggleTheme={handleToggleTheme}
        onToggleMute={handleToggleMute}
        onRestart={handleReplay}
      />
      <SceneView
        scene={currentScene}
        stats={gameState.stats}
        pathScores={gameState.pathScores}
        lastReaction={gameState.lastReaction}
        history={gameState.history}
        onSelectChoice={handleSelectChoice}
      />
    </div>
  );
}

