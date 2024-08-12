import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Concepts = { name: string; description: string; isEnabled: boolean };
type ConceptsOptions = { concepts: Concepts[], conceptLimit: number };

const options: Concepts[] = [
  { name: 'Weird Behaviors', description: 'List of weird behaviors', isEnabled: true },
  { name: 'Locations', description: 'List as many locations you can', isEnabled: true },
  { name: 'Jobs', description: 'List as many jobs you can. Weird or Regular', isEnabled: true },
  { name: 'Wants or Desires', description: 'List as ambition, desire or want that someone might want', isEnabled: true },
  { name: 'Convictions', description: 'List some weird beliefs someone might have (the weirder the better)', isEnabled: true },
]

export function getConceptsOptions(): ConceptsOptions {
  return { concepts: options, conceptLimit: 5 };
}
