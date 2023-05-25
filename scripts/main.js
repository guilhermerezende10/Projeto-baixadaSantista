function clickMenu() {
    if (navbar.style.display == 'grid') {
        navbar.style.display = 'none'
    } else {
        navbar.style.display = 'grid'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 900) {
        navbar.style.display = 'flex'
        menu.style.display = 'none'
        tabela.style.display = 'grid'
    } else {
        navbar.style.display = 'none'
        menu.style.display = 'grid'
        tabela.style.display = 'none'
    }
}

function telaGrande () {
    if (window.innerWidth >= 900) {
        tabela.style.display = 'grid'
        
    } else {
        tabela.style.display = 'none'
        
    }
}