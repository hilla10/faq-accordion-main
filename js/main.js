
//   Accordion

document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders[0].parentNode.classList.add('active');

    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            const accordionItem = this.parentNode;

            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
            } else {
                const activeItem = document.querySelector('.accordion-item.active');

                if (activeItem) {
                    activeItem.classList.remove('active');
                }

                accordionItem.classList.add('active');
            }
        });
    });
});
