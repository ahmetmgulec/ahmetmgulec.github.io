let themeToggler = document.getElementById('theme-toggler');
let navbar = document.getElementById('navbar');

function makeEaseInOut(timing) {
    return function(timeFraction) {
        if (timeFraction <= .5)
            return timing(2 * timeFraction) / 2;
        else
            return -(2 - timing(2 * (0 - timeFraction)))+0.20;
    }
}

function bounce(timeFraction) {
    return -Math.sin(Math.PI / 2) * timeFraction;
}

let bounceEaseInOut = makeEaseInOut(bounce);
let vHeight;

window.onresize = () => {
    if(visualViewport.width<=992){
        themeToggler.style.top = '42px';
    }
    else{
        themeToggler.style.top = '10px';
    }
}

themeToggler.onclick = () => {
    
    if(visualViewport.width<=992){
        vHeight=200;
    }
    else{
        vHeight=50;
    }
    //animation
    animate({
        duration: 250,
        timing: bounceEaseInOut,
        draw: function(progress) {
          themeToggler.style.top = progress * vHeight + 'px';
        }
    });

    themeToggler.classList.toggle('fa-sun');
    navbar.classList.toggle('navbar-dark');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
        document.body.classList.add('dark');
        localStorage.setItem('dark-mode','dark');
    }else {
        document.body.classList.remove('active');
        document.body.classList.remove('dark');
        localStorage.setItem('dark-mode','light');
    }
};

var darkMode;

if (localStorage.getItem('dark-mode')) {  
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';  
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);


if (localStorage.getItem('dark-mode') == 'dark') {
    // if the above is 'dark' then apply .dark to the body
    document.body.classList.add('active'); 
    themeToggler.classList.toggle('fa-sun');
    themeToggler.animate(themeToggler.darkAnim);
    navbar.classList.toggle('navbar-dark');
}
else {
    document.body.classList.remove('active');
}