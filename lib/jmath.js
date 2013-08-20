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
    return s + t;
  }, 0);
};

exports.avg = function (x) {
  assertArray(x);
  return SUM(x) / (x.length || 1);
};

/* {{{ function linearRegression() */
/**
 * 求x\y序列的线性拟合最小二乘解
 */
exports.linearRegression = function (x, y) {
  assertArray(x);
  assertArray(y);
  if (x.length !== y.length) {
    throw new Error('ArraySizeNotEqual');
  }

  var _xy = 0;
  var _xx = 0;

  var _sx = 0;
  var _sy = y.reduce(function (s, t) {
    return s + t;
  }, 0);

  x.map(function (v, i) {
    _sx += v;
    _xy += v * y[i];
    _xx += v * v;
  });

  var k = (_sx * _sy - x.length * _xy) / (_sx * _sx - x.length * _xx);
  var w = (_xy - k * _xx) / _sx;

  return [k, w];
};
/* }}} */

