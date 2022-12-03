//active effect when click on nav item
var menuItems = document.getElementsByClassName('nav-item')

Array.from(menuItems).forEach((item, index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.nav-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})


//category selection
var MenuList = document.querySelector('.beverage-items-wrap')

var Category = document.querySelector('.category')

var categories = Category.querySelectorAll('button')

Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        var currCat = Category.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        MenuList.classList ='beverage-items-wrap '+ e.target.getAttribute('data-type')
    }
})
