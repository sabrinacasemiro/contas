const Elemento = ({ tipo, classes, texto, placeholder, tipoInput, id, forLabel }) => {
    if(!tipo) return console.error('Elemento: você não passou o tipo do elemento. Ex.: Elemento({tipo: "div"});');
    
    const elemento = document.createElement(tipo);
    if(texto) elemento.textContent = texto;
    if(placeholder) elemento.setAttribute('placeholder', placeholder);
    if(tipoInput) elemento.setAttribute('type', tipoInput);
    if(id) elemento.setAttribute('id', id);
    if(forLabel) elemento.setAttribute('for', forLabel);
    if(classes[0]) classes.map(classe => elemento.classList.add(classe));
    
    return elemento;
}

export default Elemento;