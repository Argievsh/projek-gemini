import { ENDINGS, SCENES } from './storyData';

/**
 * Generates a complete, self-contained single-file HTML5 + Tailwind CSS + Vanilla JS
 * version of "Persimpangan Toga" so the user can download and open it directly in any browser.
 */
export function buildStandaloneHtml(): string {
  const serializedScenes = JSON.stringify(
    SCENES.map((s) => ({
      id: s.id,
      chapterNumber: s.chapterNumber,
      totalChapters: s.totalChapters,
      dayLabel: s.dayLabel,
      timeLocation: s.timeLocation,
      title: s.title,
      paragraphs: s.paragraphs,
      promptQuestion: s.promptQuestion,
      choices: s.choices,
    }))
  );

  const serializedEndings = JSON.stringify({
    karier: {
      id: ENDINGS.karier.id,
      badgeLabel: ENDINGS.karier.badgeLabel,
      title: ENDINGS.karier.title,
      subtitle: ENDINGS.karier.subtitle,
      paragraphs: ENDINGS.karier.paragraphs,
      reflectiveQuote: ENDINGS.karier.reflectiveQuote,
      quoteAuthorNote: ENDINGS.karier.quoteAuthorNote,
      actionReminder: ENDINGS.karier.actionReminder,
    },
    akademik: {
      id: ENDINGS.akademik.id,
      badgeLabel: ENDINGS.akademik.badgeLabel,
      title: ENDINGS.akademik.title,
      subtitle: ENDINGS.akademik.subtitle,
      paragraphs: ENDINGS.akademik.paragraphs,
      reflectiveQuote: ENDINGS.akademik.reflectiveQuote,
      quoteAuthorNote: ENDINGS.akademik.quoteAuthorNote,
      actionReminder: ENDINGS.akademik.actionReminder,
    },
    eksplorasi: {
      id: ENDINGS.eksplorasi.id,
      badgeLabel: ENDINGS.eksplorasi.badgeLabel,
      title: ENDINGS.eksplorasi.title,
      subtitle: ENDINGS.eksplorasi.subtitle,
      paragraphs: ENDINGS.eksplorasi.paragraphs,
      reflectiveQuote: ENDINGS.eksplorasi.reflectiveQuote,
      quoteAuthorNote: ENDINGS.eksplorasi.quoteAuthorNote,
      actionReminder: ENDINGS.eksplorasi.actionReminder,
    },
  });

  return `<!doctype html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Persimpangan Toga — Jurnal Dilema Pasca-Sidang</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { darkMode: 'class' };
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Courier Prime', 'JetBrains Mono', ui-monospace, monospace; background-color: #F7F4EE; color: #1E1D1B; transition: background-color 200ms ease, color 200ms ease; }
    html.dark body { background-color: #14171A; color: #EAE6DF; }
    .font-ui { font-family: 'JetBrains Mono', 'Courier Prime', ui-monospace, monospace; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
    .fade-in { animation: fadeInUp 300ms cubic-bezier(0.16, 1, 0.3, 1) both; }
  </style>
</head>
<body class="min-h-screen antialiased">
  <div id="app"></div>
  <script>
    const SCENES = ${serializedScenes};
    const ENDINGS = ${serializedEndings};

    let state = {
      phase: 'title',
      sceneIndex: 0,
      stats: { finansial: 50, mental: 55, tujuan: 40 },
      scores: { karier: 0, akademik: 0, eksplorasi: 0 },
      lastReaction: null,
      history: []
    };

    function clamp(n) { return Math.max(0, Math.min(100, Math.round(n))); }

    function toggleTheme() {
      document.documentElement.classList.toggle('dark');
      render();
    }

    function startGame() {
      state = {
        phase: 'playing',
        sceneIndex: 0,
        stats: { finansial: 50, mental: 55, tujuan: 40 },
        scores: { karier: 0, akademik: 0, eksplorasi: 0 },
        lastReaction: null,
        history: []
      };
      render();
    }

    function pickChoice(choiceIdx) {
      const scene = SCENES[state.sceneIndex];
      const choice = scene.choices[choiceIdx];
      if (!choice) return;
      state.stats.finansial = clamp(state.stats.finansial + (choice.effects.finansial || 0));
      state.stats.mental = clamp(state.stats.mental + (choice.effects.mental || 0));
      state.stats.tujuan = clamp(state.stats.tujuan + (choice.effects.tujuan || 0));
      state.scores[choice.pathAffinity] += choice.pathWeight;
      state.lastReaction = choice.reactionText;
      state.history.push({ chapterNumber: scene.chapterNumber, journalNote: choice.journalNote, pathAffinity: choice.pathAffinity });

      if (choice.nextSceneId === 'ENDING' || state.sceneIndex + 1 >= SCENES.length) {
        state.phase = 'ending';
      } else {
        state.sceneIndex += 1;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      render();
    }

    function resolveEnding() {
      const lastPath = state.history[state.history.length - 1]?.pathAffinity;
      const list = [
        { k: 'karier', v: state.scores.karier + (lastPath === 'karier' ? 1.5 : 0) },
        { k: 'akademik', v: state.scores.akademik + (lastPath === 'akademik' ? 1.5 : 0) },
        { k: 'eksplorasi', v: state.scores.eksplorasi + (lastPath === 'eksplorasi' ? 1.5 : 0) }
      ].sort((a, b) => b.v - a.v);
      return ENDINGS[list[0].k];
    }

    function escapeHtml(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function choiceThumbSvg(id, affinity) {
      const bg = affinity === 'karier'
        ? 'bg-[#EEF3F0] dark:bg-[#1D2824] border-[#C9D8D0] dark:border-[#2E423A]'
        : affinity === 'akademik'
        ? 'bg-[#EEF1F5] dark:bg-[#1E242C] border-[#CBD3DE] dark:border-[#323D4B]'
        : 'bg-[#F5F0E6] dark:bg-[#27231D] border-[#DFD4C0] dark:border-[#3F382C]';
      const stroke = affinity === 'karier' ? '#2A4D41' : affinity === 'akademik' ? '#46637A' : '#7A5E3B';
      const inner = affinity === 'karier'
        ? '<rect x="14" y="20" width="36" height="24" rx="3" fill="#DDE7E1" stroke="' + stroke + '" stroke-width="1.8"/><path d="M25 20V16C25 14.5 26 13.5 27.5 13.5H36.5C38 13.5 39 14.5 39 16V20" stroke="' + stroke + '" stroke-width="1.8"/><line x1="14" y1="30" x2="50" y2="30" stroke="' + stroke + '" stroke-width="1.6"/>'
        : affinity === 'akademik'
        ? '<path d="M14 46V26C14 24 16 23 18 23H31V46C26 43 19 43 14 46Z" fill="#FDFBF7" stroke="' + stroke + '" stroke-width="1.7"/><path d="M50 46V26C50 24 48 23 46 23H33V46C38 43 45 43 50 46Z" fill="#FDFBF7" stroke="' + stroke + '" stroke-width="1.7"/><circle cx="32" cy="15" r="4.5" fill="#F2D89B" stroke="#7A5E3B" stroke-width="1.5"/>'
        : '<circle cx="32" cy="32" r="16" fill="#FDFBF7" stroke="' + stroke + '" stroke-width="1.8"/><path d="M32 20L36 32L32 44L28 32L32 20Z" fill="#D8B67F" stroke="' + stroke + '" stroke-width="1.5" stroke-linejoin="round"/><circle cx="32" cy="32" r="2.2" fill="#1E1D1B"/>';
      return '<div class="w-12 h-12 rounded-md border shrink-0 flex items-center justify-center ' + bg + '" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none" class="w-10 h-10">' + inner + '</svg></div>';
    }

    function render() {
      const root = document.getElementById('app');
      const isDark = document.documentElement.classList.contains('dark');

      if (state.phase === 'title') {
        root.innerHTML = \`
          <main class="min-h-screen flex flex-col justify-center max-w-2xl mx-auto px-5 py-10 fade-in">
            <div class="bg-[#FDFBF7] dark:bg-[#1C2024] border border-[#DFD8CA] dark:border-[#2A2F35] rounded-lg p-8 sm:p-10 text-center">
              <p class="font-ui text-xs text-[#635E56] dark:text-[#9AA0A6] mb-3">Catatan Setelah Sidang · S2 atau Kerja?</p>
              <h1 class="text-3xl sm:text-4xl font-bold mb-4">Persimpangan Toga</h1>
              <p class="text-[15px] leading-relaxed text-[#46423C] dark:text-[#C5C0B7] mb-8">
                Sebuah ruang refleksi singkat untukmu yang baru menyelesaikan sidang skripsi—di tengah ekspektasi keluarga, linimasa teman, dan kejujuran pada diri sendiri.
              </p>
              <div class="flex flex-wrap justify-center gap-3">
                <button onclick="startGame()" class="font-ui text-sm font-semibold px-6 py-3 rounded-md bg-[#2A4D41] hover:bg-[#203D33] dark:bg-[#5EA38C] text-white dark:text-[#111517] cursor-pointer">
                  Mulai Membuka Jurnal
                </button>
                <button onclick="toggleTheme()" class="font-ui text-xs px-4 py-3 rounded-md border border-[#DFD8CA] dark:border-[#2E343B] cursor-pointer">
                  \${isDark ? 'Mode: Malam' : 'Mode: Kertas'}
                </button>
              </div>
            </div>
          </main>\`;
        return;
      }

      if (state.phase === 'playing') {
        const s = SCENES[state.sceneIndex];
        root.innerHTML = \`
          <aside class="sticky top-0 z-20 border-b border-[#DFD8CA] dark:border-[#2A2F35] bg-[#F7F4EE]/95 dark:bg-[#14171A]/95">
            <div class="max-w-3xl mx-auto px-4 py-3">
              <div class="flex justify-between font-ui text-xs text-[#635E56] dark:text-[#9AA0A6] mb-2">
                <span class="font-semibold text-[#1E1D1B] dark:text-[#EAE6DF]">Persimpangan Toga · Babak \${s.chapterNumber}/\${s.totalChapters}</span>
                <div class="flex gap-3">
                  <button onclick="toggleTheme()" class="hover:underline cursor-pointer">\${isDark ? 'Kertas' : 'Malam'}</button>
                  <button onclick="startGame()" class="hover:underline cursor-pointer">Ulang</button>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 font-ui text-xs">
                <div>
                  <div class="flex justify-between mb-1"><span>Finansial</span><span>\${state.stats.finansial}%</span></div>
                  <div class="h-1.5 bg-[#E3DDD0] dark:bg-[#24292F] rounded"><div class="h-full bg-[#2A4D41] dark:bg-[#7BB8A2] rounded" style="width:\${state.stats.finansial}%"></div></div>
                </div>
                <div>
                  <div class="flex justify-between mb-1"><span>Mental</span><span>\${state.stats.mental}%</span></div>
                  <div class="h-1.5 bg-[#E3DDD0] dark:bg-[#24292F] rounded"><div class="h-full bg-[#46637A] dark:bg-[#82A8C9] rounded" style="width:\${state.stats.mental}%"></div></div>
                </div>
                <div>
                  <div class="flex justify-between mb-1"><span>Tujuan</span><span>\${state.stats.tujuan}%</span></div>
                  <div class="h-1.5 bg-[#E3DDD0] dark:bg-[#24292F] rounded"><div class="h-full bg-[#7A5E3B] dark:bg-[#D1A973] rounded" style="width:\${state.stats.tujuan}%"></div></div>
                </div>
              </div>
            </div>
          </aside>
          <main class="max-w-3xl mx-auto px-4 py-8 fade-in">
            <article class="bg-[#FDFBF7] dark:bg-[#1C2024] border border-[#DFD8CA] dark:border-[#2A2F35] rounded-lg p-6 sm:p-10">
              <div class="font-ui text-xs text-[#635E56] dark:text-[#9AA0A6]">\${escapeHtml(s.dayLabel)} · \${escapeHtml(s.timeLocation)}</div>
              <h1 class="text-2xl font-bold mt-2 pb-5 border-b border-[#E8E2D6] dark:border-[#2A2F35]">\${escapeHtml(s.title)}</h1>
              \${state.lastReaction ? \`<div class="mt-5 p-4 rounded bg-[#F4EFE5] dark:bg-[#22272C] border border-[#E5DEC9] dark:border-[#2F353C] text-sm">\${escapeHtml(state.lastReaction)}</div>\` : ''}
              <div class="mt-6 space-y-4 text-[15px] leading-relaxed">
                \${s.paragraphs.map(p => \`<p>\${escapeHtml(p)}</p>\`).join('')}
              </div>
              <div class="mt-8 pt-6 border-t border-[#E8E2D6] dark:border-[#2A2F35]">
                <h2 class="font-ui text-xs font-semibold text-[#2A4D41] dark:text-[#7BB8A2] mb-4">\${escapeHtml(s.promptQuestion)}</h2>
                <div class="flex flex-col gap-3">
                  \${s.choices.map((c, idx) => \`
                    <button onclick="pickChoice(\${idx})" class="text-left p-4 rounded-md border border-[#DFD8CA] dark:border-[#2E343B] bg-[#FAF7F1] dark:bg-[#171A1E] hover:border-[#2A4D41] dark:hover:border-[#7BB8A2] cursor-pointer flex items-center gap-3.5">
                      \${choiceThumbSvg(c.id, c.pathAffinity)}
                      <div class="min-w-0">
                        <div class="font-bold text-sm">\${idx + 1}. \${escapeHtml(c.label)}</div>
                        <div class="text-xs text-[#635E56] dark:text-[#9AA0A6] mt-1">\${escapeHtml(c.sublabel)}</div>
                      </div>
                    </button>
                  \`).join('')}
                </div>
              </div>
            </article>
          </main>\`;
        return;
      }

      const end = resolveEnding();
      root.innerHTML = \`
        <main class="max-w-3xl mx-auto px-4 py-10 fade-in">
          <article class="bg-[#FDFBF7] dark:bg-[#1C2024] border border-[#DFD8CA] dark:border-[#2A2F35] rounded-lg p-6 sm:p-10">
            <div class="font-ui text-xs text-[#635E56] dark:text-[#9AA0A6] pb-4 border-b border-[#E8E2D6] dark:border-[#2A2F35]">Refleksi Akhir · \${escapeHtml(end.badgeLabel)}</div>
            <h1 class="text-2xl sm:text-3xl font-bold mt-6 text-center">\${escapeHtml(end.title)}</h1>
            <p class="text-center text-sm text-[#635E56] dark:text-[#9AA0A6] mt-2">\${escapeHtml(end.subtitle)}</p>
            <div class="mt-6 space-y-4 text-[15px] leading-relaxed">
              \${state.lastReaction ? \`<p class="italic text-[#635E56] dark:text-[#9AA0A6]">\${escapeHtml(state.lastReaction)}</p>\` : ''}
              \${end.paragraphs.map(p => \`<p>\${escapeHtml(p)}</p>\`).join('')}
            </div>
            <blockquote class="mt-8 p-6 rounded bg-[#2A4D41]/10 border border-[#2A4D41]/25 text-center italic text-base">
              “\${escapeHtml(end.reflectiveQuote)}”
              <div class="font-ui not-italic text-xs mt-3 text-[#2A4D41] dark:text-[#7BB8A2]">\${escapeHtml(end.actionReminder)}</div>
            </blockquote>
            <div class="mt-8 text-center">
              <button onclick="startGame()" class="font-ui text-sm font-semibold px-6 py-3 rounded-md bg-[#2A4D41] text-white cursor-pointer">Mainkan Ulang</button>
            </div>
          </article>
        </main>\`;
    }

    render();
  </script>
</body>
</html>`;
}
