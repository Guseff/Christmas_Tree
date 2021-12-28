import { State } from '../../state';
import { Fields } from './components/Fields/Fields';
import { Toys } from './components/Toys/Toys';

export const MainPage = (state: State) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('main-page-container');

  const toys = Toys();

  const field = Fields();

  wrapper.append(field, toys);
  return wrapper;
};
