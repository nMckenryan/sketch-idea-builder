import TopicTable from "~/components/topic-table";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <TopicTable
        listName="Weird Behaviors"
        description="List of weird behaviors"
        conceptLimit={5}
      />
    </main>
  );
}
