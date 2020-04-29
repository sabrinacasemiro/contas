import Elemento from '../shared/elemento/index.js';
import ImportCss from '../../components/utils/importCss/index.js'

ImportCss('components/campoValor/style.css');

const CampoValor = {
    build: ({cor}) => {
        const campoValorWrapper = Elemento({tipo: 'div', classes: ['valor-total-receita']})
        const cifraoCampoValor = Elemento({tipo: 'span', classes: ['cifrao-receita'], texto: 'R$'});
        const valorCampoValor = Elemento({tipo: 'span', classes: ['valor-receita'], texto: '100.000,00'});

        cifraoCampoValor.style.color = cor;
        valorCampoValor.style.color = cor;

        campoValorWrapper.appendChild(cifraoCampoValor);
        campoValorWrapper.appendChild(valorCampoValor);

        return campoValorWrapper;
    },
    remove: () => {
        const $campoValorWrapper = document.querySelector('valor-total-receita');

        $campoValorWrapper.remove();
    }
}

export default CampoValor;
