// Problem 6
 //Imagine that you have two arrays, each with single letter strings in the arrays. For example:

// ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
// ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];

// Write some JavaScript to create a new array based on the overlapping items 
//and the number of times the overlap occurs. For example, our new array would look like this:

// ['a', 'a', 'c', 'b', 'b'];

// To explain further, the string 'a' appears 3 times in the frist array 
// and 2 times in the second array. Therefore, there are only 2 overlaps. 
// The string 'c' appears 1 time in the first array and 2 times in the scrond array. 
// Therefore, there is only 1 overlap. 
// The same pattern follows with 'b'. Our new array is based on those overlaps.

// ** Did not complete. The output of this code excludes a shared item.


const arrayOne = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
const arrayTwo = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];

vennDiesel = (arrayOne, arrayTwo) => {
    let newArray = []
    for(let i = 0; i < arrayOne.length; i++){
        let item = arrayOne[i]
        for(let j = 0; j < arrayTwo.length; j++){
            if(item == arrayTwo[j]){
                arrayTwo.shift()
                newArray.push(item)
                break
            } 
        }
    }
    console.log(newArray)
}
vennDiesel(arrayOne, arrayTwo)