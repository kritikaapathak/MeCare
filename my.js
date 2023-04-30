
let menuBtn =document.querySelector(".menu-btn");
let cancelBtn =document.querySelector(".cancel-btn");
let navBar =document.querySelector(".navBar");

    menuBtn.onclick=function(){
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    navBar.classList.add("active");

}
   cancelBtn.onclick=function(){
    cancelBtn.style.opacity="1";
    cancelBtn.style.pointerEvents="auto";
    navBar.classList.remove("active");


}
let nav=document.querySelector("nav");
let val;
window.onscroll =function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");

    }
}