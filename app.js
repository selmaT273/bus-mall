'use strict';
console.log('this is connected');

var productIndex1 = 0;
var productIndex2 = 1;
var productIndex3 = 2;
var allProducts = [];
var totalClicks = 0;
var clickRounds = 25;


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

allProducts[0].timesViewed = 1;
allProducts[1].timesViewed = 1;
allProducts[2].timesViewed = 1;

function productWasClicked(event){
  totalClicks++;

  if (event.srcElement.id === 'one'){
    allProducts[productIndex1].timesClicked++;
  } else if (event.srcElement.id === 'two'){
    allProducts[productIndex2].timesClicked++;
  } else if (event.srcElement.id === 'three'){
    allProducts[productIndex3].timesClicked++;
  }

  var nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex1 === productIndex1) || (nextProductIndex1 === productIndex2) || (nextProductIndex1 === productIndex3)){
    nextProductIndex1 = Math.floor(Math.random() * allProducts.length);
  }

  var nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex2 === productIndex1) || (nextProductIndex2 === productIndex2) || (nextProductIndex2 === productIndex3) || (nextProductIndex2 === nextProductIndex1)){
    nextProductIndex2 = Math.floor(Math.random() * allProducts.length);
  }

  var nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
  while((nextProductIndex3 === productIndex1) || (nextProductIndex3 === productIndex2) || (nextProductIndex3 === productIndex3) || (nextProductIndex3 === nextProductIndex1) || (nextProductIndex3 === nextProductIndex2)){
    nextProductIndex3 = Math.floor(Math.random() * allProducts.length);
  }

  productIndex1 = nextProductIndex1;
  productIndex2 = nextProductIndex2;
  productIndex3 = nextProductIndex3;

  productElements[0].src = allProducts[productIndex1].imageUrl;
  allProducts[productIndex1].timesViewed++;
  productElements[1].src = allProducts[productIndex2].imageUrl;
  allProducts[productIndex2].timesViewed++;
  productElements[2].src = allProducts[productIndex3].imageUrl;
  allProducts[productIndex3].timesViewed++;

  console.log(totalClicks);
  if(totalClicks >= clickRounds){
    for (var i = 0; i < allProducts.length; i++){
      productData(i);
    }
    for (var k = 0; k < productElements.length; k++)
      productElements[k].removeEventListener('click', productWasClicked);
  }


//   if(totalClicks >= clickRounds){
//     var voteList = document.getElementById('voteList')[0];
//     if(voteList.firstElementChild){
//       voteList.firstElementChild.remove();
//     }
//   }
}

var ulElement = document.getElementById('voteList');

function productData(index){
  var productVoteData = document.createElement('li');
  productVoteData.textContent = allProducts[index].name + ' was viewed ' + allProducts[index].timesViewed + ' times, and received ' + allProducts[index].timesClicked + ' votes, which represents ' + ((allProducts[index].timesClicked/totalClicks)* 100) + '% of total votes.';
  ulElement.appendChild(productVoteData);
}










for(var j = 0; j < productElements.length; j++){
  console.log('this is the event listener for the click on product event');
  productElements[j].addEventListener('click', productWasClicked);
}

