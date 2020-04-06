import BoxIcone from '../shared/boxIcone/index.js';
import TituloCard from '../shared/tituloCard/index.js';
import BarraProgresso from '../shared/barraProgresso/index.js';
import Valor from '../shared/valor/index.js';
import Elemento from '../shared/elemento/index.js';
import ImportCss from '../utils/importCss/index.js';

ImportCss('components/metas/style.css');

const Metas = {
    build: () => {
        const container = Elemento({tipo: 'li', classes: ['meta-reserva']});

        const boxIcone = BoxIcone.build();

        const wrapperMeta = Elemento({tipo: 'div', classes: ['reserva-wrapper']});

        const tituloCard = TituloCard.build('Reserva');

        const barraProgresso = BarraProgresso.build();

        const valor = Valor.build('100.000,00');

        container.appendChild(boxIcone);
        container.appendChild(wrapperMeta);
        container.appendChild(valor);
        wrapperMeta.appendChild(tituloCard);
        wrapperMeta.appendChild(barraProgresso);

        return container;

    },
    remove: () => {
        const $container = document.querySelector('.meta-reserva');

        $container.remove();
    }
}

export default Metas;