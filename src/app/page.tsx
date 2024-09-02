"use client";

import CountdownTimer from "~/components/countdown-timer";
import { HelpPopup } from "~/components/help-popup";
import PremiseWindow from "~/components/premise-window";
import TopicTable from "~/components/topic-table";
import { getConceptsOptions } from "~/lib/utils";

export default function HomePage() {
  const conceptLimitList: string[] = [];
  const conceptOptions = getConceptsOptions();

  for (let i = 0; i < conceptOptions.conceptLimit; i++) {
    conceptLimitList.push("concept-" + i);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <header className="fixed left-0 right-0 top-0 z-10 flex w-screen items-center justify-between gap-2 bg-[#2e026d]">
        <div></div>
        <CountdownTimer />
        <HelpPopup />
      </header>
      <div className="flex flex-col gap-4 pt-10 md:flex-row">
        {conceptOptions.concepts
          ? Array.from({ length: 3 }, (_, i) => i).map((i) =>
              conceptOptions.concepts[i] ? (
                <TopicTable
                  key={i}
                  listName={conceptOptions.concepts[i].name}
                  description={conceptOptions.concepts[i].description}
                  conceptLimit={conceptLimitList}
                />
              ) : null,
            )
          : null}
      </div>
      <div className="mt-5 flex flex-col">
        <PremiseWindow />
      </div>
    </main>
  );
}
