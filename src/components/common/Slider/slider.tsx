"use client";

import { useSlider } from "@/components/common/Slider/use-slider";
import { ChevronLeftIcon } from "@/icons/chevron-left-icon";
import { ChevronRightIcon } from "@/icons/chevron-right-icon";
import { CSSPropertiesWithVariables, Identifiable } from "@/types/common";
import { ReactNode } from "react";

type SliderProps<T extends Identifiable> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  gap?: number;
};

export default function Slider<T extends Identifiable>({
  items,
  renderItem,
  gap = 24,
}: SliderProps<T>) {
  const { scrollToPage, activePage, pagesCount, slides, trackRef } =
    useSlider(items);

  const cssVarGap: CSSPropertiesWithVariables = {
    "--gap": `${gap}px`,
  };

  return (
    <div>
      <div className="flex items-center">
        <ul
          className={`grow flex gap-(--gap) overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory`}
          style={cssVarGap}
          ref={trackRef}
        >
          {items.map((item, index) => (
            <li
              className={`grow-0 shrink-0 basis-full md:basis-[calc((100%-var(--gap))/2)] lg:basis-[calc((100%-2*var(--gap))/3)] flex justify-center items-center snap-start`}
              data-page={slides[index]?.page}
              key={item.id}
            >
              {renderItem(item, index)}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="w-10 h-10 text-gray-400 cursor-pointer mr-4 disabled:cursor-not-allowed disabled:opacity-30 shrink-0 -order-1"
          disabled={activePage === 0}
          onClick={() => scrollToPage(activePage - 1)}
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          className="w-10 h-10 text-gray-400 cursor-pointer ml-4 disabled:cursor-not-allowed disabled:opacity-30 shrink-0"
          disabled={activePage >= pagesCount - 1}
          onClick={() => scrollToPage(activePage + 1)}
        >
          <ChevronRightIcon />
        </button>
      </div>
      <div className="h-3 md:h-4 flex justify-center gap-2 md:gap-3 lg:gap-4 mt-8">
        {Array.from({ length: pagesCount }).map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => scrollToPage(index)}
            disabled={activePage === index}
            className={`size-3 md:size-4 rounded-full bg-gray-200 cursor-pointer disabled:cursor-default disabled:bg-blue-400`}
          />
        ))}
      </div>
    </div>
  );
}
