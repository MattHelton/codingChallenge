// Problem 2
// Write some JavaScript that loops through the following bands array and alerts, 
// "I love [bandName]", obviously with the current band name string replacing the [bandName].

const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

for (let i=0; i<bands.length; i++) {
    alert(`I love ${bands[i]}`)
}