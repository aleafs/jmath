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


