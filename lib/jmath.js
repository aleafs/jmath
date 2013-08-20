/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

exports.sum = function (x) {
  return x.reduce(function (s, t) {
    return s + t;
  }, 0);
};

