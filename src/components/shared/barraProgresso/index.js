import Elemento from "../elemento/index.js";


const BarraProgresso = {
    build: () => {
        const container = Elemento({tipo: 'div', classes: ['container-reserva']});

        const progresso = Elemento({tipo: 'div', classes: ['quantidade-reserva']});

        container.appendChild(progresso);

        return container;
    },
    remove: () => {
        const $container = document.querySelector('.container-reserva');

        $container.remove();
    }
}

export default BarraProgresso;