// how the JavaScript Call Stack, setTimeout (Async), and Event Loop work step-by-step.
function firstFunction(){
    console.log("first function");
    secondFunction()
}

function secondFunction(){
    console.log("second function");
    //setTimeout is a Web API / browser API (JS does NOT wait for 2 seconds) The callback (console.log("second Function is Starting......")) is registered to run later Then, JS continues immediately

    //The callback is moved to the Callback Queue and waits for the Call Stack to be empty
    //The callback from setTimeout is moved from the Callback Queue to the Call Stack by the Event Loop
    setTimeout(() => {     
        console.log("second Function is Starting......");
    }, 2000);
    thirdFunction();
}

function thirdFunction() {
    console.log("third function");
}

firstFunction();