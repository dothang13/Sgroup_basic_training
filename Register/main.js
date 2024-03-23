function login(){
    const username = document.getElementById('email').value;
    const password = document.getElementById('matkhau').value;

    if (username && password) {
        let loginArray = JSON.parse(localStorage.getItem('loginArray')) || [];
        
        var count = 0;
        for (var i = 0; i < loginArray.length; i++) {
            if (username == loginArray[i].username && password == loginArray[i].password) {
                count++;
                break;
            }
        }
        if (count) {
            alert("Đăng nhập thành công!");
            window.location.href = "index2.html";
        } else {
            alert("Sai thông tin đăng nhập. Vui lòng kiểm tra lại.");
        }
    } else {
        alert("Vui lòng nhập đầy đủ email và mật khẩu.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", login)
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("title2").addEventListener("click", function() {
        window.location.href = "index1.html";
    });
});
