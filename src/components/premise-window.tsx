import { Input } from "@/app/ui/input";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";

export default function PremiseWindow() {
  return (
    <Card className="w-[1080px]">
      <CardContent>
        <Label>Premise:</Label>
        <Input type="text" placeholder={"Premise"} />
      </CardContent>
    </Card>
  );
}
