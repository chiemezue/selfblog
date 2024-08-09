const menu_bar = document.querySelector('#menu_bar');
const menu = document.querySelector("#nav-options");
const nav = document.querySelector("#nav");

menu_bar.addEventListener('click', () => {
    if (menu.classList.contains('hidden') ) {
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
});