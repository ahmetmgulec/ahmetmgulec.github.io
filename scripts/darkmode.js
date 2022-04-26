let themeToggler = document.getElementById('theme-toggler');
let navbar = document.getElementById('navbar');
themeToggler.onclick = () => {
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
    navbar.classList.toggle('navbar-dark');
}
else {
    document.body.classList.remove('active');
}