window.addEventListener('DOMContentLoaded', function() {



    // Viewport Min Height

    const viewport = document.querySelector('#tv-viewport'),
        footer = document.querySelector('#tv-footer'),
        footerHeight = footer ? footer.offsetHeight : 0;

        if (viewport) {
            viewport.style.setProperty('--tv-footer-height', footerHeight + 'px');
        }


    // Footer A11y

    const footerLinks = footer.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'),
        body = document.querySelector('body');

    footerLinks.forEach( link => {

        link.addEventListener( 'focus', function() {

            console.log('focuseeed');

            body.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

        } )

    } )

});