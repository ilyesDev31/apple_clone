const hamburger = document.querySelector('.burger');
const menu  = document.querySelector('header');
const links = document.querySelectorAll('header ul li');
const extraMenu = document.querySelector('.extra-menu');
const extraMenuDivs = Array.from(document.querySelectorAll('.extra-menu .container > div'));
const blur = document.querySelector('body .bluring');
const chevLeft = document.querySelector('chevLeft');
const section2Img = document.querySelector('.section-2 img');
let imgsUrl = [
    "../images/sec-2.jpg",
    "../images/small-screen sec-2.jpg"
];

// removing extra menu when resizing browser window
window.addEventListener('resize', function(){
    menu.classList.remove('active');
    hamburger.classList.remove('active');
    extraMenu.classList.remove('active');
    changeBackground(section2Img,imgsUrl[0], imgsUrl[1])
});
// changing hamburger shape depending on it status
hamburger.onclick = function(){
    extraMenu.classList.remove('active');
    this.classList.toggle('active')
    menu.classList.toggle('active');
    document.querySelector('header ul').classList.toggle('active');
    if(this.classList.contains('active')){
        document.body.style.overflowY = "hidden";
    }else{
        document.body.style.overflowY = "scroll";
    blur.classList.remove('active');


    }
}

// extra menu links events
links.forEach(link =>{
    link.addEventListener('click', showMenu);
});
// extra menu links function
function showMenu(){
    extraMenu.classList.add('active');
  removeActive(extraMenuDivs);
  extraMenuDivs.forEach(menu =>{
    if(menu.classList.contains(this.className)){
        menu.classList.add('active');
        console.log(true)
    }
  })
    if(extraMenu.classList.contains('active')){
        menu.style.backgroundColor = "#161610";
extraMenu.classList.add('active');
blur.classList.add('active');

    }else{
        menu.style.backgroundColor = "rgba(22, 23, 22, 0.849)";
        extraMenu.classList.remove('active');
blur.classList.remove('active');
    }
}

// removing extra menu depending on mouse placement
window.addEventListener('mousemove',function(e){
    if(extraMenu.classList.contains('active') && this.window.innerWidth > 992){
        if(e.clientY > extraMenu.getBoundingClientRect().height + 40 || e.clientY <=2 || e.clientX >= window.innerWidth-15){
            extraMenu.classList.remove('active');
            blur.classList.remove('active');
            menu.style.backgroundColor="rgba(22,23,22,0.849)";
        }
        
    }
})

// remove active from list
function removeActive(list){
list.forEach(li => {
    li.classList.remove('active');
})
}
// changing background depending on window size
function changeBackground(img, url1, url2){
if(window.innerWidth <= 883){
    img.src = url2;
}else{
    img.src = url1;
}
}