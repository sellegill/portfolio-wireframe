const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

/* Boolean click event */
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})