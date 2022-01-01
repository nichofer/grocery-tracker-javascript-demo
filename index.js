
const itemInput = document.querySelector('#itemInput');
const itemSubmitBtn = document.querySelector('#itemSubmit');
const itemList = document.querySelector('.itemList');
const popularItemsList = document.querySelector('.popularItems');
const warning = document.querySelector('.warning');

// object 
const popularItems = [
  {
    name: 'Milk',
    price: '$3'
  },
  {
    name: 'Eggs',
    price: '$2'
  },
  {
    name: 'Sugar',
    price: '$1.50'
  }
]

let items = [];

//load our view
renderPage();

function renderPage() {
  //control our views in here
  displayPopularItems(popularItems);
  addItems();
  strikeItem();
  // removeItem();
}


function displayPopularItems(popularItems) {
  popularItems.map(popularItem => {
    const popItemsSection = document.createElement('section');
    popItemsSection.className = 'popularItemsSection';

    const popItemNamePara = document.createElement('p');
    popItemNamePara.innerText = popularItem.name;
    popItemsSection.appendChild(popItemNamePara);

    const popItemPricePara = document.createElement('p');
    popItemPricePara.innerHTML = popularItem.price;
    popItemsSection.appendChild(popItemPricePara);

    popularItemsList.appendChild(popItemsSection);


    popItemsSection.addEventListener('click', () => {
      let hasItemBeenAdded = items.some(item => item.name === popularItem.name);
      if (hasItemBeenAdded) {
        warning.innerText = 'Item has already been added';
      }
      else {
        warning.innerText = '';
        items.push(popularItem);
        const addedPopularItem = document.createElement('p');
        addedPopularItem.className = 'itemAdded';
        addedPopularItem.innerText = popularItem.name;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove';
        removeBtn.innerText = 'x';
        addedPopularItem.appendChild(removeBtn);
        removeItem(addedPopularItem, popularItem);

        itemList.appendChild(addedPopularItem);
      }
    })
  })
}

function addItems() {
  itemSubmitBtn.addEventListener('click', () => {
    const itemAdded = {};
    itemAdded.name = itemInput.value;
    let hasItemBeenAdded = items.some(item => item.name === itemAdded.name);
    if (hasItemBeenAdded) {
      warning.innerText = 'Item has already been added';
    } else {
      warning.innerText = '';
      itemInput.value = '';
      items.push(itemAdded);
      const itemAddedPara = document.createElement('p');
      itemAddedPara.className = 'itemAdded';
      itemAddedPara.innerText = itemAdded.name;

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove';
      removeBtn.innerText = 'x';
      itemAddedPara.appendChild(removeBtn);

      removeItem(itemAddedPara, itemAdded);

      itemList.appendChild(itemAddedPara);
    }
  }
  )
}

//Event delegation: look for existing elem on the dom because children may not yet exist
function strikeItem() {
  itemList.addEventListener('click', (e) => {
    if (e.target.classList.contains('itemAdded')) {
      const elemSelected = e.target;
      elemSelected.classList.toggle('itemRemoved');
    }
  })
}

function removeItem(itemElem, itemToRemove) {
  itemElem.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      items = items.filter(item => item.name !== itemToRemove.name);
      itemList.removeChild(itemElem);
    }
  })
}

