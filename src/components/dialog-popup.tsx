import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "~/app/ui/alert-dialog";
import { Button } from "~/app/ui/button";
import { GrHelpBook } from "react-icons/gr";

export function DialogPopup() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <GrHelpBook />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>How to use Sketch Idea Builder</AlertDialogTitle>
          <AlertDialogDescription>
            This app is designed to help you bring premises to life. Simply:
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Fill in as much of the prompts as possible with funny concepts.
              </li>
              <li> Select your three favorites in each category</li>
              <li> Combine them in the Premise section below</li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
