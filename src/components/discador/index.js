import Elemento from '../shared/elemento/index.js';
import ImportCss from '../utils/importCss/index.js';

ImportCss('components/discador/style.css');

const Discador = {
    build: () => {

        const valorDiscadorWrapper = Elemento({tipo: 'div', classes: ['valor-discador-wrapper']});
        
        const valorWrapper = Elemento({tipo: 'div', classes: ['valor-criar-meta-wrapper']});

        const valorDiscador = Elemento({tipo: 'span', classes: ['valor-criar-meta'], texto: '100.000,00'});

        const discadorWrapper = Elemento({tipo: 'div', classes: ['discador-wrapper']}); 

        const numeroDiscador0 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '1'});
        const numeroDiscador1 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '2'});
        const numeroDiscador2 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '3'});
        const numeroDiscador3 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '4'});
        const numeroDiscador4 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '5'});
        const numeroDiscador5 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '6'});
        const numeroDiscador6 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '7'});
        const numeroDiscador7 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '8'});
        const numeroDiscador8 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '9'});
        const numeroDiscador9 = Elemento({tipo: 'button', classes: ['numero-discador'], texto: '0'});
        const iconeBackspace = Elemento({tipo: 'i', classes: ['fas', 'fa-backspace', 'icone-backspace']});

        valorDiscadorWrapper.appendChild(valorWrapper);
        valorDiscadorWrapper.appendChild(discadorWrapper);
        valorWrapper.appendChild(valorDiscador);
        discadorWrapper.appendChild(numeroDiscador0);
        discadorWrapper.appendChild(numeroDiscador1);
        discadorWrapper.appendChild(numeroDiscador2);
        discadorWrapper.appendChild(numeroDiscador3);
        discadorWrapper.appendChild(numeroDiscador4);
        discadorWrapper.appendChild(numeroDiscador5);
        discadorWrapper.appendChild(numeroDiscador6);
        discadorWrapper.appendChild(numeroDiscador7);
        discadorWrapper.appendChild(numeroDiscador8);
        discadorWrapper.appendChild(numeroDiscador9);
        discadorWrapper.appendChild(iconeBackspace);
        
        return valorDiscadorWrapper;
    },
    remove: () => {
        const $valorDiscadorWrapper = document.querySelector('.valor-discador-wrapper');

        $valorDiscadorWrapper.remove();
    }
}

export default Discador;