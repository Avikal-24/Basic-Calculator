console.log("Hello") ;

let plus=document.getElementById("plus");
let minus=document.getElementById("minus");
let multiply=document.getElementById("multiply");
let divide=document.getElementById("divide");






plus.addEventListener("click",addition); 
minus.addEventListener("click",subtraction); 
multiply.addEventListener("click",multiplication); 
divide.addEventListener("click",division); 


function addition()
{
    let num1= document.getElementById("num1").value ; 
    let num2= document.getElementById("num2").value ; 

    let a=parseInt(num1) ; 
    let b=parseInt(num2) ; 
    let ans=a+b ; 
    
    let txt= ans.toString() ;
    console.log(txt) ; 
    document.getElementById("answer").innerHTML=txt ; 
}
function subtraction()
{
    let num1= document.getElementById("num1").value ; 
    let num2= document.getElementById("num2").value ; 

    let a=parseInt(num1) ; 
    let b=parseInt(num2) ; 
    let ans=a-b ; 
    
    let txt= ans.toString() ;
    console.log(txt) ; 
    document.getElementById("answer").innerHTML=txt ; 
}
function multiplication()
{
    let num1= document.getElementById("num1").value ; 
    let num2= document.getElementById("num2").value ; 

    let a=parseInt(num1) ; 
    let b=parseInt(num2) ; 
    let ans=a*b ; 
    
    let txt= ans.toString() ;
    console.log(txt) ; 
    document.getElementById("answer").innerHTML=txt ; 
}
function division()
{
    let num1= document.getElementById("num1").value ; 
    let num2= document.getElementById("num2").value ; 

    let a=parseInt(num1) ; 
    let b=parseInt(num2) ; 
    let ans=a/b ; 
    
    let txt= ans.toString() ;
    console.log(txt) ; 
    document.getElementById("answer").innerHTML=txt ; 
}
