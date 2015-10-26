
function fractionToArray(f) {
  f = f.split('/');
  f[0] = parseInt(f[0]);
  f[1] = parseInt(f[1]);
  return f;
}

function makeColumn(rootCol, fraction) {
  var width = [1, 0];

  var col = {
    setWidth: setWidth,
    getWidth: getWidth,
    getRelativeWidth: getRelativeWidth
  };

  function setWidth(v) {
    v = fractionToArray(v || '1/1');
    col.width = v[0] / v[1];
    col.chunks = v[1];
    return col;
  }

  function getRelativeWidth() {
    var K_G = rootCol ? rootCol.getRelativeWidth() : width;
    width[0] = K_G[0] / col.chunks;
    width[1] = (K_G[1] - col.chunks + 1) / col.chunks;
    return width;
  }

  function getWidth(viewport, gutter) {
    var w = getRelativeWidth();
    console.log(w)
    return (viewport * w[0]) + (gutter * w[1]);
  }

  col.setWidth(fraction);
  return col;
}

var a = makeColumn();
var a_a = makeColumn(a, '1/2');
var a_b = makeColumn(a, '1/2');
var a_a_a = makeColumn(a_a);
var a_b_a = makeColumn(a_b, '1/2');

var SCREEN = 1000;
var GUTTER = 20;

console.log();
console.log('a', a.getWidth(SCREEN, GUTTER));
console.log('a_a', a_a.getWidth(SCREEN, GUTTER));
console.log('a_b', a_a.getWidth(SCREEN, GUTTER));
console.log('a_a_a', a_a_a.getWidth(SCREEN, GUTTER));
console.log('a_b_a', a_b_a.getWidth(SCREEN, GUTTER));
console.log();
