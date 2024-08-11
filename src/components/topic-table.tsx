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
import { Checkbox } from "~/app/ui/checkbox";

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
            <div
              className="flex items-center"
              key={props.listName + "-" + conceptNumber}
            >
              <Checkbox
                className="mr-1 h-9 w-9"
                id={"select" + conceptNumber}
              />
              <Input
                type="text"
                id={"text" + conceptNumber}
                placeholder={"Concept " + (conceptNumber + 1)}
              />
            </div>
          ))}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Clear</Button>
        <Button>Done</Button>
      </CardFooter>
    </Card>
  );
}
