

 function unroll(squareArray) {

  if( !squareArray.every(arr => arr.length === squareArray.length)) {
    return "array must be a square";
  }
  const square = squareArray.length - 1;
  const unroll = [];

  for( let i = 0; i < square; i++) {
    const roll = [];
    // traverse left to right top of square
    roll.push(squareArray[i].slice(i, square - i));

    // go down right of square
    for(let j = i; j <= square - i; j++) {
      roll.push(squareArray[j][square - i]);
    };

    // reverse to go left to right at bottom of square
    roll.push(squareArray[square - i].slice(i + 1, square - i).reverse());

    // go up left of square
    for(let j = i; j < square - i; j++) {
      roll.push(squareArray[square - j][i])
    }

    unroll.push(roll.flat());
  }
  return unroll.flat();
}

module.exports = unroll;

//solutio password 60ea7090