//不管位置如何，函数的声明提升，好像会覆盖变量的声明提升，可以自己试一试，同名的函数和变量提升，打印的时候总是优先打印函数
// var a = 1
// function f1() {
//   f2.call()
//   console.log(a)
//   var a
//   function a() {
//     return 1
//   }

//   function f2() {
//     var a =3
//     console.log(a)
//   }
// }
// f1.call()
// console.log(a)

//关于for循环
var i=5
console.log(i)
function a() {
  function b() {
    for ( i = 0; i < 10; i++) {}
    console.log(i)
  }
  b()
  console.log(i)
}

a()
console.log(i)
