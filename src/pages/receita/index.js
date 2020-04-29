import Elemento from '../../components/shared/elemento/index.js';
import CabecalhoMenu from '../../components/cabecalhoMenu/index.js';
import MenuNavegacao from '../../components/menuNavegacao/index.js';
import CampoValor from '../../components/campoValor/index.js';
import DiscadorGrande from '../../components/discadorGrande/index.js';
import Botao from '../../components/shared/botao/index.js';
import ImportCss from '../../components/utils/importCss/index.js';

ImportCss('pages/receita/style.css');

const Receita = {
    build: () => {
        const container = Elemento({tipo: 'section', classes: ['container']});
        const containerCentroReceita = Elemento({tipo: 'div', classes: ['container-centro-receita']});
        const discadorBotao = Elemento({tipo: 'div', classes: ['discador-botao']});
        const cabecalhoMenu = CabecalhoMenu.build();
        const menuNavegacao = MenuNavegacao.build();
        const campoValor = CampoValor.build({cor: '#53FFB9'});
        const discadorGrande = DiscadorGrande.build();
        const botao = Botao.build('Continuar');

        container.appendChild(cabecalhoMenu);
        container.appendChild(containerCentroReceita);
        container.appendChild(menuNavegacao);
        containerCentroReceita.appendChild(campoValor);
        containerCentroReceita.appendChild(discadorBotao);
        discadorBotao.appendChild(discadorGrande);
        discadorBotao.appendChild(botao);

        return container;
    },
    remove: () => {

    }
}

export default Receita;