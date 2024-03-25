let slideNumber = 0;
let slideTime = 25000;

const sliderInner = document.querySelector("#slider");
const imagens = [
  "https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/425867901_795284962634842_7035166941600707431_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cRvi6BLkMngAX_1CGaZ&_nc_ht=scontent-gru2-1.xx&oh=00_AfD4qq9kzRekqeARZLPaXWQYNQ1iJd1iJHO-OTN3BRGu2Q&oe=66036596",
  "https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/407264557_751216543708351_1104381337168923056_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zhfbetE9K18AX-IUh-7&_nc_ht=scontent-gru1-1.xx&oh=00_AfCdUTlAlAP1g66GMdSv8Bbvbmo9xtj358dMXP68S10FIg&oe=660375EC"
]
const midias = [{
  url: 'https://www.youtube-nocookie.com/embed/YnS8piVVXjw?si=iydStDHkCuuc76ap',
  tipo: 'youtube'
}];

imagens.forEach(imagem => midias.push({ url: imagem, tipo: 'imagem' }));


function youtubeSlide(url) {
  const videoURL = url;
  const mountVideoFrame = `<iframe src="${videoURL}&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

  return mountVideoFrame;
}


function changeSlide(slideNumber) {
  const slide = midias[slideNumber];
  let mountSlide = '';
  switch (slide.tipo) {
    case "youtube":
      mountSlide = youtubeSlide(slide.url);
      break
    case "imagem":
      mountSlide = `<img src="${slide.url}" alt="${slide.legenda}">`;
      break

  }

  sliderInner.innerHTML = mountSlide;
  console.log(slideNumber, midias.length - 1, slideNumber == midias.length - 1);
  if (slideNumber == midias.length - 1) {
    slideNumber = 0;
    setTimeout(slideShow, slideTime);
  }
}

function slideShow() {
  for (let i = 0, time = 0; i < midias.length; i++, time += slideTime) {
    setTimeout(changeSlide, time, i);
    console.log(i, time)
    console.log(document.querySelector("iframe"));
  }
}

function initSlide() {
  slideShow();
}

initSlide()
