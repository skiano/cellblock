
var initId = 0;

module.exports = function makeColumn(rootCol, fraction) {
  rootCol = rootCol || {K: 1, G: 0, depth: 0, children: {}};
  
  var col = {
    depth: rootCol.depth + 1, 
    children: {}
  };

  var id = initId++;
  var f;

  col.setWidth = function (fraction) {
    f = fractionToArray(fraction || '1/1');

    col.updateWidth = function () {

      // a is numerator
      // b is denominator
      // x is column width


      // total = K + G;
      // total = bx + g(b - 1)

      // total = bx + bg - g
      // total + g - bg = bx;

      // x = total/b + g/b - g;

      // span = (a / b * (total - g(b - 1))) <- column material
      //        + g(a - 1) <- column material


      // (a / b * (total - bg + g)) + (g(a - 1))
      // a/b*total - abg/b + g/b + (ag - g))
      

      // (at/b - ag + g/b) + ag - g
      // at/b + g/b - g

      // (a (bx + bg - g) / b) + g/b -g
      // ax + ag -g/b + g/b - g
      // span = ax + ag - g
      // 

      // span = a(total/b + g/b - g) + ag - g
      // span = total*a/b + a*g/b - ag + ag - g
      // span = total*a/b + a*g/b - g

      // span = a/b[K,G] + a/b[0,1] - [0,1]

      // [Ka/b, Ga/b + a/b - 1]

      // console.log((rootCol.G * f[0] / f[1]) + (f[0] / f[1]) - 1);

      col.K = rootCol.K * f[0] / f[1];
      col.G = (rootCol.G * f[0] / f[1]) + (f[0] / f[1]) - 1;
    }
    
    col.updateWidth();

    if (col.children.length) {
      for (child in col.children) {
        col.children[child].updateWidth();
      }
    }
  }

  col.getFraction = function () {
    return f;
  }

  col.getId = function() {
    return id;
  }

  col.getWidth = function (viewport, gutter) {
    return (viewport * col.K) + (gutter * col.G);
  }

  col.detach = function () {
    delete rootCol.children[id];
  }

  col.setWidth(fraction);
  rootCol.children[id] = col;

  return col;
}

function fractionToArray(f) {
  f = f.split('/');
  f[0] = parseInt(f[0]);
  f[1] = parseInt(f[1]);
  return f;
}
