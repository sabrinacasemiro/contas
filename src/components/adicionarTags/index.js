import Elemento from '../shared/elemento/index.js';
import ImportCss from '../utils/importCss/index.js';

ImportCss('components/card/style.css');

const AdicionarTags = {
    build: () => {
        const tagsWrapper = Elemento({tipo: 'div', classes: ['tags-wrapper']});
        const tag = Elemento({tipo: 'div', classes: ['tag']});
        const tituloTag = Elemento({tipo: 'span', classes: ['titulo-tag'], texto: 'Tag'});
        const cancelarTag = Elemento({tipo: 'span', classes: ['cancelar-tag'], texto: 'X'});
        const adicionarTag = Elemento({tipo: 'div', classes: ['adicionar-tag']});
        const textoAdicionar = Elemento({tipo: 'span', classes: ['texto-adicionar'], texto: 'Adicionar'});
        const iconePlus = Elemento({tipo: 'i', classes: ['fas', 'fa-plus', 'icon-plus']});

        tagsWrapper.appendChild(tag);
        tag.appendChild(tituloTag);
        tag.appendChild(cancelarTag);
        tagsWrapper.appendChild(adicionarTag);
        adicionarTag.appendChild(textoAdicionar);
        adicionarTag.appendChild(iconePlus);

        return tagsWrapper;
    },
    remove: () => {
        const $tagWrapper = document.querySelector('.tags-wrapper');

        $tagWrapper.remove();
    }
}

export default AdicionarTags;