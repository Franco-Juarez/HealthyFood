//SCROLL MENU BTN FUNCTION

const body = document.querySelector("body");

const bodyHeight = body.offsetHeight;

function contactScroll() {
    const scrollNumber = bodyHeight + 4000;
    window.scroll({
        top: scrollNumber,
        behavior: 'smooth'
      });
}

//THIS FUNCTION ALTERNATES BETWEEN DIFERENT TYPES OF CONTENT ACCORDING TO THE WINDOW SIZE

function resizeWindow(x) {
  if (x.matches) {
    const menuContainer = document.querySelector(".menuContainer");
    menuContainer.innerHTML = "";
    const sliderContainer = document.createElement("div")
    sliderContainer.innerHTML = `
                                <div id="carouselExampleControls" class="carousel slide d-flex align-items-center justify-content-center" data-bs-ride="carousel">
                                <div class="carousel-inner menuCard">
                                  <div class="carousel-item active">
                                    <img src="img/cardImg/cardFood1.jpg" class="d-block" alt="Rice wok with green onion and cucumber accompanied by parsley and boiled egg.">
                                    <div class="titlePriceCard"><h3>Cucumber Salad</h3></div>
                                    <p class="menuDescription">Rice wok with green onion and cucumber accompanied by parsley and boiled egg.</p>
                                    <div class="menuRatingDiv">
                                        <div class="starContainer">
                                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                        </div>
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                  </div>
                                  <div class="carousel-item">
                                    <img src="img/cardImg/cardFood2.jpg" class="d-block" alt="Avocado salad, purple cabbage, cucumber, salmon and mango accompanied with rye seeds.">
                                    <div class="titlePriceCard"><h3>Salmon Salad</h3></div>
                                    <p class="menuDescription">Avocado salad, purple cabbage, cucumber, salmon and mango accompanied with rye seeds.</p>
                                    <div class="menuRatingDiv">
                                        <div class="starContainer">
                                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                        </div>
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                  </div>
                                  <div class="carousel-item">
                                    <img src="img/cardImg/cardFood3.jpg" class="d-block" alt="Cherry tomatoes, romaine lettuce and french lettuce  salad in a round white bold.">
                                    <div class="titlePriceCard"><h3>Green Salad</h3></div>
                                    <p class="menuDescription">Cherry tomatoes, romaine lettuce and french lettuce  salad in a round white bold.</p>
                                    <div class="menuRatingDiv">
                                        <div class="starContainer">
                                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                        </div>
                                    <i class="fa-solid fa-plus"></i>
                                    </div>
                                  </div>
                                </div>
                                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                  </button>
                                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                  </button>
                                </div>
                                <div class="displayNone">
                                <div class="menuCard">
                                        <img src="img/cardImg/cardFood4.jpg" alt="Kiwi, blueberry, chocolate, pistachio and granola dessert.">
                                        <div class="titlePriceCard"><h3>Blueberry Dessert</h3></div>
                                        <p class="menuDescription">Kiwi, blueberry, chocolate, pistachio and granola dessert.</p>
                                        <div class="menuRatingDiv">
                                            <div class="starContainer">
                                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                            </div>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                </div>
                                <div class="menuCard">
                                        <img src="img/cardImg/cardFood5.jpg" alt="Blueberry, raspberry, blackberry, mango, coconut, almond and fruit yogurt dessert.">
                                        <div class="titlePriceCard"><h3>Akai Bowl</h3></div>
                                        <p class="menuDescription">Choise of: Coke, Fanta or Sprite. Upgrade to large fries, etc .. and more</p>
                                        <div class="menuRatingDiv">
                                            <div class="starContainer">
                                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                            </div>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                </div>
                                <div class="menuCard">
                                        <img src="img/cardImg/cardFood6.jpg" alt="Blueberry dessert, strawberry, mango, kiwi, grated coconut and fruit yogurt.">
                                        <div class="titlePriceCard"><h3>Fruit Bowl</h3></div>
                                        <p class="menuDescription">Blueberry dessert, strawberry, mango, kiwi, grated coconut and fruit yogurt.</p>
                                        <div class="menuRatingDiv">
                                            <div class="starContainer">
                                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                            </div>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                </div>
                            </div>
                                `
    menuContainer.appendChild(sliderContainer);
    testimonySlider ()
  } else {
    //REMOVE SLIDER
    const menuContainer = document.querySelector(".menuContainer");
    menuContainer.innerHTML = "";
    ////ADD NEW MENU WITHOUT SLIDER
    const cardMenu = document.createElement("div")
    cardMenu.classList.add("menuCardsDiv");
    cardMenu.innerHTML =`
                          <div class="menuCard">
                              <img src="img/cardImg/cardFood1.jpg" alt="Rice wok with green onion and cucumber accompanied by parsley and boiled egg.">
                              <div class="titlePriceCard"><h3>Cucumber Salad</h3></div>
                              <p class="menuDescription">Rice wok with green onion and cucumber accompanied by parsley and boiled egg.</p>
                              <div class="menuRatingDiv">
                                  <div class="starContainer">
                                      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                  </div>
                                  <i class="fa-solid fa-plus"></i>
                              </div>
                          </div>
                          <div class="menuCard">
                              <img src="img/cardImg/cardFood2.jpg" alt="Avocado salad, purple cabbage, cucumber, salmon and mango accompanied with rye seeds.">
                              <div class="titlePriceCard"><h3>Salmon Salad</h3></div>
                              <p class="menuDescription">Avocado salad, purple cabbage, cucumber, salmon and mango accompanied with rye seeds.</p>
                              <div class="menuRatingDiv">
                                  <div class="starContainer">
                                      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                  </div>
                                  <i class="fa-solid fa-plus"></i>
                              </div>
                          </div>
                          <div class="menuCard">
                              <img src="img/cardImg/cardFood3.jpg" alt="Cherry tomatoes, romaine lettuce and french lettuce  salad in a round white bold.">
                              <div class="titlePriceCard"><h3>Green Salad</h3></div>
                              <p class="menuDescription">Cherry tomatoes, romaine lettuce and french lettuce  salad in a round white bold.</p>
                              <div class="menuRatingDiv">
                                  <div class="starContainer">
                                      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                  </div>
                                  <i class="fa-solid fa-plus"></i>
                              </div>
                          </div>
                          <div class="menuCard">
                              <img src="img/cardImg/cardFood4.jpg" alt="Kiwi, blueberry, chocolate, pistachio and granola dessert.">
                              <div class="titlePriceCard"><h3>Blueberry Dessert</h3></div>
                              <p class="menuDescription">Kiwi, blueberry, chocolate, pistachio and granola dessert.</p>
                              <div class="menuRatingDiv">
                                  <div class="starContainer">
                                      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                  </div>
                                  <i class="fa-solid fa-plus"></i>
                              </div>
                          </div>
                          <div class="menuCard">
                              <img src="img/cardImg/cardFood5.jpg" alt="Blueberry, raspberry, blackberry, mango, coconut, almond and fruit yogurt dessert.">
                              <div class="titlePriceCard"><h3>Akai Bowl</h3></div>
                              <p class="menuDescription">Blueberry, raspberry, blackberry, mango, coconut, almond and fruit yogurt dessert.</p>
                              <div class="menuRatingDiv">
                                  <div class="starContainer">
                                      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                  </div>
                                  <i class="fa-solid fa-plus"></i>
                              </div>
                          </div>
                          <div class="menuCard">
                              <img src="img/cardImg/cardFood6.jpg" alt="Blueberry dessert, strawberry, mango, kiwi, grated coconut and fruit yogurt.">
                              <div class="titlePriceCard"><h3>Fruit Bowl</h3></div>
                              <p class="menuDescription">Blueberry dessert, strawberry, mango, kiwi, grated coconut and fruit yogurt.</p>
                              <div class="menuRatingDiv">
                                  <div class="starContainer">
                                      <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                  </div>
                                  <i class="fa-solid fa-plus"></i>
                              </div>
                          </div>
                          <div class="displayNone">
                          <div class="menuCard">
                                  <img src="img/cardImg/cardFood7.jpg" alt="Carrot, mint, pistachio, cucumber, parsley, lettuce and bean sprouts salad.">
                                  <div class="titlePriceCard"><h3>Pistachio Salad</h3></div>
                                  <p class="menuDescription">Carrot, mint, pistachio, cucumber, parsley, lettuce and bean sprouts salad.</p>
                                  <div class="menuRatingDiv">
                                      <div class="starContainer">
                                          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                      </div>
                                      <i class="fa-solid fa-plus"></i>
                                  </div>
                          </div>
                          <div class="menuCard">
                                  <img src="img/cardImg/cardFood8.jpg" alt="Avocado salad, bean sprouts, lettuce, carrot, pistachio and mint.">
                                  <div class="titlePriceCard"><h3>Avocado Salad</h3></div>
                                  <p class="menuDescription">Avocado salad, bean sprouts, lettuce, carrot, pistachio and mint.</p>
                                  <div class="menuRatingDiv">
                                      <div class="starContainer">
                                          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                      </div>
                                      <i class="fa-solid fa-plus"></i>
                                  </div>
                          </div>
                          <div class="menuCard">
                                  <img src="img/cardImg/cardFood9.jpg" alt="Salad with bean sprouts, tomato, green beans, cabbage, cucumber, avocado and seeds.">
                                  <div class="titlePriceCard"><h3>Beans Salad</h3></div>
                                  <p class="menuDescription">Salad with bean sprouts, tomato, green beans, cabbage, cucumber, avocado and seeds.</p>
                                  <div class="menuRatingDiv">
                                      <div class="starContainer">
                                          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                                      </div>
                                      <i class="fa-solid fa-plus"></i>
                                  </div>
                          </div>
                      </div>
                        `
    menuContainer.appendChild(cardMenu);
    testimonyCards ()
  }
}

//DEFINE A WINDOW SIZE

const screen = window.matchMedia("(max-width: 768px)")
resizeWindow(screen)
screen.addListener(resizeWindow)

//ADD TESTIMONY SLIDER 

function testimonySlider () {
    //REMOVE DIV CONTENT
    const testimonyDiv = document.querySelector(".testimonyDiv");
    testimonyDiv.innerHTML = "";
    //ADD SLIDER
    const testimonySlider = document.createElement("div")
    testimonySlider.classList.add("testimony");
    testimonySlider.innerHTML = `
                                <div id="carouselExampleControls" class="carousel slide w-100" data-bs-ride="carousel">
                                    <div class="carousel-inner w-100">
                                        <div class="carousel-item active w-100">
                                            <img src="img/testimonyImg/testimonyI.jpg" class="d-block" alt="Close-up photo of a healthyfood customer and her opinion about the service.">
                                            <h4>Melissa Johnson</h4>
                                            <p>This is my go to quick lunch in town. Very tasty wraps, excellent prices, quick, friendly service!</p>
                                            <div class="starDiv" ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                                            <p>Manhattan, NY</p>
                                        </div>
                                        <div class="carousel-item w-100">
                                            <img src="img/testimonyImg/testimonyII.jpg"  class="d-block" alt="Close-up photo of healthyfood customer Kevin Richardson discussing his experience with the service.">
                                            <h4>Kevin Richardson</h4>
                                            <p>I loved that your can create your own salad and make it any way you like. It was delicious and healthy.</p>
                                            <div class="starDiv"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                                            <p>Brooklyn, NY</p>
                                        </div>
                                        <div class="carousel-item w-100">
                                            <img src="img/testimonyImg/testimonyIII.jpg"  class="d-block" alt="Photograph of Hillary Lewis, a customer satisfied with the service we offer at healthyfood.">
                                            <h4>Hillary Lewis</h4>
                                            <p>Delicious and fresh donair wraps! So glad we stopped here for our quick lunch on our way to the art gallery.</p>
                                            <div class="starDiv"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                                            <p>New Jersey, NY</p>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                `
    testimonyDiv.appendChild(testimonySlider);
}

function testimonyCards () {
        //REMOVE SLIDER
        const testimonyContainer = document.querySelector(".testimonyDiv");
        testimonyContainer.innerHTML = "";
        //ADD NEW MENU WITHOUT SLIDER
        const testimonyCardDiv = document.createElement("div")
        testimonyCardDiv.classList.add("testimonyDisplay");
        testimonyCardDiv.innerHTML =`
                                    <div class="testimony">
                                        <img src="img/testimonyImg/testimonyI.jpg" alt="Close-up photo of a healthyfood customer and her opinion about the service.">
                                        <h4>Melissa Johnson</h4>
                                        <p>This is my go to quick lunch in town. Very tasty wraps, excellent prices, quick, friendly service!</p>
                                        <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                                        <p>Manhattan, NY</p>
                                    </div>
                                    <div class="testimony">
                                        <img src="img/testimonyImg/testimonyII.jpg" alt="Close-up photo of healthyfood customer Kevin Richardson discussing his experience with the service.">
                                        <h4>Kevin Richardson</h4>
                                        <p>I loved that your can create your own salad and make it any way you like. It was delicious and healthy.</p>
                                        <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                                        <p>Brooklyn, NY</p>
                                    </div>
                                    <div class="testimony">
                                        <img src="img/testimonyImg/testimonyIII.jpg" alt="Photograph of Hillary Lewis, a customer satisfied with the service we offer at healthyfood.">
                                        <h4>Hillary Lewis</h4>
                                        <p>Delicious and fresh donair wraps! So glad we stopped here for our quick lunch on our way to the art gallery.</p>
                                        <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                                        <p>New Jersey, NY</p>
                                    </div>
                                    `
        testimonyContainer.appendChild(testimonyCardDiv);
}


