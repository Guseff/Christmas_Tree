import './styles/style.css';
import { State } from './state';

import { Header } from './components/Header/Header';
import { FiltersPage } from './views/filtersPage/FiltersPage';
import { EPage } from './types';
import { MainPage } from './views/mainPage/MainPage';

const state = new State();

const pageRender = (param: EPage) => {
  const page = param === EPage.Filters
    ? FiltersPage(state, headerRender)
    : MainPage(state);

  return page;
};

const switcher = () => {
  state.setCurrentPage(state.currentPage === EPage.Filters ? EPage.Main : EPage.Filters);
  const page = pageRender(state.currentPage);
  
  const old = document.body.getElementsByClassName('main-page-container')[0];
  document.body.replaceChild(page, old);
};

const headerRender = () => {
  const header = Header(state.favorites, switcher);
  const old = document.body.getElementsByClassName('header')[0];
  if (old) {
    document.body.replaceChild(header, old);
  } else {
    document.body.append(header);
  }
};
headerRender();

const page = pageRender(EPage.Filters);
document.body.append(page);
