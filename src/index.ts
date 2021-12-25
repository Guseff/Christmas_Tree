import './styles/style.css';
import { State } from './state';

import { Header } from './components/header';
import { FiltersPage } from './views/filtersPage/FiltersPage';

const state = new State();

const header = Header();
document.body.append(header);

const page = FiltersPage(state);
document.body.append(page);
