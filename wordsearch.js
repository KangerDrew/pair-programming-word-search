const transpose = require('./transpose');

const wordSearch = (letters, word) => {

    if (letters.length === 0) return false;

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const l of verticalJoin) {
        if (l. includes(word)) return true;
    }

    return false;
}


// const testDiag = [];
// // let j = 0;

// // for (const i = 0; i < letters[0].length; i ++) {
// //     testDiag.push(letters[i][j]);
// //     j += 1;
// // }

// for (i = 0; i < letters.length; i ++) {
//     let k = 0;

//     for (const j = 0; j < letters[i].length; j ++) {
//         testDiag.push(letters[j][k])
//     }
// }

// [
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'H', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'E', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'L', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'L', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'O', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ]

module.exports = wordSearch


