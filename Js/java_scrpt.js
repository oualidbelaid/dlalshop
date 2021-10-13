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

/*start the main articles*/
var list_artcl = document.getElementById("list_artcl");


for (let i = 0; i < list_artcl.children.length; i++) {
    list_artcl.children[i].querySelector(".fa-heart").onclick = function () {

        var nbr_jaime = this.querySelector('span').textContent
        nbr_jaime = parseFloat(nbr_jaime)
        if (this.classList[this.classList.length - 1] == "i_actv") {
            nbr_jaime--;
        }
        else {
            nbr_jaime++;
        }
        this.querySelector('span').textContent = nbr_jaime
        this.classList.toggle("i_actv")

    }
}
/*end the main articles*/
