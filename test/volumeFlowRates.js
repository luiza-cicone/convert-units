var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['L/s to L/s'] = function () {
  assert.strictEqual( convert(2).from('L/s').to('L/s') , 2);
};

tests['mm³/s to L/s'] = function () {
  assert.strictEqual( convert(1000000).from('mm³/s').to('L/s') , 1);
};

tests['cm³/s to L/s'] = function () {
  assert.strictEqual( convert(100).from('cm³/s').to('L/s') , 1/10);
};

tests['dL/s to L/s'] = function () {
  assert.strictEqual( convert(2).from('dL/s').to('L/s') , 0.2);
};

tests['cL/s to L/s'] = function () {
  assert.strictEqual( convert(25).from('cL/s').to('L/s') , 0.25);
};

tests['mL/s to L/s'] = function () {
  assert.strictEqual( convert(100).from('mL/s').to('L/s') , 1/10);
};

tests['m³/s to L/s'] = function () {
  assert.strictEqual( convert(1).from('m³/s').to('L/s') , 1000);
};

tests['km³/s to L/s'] = function () {
  assert.strictEqual( convert(1).from('km³/s').to('L/s') , 1000000000000);
};

tests['L/s to mL/s'] = function () {
  assert.strictEqual( convert(1).from('L/s').to('mL/s') , 1000);
};

tests['dL/s to mL/s'] = function () {
  assert.strictEqual( convert(10).from('dL/s').to('mL/s') , 1000);
};

tests['cL/s to mL/s'] = function () {
  assert.strictEqual( convert(100).from('cL/s').to('mL/s') , 1000);
};

tests['mL/s to mL/s'] = function () {
  assert.strictEqual( convert(13).from('mL/s').to('mL/s') , 13);
};

tests['fl-oz/s to fl-oz/s'] = function () {
  assert.strictEqual( convert(62).from('fl-oz/s').to('fl-oz/s') , 62);
};

tests['fl-oz/s to Tbs/s'] = function () {
  assert.strictEqual( convert(4).from('fl-oz/s').to('Tbs/s') , 8);
};

tests['Tbs/s to fl-oz/s'] = function () {
  assert.strictEqual( convert(2).from('Tbs/s').to('fl-oz/s') , 1);
};

tests['Tbs/s to Tbs/s'] = function () {
  assert.strictEqual( convert(140).from('Tbs/s').to('Tbs/s') , 140);
};

tests['L/s to L/min'] = function () {
  assert.strictEqual( convert(1).from('L/s').to('L/min') , 60);
};

tests['L/s to L/h'] = function () {
  assert.strictEqual( convert(1).from('L/s').to('L/h') , 3600);
};

tests['kL/s to kL/h'] = function () {
  assert.strictEqual( convert(1).from('kL/s').to('kL/h') , 3600);
};

tests['L/s to kL/h'] = function () {
  assert.strictEqual( convert(1).from('L/s').to('kL/h') , 3.6);
};

tests['L/s to m³/s'] = function () {
  assert.strictEqual( convert(1).from('L/s').to('m³/s') , 0.001);
};

tests['m³/s to m³/h'] = function () {
  assert.strictEqual( convert(1).from('kL/s').to('kL/h') , 3600);
};

// When converting between systems, expect < 0.1% error
tests['tsp/s to L/s'] = function () {
  var expected = 1.75
    , actual = convert(355).from('tsp/s').to('L/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in³/s to L/s'] = function () {
  var expected = 0.0163871
    , actual = convert(1).from('in³/s').to('L/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in³/s to fl-oz/s'] = function () {
  var expected = 0.554113
    , actual = convert(1).from('in³/s').to('fl-oz/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m³/s to yd³/s'] = function () {
  var expected = 1.30795
    , actual = convert(1).from('m³/s').to('yd³/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ft³/s to cm³/s'] = function () {
  var expected = 28316.8
    , actual = convert(1).from('ft³/s').to('cm³/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['pnt/s to mL/s'] = function () {
  var expected = 2366
    , actual = convert(5).from('pnt/s').to('mL/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mL/s to gal/s'] = function () {
  var expected = 2.609
    , actual = convert(9876).from('mL/s').to('gal/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['gal/s to L/s'] = function () {
  var expected = 3.78541178
    , actual = convert(1).from('gal/s').to('L/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kL/s to kL/min'] = function () {
  var expected = 60
    , actual = convert(1).from('kL/s').to('kL/min');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['L/s to kL/h'] = function () {
  var expected = 3.6
    , actual = convert(1).from('L/s').to('kL/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kL/min to L/h'] = function () {
  var expected = 60000
    , actual = convert(1).from('kL/min').to('L/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['L/s to m³/h'] = function () {
  var expected = 3.6
    , actual = convert(1).from('L/s').to('m³/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m³/s to kL/h'] = function () {
  var expected = 3600
    , actual = convert(1).from('m³/s').to('kL/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['fl-oz/s to m³/min'] = function () {
  var expected = 0.00177441177
    , actual = convert(1).from('fl-oz/s').to('m³/min');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ft³/min to L/s'] = function () {
  var expected = 0.471947443
    , actual = convert(1).from('ft³/min').to('L/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['pnt/min to kL/h'] = function () {
  var expected = 0.0283905884
    , actual = convert(1).from('pnt/min').to('kL/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['yd³/h to m³/min'] = function () {
  var expected = 0.012742581
    , actual = convert(1).from('yd³/h').to('m³/min');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
