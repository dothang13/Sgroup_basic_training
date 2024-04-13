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
var categoryInput = document.getElementById('category');
var titleInput = document.getElementById('title');
var contentInput = document.getElementById('content');

var submit = document.getElementById('submit');
submit.addEventListener('click', onCreate);

function onCreate() { 
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    let categoryValue = categoryInput.value;
    let titleValue = titleInput.value;
    let contentValue = contentInput.value;
    var check = true;
    if (categoryValue == '') {
        check = false;
        categoryInput.classList.add('error');
    }
    else categoryInput.classList.remove('error');
    if (titleValue == '') {
        check = false;
        titleInput.classList.add('error')
    }
    else titleInput.classList.remove('error');
    if (contentValue == '') {
        check = false;
        contentInput.classList.add('error')
    }
    else contentInput.classList.remove('error');
    if (check == true) {
        todos.push({
            category: categoryValue,
            title: titleValue,
            content: contentValue
        })
        localStorage.setItem('todos', JSON.stringify(todos));
        newContainer.classList.remove('active')
        render();
        location.reload(true);
    }
}
