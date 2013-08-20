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

  /* {{{ should_vector_dot_works_fine() */
  it('should_vector_dot_works_fine', function () {
    jmath.dot([1, 3, 2], [9, 8]).should.eql(33);
  });
  /* }}} */

  /* {{{ should_linear_regression_works_fine() */
  it('should_linear_regression_works_fine', function () {
    jmath.linearRegression([0, 1, 2], [1, 3, 5]).should.eql([2, 1]);
    try {
      jmath.linearRegression([0, 1], [2]);
      (true).should.eql(false);
    } catch (e) {
      e.message.should.include('ArraySizeNotEqual');
    }
  });
  /* }}} */

});

