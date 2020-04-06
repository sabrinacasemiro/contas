const ImportCss = (caminho) => {
    const $head = document.querySelector('head');

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.href = `src/${caminho}`;

    $head.appendChild(link);
}

export default ImportCss;