(function (Drupal, once) {
  'use strict';

  // ---------- Main Navigation Toggle ----------
  Drupal.behaviors.mainNavToggle = {
    attach: function (context) {
      once('main-nav-toggle', '.tv-main-nav__toggle', context).forEach(function (menuBtn) {
        var mainNav = document.querySelector('.tv-main-nav');
        var mainNavWrapper = document.querySelector('.tv-main-nav__wrapper');
        var menuBtnTxt = menuBtn.querySelector('.tv-main-nav__toggle__txt');
        if (!mainNav || !mainNavWrapper) return;

        var mainNavHeight = mainNav.offsetHeight;

        menuBtn.addEventListener('click', function () {
          if (mainNavWrapper.classList.contains('h-0')) {
            mainNavWrapper.classList.remove('h-0');
            mainNavWrapper.style.height = mainNavHeight + 'px';
            mainNav.setAttribute('aria-hidden', 'false');
            mainNav.removeAttribute('inert');
            if (menuBtnTxt) menuBtnTxt.textContent = 'Tanca el menú principal';
            this.classList.add('tv-main-nav__toggle--close');
          } else {
            mainNavWrapper.style.height = '0';
            mainNav.setAttribute('aria-hidden', 'true');
            mainNav.setAttribute('inert', 'true');
            if (menuBtnTxt) menuBtnTxt.textContent = 'Mostra el menú principal';
            this.classList.remove('tv-main-nav__toggle--close');
            setTimeout(function () {
              mainNavWrapper.classList.add('h-0');
            }, 300);
          }
        });
      });
    }
  };

  // ---------- Viewport Min Height ----------
  Drupal.behaviors.viewportMinHeight = {
    attach: function (context) {
      once('viewport-min-height', '#tv-viewport', context).forEach(function (viewport) {
        var footer = document.querySelector('#tv-footer');
        var footerHeight = footer ? footer.offsetHeight : 0;
        viewport.style.setProperty('--tv-footer-height', footerHeight + 'px');
      });
    }
  };

  // ---------- Status Messages Close Button ----------
  Drupal.behaviors.statusMessagesClose = {
    attach: function (context) {
      once('status-messages-close', '[data-drupal-messages]', context).forEach(function (message) {
        var closeBtn = message.querySelector('button');
        var content = message.querySelector('[role="contentinfo"]');

        if (closeBtn) {
          closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            message.classList.add('hidden');
          });
        }

        message.addEventListener('click', function (e) {
          if (content && !content.contains(e.target)) {
            message.classList.add('hidden');
          }
        });

        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && !message.classList.contains('hidden')) {
            message.classList.add('hidden');
          }
        });
      });
    }
  };

  // ---------- Theme Toggle ----------
  Drupal.behaviors.themeToggle = {
    attach: function (context) {
      once('theme-toggle', '#theme-toggle', context).forEach(function (button) {
        var savedTheme = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

        if (currentTheme === 'dark') {
          document.documentElement.classList.add('dark');
        }

        button.addEventListener('click', function () {
          var isDark = document.documentElement.classList.toggle('dark');
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
      });
    }
  };

})(Drupal, once);