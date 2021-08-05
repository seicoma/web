/*!
* Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

function sendEmail () {

  Email.send({
	Host: "smtp.gmail.com",
	Username : "seicoma.corp@gmail.com",
	Password : "seicomapolo",
  //To : 'leopoldo.rodriguez@yahoo.com.mx',
  //To : 'vladiir.rod96@gmail.com',
  To : 'vladiir.rod96@gmail.com, leopoldo.rodriguez@yahoo.com.mx',
  From : document.getElementById('email').value,
	Subject : "Un nuevo usuario de Seicoma te envia un mensaje",
  Body : "Nombre: " + document.getElementById('name').value + '\n' + document.getElementById('message').value + "\n Número de teléfono: " + document.getElementById('phone').value + "\n Correo electrónico: " + document.getElementById('email').value
	}).then(
		message => alert("mail sent successfully")
	);

}

// define your own email api which points to your server.



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };


    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
