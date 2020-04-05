const BoxIcone = {
    build: () => {
        const container = document.createElement('div');
        container.classList.add('icone-carteira-wrapper');

        const icone = document.createElement('i');
        icone.classList.add('fas');
        icone.classList.add('fa-wallet');
        icone.classList.add('icone-carteira');

        container.appendChild(icone);

        return container;
    },
    remove: () => {
        const $container = document.querySelector('.icone-carteira-wrapper');

        $container.remove();
    }
}

export default BoxIcone;