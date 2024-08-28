import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "~/app/ui/alert-dialog";
import { Button } from "~/app/ui/button";
import { GrHelpBook } from "react-icons/gr";

export function HelpPopup() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <GrHelpBook style={{ color: "black" }} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>How to use Sketch Idea Builder</AlertDialogTitle>
          <AlertDialogDescription>
            <p>
              This app is designed to help you generate ideas for your comedy
              sketches.
            </p>
            <ul className="m-1 w-full list-inside list-disc p-1">
              <li>
                Fill in as much of the prompts as possible with funny concepts.
              </li>
              <li> Select your three favourites in each category</li>
              <li> Combine them in the Premise section below</li>
            </ul>
            <p>
              After that, get to writing ASAP! It doesn't have to be perfect,
              you can (and should) come back later to polish it.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Got it</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
