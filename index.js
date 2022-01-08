// document.querySelector('.itemList').innerHTML = `
//   <h3>Test Content Lives Here</h3>
//   <p> Let's build this functionality together </p>
// `

// document.querySelector('.popularItems').innerHTML = `
// <h2>Here are our most popular items...</h2>
// <p>TBD..so in the meantime... </p>
//  <p>"Don't yearn to be popular; be exquisite..." </p>
// `

// var
// let
// const

//JS object
// const computer = {
//   make: "Mac",
//   model: "Pro",
//   price: 1500,
// };

// console.log("My computer is: ", computer);

//Javascript array of objects
const popularItems = [
 {name: 'Milk',
  price: '$3'
 },
 {name: 'Eggs',
  price: '$2'
 },
 {name: 'Sugar',
price: '$1.50'}
];

let items = [];
const warningH2 = document.querySelector('.warning');
const itemList = document.querySelector('.itemList');

// console.log(popularItems);

renderPage();

function renderPage(){
  displayPopularItems();
  addItem();
  strikeItem();
}

function displayPopularItems(){
  const popularItemsList = document.querySelector('.popularItems');
  popularItems.map(popularItem =>{
    // console.log('Popular Item: ',popularItem);
    // console.log(popularItemsList);
    const popularItemSection = document.createElement('section');
    popularItemSection.className = 'popularItemsSection';

    const popularItemNamePara = document.createElement('p');
    popularItemNamePara.innerText = popularItem.name;
    popularItemSection.appendChild(popularItemNamePara);

    const popularItemPricePara = document.createElement('p');
    popularItemPricePara.innerText = popularItem.price;
    popularItemSection.appendChild(popularItemPricePara);

    popularItemsList.appendChild(popularItemSection);

    //make items clickable, add to grocery list
    popularItemSection.addEventListener('click', ()=>{
      // console.log('Event Fires');
      let hasItemBeenAdded = items.some(item => item.name===popularItem.name);
      if (hasItemBeenAdded) {
        // alert('Item already added');
        warningH2.innerText = 'Item has already been selected';
      }
        else {
          warningH2.innerText = '';
          items.push(popularItem);
          const addedPopularItem = document.createElement('p');
          addedPopularItem.className = 'itemAdded';
          addedPopularItem.innerText = popularItem.name;
          
          const removeBtn = document.createElement('button');
          removeBtn.className = 'remove';
          removeBtn.innerText = 'x';
          addedPopularItem.appendChild(removeBtn);

          //track DOM elements and item in array it is attached to
          removeItem(addedPopularItem, popularItem);

          itemList.appendChild(addedPopularItem);
          console.log('items', items);
        }
    });
  })
}

function removeItem(itemElem, itemToRemove){
//event delegation: look for existing elem on the dom bc child may not exist yet
  itemElem.addEventListener('click',(e)=>{
    if(e.target.classList.contains('remove')){
      items = items.filter(item => item.name !== itemToRemove.name);
      itemList.removeChild(itemElem);
      // console.log('items', items);
    }
    // console.log(e.target.classList);
    // console.log('Item I am looking for: ', itemElem);
  });
}

function addItem(){
  const itemSubmitBtn = document.querySelector('#itemSubmit');
  const itemInput = document.querySelector('#itemInput');

    itemSubmitBtn.addEventListener('click', ()=>{
      const itemAdded = {};
      itemAdded.name = itemInput.value;
      let hasItemBeenAdded = items.some(item => item.name.toLowerCase() === itemAdded.name.toLowerCase());
      if (hasItemBeenAdded) {
        // alert('Item already added');
        warningH2.innerText = 'Item has already been selected';
      }
        else {
          itemInput.value = '';
          warningH2.innerText = '';
          items.push(itemAdded);

          const itemAddedPara = document.createElement('p');
          itemAddedPara.innerText = itemAdded.name;

          const removeBtn = document.createElement('button');
          removeBtn.className ='remove';
          removeBtn.innerText = 'x';
          itemAddedPara.appendChild(removeBtn);

          removeItem(itemAddedPara, itemAdded);

          itemList.appendChild(itemAddedPara);
        }
    // console.log(itemInput.value);
  });
  // console.log(itemSubmitBtn);
}

function strikeItem(){
    itemList.addEventListener('click', (e)=>{
      if (e.target.classList.contains('itemAdded')){
        e.target.classList.toggle('itemRemoved');
      }
    });
}

