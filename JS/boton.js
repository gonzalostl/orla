var boton = document.getElementById('boton');

boton.addEventListener('click', function () {
    var content = document.getElementById('content');
    if (content.classList.contains('apagado')) {
        content.classList.remove('apagado');
    } else {
        content.classList.add('apagado');
    }
});