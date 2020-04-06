import Elemento from '../elemento/index.js';
import ImportCss from '../../utils/importCss/index.js'

ImportCss('components/shared/boxIcone/style.css');

const BoxIcone = {
    build: () => {
        const container = Elemento({tipo: 'div', classes: ['icone-carteira-wrapper']});

        const icone = Elemento({tipo: 'i', classes: ['fas', 'fa-wallet', 'icone-carteira']});

        container.appendChild(icone);

        return container;
    },
    remove: () => {
        const $container = document.querySelector('.icone-carteira-wrapper');

        $container.remove();
    }
}

export default BoxIcone;