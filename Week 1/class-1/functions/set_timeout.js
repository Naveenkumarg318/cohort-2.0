function greet()
{
    console.log("hello");
}

//set time out funtion takes two arguments :-
// 1. The function that is to be called.
// 2. The duration i.e after how many seconds the function has to be called.
// setTimeout(function, duration in milli seconds);

//setTimeout(greet, 2000);

//setInterval()
//this is similar to setTimeout but, instead of printing once, it prints the info on the console at regular intervals.

// setInterval(greet, 1000);

//for every second it calls the function greet and prints hello.
// we can stop the setInterval function by manually using clearInterval();

var count=0;
var interval = setInterval(foo, 1000);

function foo()
{
    console.log(count);
    count++;
    if(count>=5)
    {
        clearInterval(interval);
    }
}