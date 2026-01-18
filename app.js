// classList - shows/gets all classes
// contains - checks classList for a specific class
// add - add a class
// remove - remove a class 
// toggle - toggle a class

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function(){
    // console.log(links.classList)
    // if(links.classList.contains("show-links"))
    //     links.classList.remove("show-links")
    // else
    //     links.classList.add("show-links")

    // instead of above if-else stmnt we can use toggle functionality 
    links.classList.toggle("show-links")
})