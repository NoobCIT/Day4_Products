let pics = document.querySelectorAll('.pic');
let closer = document.querySelector('.closer');
let seeImage = closer.querySelector('img');
let removeImage = document.querySelector('.close');

pics.forEach(function(pic) {
  pic.addEventListener('click', showPic);
});

function showPic(event) {
  const src = event.currentTarget.querySelector('img').src;
  seeImage.src = src;
  closer.classList.add('open');
}

function removePic() {
  closer.classList.remove('open');
}

removeImage.addEventListener('click', removePic);
