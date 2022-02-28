//lecture 18

let btn=document.querySelectorAll("button")
let winner=document.querySelector(".winner")
// all buttons will be selected and assigned index

for(i=0; i<btn.length;i++)
{
    btn[i].addEventListener("click",toss)
}

let score1=0
let score2=0

function toss(e){
     user_choice=e.target.innerText   //target is to check if 1st or 2nd button is clicked
     choice=["Head","Tail"]
     random=choice[parseInt(Math.random()*choice.length)]
     if(user_choice==random)
     {
         message="You win!!"
         score1++
     }
     else{
         message="Computer wins!!"
         score2++
     }
    
     winner.innerText=`${message} 
     User Score : ${score1}
     Computer Score : ${score2}`
}