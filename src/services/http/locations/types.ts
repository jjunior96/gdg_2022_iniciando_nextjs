export type LocationsProps = {
  id: number;
  name: string;
  dimension: string;
  residents: string[];
  url: string;
};

export type ReturnLocationsProps = {
  results: LocationsProps[];
};
