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

withdraw = cost => {
    let hundreds = []
    let bills = {}
    let billTotal = cost.toString().split('')
    let billsArray = billTotal.map(index => {
        if(billTotal.length == 3) {
            if(index == billTotal[0]) {
                bills[100] = index / 1
            }
            if(index == billTotal[1]) {
                bills[20] = index % 2
                // bills[10] = index
            }
            if(index == billTotal[2]) {
                bills[1] = index / 1
            }
        }
    })
    
    // let reversedArray = cost.toString().split('').reverse()
    // reversedArray.map(index => {     
    //     if(index == reversedArray[0]){
    //         hundreds = []
    //         bills[1] = index / 1
    //     }
    //     if (index == reversedArray[1]){
    //         hundreds= []
    //         bills[20] = index / 2
    //     } else {
    //         hundreds.push(index)
    //     }
    // })
    // hundreds.reverse()
    // hundreds = hundreds.join('')
    // bills[100] = hundreds / 1
    console.log(bills)
    
}

withdraw(331)



// If you want to take it a step further, enable your function to take a second argument, bills, which is an array of the bills you want your budget broken down in to. For example:

// budgetToBills(1754, [20, 10, 5, 1]); // { 20: 87, 10: 1, 1: 4 }
// budgetToBills(1754, [100, 20, 50, 10, 5, 1]; // { 100: 17, 50: 1, 4: 1 }
// What if you someone passes in the wrong arguments?