/*Globale*/



/*start the main header*/



/*end the main header*/


/*start main_navigateur*/

var icon_show_menu = document.getElementById('icon_menu');
var menu = document.getElementById('menu');
icon_show_menu.onclick = function () {
    menu.classList.toggle("show_menu")
    icon_show_menu.classList.toggle("active")
}

/*end main_navigateur*/