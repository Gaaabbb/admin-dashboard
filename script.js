const plusButton = document.querySelector(".fa-plus");
const minusButton = document.querySelector(".fa-minus");
const buttons = document.querySelector(".buttons");

const sidebarBg = document.querySelector(".sidebar-background")
const sidebar = document.querySelector(".sidebar")
const menuBar = document.querySelector(".fa-bars")
const closeButton = document.querySelector(".fa-xmark")


plusButton.addEventListener('click', () => {
    buttons.classList.toggle('buttons-closed');
    plusButton.style.visibility = "hidden" 
})

minusButton.addEventListener('click', () => {
    buttons.classList.toggle('buttons-closed');
    plusButton.style.visibility = "visible" 
})
document.addEventListener('click', (e) => {
    const target = e.target
    let children = []
    for(i = 0; i < buttons.children.length; i++) {
        children.push(buttons.children[i].innerHTML)
    }
    if (!children.includes(target.innerHTML)) {
        if (plusButton.style.visibility == "hidden" && target != plusButton) {
            buttons.classList.toggle('buttons-closed');
            plusButton.style.visibility = "visible" 
        }
    }
})




menuBar.addEventListener('click', () => {
    sidebar.style.left = "0"
    closeButton.style.visibility = "visible"
    sidebarBg.style.opacity = "50%"
    sidebarBg.style.visibility = "visible"
})

closeButton.addEventListener('click', () => {
    sidebar.style.left = ""
    closeButton.style.visibility = ""
    sidebarBg.style.opacity = ""
    sidebarBg.style.visibility = ""
})

sidebarBg.addEventListener('click', () => {
    sidebar.style.left = ""
    closeButton.style.visibility = ""
    sidebarBg.style.opacity = ""
    sidebarBg.style.visibility = ""
})