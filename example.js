
var cellblock = require('./');

// setup the grid

var a = cellblock();
  var a_a = cellblock(a, '1/2');
    var a_a_a = cellblock(a_a);
    var a_a_a_a = cellblock(a_a_a, '1/2');
    var a_a_a_b = cellblock(a_a_a, '1/2');
  var a_b = cellblock(a, '1/2');
    var a_b_a = cellblock(a_b, '1/4');
    var a_b_b = cellblock(a_b, '3/4');


function printTree(col, viewport, gutter) {
  console.log(' ',repeat('|-', col.depth) + col.getWidth(viewport, gutter))
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

// detatch part of the grid

a_b.detach();
console.log('Detatched!\n');

// print it again

console.log();
printTree(a, SCREEN, GUTTER);
console.log();

