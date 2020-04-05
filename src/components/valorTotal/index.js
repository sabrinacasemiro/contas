const ValorTotal = {
    build: () => {
        const container = document.createElement('header');
        container.classList.add('cabecalho');

        const valoresWrapper = document.createElement('div');
        valoresWrapper.classList.add('valores-wrapper');

        const cifrao = document.createElement('span');
        cifrao.classList.add('cifrao-valores');
        cifrao.textContent = 'R$';

        const valor = document.createElement('span');
        valor.classList.add('valores');
        valor.textContent = '100.000,00';

        const icone = document.createElement('i');
        icone.classList.add('fas');
        icone.classList.add('fa-crosshairs');
        icone.classList.add('icon');

        container.appendChild(valoresWrapper);
        valoresWrapper.appendChild(cifrao);
        valoresWrapper.appendChild(valor);
        valoresWrapper.appendChild(icone);

        return container;
    },
    remove: () => {
        const container = document.querySelector('.cabecalho');
        container.remove();
    }
}

export default ValorTotal;

