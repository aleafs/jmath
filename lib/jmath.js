/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

var assertArray = function (x) {
  if (!Array.isArray(x)) {
    throw new Error('ArrayRequired');
  }
};

var SUM = exports.sum = function (x) {
  assertArray(x);
  return x.reduce(function (s, t) {
    return s + Number(t);
  }, 0);
};

exports.avg = function (x) {
  assertArray(x);
  return SUM(x) / (x.length || 1);
};

exports.dot = function (x, y) {
  assertArray(x);
  assertArray(y);

  return x.reduce(function (s, t, i) {
    return s + Number(t) * (Number(y[i]) || 0);
  }, 0);
};

var sigma = function (a, b) {
  var N = a.length > 2 ? a.length - 1 : 1;
  var M = a.reduce(function (s, t, i) {
    return s + Math.pow(t - b[i], 2);
  }, 0);

  return Math.sqrt(M / N);
};

/* {{{ function linearRegression() */
/**
 * 求x\y序列的线性拟合最小二乘解
 */
var LR1 = function (x, y) {
  var _xy = 0;
  var _xx = 0;

  var _sx = 0;
  var _sy = SUM(y);

  x.map(function (v, i) {
    _sx += v;
    _xy += v * y[i];
    _xx += v * v;
  });

  var k = (_sx * _sy - x.length * _xy) / (_sx * _sx - x.length * _xx);
  var w = (_xy - k * _xx) / _sx;

  return [k, w];
};

exports.linearRegression = function (x, y) {
  assertArray(x);
  assertArray(y);
  if (x.length !== y.length) {
    throw new Error('ArraySizeNotEqual');
  }

  if (x.length < 2) {
    throw new Error('ArraySizeTooSmall');
  }

  var _ignore = function (x, i) {
    var n = [];
    for (var j = 0; j < x.length; j++) {
      if (j !== i) {
        n.push(x[j]);
      }
    }
    return n;
  };

  var k = 0;
  var w = 0;
  var t = [];
  for (var i = 0; i < x.length; i++) {
    t = LR1(_ignore(x, i), _ignore(y, i));
    k += t[0];
    w += t[1];
  }

  k /= x.length;
  w /= x.length;

  var d = [];
  x.map(function (v, i) {
    d.push(k * v + w);
  });

  return [k, w, sigma(d, y)];
};
/* }}} */

