"use client"
import { useState } from "react";

export default function Accordion({data}) {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="w-full rounded-lg *:mix-blend-difference pl-4">
      {data.map((PerAccordion, idx) => (
        <div key={idx} className="">
          <button
            onClick={() => toggle(idx)}
            className="flex h-full w-full items-center justify-between font-medium text-white outline-none"
          >
            <span className="text-xl font-medium text-white font-riviera text-justify mb-4">
              {PerAccordion.question}
            </span>
            <span className="rounded-full p-2">
              <svg
                className="ml-8 size-3 shrink-0 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
                <rect
                  y="5"
                  width="12"
                  height="2"
                  rx="1"
                  className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                    isOpen === idx && "!rotate-180"
                  }`}
                />
              </svg>
            </span>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden pr-4 text-base text-white font-riviera text-justify opacity-80 pb-10">
              {PerAccordion.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
