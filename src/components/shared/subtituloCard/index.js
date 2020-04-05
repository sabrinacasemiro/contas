import Elemento from '../elemento/index.js';

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