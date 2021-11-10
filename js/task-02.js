const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsMap = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});

ingredientsList.append(...ingredientsMap);

// const ingredientsList = document.querySelector('#ingredients');

// const makeIngredientsList = array => {
//   return array.map(element => {
//     const listItem = document.createElement('li');
//     listItem.classList.add('item');
//     listItem.textContent = element;

//     return ingredientsList.insertAdjacentElement('beforeend', listItem);
//   });
// };

// makeIngredientsList(ingredients);
