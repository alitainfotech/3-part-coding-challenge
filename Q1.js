/**
 * This function is simple loop function starting from 1 till n
 * Here we have considered for loop to simply sum all the numbers till n
 * We have considered for loop because we have certain limit of numbers which is n, So we are sure that the loop is needed to be started from 1 till n
 * We can use other loops as well like while or even do while. But we have used this as it is optimal for this scenario and also it provides maximum speed of execution.
 * 
 * @param {number} n 
 * @returns sum of numbers from 1 to n
 */
function simpleLoopAddition(n) {
    let sumOfNumbers = 0;
    for (let i = 1; i <= n; i++) {
        sumOfNumbers += i;
    }
    return sumOfNumbers;
}


/**
 * This function is simple recursive loop function to sum numbers from 1 to n
 * Here we have added a recursive condition to call the function itself unless we do not receive 1 as we are aware that we need to start from 1.
 * So each time the function calls itself by reducing the value of n.
 * Actually recursive functions can be used when we are uncertain for how many times we need to loop with a specific consider to break or call the function. If the specific condition does not occur it may cause infinite loop
 * Recursive function for this scenario is not a suitable approach because it consumes lot of memory to stack the function call in call stack. which can reduce the performance
 * 
 * @param {number} n 
 * @returns sum of numbers from 1 to n
 */
function recursiveLoopAddition(n) {
    if (n > 1) {
        return n + recursiveLoopAddition(n - 1);
    }
    return 1
}

/**
 * This is simple function which contains the arithmetic formula to get sum of numbers from 1 to n
 * Here we can implemented the simple formula of arithmetic formula which solved the brack calulation first and then performs the division and multiplication based on BODMAS
 * This is the more efficient way to get sum of the numbers if there is a large value. Suppose like 100 or 1000 and much more as it will avoid to loop to those and will only perform calculation and get result directly
 * 
 * @param {number} n 
 * @returns sum of numbers from 1 to n
 */
function arithmeticFormulaAddition(n) {
    return n * (1 + n) / 2;
}

const sum1 = simpleLoopAddition(10);
console.log("sum1 => ", sum1);

const sum2 = recursiveLoopAddition(10);
console.log("sum2 => ", sum2);

const sum3 = arithmeticFormulaAddition(10);
console.log("sum3 => ", sum3);