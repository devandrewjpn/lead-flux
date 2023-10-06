document.addEventListener('DOMContentLoaded', function() {
    var scrollingImage = document.querySelector('[data-astronaut]');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        scrollingImage.style.top = scrollPosition * 0.9678 + 'px';
        if(scrollPosition >= 700) {
            scrollingImage.style.left = scrollingImage.style.left - scrollPosition * 2 + 'px';
        } else {
            scrollingImage.style.left = scrollPosition + 'px';

        }
        scrollingImage.style.transform = 'rotate(' + scrollPosition / 8 + 'deg)';
    });

    document.querySelectorAll('.ui-btn').forEach((button) => {
        button.addEventListener('click', (e) => {
            window.location.href= 'lead.html'
        })
    })
});
