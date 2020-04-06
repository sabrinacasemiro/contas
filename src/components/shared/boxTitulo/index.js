import Elemento from '../elemento/index.js';
import ImportCss from '../../utils/importCss/index.js';

ImportCss('components/shared/boxTitulo/style.css');

const BoxTitulo = {
    build: (texto) => {
        const tituloBox = Elemento({tipo: 'h2', classes: ['titulo-metas'], texto});

        return tituloBox;
    },
    remove: () => {
        const $tituloBox = document.querySelector('.titulo-metas');

        $tituloBox.remove();
    }
}

export default BoxTitulo;