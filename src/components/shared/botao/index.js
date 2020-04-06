import Elemento from '../elemento/index.js';
import ImportCss from '../../utils/importCss/index.js';

ImportCss('components/shared/botao/style.css');

const Botao = {
    build: (texto) => {
        const botao = Elemento({tipo: 'button', classes: ['botao-nova-meta'], texto});

        return botao;
    },
    remove: () => {
        const $botao = document.querySelector('.botao-nova-meta');

        $botao.remove();
    }
}

export default Botao;