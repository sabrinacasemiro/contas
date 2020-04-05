const Valor = {
    build: (valor) => {
        const valorWrapper = document.createElement('div');
        valorWrapper.classList.add('valor-carteira-wrapper');
        
        const moeda = document.createElement('span');
        moeda.classList.add('cifrao-carteira');
        moeda.textContent = 'R$ '

        const valorCarteira = document.createElement('span');
        valorCarteira.classList.add('valor-carteira');
        valorCarteira.textContent = valor;

        valorWrapper.appendChild(moeda);
        valorWrapper.appendChild(valorCarteira);

        return valorWrapper;
    },
    remove: () => {
        const $valorWrapper = document.querySelector('.valor-carteira-wrapper');

        $valorWrapper.remove();
    }
}

export default Valor;