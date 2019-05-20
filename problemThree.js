// Problem 3
//In the above challenge, when the loop gets to 'Nickelback', alert, "I DON'T love Nickelback!", 
// but still alert the previous message for all other bands.

const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

bands.map(band => {
    if (band == 'Nickelback') {
        alert(`I DON'T love ${band}!`)
    } else {
    alert(`I love ${band}`)
    }
})