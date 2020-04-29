import Elemento from '../shared/elemento/index.js';
import Receita from '../../pages/receita/index.js'
import ImportCss from '../utils/importCss/index.js';

ImportCss('components/cabecalhoMenu/style.css');

const CabecalhoMenu = {
    build: () => {
        const menuCabecalho = Elemento({tipo: 'div', classes: ['rdt-wrapper']});
        const botaoReceita = Elemento({tipo: 'button', classes: ['botao-receita'], texto: 'Receita'});
        const botaoDespesa = Elemento({tipo: 'button', classes: ['botao-despesa'], texto: 'Despesa'});
        const botaoTransferencia = Elemento({tipo: 'button', classes: ['botao-transferencia'], texto: 'Transferência'});

        menuCabecalho.appendChild(botaoReceita);
        menuCabecalho.appendChild(botaoDespesa);
        menuCabecalho.appendChild(botaoTransferencia);

        return menuCabecalho;
    },
    remove: () => {
        const $menuCabecalho = document.querySelector('.rdt-wrapper');

        $menuCabecalho.remove();

    }
}
export default CabecalhoMenu;