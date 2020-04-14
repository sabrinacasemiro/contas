import Elemento from '../../components/shared/elemento/index.js';
import CabecalhoMenu from '../../components/cabecalhoMenu/index.js';
import ValorTotalDespesa from '../../components/valorTotalDespesa/index.js';
import CardModalMetas from '../../components/cardModalMetas/index.js';
import AdicionarTags from '../../components/adicionarTags/index.js';
import Botao from '../../components/shared/botao/index.js';
import MenuNavegacao from '../../components/menuNavegacao/index.js';
import ImportCss from '../../components/utils/importCss/index.js';

ImportCss('pages/home/styles.css');

const Despesa = {
    build: () => {
        const container = Elemento({tipo: 'section', classes: ['container']});
        const cabecalhoMenu = CabecalhoMenu.build();
        const containerCentroDespesa = Elemento({tipo: 'div', classes: ['container-centro-despesa']});
        const valorTotalDespesa = ValorTotalDespesa.build();
        const selectCarteiras = CardModalMetas.build({type: 'carteira'});
        const selectCategoria = CardModalMetas.build({type: 'categoria'});
        const dataPagamentoWrapper = Elemento({tipo: 'div', classes: ['data-vencimento-wrapper']});
        const dataPagamentoDespesa = Elemento({tipo: 'Label', classes: ['label-data'], texto: 'Data', forLabel: 'dataPagamento'});
        const vencimento = Elemento({tipo: 'input', classes: ['vencimento'], tipoInput: 'date', id: 'dataPagamento'});
        const parcelasWrapper = Elemento({tipo: 'div', classes: ['parcelas-wrraper']});
        const labelParcelas = Elemento({tipo: 'label', classes: ['label-parcelas'], texto: 'Parcelas', forLabel: 'quantidadeParcelas'});
        const checkboxWrapper = Elemento({tipo: 'div', classes: ['checkbox-wrapper']});
        const quantidadeParcelas = Elemento({tipo: 'input', classes: ['quantidade-parcelas'], placeholder: '1 v e z', forLabel: 'quantidadeParcelas'});
        const checkBoxParcelas = Elemento({tipo: 'div', classes: ['checkbox-parcelas']});
        const checkbox = Elemento({tipo: 'div', classes: ['checkbox']});
        const iconeCheckbox = Elemento({tipo: 'i', classes: ['fas', 'fa-check', 'icone-checkbox']});
        const dividir = Elemento({tipo: 'span', classes: ['dividir'], texto: 'Dividir valor'});
        const adicionarTag = AdicionarTags.build();
        const caixaObservacao = Elemento({tipo: 'textarea', classes: ['observacao-despesa'], placeholder: 'Obs...'});
        const botao = Botao.build('Concluir');
        const menuNavegacao = MenuNavegacao.build();
        
        container.appendChild(cabecalhoMenu);
        container.appendChild(containerCentroDespesa);
        containerCentroDespesa.appendChild(valorTotalDespesa);
        containerCentroDespesa.appendChild(selectCarteiras);
        containerCentroDespesa.appendChild(selectCategoria);
        containerCentroDespesa.appendChild(dataPagamentoWrapper);
        dataPagamentoWrapper.appendChild(dataPagamentoDespesa);
        dataPagamentoWrapper.appendChild(vencimento);
        containerCentroDespesa.appendChild(parcelasWrapper);
        parcelasWrapper.appendChild(labelParcelas);
        parcelasWrapper.appendChild(checkboxWrapper);
        checkboxWrapper.appendChild(quantidadeParcelas);
        checkboxWrapper.appendChild(checkBoxParcelas);
        checkboxWrapper.appendChild(checkbox);
        checkbox.appendChild(iconeCheckbox);
        checkboxWrapper.appendChild(dividir);
        containerCentroDespesa.appendChild(adicionarTag);
        containerCentroDespesa.appendChild(caixaObservacao);
        containerCentroDespesa.appendChild(botao);
        container.appendChild(menuNavegacao);

        return container;
    },
    remove: () => {
        const $container = document.querySelector('.container');
        $container.remove();
    }
}

export default Despesa;