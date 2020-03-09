'use strict';
console.log('this is connected');

var productIndex1 = 0;
var productIndex2 = 1;
var productIndex3 = 2;
var allProducts = [];
var totalClicks = 0;
var clickRounds = 5;


var productElements = document.getElementsByTagName('img');

function Product(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesViewed = 0;
  this.timesClicked = 0;
  allProducts.push(this);

}


new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubblegum', 'img/bubblegum.jpg');
new Product('Chair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Dog Duck', 'img/dog-duck.jpg');
new Product('Dragon', 'img/dragon.jpg');
new Product('Pen', 'img/pen.jpg');
new Product('Pet Sweep', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/unicorn.jpg');
new Product('USB', 'img/usb.gif');
new Product('Water Can', 'img/water-can.jpg');
new Product('Wine Glass', 'img/wine-glass.jpg');



function productWasClicked(event){
  totalClicks++;

  if (event.srcElement.id === '1'){
    allProducts[productIndex1].timesClicked++;
  } else if (event.srcElement.id === '2'){
    allProducts[productIndex2].timesClicked++;
  } else if (event.srcElement.id === '3'){
    allProducts[productIndex3].timesClicked++;
  }

  var nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex1 === productIndex1) || (nextProductIndex2 === nextProductIndex1)){
    nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  }

  var nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex2 === productIndex2) || (nextProductIndex2 === nextProductIndex1)){
    nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  }

  var nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex3 === productIndex3) || (nextProductIndex3 === nextProductIndex2)){
    nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
  }

  productIndex1 = nextProductIndex1;
  productIndex2 = nextProductIndex2;
  productIndex3 = nextProductIndex3;

  productElements[0].src = allProducts[productIndex1].imageUrl;
  productElements[1].src = allProducts[productIndex2].imageUrl;
  productElements[2].src = allProducts[productIndex3].imageUrl;


  if(totalClicks >= clickRounds){

    var ulElement = document.getElementById('voteList');


    for (var i = 0; i < allProducts.length; i++){

      var productVoteData = document.createElement('li');

      productVoteData.textContent = `this is the thing we need to add ${allProducts[i]}`;
      ulElement.appendChild(productVoteData);



    }

  }

}

for(var i = 0; i < productElements.length; i++){
  console.log('this is the event listener for the click on product event');
  productElements[i].addEventListener('click', productWasClicked);
}
