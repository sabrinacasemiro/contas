import Elemento from "../elemento/index.js";
import ImportCss from '../../utils/importCss/index.js';

ImportCss('components/shared/barraProgresso/style.css');


const BarraProgresso = {
    build: () => {
        const container = Elemento({tipo: 'div', classes: ['container-reserva']});

        const progresso = Elemento({tipo: 'div', classes: ['quantidade-reserva']});

        container.appendChild(progresso);

        return container;
    },
    remove: () => {
        const $container = document.querySelector('.container-reserva');

        $container.remove();
    }
}

export default BarraProgresso;