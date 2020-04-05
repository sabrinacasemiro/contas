import Elemento from '../elemento/index.js';

const Valor = {
    build: (valor) => {
        const valorWrapper = Elemento({tipo: 'div', classes: ['valor-carteira-wrapper']});
        
        const moeda = Elemento({tipo: 'span', classes: ['cifrao-carteira'], texto: 'R$'});

        const valorCarteira = Elemento({tipo: 'span', classes: ['valor-carteira'], texto: '100.000,00'});

        valorWrapper.appendChild(moeda);
        valorWrapper.appendChild(valorCarteira);

        return valorWrapper;
    },
    remove: () => {
        const $valorWrapper = document.querySelector('.valor-carteira-wrapper');

        $valorWrapper.remove();
    }
}

export default Valor;