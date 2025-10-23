window.addEventListener('DOMContentLoaded', function() {


    // Main Navigation Toggle

    const mainNav = document.querySelector('.tv-main-nav'),
        mainNavWrapper = document.querySelector('.tv-main-nav__wrapper'),
        menuBtn = document.querySelector('.tv-main-nav__toggle'),
        menuBtnTxt = menuBtn ? menuBtn.querySelector('.tv-main-nav__toggle__txt') : null,
        mainNavHeight = mainNav.offsetHeight,
        mainNavLinks = mainNav.querySelectorAll('a');

    if (menuBtn && mainNav) {
        
        menuBtn.addEventListener('click', function() {
            if (mainNavWrapper.classList.contains('h-0')) {
                mainNavWrapper.classList.remove('h-0');
                mainNavWrapper.style.height = `${mainNavHeight}px`;
                mainNav.setAttribute('aria-hidden', 'false');
                menuBtnTxt.textContent = 'Tanca el menú principal';
                this.classList.add('tv-main-nav__toggle--close');

                mainNavLinks.forEach( link => {
                    link.setAttribute('tabindex', '0');
                } );

            } else {
                mainNavWrapper.style.height = '0';
                mainNav.setAttribute('aria-hidden', 'true');
                menuBtnTxt.textContent = 'Mostra el menú principal';
                this.classList.remove('tv-main-nav__toggle--close');

                mainNavLinks.forEach( link => {
                    link.setAttribute('tabindex', '-1');
                } );

                setTimeout(() => {
                    mainNavWrapper.classList.add('h-0');
                }, 300); // Match the transition duration
            }
        });

    }


    // Viewport Min Height

    const viewport = document.querySelector('#tv-viewport'),
        footer = document.querySelector('#tv-footer'),
        footerHeight = footer ? footer.offsetHeight : 0;

        if (viewport) {
            viewport.style.setProperty('--tv-footer-height', footerHeight + 'px');
        }

});