var inputnumder=document.getElementById("inpurnum")
var RW =document.getElementById("resultRW")
var tscore = document.getElementById("tscoreboard")
var totalscore=50
var randomnumber =Math.floor(Math.random()*10)+1
function check(){
    var yournumber=Number(inputnumder)
    if(yournumber==randomnumber){
        totalscore=totalscore+50
        tscoreboard.textContent="YOUR SCORE IS : "+totalscore
        console.log("Right")
        RW.textContent=("Right")
        alert("Your entered number is correct")
    
    }
    else{
        totalscore=totalscore-1
        console.log("Wrong")
        tscoreboard.textContent="YOUR SCORE IS : "+totalscore
        RW.textContent=("Wrong")
        alert("Your entered number is wrong , your current score is: "+totalscore)
    }
}