const switcherButRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

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
};
const lightThemeHandler = () => {
  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add('light-theme');
  switcherButRef.removeAttribute('checked');
  localStorage.setItem('theme', 'light');
};

if (localStorage.getItem('theme') === 'dark') {
  dartThemeHandler();
} else {
  lightThemeHandler();
}
