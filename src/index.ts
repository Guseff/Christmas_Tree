import './index.css';
import response from './data/data.json';
import { ESize, TState } from './types';

const wrapper = document.createElement('div');
const header = document.createElement('h2');
header.innerHTML = 'Christmas Tree';
wrapper.classList.add('wrapper');
document.body.append(header);

const state: TState = {
  data: response.map(card => ({
    num: parseInt(card.num, 10),
    name: card.name,
    size: ESize.big,
  })),
  filtered: [],
};

state.filtered = state.data.slice(0, 5);

document.body.append(wrapper);

const render = () => {
  const arr = state.filtered.map(x => {
    const element = document.createElement('div');
    element.classList.add('card');
    if (x.favorite) {
      element.classList.add('active');
    }
    element.id = (x.num).toString();
    element.innerHTML = `${x.name} - ${x.num}`;
  
    return element;
  });

  wrapper.replaceChildren(...arr);
};

render();

wrapper.addEventListener('click', (e: Event) => {
  const id = parseInt((e.target as Element).id, 10);
  state.filtered[id - 1].favorite = !state.filtered[id - 1].favorite;

  render();
});
