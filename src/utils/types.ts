// if this project was larger we would have more types here (or we would move
// to actual module type declarations in a `types/` folder) but for now this is fine

type Course = {
  dept: string;
  number: number;
  title: string;
  prereqs?: string | string[];
  description: string;
};

export { type Course };
