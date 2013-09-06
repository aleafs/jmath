/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */
/* jshint immed: false */

"use strict";

require('should');

var jmath = require(__dirname + '/../');

describe('jmath interface', function () {

  /* {{{ should_array_sum_avg_works_fine() */
  it('should_array_sum_avg_works_fine', function () {
    jmath.sum([1, 2, 3]).should.eql(6);
    jmath.sum([]).should.eql(0);

    jmath.avg([]).should.eql(0);
    jmath.avg([1, 2, 3]).should.eql(2);

    try {
      jmath.sum('a');
      (true).should.eql(false);
    } catch (e) {
      e.message.should.include('ArrayRequired');
    }
  });
  /* }}} */

  /* {{{ should_denoise_works_fine() */
  it('should_denoise_works_fine', function () {
    jmath.denoise([7, 7, 3, 9], [4, 3, 12, 12]).should.eql([[7, 9], [4, 12]]);
  });
  /* }}} */

  /* {{{ should_vector_dot_works_fine() */
  it('should_vector_dot_works_fine', function () {
    jmath.dot([1, 3, 2], [9, 8]).should.eql(33);
  });
  /* }}} */

  /* {{{ should_linear_regression_works_fine() */
  it('should_linear_regression_works_fine', function () {
    jmath.linearRegression([0, 1, 2, 5], [2, 3, 4, 8]).should.eql([
      1.2142857142857142, 1.821428571428572, 0.18898223650461338
    ]);
    jmath.linearRegression2([0, 1, 2, 7], [1, 3, 5, 15]).should.eql([2, 1, 0]);

    try {
      jmath.linearRegression2([0, 1], [2]);
      (true).should.eql(false);
    } catch (e) {
      e.message.should.include('ArraySizeNotEqual');
    }

    try {
      jmath.linearRegression2([12, 0], [13, 1]).should.eql([1, 1, 0]);
      (true).should.eql(false);
    } catch (e) {
      e.message.should.include('ArraySizeTooSmall');
    }
  });
  /* }}} */

});

