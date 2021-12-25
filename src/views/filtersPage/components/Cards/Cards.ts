import { TCard } from '../../../../types';
import { Card } from '../../../../components/Card/Card';

export const Cards = (data: TCard[]) => {
  const wrapper = document.createElement('main');
  wrapper.classList.add('cards-container');

  const render = () => {
    const arr = data.map(x => Card(x));
  
    wrapper.replaceChildren(...arr);
  };
  
  render();
  
  wrapper.addEventListener('click', (e: Event) => {
    const id = parseInt((e.target as Element).closest('.card-toy')!.id, 10);
    data[id - 1].favorite = !data[id - 1].favorite;
  
    render();
  });
  
  return wrapper;
};
