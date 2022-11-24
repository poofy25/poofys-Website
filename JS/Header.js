const phoneMenu = document.getElementById('PhoneMenu')
const menuButton = document.getElementById('MenuButton')
 var debounce = false;
menuButton.addEventListener('click', () => {
    if(debounce == false){
        debounce = true
        console.log('gay')
        phoneMenu.style.transitionDuration = "0.75s"
        phoneMenu.style.transform = `translate(-50vw)`
        phoneMenu.style.opacity = `1`
    }else{
        debounce = false
        console.log('gay2')
        phoneMenu.style.transitionDuration = "0.75s"
        phoneMenu.style.transform = `translate(0px)`
        phoneMenu.style.opacity = `0`
    }
})
