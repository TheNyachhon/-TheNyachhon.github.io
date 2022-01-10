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
                toggleNavIcon.classList.remove('fa-chevron-left')
                toggleNavIcon.classList.add('fa-chevron-right')
            })
        }
    } else {
        nav.style.transform = 'translateX(0)'
        toggleNavIcon.classList.add('fa-chevron-right')
    }
}, 0)
function toggleNavBar() {
    toggleNavIcon.classList.toggle('fa-chevron-left')
    toggleNavIcon.classList.toggle('fa-chevron-right')
    if (nav.style.transform == 'translateX(0px)') {
        nav.style.transform = 'translateX(-85%)'
    } else {
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
    const themeIcon = document.querySelector("#theme>i")
    themeIcon.classList.toggle('fa-sun')
    themeIcon.classList.toggle('fa-moon')
    if (x == 0) {
        darkToLight()
        x++
    } else {
        if (rootVal.getPropertyValue('--white') != 'white') {
            console.log("light mode to dark")
            root.style.setProperty('--white', 'white');
            root.style.setProperty('--darkBG', '#11111A');
            root.style.setProperty('--whitesmoke', 'whitesmoke');
            root.style.setProperty('--black', 'black');
            root.style.setProperty('--boxBG', '#2E2E39');
            root.style.setProperty('--logo', '#03F062');
            root.style.setProperty('--green', '#00FF00');
            root.style.setProperty('--location', '#22222F88');
            root.style.setProperty('--glassNav', 'rgba(46, 46, 57, 0.71)');
            root.style.setProperty('--inputBorder', '#11111122');
            root.style.setProperty('--label', '#0e76a8');
            root.style.setProperty('--inputColor', 'black');
            document.querySelector('nav ul').style.fontWeight = '400'
        } else {
            darkToLight()
        }
    }
})
function darkToLight() {
    console.log("dark to light mode")
    root.style.setProperty('--white', '#11111A');
    root.style.setProperty('--darkBG', '#E0E0E0');
    root.style.setProperty('--whitesmoke', '#11111A');
    root.style.setProperty('--black', 'white');
    root.style.setProperty('--boxBG', 'white');
    root.style.setProperty('--logo', '#03A062');
    root.style.setProperty('--green', '#03A062');
    root.style.setProperty('--location', '#D3D3D3');
    root.style.setProperty('--glassNav', 'rgba(70, 70, 70, 0.5)');
    root.style.setProperty('--inputBorder', 'gray');
    root.style.setProperty('--label', 'whitesmoke');
    root.style.setProperty('--inputColor', 'white');
    document.querySelector('nav ul').style.fontWeight = '800'
}

// In progress
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });