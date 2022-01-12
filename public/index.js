// GOT TO TOP and SCROLL DOWN
const toTop = document.querySelector('#to-top')
const scrollDown = document.querySelector('#scroll-down')
toTop.style.display = "none";

window.onscroll = function () {
    // Hide and display the go to top button
    if (pageYOffset >= 100) {
        toTop.style.display = "unset";
    } else {
        toTop.style.display = "none";
    }
    // Hide and show Go down button
    if (pageYOffset >= 500) {
        scrollDown.style.display = "none";
    } else {
        scrollDown.style.display = "flex";
    }
}
// OPEN/ CLOSE NAVBAR
const nav = document.querySelector('nav')
const toggleNav = document.querySelector('#close-nav')
const toggleNavIcon = document.querySelector('#close-nav>i')
toggleNav.addEventListener('click', () => {
    toggleNavBar()
})
$(window).resize(() => {
    nav.style.transform = 'translateX(-85%)'
})
// NAVBAR CLOSES UPON CLICKING OUTSIDE NAVBAR
const section = document.querySelectorAll('section')
const len = section.length;
setInterval(() => {
    if ($(window).width() <= 1000) {
        for (let i = 0; i < len; i++) {
            section[i].addEventListener('click', () => {
                nav.style.transform = 'translateX(-85%)'
                toggleNavIcon.style.transform = 'rotateY(0) scale(1)'
            })
        }
    } else {
        nav.style.transform = 'translateX(0)'
        toggleNavIcon.classList.add('fa-chevron-right')
    }
}, 0)
function toggleNavBar() {
    toggleNavIcon.style.transform = 'rotateY(0) scale(1)'
    if (nav.style.transform == 'translateX(0px)') {
        nav.style.transform = 'translateX(-85%)'
    } else {
        toggleNavIcon.style.transform = 'rotateY(-180deg) scale(1.5)'
        nav.style.transform = 'translateX(0)'
    }
}
//close navbar after selecting option
const list = document.querySelectorAll('nav li')
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', () => {
        toggleNavBar()
    })
}
//// Dark theme/ Light theme ////
const switchTheme = document.querySelector("#theme")
const main = document.querySelector('main')
let x = 0;
const root = document.querySelector(':root')
const rootVal = getComputedStyle(root)
switchTheme.addEventListener('click', () => {
    const Sun = document.querySelector(".fa-sun")
    const Moon = document.querySelector(".fa-moon")
    Sun.classList.toggle('hidden')
    Moon.classList.toggle('hidden')
    if (x == 0) {
        darkToLight()
        x++
    } else {
        if (rootVal.getPropertyValue('--white') != 'white') {
            lightToDark()
        } else {
            darkToLight()
        }
    }
})
function lightToDark() {
    setTimeout(() => {
        console.log("light mode to dark")
        root.style.setProperty('--white', 'white');
        root.style.setProperty('--darkBG', '#11111A');
        root.style.setProperty('--whitesmoke', 'whitesmoke');
        root.style.setProperty('--formBG', 'whitesmoke');
        root.style.setProperty('--black', 'black');
        root.style.setProperty('--boxBG', 'rgba(46, 46, 57, 0.75)');
        root.style.setProperty('--logo', '#03F062');
        root.style.setProperty('--green', '#00FF00');
        root.style.setProperty('--location', '#22222F88');
        root.style.setProperty('--glassNav', 'rgba(46, 46, 57, 0.71)');
        root.style.setProperty('--inputBorder', '#11111122');
        root.style.setProperty('--label', '#0e76a8');
        root.style.setProperty('--inputColor', 'black');
        root.style.setProperty('--footerBG', '#11111188');
        document.querySelector('nav ul').style.fontWeight = '400'
    }, 1000)
}
function darkToLight() {
    setTimeout(() => {
        console.log("dark to light mode")
        root.style.setProperty('--white', '#11111A');
        root.style.setProperty('--darkBG', '#E0E0E0');
        root.style.setProperty('--whitesmoke', '#11111A');
        root.style.setProperty('--formBG', '#373748');
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--boxBG', 'rgba(255, 255, 255, 0.4)');
        root.style.setProperty('--logo', '#11111A');
        root.style.setProperty('--green', '#03A062');
        root.style.setProperty('--location', '#D3D3D3');
        root.style.setProperty('--glassNav', ' rgba(3,160,98,0.4)');
        root.style.setProperty('--inputBorder', 'gray');
        root.style.setProperty('--label', 'whitesmoke');
        root.style.setProperty('--inputColor', 'white');
        root.style.setProperty('--footerBG', '#03A062');
        document.querySelector('nav ul').style.fontWeight = '800'
    }, 1000)
}
// Portfolio live demo link
const liveDemo = document.querySelector('#portfolio-link')
const alreadyHere = document.querySelector('#alreadyHere')
console.log(liveDemo)
liveDemo.addEventListener('click',()=>{
    console.log('clicked')
    console.log(alreadyHere)
    alreadyHere.style.display ='inline'
    setTimeout(()=>{
        alreadyHere.style.display ='none'
    },5000)
})