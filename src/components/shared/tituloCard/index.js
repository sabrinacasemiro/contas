import Elemento from '../elemento/index.js';

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