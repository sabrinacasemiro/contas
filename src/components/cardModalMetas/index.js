import Elemento from '../shared/elemento/index.js';
import BoxIcone from '../shared/boxIcone/index.js';
import TituloCard from '../shared/tituloCard/index.js';
import SubtituloCard from '../shared/subtituloCard/index.js';
import ImportCss from '../utils/importCss/index.js';
import Valor from '../shared/valor/index.js';

ImportCss('components/cardModalMetas/style.css');

const CardModalMetas = {
    build: ({type}) => {
        const cardModalMetas = Elemento({tipo: 'div', classes: ['carteira-criar-metas-wrapper']});

        const boxIcone = BoxIcone.build();

        const wrapperTitulo = Elemento({ tipo: 'div', classes: ['nome-carteira-wrapper'] });

        const tituloCard = TituloCard.build('categoria');

        const subtituloCard = SubtituloCard.build('nome');

        const iconePlusWrapper = Elemento({tipo: 'div', classes: ['icon-plus-wrapper']});
        
        const iconePlus = Elemento({tipo: 'i',  classes: ['fas', 'fa-plus', 'icon-plus']});

        const valor = Valor.build('100.000,00');

        cardModalMetas.appendChild(boxIcone);
        cardModalMetas.appendChild(wrapperTitulo);
        wrapperTitulo.appendChild(tituloCard);
        wrapperTitulo.appendChild(subtituloCard);
        type === 'categoria' && cardModalMetas.appendChild(iconePlusWrapper);
        type === 'carteira' && cardModalMetas.appendChild(valor);
        iconePlusWrapper.appendChild(iconePlus);

        return cardModalMetas;
    },
    remove: () => {
        const $cardModalMetas = document.querySelector('.carteira-criar-metas-wrapper');

        $cardModalMetas.remove();

    }
}

export default CardModalMetas;