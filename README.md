# Grocery Tracker App

A JavaScript application :computer: that demos DOM manipulation. This demo app will only live in the browser until the page is refreshed and is not connected to a database at this time. Keep track of your grocery list :strawberry: :tomato: :bread: by adding and removing items. See core recommendations via a popular items section and check off items as you add them to your cart...happy shopping!

## Methods demonstrated in this application

- `document.querySelector` : grabs an element by its id or class name
- `document.createElement` : dynamically creates an html element of choice
- `elemVariable.innerText`: sets the text content on that element
  ` 'elemVariable.className`: dynamically assigns a class name to the element
- `parentElemVariable.appendChild(childElemVariable)`: places this element in the correct place on the DOM
- `parentElemVariable.removeChild(childElemVariable)`: removes this element in the DOM
- `e.target` : the element that has been targeted by the user (usually due to some event...such as a click event)
- `e.target.classList`: gets the list of class names attached to the element that was targeted
- `e.target.classList.toggle(someClassName)`: dynamically changes the class assigned to a targeted element...this is very useful to give visual feedback to the user based on an interaction

## Useful documentation

- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
