fetch('games.json')
.then(response => response.json())
.then(data => {
  const container = document.querySelector('.center');
  data.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('item');
    card.innerHTML = `
      <div class="card noselect">
        <div class="canvas">
          <div class="tracker tr-1"></div>
          <div class="tracker tr-2"></div>
          <div class="tracker tr-3"></div>
          <div class="tracker tr-4"></div>
          <div class="tracker tr-5"></div>
          <div class="tracker tr-6"></div>
          <div class="tracker tr-7"></div>
          <div class="tracker tr-8"></div>
          <div class="tracker tr-9"></div>
          <div class="tracker tr-10"></div>
          <div class="tracker tr-11"></div>
          <div class="tracker tr-12"></div>
          <div class="tracker tr-13"></div>
          <div class="tracker tr-14"></div>
          <div class="tracker tr-15"></div>
          <div class="tracker tr-16"></div>
          <div class="tracker tr-17"></div>
          <div class="tracker tr-18"></div>
          <div class="tracker tr-19"></div>
          <div class="tracker tr-20"></div>
          <div class="tracker tr-21"></div>
          <div class="tracker tr-22"></div>
          <div class="tracker tr-23"></div>
          <div class="tracker tr-24"></div>
          <div class="tracker tr-25"></div>
          <div class="incard">
            <p class="prompt">${game.prompt}</p>
            <span class="title">${game.name}</span>
            <img src="${game.imageSrc}" alt="${game.altText}" />
            <div class="desc">
              <strong>${game.description}</strong>
              <p>${game.smalldescription}</p>
              <foot>${game.footnote}</foot>
            </div>
          </div>
        </div>
        <div class="btn_cont">
          <button
            class="button"
            onclick="location.href = '${game.url}' "
            data-text="Awesome"
          >
            <span class="actual-text">&nbsp;GO!&nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;GO!&nbsp;</span>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  }); 
})
.then(data => {sliderInit();})
.catch(error => console.error('Error:', error));


  //const container2 = document.querySelector('body');
  //const script = document.createElement('script');
  //script.type = "text/javascript";
  //script.src = "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"; // 외부 JavaScript 파일
  //container2.appendChild(script);
function sliderInit(){
  var $jq = jQuery.noConflict();
  $jq('.center').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
    dots: false,             //dots
    infinite: true,         //loop
    pauseOnHover: true,    //don't stop when hoverd
    centerMode:true,        //show the slides of both side 
    centerPadding:"20%",    //how much to show the slides of both side 
  });
};