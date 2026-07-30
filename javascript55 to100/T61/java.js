let random=Math.random()
let a=prompt("enter first no")
let b=prompt("enter operation perform")
let c=prompt("enter second no")
let obj={
    "+":"-",
    "-":"+",
    "*":"/",
"/":"**",}
console.log("hello")
if (random > 0.1){
   alert ('the result is  ${eval('${a} ${b} ${c}')}')
}
else{
    c=obj[c]
    alert('the result is ${eval('${a} ${b} ${c}')}')}