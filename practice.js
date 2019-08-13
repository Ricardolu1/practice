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
// var i=5
// console.log(i)
// function a() {
//   function b() {
//     for ( i = 0; i < 10; i++) {}
//     console.log(i)
//   }
//   b()
//   console.log(i)
// }

// a()
// console.log(i)

//写一个立即执行函数
// (function() {
//   var parent = document.querySelector('#parent')
//   console.log(parent)
// }())

// {
//   let a=1
// }
// console.log(a)

// var allDiv=document.querySelectorAll('div')
// console.log(allDiv.length)
// document.body.appendChild(document.createElement('div'))
// allDiv=document.querySelectorAll('div')
//让它重新再获取一次，就可以更新allDiv.length了

// console.log(allDiv.length)

//写一个数组去重
// var a=[1,2,3,5,2,2,4,3,'你好',5,"你好"]

// function unique(array) {
//   var temp=[]
//   var hash={}
//   for (let i = 0; i < array.length; i++) {
//     if(hash[a[i]]===undefined){
//       hash[a[i]]=1
//       temp.push(a[i])
//     }
//   }
//   return temp
// }

// console.log(unique(a))

// var a=[11,22,3,3,4,6,22,5,4,5]

// function unique(array) {
//   var temp=[]
//   var hash={}
//   for (let i = 0; i < array.length; i++) {
//     if (hash[a[i]]===undefined) {
//       hash[a[i]]=1
//       temp.push(a[i])
//     }
//   }
//   return temp
// }

// s=unique(a)
// console.log(s)


//从这里看出fuu函数并没有归哪个对象所有，所以在非严格模式下他就归window所有
// obj={
//   foo:function() {
//     // 'use strict'
//     var a=1
//     function fuu() {
//       var b =2
//       console.log(this)
//     }
//     fuu.call(undefined)
//   }
// }

// obj.foo.call(obj)


// function foo(a) {
//   this.a=a
//   console.log(this)
//   return 5
// }

// new foo("sad")
// console.dir(foo)





// function a() {
//   var b=5
// }
// console.dir(a)



// function f(){
//   return this.a;
// }

// var g = f.bind({a:"azerty"});
// console.log(g()); // azerty

// var h = g.bind({a:'yoo'}); // bind只生效一次！
// console.log(h()); // azerty

// var o = {a:37, f:f, g:g, h:h};
// console.log(o.f(), o.g(), o.h()); // 37, azerty, azerty


//从这里看出this是可以等于一个函数的
// obj={
//   foo1:function() {
//     var a=1
//     this.foo1.foo2=function() {
//       var a =2
//       console.dir(this)
//     }
//     this.foo1.foo2()
//   },
// }

// obj.foo1()



















































































