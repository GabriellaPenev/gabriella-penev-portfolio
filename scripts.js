const portfolio = {}

let count = 0;
portfolio.descSpan = document.getElementById('descriptions');

portfolio.scrollTop = () => {
    const button = document.querySelector('.btn');
    
    button.addEventListener( 'click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}

portfolio.descriptions = [
    'code',
    'collaborate',
    'create'
]

portfolio.cycleDescriptions = () => {
    let index = count % portfolio.descriptions.length;
    portfolio.descSpan.textContent = portfolio.descriptions[index];
    count++;
}

portfolio.firstDescription = () => {
    portfolio.descSpan.textContent = 'create';
}

portfolio.shrinkHeader = () => {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.fixedHeader');
    
        if (window.pageYOffset > 5) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    })
}

portfolio.init = () => {
    portfolio.shrinkHeader();
    portfolio.scrollTop();
    portfolio.firstDescription();
    setInterval(portfolio.cycleDescriptions, 2500);
}

portfolio.init();