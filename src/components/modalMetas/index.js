import Elemento from '../shared/elemento/index.js';
import CardModalMetas from '../cardModalMetas/index.js';
import Discador from '../../components/discador/index.js';
import Botao from '../shared/botao/index.js';
import ImportCss from '../utils/importCss/index.js';

ImportCss('components/modalMetas/style.css');

const ModalMetas = {
    build: () => {
        const container = Elemento({tipo: 'div', classes: ['container-modal-metas']});

        const containerCentroModal = Elemento({tipo: 'div', classes: ['container-centro-3']});

        const cardModalMetas = CardModalMetas.build({type: 'categoria'});

        const inputNomeMeta = Elemento({tipo: 'input', classes: ['input-nome-meta'], placeholder: 'Nome da Meta'});

        const finalMetaWrapper = Elemento({tipo: 'div', classes: ['final-meta-wrapper']})
        
        const finalMeta = Elemento({tipo: 'Label', classes: ['final-meta'], texto: 'Final da Meta', forLabel: 'dataFinal'});

        const finalData = Elemento({tipo: 'input', classes: ['final-meta-data'], tipoInput: 'date', id: 'dataFinal'});

       const discador = Discador.build();

       const botao = Botao.build('Criar Meta');

        container.appendChild(containerCentroModal);
        containerCentroModal.appendChild(cardModalMetas);
        containerCentroModal.appendChild(inputNomeMeta);
        containerCentroModal.appendChild(finalMetaWrapper);
        containerCentroModal.appendChild(discador);
        containerCentroModal.appendChild(botao);
        finalMetaWrapper.appendChild(finalMeta);
        finalMetaWrapper.appendChild(finalData);

        return container;
    },
    remove: () => {
        const $container = document.querySelector('.container-modal-metas');

        $container.remove();
    }
}

export default ModalMetas;