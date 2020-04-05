const TituloCard = {
    build: (texto) => {
        const titulo = document.createElement('h3');
        titulo.classList.add('carteiras');
        titulo.textContent = texto;

        return titulo;
    },
    remove: () => {
        const $titulo = document.querySelector('.carteiras');

        $titulo.remove();
    }
}

export default TituloCard;