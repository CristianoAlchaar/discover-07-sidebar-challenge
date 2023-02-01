const aside = document.querySelector('aside');
const toggleMenuButton = document.querySelector('#toggle-menu-button')
const elementsThatChangesDisplay = document.querySelectorAll(".display");
const itemsListThatChange = document.querySelectorAll("aside nav ul li");
const iconContainersInsideNavUlLi = document.querySelectorAll("aside nav ul li i.icon-container");
console.log(iconContainersInsideNavUlLi)
function handleToggleMenuButtonClick(){
    aside.classList.toggle('expanded-aside')
    toggleMenuButton.classList.toggle('new-margin-toggle-button')
    elementsThatChangesDisplay.forEach(function(element){
        element.classList.toggle('display')
    })
    itemsListThatChange.forEach(function(item){
        item.classList.toggle('nav-item-expanded')
    })
    iconContainersInsideNavUlLi.forEach(function(container) {
        container.classList.toggle('modified-when-expanded-icon-container-hover-bg-color');
    });
}

toggleMenuButton.addEventListener('click', handleToggleMenuButtonClick)
