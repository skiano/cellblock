
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
