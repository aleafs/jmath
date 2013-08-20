/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

var should = require('should');
var jmath = require(__dirname + '/../');

describe ('jmath interface', function () {

  it ('should_array_sum_works_fine', function () {
    jmath.sum([1, 2, 3]).should.eql(6);
    jmath.sum([]).should.eql(0);
  });

});

