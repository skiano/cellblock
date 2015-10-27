
function fractionToArray(f) {
  f = f.split('/');
  f[0] = parseInt(f[0]);
  f[1] = parseInt(f[1]);
  return f;
}


function makeColumn(rootCol, fraction) {
  rootCol = rootCol || {K: 1, G: 0, depth: 0, children: []};
  
  var col = {
    depth: rootCol.depth + 1, 
    children: []
  };

  var f;

  col.setWidth = function (fraction) {
    f = fractionToArray(fraction || '1/1');

    col.updateWidth = function () {
      col.K = rootCol.K / f[1];
      col.G = (rootCol.G - f[1] + 1) / f[1];
    }
    
    col.updateWidth();

    if (col.children.length) {
      col.children.map(function (child) {
        child.updateWidth();
      });
    }
  }

  col.getWidth = function (viewport, gutter) {
    return (viewport * col.K) + (gutter * col.G);
  }

  col.detach = function () {
    rootCol.children.splice(rootCol.children.indexOf(col), 1);
  }

  col.setWidth(fraction);
  rootCol.children.push(col);
  
  return col;
}

var a = makeColumn();
  var a_a = makeColumn(a, '1/2');
    var a_a_a = makeColumn(a_a);
    var a_a_a_a = makeColumn(a_a_a, '1/2');
    var a_a_a_b = makeColumn(a_a_a, '1/2');
  var a_b = makeColumn(a, '1/2');
    var a_b_a = makeColumn(a_b, '1/2');
    var a_b_b = makeColumn(a_b, '1/2');





var SCREEN = 1280;
var GUTTER = 20;

console.log();
printTree(a, SCREEN, GUTTER);
console.log();

a_b.detach();

console.log();
printTree(a, SCREEN, GUTTER);
console.log();

// console.log(a.children[0].children)

function printTree(col, viewport, gutter) {
  console.log(' ',repeat('|-', col.depth) + col.getWidth(viewport, gutter))
  col.children.forEach(function (child) {
    printTree(child, viewport, gutter);
  });
}

function repeat(char, n) {
  return Array(n).join(char);
}


