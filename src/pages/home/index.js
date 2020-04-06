import Elemento from '../../components/shared/elemento/index.js';
import ValorTotal from '../../components/valorTotal/index.js';
import Card from '../../components/card/index.js';
import Metas from '../../components/metas/index.js';
import BoxTitulo from '../../components/shared/boxTitulo/index.js';
import Botao from '../../components/shared/botao/index.js';
import MenuNavegacao from '../../components/menuNavegacao/index.js';
import ModalMetas from '../../components/modalMetas/index.js';
import ImportCss from '../../components/utils/importCss/index.js';

ImportCss('pages/home/styles.css');

const Home = {
    build: () => {
        const container = Elemento({tipo: 'section', classes: ['container']});

        const cabecalho = ValorTotal.build();

        const containerCentro = Elemento({tipo: 'div', classes: ['container-centro']});

        const boxCarteiras = Elemento({tipo: 'ul', classes: ['carteiras-wrapper']});

        const carteira = Card.build();

        const boxMetas = Elemento({tipo: 'div', classes: ['metas-wrapper']});

        const boxTitulo = BoxTitulo.build('Metas');

        const listaMetas = Elemento({tipo: 'ul', classes: ['lista-metas']});

        const metas = Metas.build();

        const botao = Botao.build('Nova Meta');

        const menuNavegacao = MenuNavegacao.build();

        botao.addEventListener('click', handleClickBotao );
        
        container.appendChild(cabecalho);
        container.appendChild(containerCentro);
        container.appendChild(menuNavegacao);
        containerCentro.appendChild(boxCarteiras);
        containerCentro.appendChild(boxMetas);
        boxCarteiras.appendChild(carteira);
        boxMetas.appendChild(boxTitulo);
        boxMetas.appendChild(listaMetas);
        boxMetas.appendChild(botao);
        listaMetas.appendChild(metas);

        return container;
    },
    remove: () => {
        const $container = document.querySelector('.container');
        $container.remove();
    }    
}

const handleClickBotao = () => {
    const $container = document.querySelector('.container');
    const modal = ModalMetas.build();
    
    $container.appendChild(modal);
}


export default Home;