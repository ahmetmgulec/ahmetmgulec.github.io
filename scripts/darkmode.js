let themeToggler = document.getElementById('theme-toggler');
let navbar = document.getElementById('navbar');
themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    navbar.classList.toggle('navbar-dark');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    }else {
        document.body.classList.remove('active');
    }
};