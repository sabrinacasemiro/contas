import Elemento from '../shared/elemento/index.js';
import ImportCss from '../utils/importCss/index.js';

ImportCss('components/discadorGrande/style.css');

const DiscadorGrande = {
    build: () => {
        const discadorGrandeWrapper = Elemento({tipo: 'div', classes: ['discador-receita-wrapper']});
        const numeroDiscadorGrande0 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '1'});
        const numeroDiscadorGrande1 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '2'});
        const numeroDiscadorGrande2 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '3'});
        const numeroDiscadorGrande3 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '4'});
        const numeroDiscadorGrande4 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '5'});
        const numeroDiscadorGrande5 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '6'});
        const numeroDiscadorGrande6 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '7'});
        const numeroDiscadorGrande7 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '8'});
        const numeroDiscadorGrande8 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '9'});
        const numeroDiscadorGrande9 = Elemento({tipo: 'button', classes: ['bota-discador-receita'], texto: '0'});
        const iconeBackspace = Elemento({tipo: 'i', classes: ['fas', 'fa-backspace', 'icone-backspace-receita']});
        
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande0);
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande1);
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande2);
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande3);
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande4);
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande5);
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande6);
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande7);
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande8);
        discadorGrandeWrapper.appendChild(numeroDiscadorGrande9);
        discadorGrandeWrapper.appendChild(iconeBackspace);

        return discadorGrandeWrapper;

    },
    remove: () => {
        const $discadorGrandeWrapper = document.querySelector('discador-receita-wrapper');

        $discadorGrandeWrapper.remove();

    }
}

export default DiscadorGrande;