import ValorTotal from '../../components/valorTotal/index.js';
import Card from '../../components/card/index.js';
import Metas from '../../components/metas/index.js';

const Home = {
    build: () => {
        const container = document.createElement('section');
        container.classList.add('container');

        const cabecalho = ValorTotal.build();

        const containerCentro = document.createElement('div');
        containerCentro.classList.add('container-centro');

        const boxCarteiras = document.createElement('ul');
        boxCarteiras.classList.add('carteiras-wrapper');

        const carteira = Card.build();

        const boxMetas = document.createElement('div');
        boxMetas.classList.add('metas-wrapper');

        const listaMetas = document.createElement('ul');
        listaMetas.classList.add('lista-metas');

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