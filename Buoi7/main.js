//Bài 1: nối mảng
    console.log("Test1_1:");
    const a = ['a', 'b', 'c'];
    const b = [1, 2 ,3];
    const c = b.concat(a);
    console.log(c);

//Bài 2: kiểm tra tất cả số chẵn trong mảng
    console.log("Test2_1:");
    let data = [2, 4, 6, 8]
    if (data.every((value) => value % 2 === 0)) {
        console.log("YES");
    }
    else{
        console.log("NO");
    }
    // YES
    console.log("Test2_2:");
    let data2 = [1, 2, 3, 4, 5]
    if (data2.every((value) => value % 2 === 0)) {
        console.log("YES");
    }
    else{
        console.log("NO");
    }
    //NO

//Bài 3: kiểm tra các số chỉ có duy nhất
    console.log("Test3_1:");
    let test3_1 = [1, 2, 3, 4, 5]
    if (test3_1.some((value) => value % 2 === 0)) {
        console.log("YES");
    }
    else{
        console.log("NO");
    }
    //YES
    console.log("Test3_2:");
    let test3_2 = [1, 3, 5]
    if (test3_2.some((value) => value % 2 === 0)) {
        console.log("YES");
    }
    else{
        console.log("NO");
    }
    //NO

//Bài 4: cho ra mảng mới chỉ có số dương
    console.log("Test4_1:");
    let test4_1 = [1, -2, 3, 4, -5]
    console.log(test4_1.filter((value) => value > 0));

//Bài 5: tìm số dương đầu tiên, hiển thị ra index và số đó
    console.log("Test5_1:");
    let test5_1 = [-1, -2, 3, 4, -5]
    if (test5_1.some((value) => value > 0)){
        console.log(test5_1.findIndex((value) => value > 0))
        console.log(test5_1.find((value) => value > 0))
    }
    else{
        console.log("NO RESULT");
    }
    //2 3
    console.log("Test5_2:");
    let test5_2 = [-1, 2, 3, 4, -5]
    if (test5_2.some((value) => value > 0)){
        console.log(test5_2.findIndex((value) => value > 0))
        console.log(test5_2.find((value) => value > 0))
    }
    else{
        console.log("NO RESULT");
    }
    //1 2
    console.log("Test5_3:");
    let test5_3 = [-1, -2]
    if (test5_3.some((value) => value > 0)){
        console.log(test5_3.findIndex((value) => value > 0))
        console.log(test5_3.find((value) => value > 0))
    }
    else{
        console.log("NO RESULT");
    }
    //NO RESULT

//Bài 6: tìm số chia hết cho 5 bằng forEach()
    console.log("Test6_1");
    let test6_1 = [1, 5, 30, 26];
    test6_1.forEach(test6_1 => {
        if (test6_1 % 5 === 0) {
            console.log(test6_1);
        }
    });
    //5 30

//Bài 7: tìm index của số 2 đầu tiên và cuối cùng trong mảng
    console.log("Test7_1");
    let test7_1 = [-1, 2, 3, 4, 2, 6];
    if (test7_1.some((value) => value === 2)) {
        console.log(test7_1.indexOf(2));
        console.log(test7_1.lastIndexOf(2));
    }
    else{
        console.log("NO RESULT");
    }
    // 1 4
    console.log("Test7_2");
    let test7_2 = [1, 6];
    if (test7_2.some((value) => value === 2)) {
        console.log(test7_2.indexOf(2));
        console.log(test7_2.lastIndexOf(2));
    }
    else{
        console.log("NO RESULT");
    }
    // NO RESULT

//Bai 8: nhập các phần tử của mảng thàng 1 chuỗi
    console.log("Test8_1");
    let test8_1 = ["A", "B", "C"];
    console.log(test8_1.join(', '));
    //A, B, C

    console.log("Test8_2");
    let test8_2 = [1, 2, 3];
    console.log(test8_2.join(', '));
    //1, 2, 3

//Bài 9: in ra mảng trị tuyệt đối của mảng đã cho
    console.log("Test9_1");
    let test9_1 = [2, -1, -8];
    console.log(test9_1.map((value) => Math.sqrt(value*value)));
    // 2 1 8

//Bài 10: Leetcode
    console.log("Leetcode");
    let leetcode = "321"
    let newnum = 0;
    while (leetcode !== 0){
        newnum = (newnum * 10) + (leetcode % 10);
        leetcode = leetcode / 10
    }
    console.log(newnum);
    // 123

    let leetcode1 = "-321"
    let newnum1 = 0;
    while (leetcode1 !== 0){
        newnum1 = (newnum1 * 10) + (leetcode1 % 10);
        leetcode1 = leetcode1 / 10
    }
    console.log(newnum1);
    //-123