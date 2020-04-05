const Elemento = ({ tipo, classes, texto }) => {
    if(!tipo) return console.error('Elemento: você não passou o tipo do elemento. Ex.: Elemento({tipo: "div"});');
    
    const elemento = document.createElement(tipo);
    elemento.textContent = texto;
    classes.map(classe => elemento.classList.add(classe));

    return elemento;
}

export default Elemento;