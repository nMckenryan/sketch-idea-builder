import PremiseWindow from "~/components/premise-window";
import TopicTable from "~/components/topic-table";

export default function HomePage() {
  const conceptLimit = 5;
  const conceptLimitList: string[] = [];

  for (let i = 0; i < conceptLimit; i++) {
    conceptLimitList.push("concept-" + i);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="grid grid-cols-3 gap-4">
        <TopicTable
          listName="Weird Behaviors"
          description="List of weird behaviors"
          conceptLimit={conceptLimitList}
        />
        <TopicTable
          listName="Weird Behaviors"
          description="List of weird behaviors"
          conceptLimit={conceptLimitList}
        />
        <TopicTable
          listName="Weird Behaviors"
          description="List of weird behaviors"
          conceptLimit={conceptLimitList}
        />
      </div>
      <div className="mt-5 grid grid-cols-1">
        <PremiseWindow />
      </div>
    </main>
  );
}
