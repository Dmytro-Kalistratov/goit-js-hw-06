// const categoriesEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesEl.length}`)

// categoriesEl.forEach((item) => {
//     const categoryTitle = item.querySelector('h2').textContent;
//     console.log(`Name of category: ${categoryTitle}`);

//     const categorySubject = item.querySelectorAll('li').length;
//     console.log(`Number of subjects: ${categorySubject}`);
// });

// const categoriesOfContent = document.querySelector('#categories');
// console.log(`Number of categoies: `, categoriesOfContent.children.length);

// const categoiesItem = document.querySelectorAll('.item');
// categoiesItem.forEach((item) => {
//     console.log(`Title of Category: `, item.firstElementChild.textContent);
//     console.log(`Number of Subject: `, item.lastElementChild.children.length);
// });


const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
    const categoryTitle = item.querySelector("h2").textContent;
    console.log(`Title of category: ${categoryTitle}`);

    const categoryEl = item.querySelectorAll('li').length;
    console.log(`Element of category: ${categoryEl}`);
});