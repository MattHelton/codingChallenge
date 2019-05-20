// Problem 5
// Write some JavaScript to find the MOST frequent item, and the LEAST frequent item in the following array. 
// The return should look like: The most frequent item is: b. The least frequent item is : d

const array = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];

let mostFreqItem
let leastFreqItem
let maxFreq = 1
let maxCount = 0
let minFreq = 1
let minCount = 0

function kennethTest(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length - 1; j++) {
            if (array[i] == array[j]) {
                maxCount++;
            }
            if (array[i] !== array[j]) {
                minCount++;
            }
            if (maxFreq < maxCount) {
                mostFreqItem = array[i];
            }
            if (minCount > minFreq) {
                leastFreqItem = array[i];
            }
        }
        maxCount = 0;
        minCount = 0;
    }
    console.log(`The most frequent item is: ${mostFreqItem}. The least frequent item is ${leastFreqItem}`)
}

kennethTest(array)