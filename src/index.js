import itemTemplates from '../src/gallery-item.hbs';
import items from '../src/menu.json';
import './styles.css';
import './index.html';

const menuRef = document.querySelector('.js-menu');
const switcherButRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const html = itemTemplates(items);
menuRef.insertAdjacentHTML('beforeend', html);

switcherButRef.addEventListener('change', () => {
  if (bodyRef.classList.value === 'light-theme') {
    dartThemeHandler();
  } else {
    lightThemeHandler();
  }
});

const dartThemeHandler = function () {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.add('dark-theme');
  switcherButRef.setAttribute('checked', true);
  localStorage.setItem('theme', 'dark');
  return;
};
const lightThemeHandler = () => {
  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add('light-theme');
  switcherButRef.removeAttribute('checked');
  localStorage.setItem('theme', 'light');
  return;
};

if (localStorage.getItem('theme') === 'dark') {
  dartThemeHandler();
} else {
  lightThemeHandler();
}
