

function fractionToArray(f) {
  f = f.split('/');
  f[0] = parseInt(f[0]);
  f[1] = parseInt(f[1]);
  return f;
}

function makeColumn(rootCol, width) {
  var col = {
    root: rootCol || null,
    setWidth: setWidth,
    getWidth: getWidth
  };

  function setWidth(v) {
    v = fractionToArray(v || '1/1');
    col.width = v[0] / v[1];
    col.chunks = v[1];
    return col;
  }

  function getWidth(gutter) {
    var denominatior = ( - 1);
    var viewport = rootCol ? rootCol.getWidth() : [1, 0];
    var k = viewport[0];
    var g = viewport[1];
    return [
      k / col.chunks,
      (g - col.chunks + 1) / col.chunks
    ];
  }

  col.setWidth(width);
  return col;
}

var a = makeColumn();
var a_a = makeColumn(a, '1/2');
var a_b = makeColumn(a, '1/2');
var a_a_a = makeColumn(a_a);
var a_b_a = makeColumn(a_b, '1/2');


// var col = {
//   width: 10,
//   subscr
// }

// var childA = Object.create(col);
// var childB = Object.create(col);

console.log();
console.log('a', a.getWidth(10));
console.log('a_a', a_a.getWidth(10));
console.log('a_b', a_a.getWidth(10));
console.log('a_a_a', a_a_a.getWidth(10));
console.log('a_b_a', a_b_a.getWidth(10));
console.log();


// window is 900

// row