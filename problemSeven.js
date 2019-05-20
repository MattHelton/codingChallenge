// Problem 7
// Imagine that you're wanting to withdraw cash from the bank to cover specific costs. 
// You want to withdraw the exact dollar amount, using the largest bills possible. 
// For example, if the cost you were trying to cover is $1,745, you would need to withdraw 
// 17 $100 bills, 2 $20 bills and 1 $5 bill. 
// We'll leave change (anything less than a dollar) out of it for the sake of the exercise.

// To solve this, write a function that takes one argument, cost and returns an object with the bill breakdown. 
// For example, the object returned for $1,744, would like look this:

// {
    //   100: 17,
    //   20: 2,
    //   1: 4
    // }
    
    // **OUTPUT IS NOT IN DESCENDING ORDER**

withdraw = cost => {
    let bills = {}
    let belowHundred = cost % 100
    let belowFifty = belowHundred % 50
    let belowTwenty = belowFifty % 20
    let belowTen = belowTwenty % 10
    let belowFive = belowTen % 5
    if( typeof(cost) === 'number' && cost >= 1){
        if(belowFive > 0) {
            bills[1] = belowFive
        }
        if(belowTen >= 5) {
            bills[5] = Math.floor(belowTen / 5)
        }
        if(belowTwenty >= 10) {
            bills[10] = Math.floor(belowTwenty / 10)
        }
        if(belowFifty >= 20) {
            bills[20] = Math.floor(belowFifty / 20)
        }
        if(belowHundred / 50 >= 1) {
            bills[50] = 1
        }
        if(cost >= 100){
        bills[100] = Math.floor(cost / 100)
        }
        console.log(cost)
        console.log(bills)
    }
    if(cost > 0 && cost < 1) {
        console.log('Sorry, you can not withdraw change at this time.')
    } 
    if(typeof(cost) !== 'number') {
        console.log(`I'm sorry, ${cost} is not a number. Please give me a number`)
    }
}

withdraw(Math.floor(Math.random()*1000))



// If you want to take it a step further, enable your function to take a second argument, bills, which is an array of the bills you want your budget broken down in to. For example:

// budgetToBills(1754, [20, 10, 5, 1]); // { 20: 87, 10: 1, 1: 4 }
// budgetToBills(1754, [100, 20, 50, 10, 5, 1]; // { 100: 17, 50: 1, 4: 1 }
// What if you someone passes in the wrong arguments?