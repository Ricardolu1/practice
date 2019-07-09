var num = 123123.3456789
document.write(num.toFixed(3))
// 可以四舍五入，科学计数法，小数点后3位
//实现输入动物名，就答应响应的动物叫声
var a = String(window.prompt("input"))
function dongwu() {
  if (a == "老虎") {
    document.write("吼")
  } else if (a == "狗") {
    document.write("旺")
  } else if (a == "猪") {
    document.write("咕噜")
  }
}
dongwu(a)
//阶乘
var x = parseInt(window.prompt('input'));
function jiechen(n) {
    if (n == 0) {
        console.log("1");
    } else if (n > 0) {
        var a = 1;
        for (i = 1; i <= n; i++) {
            a *= i;
        }
        console.log(a);
    }
}
//斐波那契数列
var x = parseInt(window.prompt('input'));
        function fei(n) {
            var f = 1,
                s = 1,
                t;
            for (i = 0; i < n - 2; i++) {
                t = f + s;
                f = s;
                s = t;
            }
            document.write(t);
        }
        fei(x)