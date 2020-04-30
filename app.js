import Home from './src/pages/home/index.js';
import Receita from './src/pages/receita/index.js';
import Transferencia from './src/pages/transferencia/index.js';

const body = document.querySelector('body');

const init = () => {
  body.innerHTML = '';
  const transferencia = Transferencia.build();

  body.appendChild(transferencia);
}

init();