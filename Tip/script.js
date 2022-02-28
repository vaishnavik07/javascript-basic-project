let amt=document.querySelector("input")

let bt1=document.querySelector("button")

let output=document.querySelector(".message")

function message(){
    tip=amt.value*10/100                       
    // 10% tip 
    output.innerText=`Please pay ${tip} rupees tip`

}

bt1.addEventListener("click",message)