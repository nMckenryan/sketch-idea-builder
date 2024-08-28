import { Input } from "@/app/ui/input";

import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Progress } from "~/app/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/app/ui/tooltip";

export default function PremiseWindow({
  completionPercentage,
}: {
  completionPercentage: number;
}) {
  return (
    <Card className="flex w-[350px] flex-col md:w-[1080px]">
      <CardContent className="flex items-center p-5">
        {completionPercentage < 100 ? (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Progress value={completionPercentage} className="w-[100%]" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{`${completionPercentage}% Complete. Fill in the text above to continue`}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <div className="w-[100%]">
            <Label>Premise:</Label>
            <Input type="text" placeholder={"Premise"} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
