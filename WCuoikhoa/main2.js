document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("logoutbutton").addEventListener("click", function() {
        window.location.href = "index.html";
    });
});
function newtaskscontent1(){
    let appear = document.getElementById('newtaskscontent');
    appear.style.display = 'block';
    let appear2 = document.getElementById('backgroundop');
    appear2.style.display = 'block';
}
function newtaskscontent2(){
    let hidden = document.getElementById('newtaskscontent');
    hidden.style.display = 'none';
    let hidden2 = document.getElementById('backgroundop');
    hidden2.style.display = 'none';
}
function submit(){
    let hidden = document.getElementById('newtaskscontent');
    hidden.style.display = 'none';
    let hidden2 = document.getElementById('backgroundop');
    hidden2.style.display = 'none';
}
