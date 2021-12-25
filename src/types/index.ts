export enum ESize {
  big = 'Big',
  middle = 'Middle',
  small = 'Small',
}

export type TDataItem = {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export type TCard = {
  id: string;
  index: number;
  name: string;
  count: number;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export type TFilters = {
  minQtyFilter: number,
  maxQtyFilter: number,
  onlyFavorites: boolean,
};
