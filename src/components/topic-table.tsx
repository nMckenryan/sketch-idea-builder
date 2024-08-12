"use client";

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
import { useState } from "react";

interface TableProps {
  listName: string;
  description: string;
  conceptLimit: string[];
}

export default function TopicTable(props: TableProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const maxSelected = 3;

  const handleChange = (item: string) => {
    setSelected((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      } else if (prev.length < maxSelected) {
        return [...prev, item];
      } else {
        return prev;
      }
    });
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.listName}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-2">
          {props.conceptLimit.map((item, index) => (
            <div className="flex items-center" key={item}>
              <Checkbox
                className="mr-1 h-9 w-9"
                id={item}
                checked={selected.includes(item)}
                onCheckedChange={() => handleChange(item)}
                disabled={
                  !selected.includes(item) && selected.length >= maxSelected
                }
              />
              <Input
                type="text"
                id={item}
                placeholder={"Ideal " + (index + 1)}
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
