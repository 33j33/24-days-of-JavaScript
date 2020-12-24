//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number

//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    for(let i = 0; i < 101; i++){
        if (i== 100){
            i = 0;
        }
        if (pushed == true){
            stop(i); //Trigger this function when the STOP button has been pushed
            break;
        }
        else {
            spinningElem.innerText = i;
            await sleep(125) //Paste this wherever you need to sleep the incrimentor 
        }
    }
  
}

//EDIT THIS FUNCTION
function stop(i){
    //WRITE YOUR CODE HERE
    const offSet = Math.abs(targetInt - (i - 1))
    let resultMessage = ""
    if (offSet == 0){
        resultMessage = "Wow! You Win!"
    }
    else {
        resultMessage = `Oh no, you lose! Off by ${offSet}`
    }
    var result = document.getElementById('result'); //display your result message here
    result.innerText = resultMessage;
}


//main
setTargetInt();
spin()