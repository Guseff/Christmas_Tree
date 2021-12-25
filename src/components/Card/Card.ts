import { TCard } from '../../types';

export const Card = (data: TCard) => {
  const card = document.createElement('div');
  card.classList.add('card-toy');
  if (data.favorite) {
    card.classList.add('active');
  }
  card.id = data.id;
  
  const title = document.createElement('h3');
  title.classList.add('title-toy');
  title.innerHTML = data.name;

  const img = document.createElement("img");
  img.classList.add("img-toy");
  img.src = `./src/assets/toys/${data.id}.png`;

  const description = document.createElement("div");
  description.classList.add("description-toy");
  const count = document.createElement("p");
  const year = document.createElement("p");
  const shape = document.createElement("p");
  const color = document.createElement("p");
  const size = document.createElement("p");
  const favorite = document.createElement("p");
  count.textContent = `Количество: ${data.count}`;
  year.textContent = `Год покупки: ${data.year}`;
  shape.textContent = `Форма: ${data.shape}`;
  color.textContent = `Цвет: ${data.color}`;
  size.textContent = `Размер: ${data.size}`;
  favorite.textContent = `Любимая: ${data.favorite ? 'Да' : 'Нет'}`;
  description.append(
    count,
    year,
    shape,
    color,
    size,
    favorite
  );

  const wrap = document.createElement("div");
  wrap.classList.add("wrap-toy");
  wrap.append(img, description);

  card.append(title, wrap);
  return card;
};
