const bannerImg = document.querySelector('.banner img');
const menuIconImg = document.querySelector('.menuIcon img');
const menuIconUl = document.querySelector('.menuIcon ul');
const menuIconUlLi = document.querySelectorAll('.menuIcon ul li');
const bodyVar = document.querySelector("body");

let num = 0;
let imglinks = ["img/waterFall.png","img/redTemple.png","img/beachWithVanji.png","img/beachWithHappyGirl.png","img/riverThroughHouses.png","img/skyScrapper.png","img/modernCity.png","img/hills.png","img/seaAndShark.png"];
setInterval(()=>{
    bannerImg.setAttribute('src',imglinks[num]);
    num++
    if(num>imglinks.length-1){
        num = 0;
    }
},3000);
menuIconImg.addEventListener('click',()=>{
    menuIconUl.classList.toggle('active');
})
for(n of menuIconUlLi){
    n.addEventListener('click',()=>{
    menuIconUl.classList.remove('active');
    })
}
document.addEventListener('click',(e)=>{
    if (
        !menuIconImg.contains(e.target) &&
        !menuIconUl.contains(e.target)
      ) {
        menuIconUl.classList.remove('active');
      }
})
