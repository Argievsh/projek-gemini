import React from 'react';
import { Choice, PathScores, Scene, Stats, JournalEntry } from '../game/types';
import { ChoiceIllustration } from './ChoiceIllustrations';
import { StoryImage } from './StoryImage';

interface SceneViewProps {
  scene: Scene;
  stats: Stats;
  pathScores: PathScores;
  lastReaction: string | null;
  history: JournalEntry[];
  onSelectChoice: (choice: Choice, index: number) => void;
}

export const SceneView: React.FC<SceneViewProps> = ({
  scene,
  stats,
  pathScores,
  lastReaction,
  history,
  onSelectChoice,
}) => {
  const dynamicLead = scene.getDynamicLead
    ? scene.getDynamicLead({ stats, pathScores, lastReaction, history })
    : null;

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-7 pb-14">
      <article
        key={scene.id}
        data-scene-id={scene.id}
        className="animate-journal-in bg-[#FDFBF7] dark:bg-[#1C2024] border border-[#DFD8CA] dark:border-[#2A2F35] rounded-lg p-5 sm:p-8 shadow-[0_2px_18px_rgba(30,29,27,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.28)]"
      >
        {/* Chapter metadata & title */}
        <header className="pb-4 border-b border-[#E8E2D6] dark:border-[#2A2F35]">
          <div className="font-ui text-xs text-[#635E56] dark:text-[#9AA0A6] flex flex-wrap items-center gap-2">
            <span>{scene.dayLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{scene.timeLocation}</span>
          </div>
          <h1 className="font-prose text-xl sm:text-2xl font-bold text-[#1E1D1B] dark:text-[#EAE6DF] mt-1.5 text-balance">
            {scene.title}
          </h1>
        </header>

        {/* Chapter Story Illustration */}
        <div className="mt-5">
          <StoryImage
            id={scene.illustrationId}
            aspectClass="aspect-[16/9]"
            className="w-full max-h-60 sm:max-h-72"
          />
        </div>

        {/* Dynamic reaction bridge from previous choice */}
        {(lastReaction || dynamicLead) && (
          <div className="mt-5 p-3.5 sm:p-4 rounded-md bg-[#F4EFE5] dark:bg-[#22272C] border border-[#E5DEC9] dark:border-[#2F353C] font-prose text-sm leading-relaxed text-[#46423C] dark:text-[#C5C0B7]">
            {lastReaction && <p>{lastReaction}</p>}
            {dynamicLead && (
              <p className={lastReaction ? 'mt-2 italic text-[#635E56] dark:text-[#9AA0A6]' : 'italic text-[#635E56] dark:text-[#9AA0A6]'}>
                {dynamicLead}
              </p>
            )}
          </div>
        )}

        {/* Main narrative prose */}
        <div className="mt-5 space-y-3.5 font-prose text-[15px] sm:text-[15.5px] leading-[1.7] text-[#282623] dark:text-[#DDD8CE] max-w-[65ch]">
          {scene.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Decision section with per-choice illustrations */}
        <section
          aria-labelledby="decision-prompt"
          className="mt-6 pt-5 border-t border-[#E8E2D6] dark:border-[#2A2F35]"
        >
          <h2
            id="decision-prompt"
            className="font-ui text-xs sm:text-sm font-semibold text-[#2A4D41] dark:text-[#7BB8A2] mb-4"
          >
            {scene.promptQuestion}
          </h2>

          <div className="flex flex-col gap-3">
            {scene.choices.map((choice, idx) => (
              <button
                key={choice.id}
                type="button"
                onClick={() => onSelectChoice(choice, idx)}
                className="group w-full text-left p-3.5 sm:p-4 rounded-md border border-[#DFD8CA] dark:border-[#2E343B] bg-[#FAF7F1] dark:bg-[#171A1E] hover:bg-[#EFEAE0] dark:hover:bg-[#23282E] hover:border-[#2A4D41] dark:hover:border-[#7BB8A2] active:scale-[0.995] transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A4D41]"
              >
                <div className="flex items-center gap-3.5">
                  <ChoiceIllustration
                    choiceId={choice.id}
                    pathAffinity={choice.pathAffinity}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start gap-2">
                      <span className="font-ui text-[11px] font-semibold px-1.5 py-0.5 rounded bg-[#EAE3D5] dark:bg-[#262B31] text-[#3F3C37] dark:text-[#C8C3BA] group-hover:bg-[#2A4D41] group-hover:text-[#FDFBF7] dark:group-hover:bg-[#7BB8A2] dark:group-hover:text-[#111517] transition-colors shrink-0 mt-0.5 tabular-nums">
                        {idx + 1}
                      </span>
                      <div className="font-prose text-sm sm:text-[15px] font-bold text-[#1E1D1B] dark:text-[#EAE6DF] leading-snug">
                        {choice.label}
                      </div>
                    </div>
                    <div className="font-prose text-xs sm:text-[13px] text-[#635E56] dark:text-[#9AA0A6] mt-1.5 leading-relaxed">
                      {choice.sublabel}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};
