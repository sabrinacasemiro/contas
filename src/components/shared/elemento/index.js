const Elemento = ({ tipo, classes, texto }) => {
    const elemento = document.createElement(tipo);
    elemento.textContent = texto;
    if(classes[0]) classes.map(classe => elemento.classList.add(classe));

    return elemento;
}

export default Elemento;