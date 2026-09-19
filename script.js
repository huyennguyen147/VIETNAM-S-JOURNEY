document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const mainMenu = document.getElementById("mainMenu");

    if (menuButton && mainMenu) {

        menuButton.addEventListener("click", function () {

            mainMenu.classList.toggle("open");

        });


        const menuLinks = mainMenu.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainMenu.classList.remove("open");

            });

        });

    }

});