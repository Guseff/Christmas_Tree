import { Cards } from './components/Cards/Cards';
import { State } from '../../state';
import { Filters } from './components/Filters/Filters';

export const FiltersPage = (state: State, headerRender: Function) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main-page-container');

  const cardsCallback = (index: number) => {
    state.setFavorite(index);
    state.filtering();
    headerRender();
  };

  const cards = Cards(state.filtered, cardsCallback);

  const render = () => {
    const cards = Cards(state.filtered, cardsCallback);

    const old = wrapper.getElementsByClassName('cards-container')[0];
    wrapper.replaceChild(cards, old);
  }
  
  const filters = Filters(state, render);

  wrapper.append(filters, cards);
  return wrapper;
};
