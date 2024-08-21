import { DialogPopup } from "~/components/dialog-popup";
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
      <header>
        <div className="absolute right-4 top-4">
          <DialogPopup />
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
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
      <div className="mt-5 grid grid-cols-1">
        <PremiseWindow />
      </div>
    </main>
  );
}
