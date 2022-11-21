//THIS FUNCTION CHANGES THE CLASS "DISPLAYNONE" FOR "DISPLAYFLEX" IN THE MENU SECTION


function loadMoreBtn () {
    const btnContent = document.querySelector(".loadMoreBtn")
    if (btnContent.innerText === "New Products") {
        btnContent.innerText = "Show Less";
    } else {
        btnContent.innerText = "New Products";
    }
    const displayNone = document.querySelector(".displayNone");
    displayNone.classList.toggle("displayFlex");
}
