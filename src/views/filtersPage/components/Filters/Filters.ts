import { EColor } from '../../../../types';
import { State } from '../../../../state';
import { ColorFilter } from './ColorFilter/ColorFilter';
import { FavoriteFilter } from './FavoriteFilter/FavoriteFilter';

export const Filters = (state: State, render: Function): HTMLElement => {
  const wrap = document.createElement('div');
  wrap.classList.add('filters-wrapper');

  const colorCallBack = (arr: EColor[]) => {
    state.setColor(arr);
    state.filtering();
    render();
  };
  const colorFilter = ColorFilter(colorCallBack);

  const favoritesCallBack = (x: boolean) => {
    state.setOnlyFavorites(x);
    state.filtering();
    render();
  };
  const favoriteFilter = FavoriteFilter(favoritesCallBack);

  wrap.append(colorFilter, favoriteFilter);
  return wrap;
};
