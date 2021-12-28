import { EColor } from '../../../../../types';

export const ColorFilter = (callback: Function): HTMLElement => {
  const filter = document.createElement('div');
  filter.classList.add('filter-wrapper');

  const filtersArr = Object.entries(EColor).map(([key, value]) => {
    const wrap = document.createElement('div');

    const color = document.createElement('input');
    color.classList.add('checkbox', 'color-checkbox', `color-checkbox-${key}`);
    color.type = 'checkbox';
    color.id = key;
    color.dataset.name = value;
    color.name = key;
    color.checked = true;

    const label = document.createElement('label');
    label.setAttribute('for', key);
    label.innerHTML = value;

    wrap.append(color, label);
    return wrap;
  });
  
  filter.addEventListener('click', () => {
    const arr = Array
      .from(filter.getElementsByTagName('input'))
      .filter(input => input.checked)
      .map(input => input.dataset.name);

    callback(arr as EColor[]);
  })

  filter.append(...filtersArr);
  return filter;
};
