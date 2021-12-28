import { TCard, TFilters, TDataItem, EShape, EColor, ESize, EPage } from '../types';
import response from '../data/data.json';
import { FAVORITES_MAX_QTY } from '../consts';

export class State {
  data: TCard[];
  filtered: TCard[];
  forRender: TCard[];
  filters: TFilters;
  favorites: number;
  currentPage: EPage;

  constructor() {
    this.data = response.map((item: TDataItem) => ({
      id: item.num,
      index: parseInt(item.num, 10) - 1,
      name: item.name,
      count: parseInt(item.count, 10),
      year: parseInt(item.year, 10),
      shape: item.shape as EShape,
      color: item.color as EColor,
      size: item.size as ESize,
      favorite: item.favorite,
    }));
    this.filtered = this.data;
    this.favorites = this.data.filter((item: TCard) => item.favorite).length;
    this.filters = {
      minQty: 0,
      maxQty: 20,
      minYear: 1940,
      maxYear: 2020,
      onlyFavorites: false,
      shape: Object.values(EShape),
      size: Object.values(ESize),
      color: Object.values(EColor),
    };
    this.currentPage = EPage.Filters;
    this.forRender = [];
  }

  filtering() {
    this.filtered = this.data
      .filter((card) => card.year >= this.filters.minYear && card.year <= this.filters.maxYear)
      .filter((card) => this.filters.onlyFavorites ? card.favorite : card )
      .filter((card) => this.filters.color.includes(card.color));
  }

  setForRender() {
    this.forRender = this.filtered.filter((card) => this.filters.onlyFavorites ? card.favorite : card );
  }

  setColor(arr: EColor[]) {
    this.filters.color = arr;
  }

  setOnlyFavorites(value: boolean) {
    this.filters.onlyFavorites = value;
  }

  setFavorite(index: number) {
    if (this.favorites === FAVORITES_MAX_QTY && this.data[index].favorite === false) {
      return;
    }

    this.data[index].favorite = !this.data[index].favorite;
    this.favorites = this.data.filter((item: TCard) => item.favorite).length;
    this.filtering();
  }

  setCurrentPage(page: EPage) {
    this.currentPage = page;
    console.log(this.currentPage);
  }
};
