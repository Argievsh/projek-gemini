import test from 'node:test';
import assert from 'node:assert/strict';
import {
  applyChoice,
  clampStat,
  createInitialState,
  determineEnding,
  getSceneById,
  getStatStatusLabel,
} from './engine';
import { SCENES } from './storyData';

test('createInitialState initializes title or playing phase with balanced baseline stats', () => {
  const titleState = createInitialState('title');
  assert.equal(titleState.phase, 'title');
  assert.equal(titleState.currentSceneId, 'babak_1');
  assert.deepEqual(titleState.stats, { finansial: 50, mental: 55, tujuan: 40 });
  assert.equal(titleState.history.length, 0);

  const autostartState = createInitialState('playing');
  assert.equal(autostartState.phase, 'playing');
});

test('clampStat clamps values strictly within 0 to 100', () => {
  assert.equal(clampStat(-15), 0);
  assert.equal(clampStat(125), 100);
  assert.equal(clampStat(64.6), 65);
});

test('full playthrough along career choices reaches karier ending and logs 6 journal entries', () => {
  let state = createInitialState('playing');
  for (let i = 0; i < SCENES.length; i++) {
    const scene = getSceneById(state.currentSceneId);
    assert.ok(scene, `Expected scene ${state.currentSceneId} to exist`);
    const careerChoice = scene.choices.find((c) => c.pathAffinity === 'karier') ?? scene.choices[0];
    state = applyChoice(state, careerChoice);
  }

  assert.equal(state.phase, 'gameover');
  assert.equal(state.endingId, 'karier');
  assert.equal(state.history.length, 6);
  assert.ok(state.stats.finansial > 50);
  assert.ok(state.stats.tujuan > 40);
});

test('full playthrough along academic choices reaches akademik ending', () => {
  let state = createInitialState('playing');
  for (let i = 0; i < SCENES.length; i++) {
    const scene = getSceneById(state.currentSceneId);
    assert.ok(scene);
    const academicChoice = scene.choices.find((c) => c.pathAffinity === 'akademik') ?? scene.choices[1];
    state = applyChoice(state, academicChoice);
  }

  assert.equal(state.phase, 'gameover');
  assert.equal(state.endingId, 'akademik');
  assert.equal(state.history.length, 6);
});

test('full playthrough along exploration choices reaches eksplorasi ending', () => {
  let state = createInitialState('playing');
  for (let i = 0; i < SCENES.length; i++) {
    const scene = getSceneById(state.currentSceneId);
    assert.ok(scene);
    const exploreChoice = scene.choices.find((c) => c.pathAffinity === 'eksplorasi') ?? scene.choices[2];
    state = applyChoice(state, exploreChoice);
  }

  assert.equal(state.phase, 'gameover');
  assert.equal(state.endingId, 'eksplorasi');
  assert.equal(state.history.length, 6);
});

test('determineEnding breaks ties using final chapter choice affinity', () => {
  const tiedEnding = determineEnding({
    pathScores: { karier: 6, akademik: 6, eksplorasi: 4 },
    stats: { finansial: 60, mental: 60, tujuan: 60 },
    history: [
      {
        chapterNumber: 6,
        sceneTitle: 'Final',
        choiceLabel: 'Lanjut S2',
        journalNote: 'Memilih S2',
        pathAffinity: 'akademik',
      },
    ],
  });
  assert.equal(tiedEnding, 'akademik');
});

test('getStatStatusLabel returns non-empty Indonesian semantic descriptors', () => {
  assert.equal(getStatStatusLabel('finansial', 80), 'Mandiri');
  assert.equal(getStatStatusLabel('mental', 35), 'Lelah');
  assert.equal(getStatStatusLabel('tujuan', 78), 'Jernih');
});
