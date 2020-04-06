import Elemento from '../shared/elemento/index.js';
import CardModalMetas from '../cardModalMetas/index.js'
import ImportCss from '../utils/importCss/index.js';

ImportCss('components/modalMetas/style.css');

const ModalMetas = {
    build: () => {
        const container = Elemento({tipo: 'div', classes: ['container-modal-metas']});

        const containerCentroModal = Elemento({tipo: 'div', classes: ['container-centro-3']});

        const cardModalMetas = CardModalMetas.build();

        container.appendChild(containerCentroModal);
        containerCentroModal.appendChild(cardModalMetas);

        return container;
    },
    remove: () => {
        const $container = document.querySelector('.container-modal-metas');

        $container.remove();
    }
}

export default ModalMetas;