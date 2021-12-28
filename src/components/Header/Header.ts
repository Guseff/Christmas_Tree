export const Header = (count: number, pageSwitch: Function) => {
  const header = document.createElement('div');
  header.classList.add('header');

  const title = document.createElement('div');
  title.innerHTML = 'Christmas Tree Project';

  const button = document.createElement('button');
  button.classList.add('button');
  button.innerHTML = 'Change Page'
  button.onclick = () => {
    pageSwitch();
  }

  const counter = document.createElement('div');
  counter.classList.add('header-counter');
  counter.innerHTML = count.toString();

  header.append(title, button, counter);
  return header;
};