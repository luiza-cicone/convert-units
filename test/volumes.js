var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['l to L'] = function () {
  assert.strictEqual( convert(2).from('L').to('L') , 2);
};

tests['mm3 to L'] = function () {
  assert.strictEqual( convert(1000000).from('mm³').to('L') , 1);
};

tests['cm3 to L'] = function () {
  assert.strictEqual( convert(100).from('cm³').to('L') , 1/10);
};

tests['dl to L'] = function () {
  assert.strictEqual( convert(2).from('dL').to('L') , 0.2);
};

tests['cl to L'] = function () {
  assert.strictEqual( convert(25).from('cL').to('L') , 0.25);
};

tests['ml to L'] = function () {
  assert.strictEqual( convert(100).from('mL').to('L') , 1/10);
};

tests['m3 to L'] = function () {
  assert.strictEqual( convert(1).from('m³').to('L') , 1000);
};

tests['km3 to L'] = function () {
  assert.strictEqual( convert(1).from('km³').to('L') , 1000000000000);
};

tests['l to mL'] = function () {
  assert.strictEqual( convert(1).from('L').to('mL') , 1000);
};

tests['dl to mL'] = function () {
  assert.strictEqual( convert(10).from('dL').to('mL') , 1000);
};

tests['cl to mL'] = function () {
  assert.strictEqual( convert(100).from('cL').to('mL') , 1000);
};

tests['ml to mL'] = function () {
  assert.strictEqual( convert(13).from('mL').to('mL') , 13);
};

tests['msk to mL'] = function () {
  assert.strictEqual( convert(2).from('msk').to('mL') , 30);
};

tests['tsk to mL'] = function () {
  assert.strictEqual( convert(3).from('tsk').to('mL') , 15);
};

tests['krm to mL'] = function () {
  assert.strictEqual( convert(13).from('krm').to('mL') , 13);
};

tests['kanna to L'] = function () {
  assert.strictEqual( convert(2).from('kanna').to('L') , 2 * 2.617);
};

tests['kkp to mL'] = function () {
  assert.strictEqual( convert(2).from('kkp').to('mL') , 300);
};

tests['glas to mL'] = function () {
  assert.strictEqual( convert(2).from('glas').to('mL') , 400);
};

tests['ml to msk'] = function () {
  assert.strictEqual( convert(15).from('mL').to('msk') , 1);
};

tests['ml to tsk'] = function () {
  assert.strictEqual( convert(5).from('mL').to('tsk') , 1);
};

tests['ml to krm'] = function () {
  assert.strictEqual( convert(1).from('mL').to('krm') , 1);
};

tests['l to kanna'] = function () {
  assert.strictEqual( convert(2.617).from('L').to('kanna') , 1);
};

tests['lm to kkp'] = function () {
  assert.strictEqual( convert(150).from('mL').to('kkp') , 1);
};

tests['ml to glas'] = function () {
  assert.strictEqual( convert(200).from('mL').to('glas') , 1);
};

tests['fl-oz to fl-oz'] = function () {
  assert.strictEqual( convert(62).from('fl-oz').to('fl-oz') , 62);
};

tests['fl-oz to tbsp'] = function () {
  assert.strictEqual( convert(4).from('fl-oz').to('Tbs') , 8);
};

tests['Tbs to fl-oz'] = function () {
  assert.strictEqual( convert(2).from('Tbs').to('fl-oz') , 1);
};

tests['Tbs to Tbs'] = function () {
  assert.strictEqual( convert(140).from('Tbs').to('Tbs') , 140);
};

// When converting between systems, expect < 0.1% error
tests['tsp to L'] = function () {
  var expected = 1.75
    , actual = convert(355).from('tsp').to('L');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in3 to L'] = function () {
  var expected = 0.0163871
    , actual = convert(1).from('in³').to('L');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in3 to fl-oz'] = function () {
  var expected = 0.554113
    , actual = convert(1).from('in³').to('fl-oz');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m3 to yd³'] = function () {
  var expected = 1.30795
    , actual = convert(1).from('m³').to('yd³');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ft3 to cm³'] = function () {
  var expected = 28316.8
    , actual = convert(1).from('ft³').to('cm³');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['pnt to mL'] = function () {
  var expected = 2366
    , actual = convert(5).from('pnt').to('mL');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ml to gal'] = function () {
  var expected = 2.609
    , actual = convert(9876).from('mL').to('gal');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['gal to L'] = function () {
  var expected = 37.85
    , actual = convert(10).from('gal').to('L');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
