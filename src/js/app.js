window.addEventListener('DOMContentLoaded', function () {


    // Main Navigation Toggle

    const mainNav = document.querySelector('.tv-main-nav'),
        mainNavWrapper = document.querySelector('.tv-main-nav__wrapper'),
        menuBtn = document.querySelector('.tv-main-nav__toggle'),
        menuBtnTxt = menuBtn ? menuBtn.querySelector('.tv-main-nav__toggle__txt') : null,
        mainNavHeight = mainNav.offsetHeight,
        mainNavLinks = mainNav.querySelectorAll('a');

    if (menuBtn && mainNav) {

        menuBtn.addEventListener('click', function () {
            if (mainNavWrapper.classList.contains('h-0')) {
                mainNavWrapper.classList.remove('h-0');
                mainNavWrapper.style.height = `${mainNavHeight}px`;
                mainNav.setAttribute('aria-hidden', 'false');
                menuBtnTxt.textContent = 'Tanca el menú principal';
                this.classList.add('tv-main-nav__toggle--close');

                mainNavLinks.forEach(link => {
                    link.setAttribute('tabindex', '0');
                });

            } else {
                mainNavWrapper.style.height = '0';
                mainNav.setAttribute('aria-hidden', 'true');
                menuBtnTxt.textContent = 'Mostra el menú principal';
                this.classList.remove('tv-main-nav__toggle--close');

                mainNavLinks.forEach(link => {
                    link.setAttribute('tabindex', '-1');
                });

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


    // Status Messages Close Button

    const statusMessages = document.querySelectorAll('[data-drupal-messages]');
    statusMessages.forEach(message => {

        const closeBtn = message.querySelector('button'),
            content = message.querySelector('[role="contentinfo"]');

        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                message.classList.add('hidden');
            });
        }

        // Close when clicking outside the content box

        message.addEventListener('click', function (e) {
            if (!content.contains(e.target)) {
                message.classList.add('hidden');
            }
        });

        // Close with Escape key

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !message.classList.contains('hidden')) {
                message.classList.add('hidden');
            }
        });

    });

    // Theme Toggle (Light / Dark)

    const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    })();

    if (theme === 'light') {
        document.documentElement.classList.remove('scheme-dark');
        document.documentElement.classList.add('scheme-light');
    } else {
        document.documentElement.classList.add('scheme-dark');
        document.documentElement.classList.remove('scheme-light');
    }

    window.localStorage.setItem('theme', theme);

    const handleToggleClick = () => {
        const element = document.documentElement;

        const isDark = element.classList.contains("scheme-dark");

        if (isDark) {
            element.classList.remove('scheme-dark');
            element.classList.add('scheme-light');
            localStorage.setItem('theme', 'light');
        } else {
            element.classList.add('scheme-dark');
            element.classList.remove('scheme-light');
            localStorage.setItem('theme', 'dark');
        }

    }

    const themeSelector = document.querySelector('.theme-selector');

    if (themeSelector) {

        themeSelector.addEventListener('click', handleToggleClick)

    }

});