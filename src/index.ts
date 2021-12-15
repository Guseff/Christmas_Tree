import './index.css';
import response from './data/data.json';
import { TState } from './types';

const wrapper = document.createElement('div');
const header = document.createElement('h2');
header.innerHTML = 'Christmas Tree';
wrapper.classList.add('wrapper');
document.body.append(header); 

document.body.append(wrapper);
