// lecture 16

function currentTime()
{
    const date= new Date()
    console.log(date)

    hour=date.getHours()
    minute=date.getMinutes()
    second=date.getSeconds()
    // if statements written because if there is one digit number represent it as 0 and number
    if(hour<=9)
    {
        hour="0"+hour
    }

    
    if(minute<=9)
    {
        minute="0"+minute
    }

    if(second<=9)
    {
        second="0"+second
    }

    let time=`${hour} : ${minute} :${second}`

    console.log(time)

     document.getElementById("clock").innerText=time
}

//convert this clock into AM and PM
currentTime()                      
setInterval(currentTime                    //either give function name or use noname function
//     ()=>{
//     const date= new Date()
//     console.log(date)

//     hour=date.getHours()
//     minute=date.getMinutes()
//     second=date.getSeconds()

//     let time=`${hour} : ${minute} :${second}`

//     console.log(time)

//      document.getElementById("clock").innerText=time
// }
    
    
    ,1000)          //function called every second
//if bracket is given after currentTime it will work on its own we don't want that it should work
// according to setinterval 
