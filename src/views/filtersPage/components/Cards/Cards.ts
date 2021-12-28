import { TCard } from '../../../../types';
import { Card } from '../../../../components/Card/Card';

export const Cards = (data: TCard[], callback: Function): HTMLElement => {
  const wrapper = document.createElement('main');
  wrapper.classList.add('cards-container');

  const render = () => {
    const arr = data.map(x => Card(x));
  
    wrapper.replaceChildren(...arr);
  };
  
  render();
  
  wrapper.addEventListener('click', (e: Event) => {
    const target = (e.target as Element).closest('.card-toy');

    if (target) {
      const index = parseInt(target.id, 10) - 1;
    
      callback(index);
      render();
    }
  });
  
  return wrapper;
};
