import Elemento from '../elemento/index.js';
import ImportCss from '../../utils/importCss/index.js';

ImportCss('components/shared/subtituloCard/style.css');

const SubtituloCard = {
    build: (texto) => {
        const subtitulo = Elemento({tipo: 'h4', classes: ['nome-carteira'], texto});

        return subtitulo;
    },
    remove: () => {
        const $subtitulo = document.querySelector('.nome-carteira');

        $subtitulo.remove();
    }
}

export default SubtituloCard;