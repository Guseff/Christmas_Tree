export enum EPage {
  Main,
  Filters,
};

export enum ESize {
  big = 'большой',
  middle = 'средний',
  small = 'малый',
};

export enum EColor {
  yellow = 'желтый',
  green = 'зелёный',
  red = 'красный',
  white = 'белый',
  blue = 'синий',
};

export enum EShape {
  ball = 'шар',
  cone = 'шишка',
  bell = 'колокольчик',
  curve = 'фигурка',
  flake = 'снежинка',
};

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
  shape: EShape;
  color: EColor;
  size: ESize;
  favorite: boolean;
};

export type TFilters = {
  minQty: number,
  maxQty: number,
  maxYear: number,
  minYear: number,
  onlyFavorites: boolean,
  shape: EShape[],
  size: ESize[],
  color: EColor[],
};
