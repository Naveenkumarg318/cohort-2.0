// Example-1..

// function sum(a, b, fnToCall)
// {
//     let result=a+b;
//     fnToCall(result);
// }

// function display(data)
// {
//     console.log("The result is " + data);
// }

// function displaypassive(data)
// {
//     console.log("sum's result is " + data);
// }

//you have to call only one function and display the sum
// the solution is to pass the function as an argument

// const ans = sum(10, 2, display);

//  ----------------------------------------------------------------------------------------------------

//Another example for call back functions..
//we're passing arithmetic function as an argument.

function calculate(a, b, arithmetic)
{
    const value = arithmetic(a, b);
    return value;
}

//this is the normal function..
// what if we add setTimeout function here ?
// so basically it sleeps for certain duration and then calls the arithmetic function..
// the first two arguments will be passed on to the third argument/fu

// function setTimeout(arithmetic, duration)
// {
//   sleep(duration); assume this is the syntax.
//   arithmetic();
// }

function sub(a, b)
{
    const value = a-b;
    return value;
}

//here we're passing the function which is to be called.
const result = calculate(10, 5, sub);
console.log(result);

