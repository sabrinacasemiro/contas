import Elemento from '../shared/elemento/index.js';

const ValorTotalDespesa = {
    build: () => {
        const valorRemovivel = Elemento({tipo: 'div', classes: ['valor-removivel-wrapper']});
        const xTagValor = Elemento({tipo: 'span', classes: ['x-tag-valor'], texto: 'x'});
        const tagValor = Elemento({tipo: 'div', classes: ['tag-valor']});
        const cifraoTagValor = Elemento({tipo: 'span', classes: ['cifrao-removivel'], texto: 'R$'});
        const valorTagValor = Elemento({tipo: 'span', classes: ['valor-removivel'], texto: '100.000,00'});

        valorRemovivel.appendChild(xTagValor);
        valorRemovivel.appendChild(tagValor);
        tagValor.appendChild(cifraoTagValor);
        tagValor.appendChild(valorTagValor);

        return valorRemovivel;
    },
    remove: () => {
        const $valorRemovivel = document.querySelector('.valor-removivel-wrapper');

        $valorRemovivel.remove();
    }
}

export default ValorTotalDespesa;