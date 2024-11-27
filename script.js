document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'auto'
            });
        }
    });
});
Scrollout({});