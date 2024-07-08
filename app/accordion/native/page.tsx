"use client";
import { useState } from "react";
import data from "@/app/accordion/data/data";

export default function Accordion() {
  const [name, setName] = useState("accordion");

  function toggleMultiSelection() {
    name ? setName("") : setName("accordion");
  }

  return (
    <div className="flex flex-col gap-4 w-2/5">
      <button
        onClick={toggleMultiSelection}
        className="self-center p-3 bg-blue-700 text-white"
      >
        {name ? "Enable" : "Disable"} Multi Selection
      </button>
      <div>
        {data.map(item => (
          <details name={name} className="bg-blue-400 p-3 mb-1.5" key={item.id}>
            <summary className="block relative cursor-pointer">
              {item.question}
              <span className="absolute right-0">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
