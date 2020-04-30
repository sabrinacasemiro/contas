import Elemento from '../../components/shared/elemento/index.js';
import ImportCss from '../../components/utils/importCss/index.js';
import CampoValor from '../../components/campoValor/index.js';
import DiscadorGrande from '../../components/discadorGrande/index.js';
import Botao from '../../components/shared/botao/index.js';
import MenuNavegacao from '../../components/menuNavegacao/index.js';
import CabecalhoMenu from '../../components/cabecalhoMenu/index.js';

ImportCss('pages/transferencia/style.css');

const Transferencia = {
    build: () => {
        const container = Elemento({tipo: 'section', classes: ['container']});
        const containerCentroReceita = Elemento({tipo: 'div', classes: ['container-centro-receita']});
        const discadorBotao = Elemento({tipo: 'div', classes: ['discador-botao']});
        const cabecalhoMenu = CabecalhoMenu.build();
        const menuNavegacao = MenuNavegacao.build();
        const campoValor = CampoValor.build({cor: '#53A9FF'});
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

export default Transferencia;