import Elemento from '../shared/elemento/index.js';
import ImportCss from '../utils/importCss/index.js';

ImportCss('components/menuNavegacao/style.css');

const MenuNavegacao = {
    build: () => {
        const menuWrapper = Elemento({tipo: 'div', classes: ['container-menu']});
        const iconeMenu0 = Elemento({tipo: 'button', classes: ['fas', 'fa-crosshairs', 'icone-menu']});
        const iconeMenu1 = Elemento({tipo: 'button', classes: ['fas', 'fa-crosshairs', 'icone-menu']});
        const botaoMenu = Elemento({tipo: 'button', classes: ['botao-menu']});
        const iconeMenu2 = Elemento({tipo: 'button', classes: ['fas', 'fa-crosshairs', 'icone-menu']});
        const iconeMenu3 = Elemento({tipo: 'button', classes: ['fas', 'fa-crosshairs', 'icone-menu']});

        menuWrapper.appendChild(iconeMenu0);
        menuWrapper.appendChild(iconeMenu1);
        menuWrapper.appendChild(botaoMenu);
        menuWrapper.appendChild(iconeMenu2);
        menuWrapper.appendChild(iconeMenu3);

        return menuWrapper;
    },
    remove: () => {
        const $menuWrapper = document.querySelector('.container-menu');

        $menuWrapper.remove();
    }
}

export default MenuNavegacao;