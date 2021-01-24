import itemTemplates from '../gallery-item.hbs';
import items from '../menu.json';
import '../styles.css';
import '../index.html';

const menuRef = document.querySelector('.js-menu');

const html = itemTemplates(items);
menuRef.insertAdjacentHTML('beforeend', html);
