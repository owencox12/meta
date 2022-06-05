let tab = document.querySelectorAll(".story__tabs_tab")
let block = document.querySelectorAll(".story__block")

tab.forEach(function(e){
    e.addEventListener("click", function(){
        let id = e.getAttribute("data-tab")
        let currentTab = document.querySelector(id)
        console.log(currentTab)
        tab.forEach(function(e){
            e.classList.remove("story__tabs_tab_active")
        })
        block.forEach(function(e){
            e.classList.remove("story__block_active")
        })
        e.classList.add("story__tabs_tab_active")
        currentTab.classList.add("story__block_active")
    })
})

let arrow = document.querySelectorAll(".ask__item_block_right")

arrow.forEach(function(e){
    e.addEventListener("click", function(){
        let descr = e.previousElementSibling
        let chil = descr.childNodes
        console.log(chil)
        let content = chil[3]
        if(content.style.maxHeight) {
            document.querySelectorAll(".ask__item_block_descr").forEach(function(el){
                el.style.maxHeight = null
            })
        } else {
            document.querySelectorAll(".ask__item_block_descr").forEach(function(el){
                el.style.maxHeight = null
            })
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})


let burger = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
})

window.addEventListener("scroll", function(){
    if(scrollY >= 1) {
        document.querySelector(".header").classList.add("header__active")
    } else {
        document.querySelector(".header").classList.remove("header__active")
    }
})


let logo = document.querySelector(".header__item_logo")

logo.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


let link = document.querySelector(".header__item_list")


link.addEventListener("click", function(e){
    if(e.target.dataset.id) {
        let target = document.querySelector(e.target.hash)
        let pos = target.offsetTop
        e.preventDefault()
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        })
    }

})