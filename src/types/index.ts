export enum ESize {
  big = 'Big',
  middle = 'Middle',
  small = 'Small',
}

export type TCard = {
  num: number;
  name: string;
  count?: number;
  year?: number;
  shape?: string;
  color?: string;
  size?: ESize;
  favorite?: boolean;
};

export type TState = {
  data: TCard[];
  filtered: TCard[];
};
