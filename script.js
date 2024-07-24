function toggleMode() {
    const html = document.documentElement;

    /*Pode ser feito assim com lógica
    if(html.classList.contains('light')) {
        html.classList.remove('light');
    }
    else {
        html.classList.add('light');
    }*/
   
    //Ou assim com a função 'toggle()'
    html.classList.toggle('light');
}