let teacher = document.getElementById("teacher");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    teacher.style.transform = `translateX(${value}px)`;
})