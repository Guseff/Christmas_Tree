export const FavoriteFilter = (callback: Function): HTMLElement => {
  const filter = document.createElement('div');
  filter.classList.add('filter-wrapper');

  const favorite = document.createElement('input');
  favorite.classList.add('checkbox', 'favorite-checkbox');
  favorite.type = 'checkbox';
  favorite.id = 'favorite';
  favorite.name = 'favorite';
  favorite.checked = false;

  const label = document.createElement('label');
  label.setAttribute('for', 'favorite');
  label.innerHTML = 'Только любимые';

  filter.append(favorite, label);

  favorite.addEventListener('change', (e) => {
    callback((e.target as HTMLInputElement).checked);
  })

  return filter;
};
