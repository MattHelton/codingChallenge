// Problem 4
// Write some JavaScript that finds the average of the following array:

const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

getAverage= array => {
    let sum = array.reduce((total, amount) => total + amount);
    return sum / array.length;   
}   