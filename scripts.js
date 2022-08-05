

window.addEventListener('scroll', function () {
    const header = document.querySelector('.fixedHeader');

    if (window.pageYOffset > 20) {
        header.classList.add('shrink')
    } else {
        header.classList.remove('shrink');
    }
})