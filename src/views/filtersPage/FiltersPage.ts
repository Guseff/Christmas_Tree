import { Cards } from './components/Cards/Cards';
import { State } from '../../state';

export const FiltersPage = (state: State) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('cards-container');

  const cards = Cards(state.filtered);
  wrapper.append(cards);
   
  return wrapper;
};
