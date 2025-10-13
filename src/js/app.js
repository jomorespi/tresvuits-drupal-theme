window.addEventListener('DOMContentLoaded', function() {



    // Viewport Min Height

    const viewport = document.querySelector('#tv-viewport'),
        footer = document.querySelector('#tv-footer'),
        footerHeight = footer ? footer.offsetHeight : 0;

        if (viewport) {
            viewport.style.setProperty('--tv-footer-height', footerHeight + 'px');
        }


    // Footer A11y

    const footerLinks = footer.querySelectorAll('a'),
        body = document.querySelector('body');

    footerLinks.forEach( link => {

        link.addEventListener( 'focus', function() {

            console.log('focuseeed');

            body.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

        } )

    } )

});