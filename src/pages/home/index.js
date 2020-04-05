import ValorTotal from '../../components/valorTotal/index.js';

const Home = {
    build: () => {
        const container = document.createElement('section');
        container.classList.add('container');

        const cabecalho = ValorTotal.build();

        const containerCentro = document.createElement('div');
        containerCentro.classList.add('container-centro');
        
        container.appendChild(cabecalho);
        container.appendChild(containerCentro);

        return container;
    },
    remove: () => {
        const container = document.querySelector('.container');
        container.remove();
    }

}



export default Home;