import BoxIcone from '../shared/boxIcone/index.js'; 
import TituloCard from '../shared/tituloCard/index.js';
import SubtituloCard from '../shared/subtituloCard/index.js';
import Valor from '../shared/valor/index.js';
import Elemento from '../shared/elemento/index.js'
import ImportCss from '../../components/utils/importCss/index.js'

ImportCss('components/card/style.css');

const Card = {
    build: () => {
        const container = Elemento({ tipo: 'li', classes: ['carteira'] });

        const boxIcone = BoxIcone.build();

        const wrapperTitulo = Elemento({ tipo: 'div', classes: ['nome-carteira-wrapper'] });

        const tituloCard = TituloCard.build('Carteiras');

        const subtituloCard = SubtituloCard.build('nome');

        const valor = Valor.build('100.000,00');

        container.appendChild(boxIcone);
        container.appendChild(wrapperTitulo);
        container.appendChild(valor);
        wrapperTitulo.appendChild(tituloCard);
        wrapperTitulo.appendChild(subtituloCard);


        return container;
    },
    remove: () => {
        const $container = document.querySelector('.carteira');

        $container.remove();
    }
}

export default Card;