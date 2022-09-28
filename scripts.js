const portfolio = {}

portfolio.descSpan = document.getElementById('descriptions');

portfolio.descriptions = [
    'live',
    'develop',
    'code',
    'create'
]

let count = 0;

portfolio.cycleDescriptions = () => {
    let index = count % portfolio.descriptions.length;
    portfolio.descSpan.textContent = portfolio.descriptions[index];
    count++;
}

portfolio.firstDescription = () => {
    portfolio.descSpan.textContent = 'create';
}


portfolio.init = () => {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.fixedHeader');
    
        if (window.pageYOffset > 5) {
            header.classList.add('shrink')
        } else {
            header.classList.remove('shrink');
        }
    })

    portfolio.firstDescription();
    setInterval(portfolio.cycleDescriptions, 3300);
}

portfolio.init();