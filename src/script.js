const aside = document.querySelector('aside');
const toggleMenuButton = document.querySelector('#toggle-menu-button')
const elementsThatChangesDisplay = document.querySelectorAll(".display");
const itemsListThatChange = document.querySelectorAll("aside nav ul li");
const iconContainersInsideNavUlLi = document.querySelectorAll("aside nav ul li i.icon-container");
const profileDataContainer = document.querySelector('#profile-data-container')

let isNavExpanding = false

function handleToggleMenuButtonClick(){
    isNavExpanding = !isNavExpanding;

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

    //if is NavOpening i want an setTimout, otherwise not.
    if(isNavExpanding){
        setTimeout(() => profileDataContainer.classList.toggle('set-visibility'), 1300)
    }else{
        profileDataContainer.classList.toggle('set-visibility')
    }
}

toggleMenuButton.addEventListener('click', handleToggleMenuButtonClick)
