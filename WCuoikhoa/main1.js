function register() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("matkhau").value;

    // let loginArray = JSON.parse(localStorage.getItem('loginArray')) || [];
    // const loginInfo = {username, password };

    // var count = 0;
    // for (var i = 0; i < loginArray.length; i++){
    //     if(username == loginArray[i].username) {
    //         count++;
    //         break;
    //     }
    // }

//     if(count == 0) {
//         loginArray.push(loginInfo);

//         localStorage.setItem('loginArray', JSON.stringify(loginArray));
//         alert('Đăng ký thành công');
//         window.location.href = "index.html";
//     }
//     else {
//         alert('Tài khoản đã tồn tại');
//         window.location.href = "index1.html";
//     }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", register)
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("title1").addEventListener("click", function() {
        window.location.href = "index.html";
    });
});

