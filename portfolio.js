var navivnje = document.querySelectorAll('.navbtn');
navivnje.forEach(item => item.addEventListener('click', actives))

function actives(){
    navivnje.forEach(item => item.classList.remove("active"))
   this.classList.add('active')
}