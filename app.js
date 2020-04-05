import Home from './src/pages/home/index.js';

const body = document.querySelector('body');

const init = () => {
  body.innerHTML = '';
  const home = Home.build();

  body.appendChild(home);
}

init();