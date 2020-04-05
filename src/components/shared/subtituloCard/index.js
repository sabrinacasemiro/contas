const SubtituloCard = {
    build: (texto) => {
        const subtitulo = document.createElement('h4');
        subtitulo.classList.add('nome-carteira');
        subtitulo.textContent = texto;

        return subtitulo;
    },
    remove: () => {
        const $subtitulo = document.querySelector('.nome-carteira');

        $subtitulo.remove();
    }
}

export default SubtituloCard;