export type TCard = {
  num: number;
  name: string;
  count?: number;
  year?: number;
  shape?: string;
  color?: string;
  size?: string;
  favorite?: boolean;
};

export type TState = {
  data: TCard[];
  filtered: TCard[];
};
