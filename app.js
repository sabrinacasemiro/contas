import Home from './src/pages/home/index.js';
import Receita from './src/pages/receita/index.js'

const body = document.querySelector('body');

const init = () => {
  body.innerHTML = '';
  const home = Home.build();

  body.appendChild(home);
}

init();