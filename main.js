const button = document.querySelectorAll('.transition-button');

button.forEach(buttonOne => {
    const buttonTop = buttonOne.getBoundingClientRect().top;

    const viewportHeight = window.innerHeight;

    const RelativeHeight = (buttonTop - viewportHeight) + 40;
    
    if (window.scrollY >= RelativeHeight) {
        buttonOne.classList.add('do-transition')
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY >= RelativeHeight) {
            buttonOne.classList.add('do-transition')
        }
    });
});

$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});