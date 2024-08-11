import { Input } from "@/app/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "~/app/ui/button";

interface TableProps {
  listName: string;
  description: string;
  conceptLimit: number;
}

export default function TopicTable(props: TableProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.listName}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-2">
          {[...Array(props.conceptLimit).keys()].map((conceptNumber) => (
            <Input
              type="text"
              key={props.listName + "-" + conceptNumber}
              id={"text" + conceptNumber}
              placeholder={"Concept " + (conceptNumber + 1)}
            />
          ))}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Done</Button>
      </CardFooter>
    </Card>
  );
}
