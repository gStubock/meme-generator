const form = document.querySelector('.form');
const body = document.querySelector('.body');
const imageInput = document.querySelector('#pic');
const topInput = document.querySelector('#topText');
const bottomInput = document.querySelector('#bottomText');



form.addEventListener("submit", function (e) {
  e.preventDefault();

  const div = document.createElement('div');
  const img = document.createElement('img');
  const topTxt = document.createElement('div');
  const bottomTxt = document.createElement('div');


  body.append(div);

  div.classList.add('meme');
  topTxt.classList.add('topTxt');
  bottomTxt.classList.add('bottomTxt');




  var topText = topInput.value;
  topTxt.append(topText);

  var bottomText = bottomInput.value;
  bottomTxt.append(bottomText);

  img.src = imageInput.value;
  img.classList.add('meme');


  div.appendChild(img);
  div.appendChild(topTxt);
  div.appendChild(bottomTxt);



  div.addEventListener('click', function (e) {
    e.target.remove();

  });




  console.log(img);
  console.log(topText);
  console.log(bottomText);



});

form.addEventListener('submit', function clearField(event) {
  event.preventDefault();
  imageInput.value = '';
  bottomInput.value = '';
  topInput.value = '';
});



