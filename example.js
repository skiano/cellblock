
var cellblock = require('./');

// setup the grid

var a = cellblock();
  // var a_a = cellblock(a, '1/2');
  //   var a_a_a = cellblock(a_a);
  //     var a_a_a_a = cellblock(a_a_a, '1/3');
  //     var a_a_a_b = cellblock(a_a_a, '2/3');
  // var a_b = cellblock(a, '1/2');
  //   var a_b_a = cellblock(a_b, '1/4');
  //   var a_b_b = cellblock(a_b, '3/4');
  // var a_c = cellblock(a);
    var a_1_3 = cellblock(a, '1/3');
    var a_2_3 = cellblock(a, '2/3');


function printTree(col, viewport, gutter) {
  
  var total = 0;

  for (child in col.children) {
    total += col.children[child].getWidth(viewport, gutter) + gutter;
  }

  total = total ?  total - gutter : total; // get rid of first gutter

  console.log(' ', repeat('|-', col.depth) + col.getWidth(viewport, gutter), '(', total, ')');

  for (child in col.children) {
    printTree(col.children[child], viewport, gutter);
  }
}

function repeat(char, n) {
  return Array(n).join(char);
}

// run the example

var SCREEN = 1300;
var GUTTER = 20;

// print it out

console.log();
printTree(a, SCREEN, GUTTER);
console.log();

// // detatch part of the grid

// a_b.detach();
// console.log('Detatched!\n');

// // print it again

// console.log();
// printTree(a, SCREEN, GUTTER);
// console.log();

