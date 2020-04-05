import ValorTotal from '../../components/valorTotal/index.js';
import Card from '../../components/card/index.js';
import Metas from '../../components/metas/index.js';
import Elemento from '../../components/shared/elemento/index.js';

const Home = {
    build: () => {
        const container = Elemento({tipo: 'section', classes: ['container']});

        const cabecalho = ValorTotal.build();

        const containerCentro = Elemento({tipo: 'div', classes: ['container-centro']});

        const boxCarteiras = Elemento({tipo: 'ul', classes: ['carteiras-wrapper']});

        const carteira = Card.build();

        const boxMetas = Elemento({tipo: 'div', classes: ['metas-wrapper']});

        const listaMetas = Elemento({tipo: 'ul', classes: ['lista-metas']});

        const metas = Metas.build();
        
        container.appendChild(cabecalho);
        container.appendChild(containerCentro);
        containerCentro.appendChild(boxCarteiras);
        containerCentro.appendChild(boxMetas);
        boxCarteiras.appendChild(carteira);
        boxMetas.appendChild(listaMetas);
        listaMetas.appendChild(metas);

        return container;
    },
    remove: () => {
        const container = document.querySelector('.container');
        container.remove();
    }

}



export default Home;