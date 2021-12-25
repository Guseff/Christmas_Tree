import { TCard, TFilters, TDataItem } from '../types';
import response from '../data/data.json';

export class State {
  data: TCard[];
  filtered: TCard[];
  filters: TFilters;
  favorites: number;

  constructor() {
    this.data = response.map((item: TDataItem) => ({
      id: item.num,
      index: parseInt(item.num, 10) - 1,
      name: item.name,
      count: parseInt(item.count, 10),
      year: parseInt(item.year, 10),
      shape: item.shape,
      color: item.color,
      size: item.size,
      favorite: item.favorite,
    }));
    this.filtered = this.data;
    this.favorites = response.filter((item: TDataItem) => item.favorite).length;
    this.filters = {
      minQtyFilter: 0,
      maxQtyFilter: 20,
      onlyFavorites: false,
    };
  }
}
