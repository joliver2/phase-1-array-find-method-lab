function superbowlWin(array) {
    const win = array.find( function(game) {
        if (game.result === 'W') {
            return game.year;
        }
    })
    if (win) {
        return win.year;
    }
    else {
        return undefined;
    }
}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

console.log(superbowlWin(record))