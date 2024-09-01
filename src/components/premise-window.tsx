import { Input } from "@/app/ui/input";

import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";

export default function PremiseWindow() {
  return (
    <Card className="flex w-[350px] flex-col md:w-[1080px]">
      <CardContent className="flex items-center p-5">
        <div className="w-[100%]">
          <Label>Premise:</Label>
          <Input type="text" placeholder={"Premise"} />
        </div>
      </CardContent>
    </Card>
  );
}
