function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("humburgerbtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerbtn');
x.onclick = toggleMenu;
