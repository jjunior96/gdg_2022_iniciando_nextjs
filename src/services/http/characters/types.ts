export type CharactersProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  url: string;
  gender: string;
  image: string;
};

export type ReturnCharactersProps = {
  results: CharactersProps[];
};
