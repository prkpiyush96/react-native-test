export type IOption = { id: string; answer: string };

export interface IForYouData {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: Array<IOption>;
  user: {
    name: string;
    avatar: string;
  };
}
