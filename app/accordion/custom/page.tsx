/* 
  Two modes: Single and multi selection

  Single Selection:

  * All answers are initially collapsed
  * When user selects a question its answer is expanded
  * When user selects a different question, the answer of the previous
    questions is collapsed and the current question's answer is expanded
  * If the user selects (clicks) the same question, the state of the 
    answer is toggled.

  Multi Selection:

  * All answers are initially collapsed
  * If there was a selected question when the mode was enabled,
    keep the answer expanded
  * Toggle the state of the answer for each selected question
  * Collapse all answers when Multi Selection is disabled.
*/
"use client";
import { useState } from "react";
import data from "@/app/accordion/data/data";

const isSelectedMap = new Map();
data.forEach(item => isSelectedMap.set(item.id, false));

export default function Accordion() {
  const [enabledMultiSelection, setEnabledMultiSelection] = useState(false);
  const [isSelected, setIsSelected] = useState(isSelectedMap);

  function toggleEnableMultiSelection() {
    if (!enabledMultiSelection) {
      setEnabledMultiSelection(true);
    } else {
      setEnabledMultiSelection(false);
      setIsSelected(isSelectedMap);
    }
  }

  function handleSingleSelection(questionId: string) {
    const t = new Map(isSelected);

    isSelected.get(questionId)
      ? t.set(questionId, false)
      : t.forEach((_value, key, map) =>
          key === questionId ? map.set(key, true) : map.set(key, false),
        );

    setIsSelected(t);
  }

  function handleMultiSelection(questionId: string) {
    const t = new Map(isSelected);

    t.get(questionId) ? t.set(questionId, false) : t.set(questionId, true);

    setIsSelected(t);
  }

  return (
    <div className="flex flex-col gap-4 w-2/5">
      <button
        onClick={toggleEnableMultiSelection}
        className="self-center p-3 bg-blue-700 text-white"
      >
        {!enabledMultiSelection ? "Enable" : "Disable"} Multi Selection
      </button>
      <div>
        {data.map(item => (
          <div className="bg-blue-400 mb-1.5" key={item.id}>
            <h2
              onClick={() =>
                !enabledMultiSelection
                  ? handleSingleSelection(item.id)
                  : handleMultiSelection(item.id)
              }
              className="relative cursor-pointer p-3"
            >
              {item.question} <span className="absolute right-3">+</span>
            </h2>
            {isSelected.get(item.id) && (
              <p className="p-3 bg-blue-300">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
