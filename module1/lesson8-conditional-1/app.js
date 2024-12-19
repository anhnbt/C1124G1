// var x, y, z;
// x = parseInt(prompt("Nhập x: "));
// y = +prompt("Nhập y: "); // type converter
// z = x + y; // expression
// if (x > y) {
//     alert('x lớn hơn y');
// } else {
//     alert("x nhỏ hơn y");
// }
// // if (conditional) statement; if thiếu
// /* if (conditional) - if đủ
//         statement;
//    else
//         statement;
//  */

// Kiểm tra điểm của An
// Điểm > 0 và <= 100
// Nếu điểm của An >= 75 thì in ra A,
// Điểm < 75 và >= 65 => B,
// Điểm < 65 và >= 45, C
// Còn lại in ra D
// /*
//     if (conditional)
//         statement;
//     else if (conditional)
//         statement;
//     else
//         statement;
//  */
// let score = +prompt("Nhập điểm");
//
// if (score >= 75) {
//     alert("A");
// } else if (score >= 65) {
//     alert("B");
// } else if (score >= 45) {
//     alert("C");
// } else {
//     alert("D");
// }
// let diem = +prompt("Nhập điểm của bạn:");
// if (diem > 0 && diem <= 100) {
//     if (diem >= 75) {
//         console.log("A");
//     } else if (diem >= 65) {
//         console.log("B");
//     } else if (diem >= 45) {
//         console.log("C");
//     } else {
//         console.log("D");
//     }
// } else {
//     console.log("Điểm không hợp lệ!");
// }
// let diem = parseInt(prompt("Nhap diem"));
// if (diem <= 0 || diem > 100) {
//     diem = parseInt(prompt("Nhap lai di ban ei"));
// }
//
// if (diem >= 75) {
//     console.log("A");
// } else if (diem < 75 && diem >= 65) {
//     console.log("B");
// } else if (diem < 65 && diem >= 45) {
//     console.log("C");
// } else {
//     console.log("D");
// }
// let score = +prompt("Nhập điểm")
// if (score >= 75) {
//     alert("A");
// } else {
//     if (score >= 65) {
//         alert("B");
//     } else {
//         if (score >= 45) {
//             alert("C");
//         } else alert("D");
//     }
// }
// let diem = parseInt(prompt("Nhập điểm của An"));
// if (diem > 0 && diem <= 100) {
//     if (diem >= 75) {
//         alert("A");
//     } else {
//         if (diem >= 65) {
//             alert("B")
//         } else {
//             if (diem >= 45) {
//                 alert("C");
//             } else {
//                 alert("D");
//             }
//         }
//     }
// }
// const number = +prompt("Nhập vào một số: ");
// const isEven = number % 2 === 0;
// if (isEven) {
//     console.log("Đây là số chẵn");
// } else {
//     console.log("Đây là số lẻ");
// }
// function checkNumber(number) {
//     number % 2 == 0 ? console.log("Đây là số chẵn") : console.log("Đây là số lẻ");
// }

// condition ? if_true : if_false
// checkNumber(number);

// console.log(new Date().getDay());
// switch (new Date().getDay()) {
//     case 3:
//     case 4:
//         break;
//     case 5:
//         console.log("Soon it is Weekend");
//         break;
//     case 0:
//     case 6:
//         console.log("It is Weekend");
//         break;
//     default:
//         console.log("Looking forward to the Weekend");
// }
// let x = 5;
// let b1 = true;
// let b2 = false;
//
// if ((x == 4) && !b2) console.log("1");
//
// console.log("2");
//
// if ((b2 == true) && b1) console.log("3");

const character = prompt("Nhap vao mot chu cai");
switch (character) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Day la nguyen am");
        break;
    default:
        console.log("Day khong phai la nguyen am");
        break;
}
