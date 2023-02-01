const aside = document.querySelector('aside');
const toggleMenuButton = document.querySelector('#toggle-menu-button')
const elementsThatChangesDisplay = document.querySelectorAll(".display");

function handleToggleMenuButtonClick(){
    aside.classList.toggle('expanded-aside')
    toggleMenuButton.classList.toggle('new-margin-toggle-button')
    elementsThatChangesDisplay.forEach(function(element){
        element.classList.toggle('display')
    })
}

toggleMenuButton.addEventListener('click', handleToggleMenuButtonClick)
