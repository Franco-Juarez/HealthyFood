//THIS FUNCTION CHANGES THE CLASS "DISPLAYNONE" FOR "DISPLAYFLEX" IN THE MENU SECTION


function loadMoreBtn () {
    const btnContent = document.querySelector(".loadMoreBtn")
    if (btnContent.innerText === "Novedades") {
        btnContent.innerText = "Ver Menos";
    } else {
        btnContent.innerText = "Novedades";
    }
    const displayNone = document.querySelector(".displayNone");
    displayNone.classList.toggle("displayFlex");
}