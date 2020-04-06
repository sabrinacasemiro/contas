import Elemento from '../elemento/index.js';
import ImportCss from '../../utils/importCss/index.js';

ImportCss('components/shared/tituloCard/style.css');

const TituloCard = {
    build: (texto) => {
        const titulo = Elemento({tipo: 'h3', classes: ['carteiras'], texto});

        return titulo;
    },
    remove: () => {
        const $titulo = document.querySelector('.carteiras');

        $titulo.remove();
    }
}

export default TituloCard;