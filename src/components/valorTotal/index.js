import Elemento from '../shared/elemento/index.js'; 

const ValorTotal = {
    build: () => {
        const container = Elemento({tipo: 'header', classes: ['cabecalho']});

        const valoresWrapper = Elemento({tipo: 'div', classes: ['valores-wrapper']});

        const cifrao = Elemento({tipo: 'span', classes: ['cifrao-valores'], texto: 'R$'});

        const valor = Elemento({tipo: 'span', classes: ['valores'], texto: '100.000,00'});

        const icone = Elemento({tipo: 'i', classes: ['fas', 'fa-crosshairs', 'icon']});

        container.appendChild(valoresWrapper);
        valoresWrapper.appendChild(cifrao);
        valoresWrapper.appendChild(valor);
        valoresWrapper.appendChild(icone);

        return container;
    },
    remove: () => {
        const container = document.querySelector('.cabecalho');
        container.remove();
    }
}

export default ValorTotal;

