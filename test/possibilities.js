var convert = require('../lib')
    , assert = require('assert-diff')
    , tests = {};

assert.options.strict = true;

tests['l possibilities'] = function () {
    var actual = convert().from('L').possibilities()
        ,
        expected = ['mm³', 'cm³', 'mL', 'cL', 'dL', 'L', 'kL', 'm³', 'km³', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in³', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft³', 'yd³'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['kg possibilities'] = function () {
    var actual = convert().from('kg').possibilities()
        , expected = ['mcg', 'mg', 'g', 'kg', 'oz', 'lb', 't'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['m possibilities'] = function () {
    var actual = convert().from('m').possibilities()
        , expected = ['mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'mi'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['each possibilities'] = function () {
    var actual = convert().possibilities('each')
        , expected = ['ea', 'dz'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['mass possibilities'] = function () {
    var actual = convert().possibilities('mass')
        , expected = ['mcg', 'mg', 'g', 'kg', 'oz', 'lb', 't'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['volume possibilities'] = function () {
    var actual = convert().possibilities('volume')
        ,
        expected = ['mm³', 'cm³', 'mL', 'cL', 'dL', 'L', 'kL', 'm³', 'km³', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in³', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft³', 'yd³'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['volume flow rate possibilities'] = function () {
    var actual = convert().possibilities('volumeFlowRate')
        ,
        expected = ['mm³/s', 'cm³/s', 'mL/s', 'cL/s', 'dL/s', 'L/s', 'L/min', 'L/h', 'kL/s', 'kL/min', 'kL/h', 'm³/s', 'm³/min', 'm³/h', 'km³/s', 'tsp/s', 'Tbs/s', 'in³/s', 'in³/min', 'in³/h', 'fl-oz/s', 'fl-oz/min', 'fl-oz/h', 'cup/s', 'pnt/s', 'pnt/min', 'pnt/h', 'qt/s', 'gal/s', 'gal/min', 'gal/h', 'ft³/s', 'ft³/min', 'ft³/h', 'yd³/s', 'yd³/min', 'yd³/h'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['length possibilities'] = function () {
    var actual = convert().possibilities('length')
        , expected = ['mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'mi'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['temperature possibilities'] = function () {
    var actual = convert().possibilities('temperature')
        , expected = ['°C', 'K', '°F', '°R'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['time possibilities'] = function () {
    var actual = convert().possibilities('time')
        , expected = ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'month', 'year'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['digital possibilities'] = function () {
    var actual = convert().possibilities('digital')
        , expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['partsPer possibilities'] = function () {
    var actual = convert().possibilities('partsPer')
        , expected = ['ppm', 'ppb', 'ppt', 'ppq'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['pressure possibilities'] = function () {
    var actual = convert().possibilities('pressure')
        , expected = ['Pa', 'kPa', 'MPa', 'hPa', 'bar', 'torr', 'psi', 'ksi', 'atm'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['speed possibilities'] = function () {
    var actual = convert().possibilities('speed')
        , expected = ['m/s', 'km/h', 'm/h', 'knot', 'ft/s'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['current possibilities'] = function () {
    var actual = convert().possibilities('current')
        , expected = ['A', 'mA', 'kA'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['voltage possibilities'] = function () {
    var actual = convert().possibilities('voltage')
        , expected = ['V', 'mV', 'kV'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['power possibilities'] = function () {
    var actual = convert().possibilities('power')
        , expected = ['W', 'mW', 'kW', 'MW', 'GW'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['reactive power possibilities'] = function () {
    var actual = convert().possibilities('reactivePower')
        , expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['apparent power possibilities'] = function () {
    var actual = convert().possibilities('apparentPower')
        , expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['energy possibilities'] = function () {
    var actual = convert().possibilities('energy')
        , expected = ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ', 'Btu', 'kBtu', 'MBtu', 'cal', 'kcal'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['reactive energy possibilities'] = function () {
    var actual = convert().possibilities('reactiveEnergy')
        , expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
    assert.deepEqual(actual.sort(), expected.sort());
};

tests['all possibilities'] = function () {
    var actual = convert().possibilities()
        // Please keep these sorted for maintainability
        , expected = [
            'A',
            'B',
            'Btu',
            '°C',
            '°F',
            'GB',
            'GHz',
            'GVA',
            'GVAR',
            'GVARh',
            'GW',
            'GWh',
            'Gb',
            'Hz',
            'J',
            'K',
            'KB',
            'Kb',
            'MB',
            'MBtu',
            'MHz',
            'MPa',
            'MVA',
            'MVAR',
            'MVARh',
            'MW',
            'MWh',
            'Mb',
            'Pa',
            '°R',
            'TB',
            'Tb',
            'Tbs',
            'Tbs/s',
            'V',
            'VA',
            'VAR',
            'VARh',
            'W',
            'Wh',
            'ac',
            'atm',
            'b',
            'bar',
            'cal',
            'cL',
            'cL/s',
            'cm',
            'cm2',
            'cm³',
            'cm³/s',
            'cup',
            'cup/s',
            'd',
            'dL',
            'dL/s',
            'dz',
            'ea',
            'fl-oz',
            'fl-oz/h',
            'fl-oz/min',
            'fl-oz/s',
            'ft',
            'ft-us',
            'ft/s',
            'ft2',
            'ft³',
            'ft³/h',
            'ft³/min',
            'ft³/s',
            'g',
            'gal',
            'gal/h',
            'gal/min',
            'gal/s',
            'glas',
            'h',
            'hPa',
            'ha',
            'in',
            'in2',
            'in³',
            'in³/h',
            'in³/min',
            'in³/s',
            'kA',
            'kBtu',
            'kHz',
            'kJ',
            'kPa',
            'kV',
            'kVA',
            'kVAR',
            'kVARh',
            'kW',
            'kWh',
            'kanna',
            'kcal',
            'kg',
            'kkp',
            'kL',
            'kL/h',
            'kL/min',
            'kL/s',
            'km',
            'km/h',
            'km2',
            'km³',
            'km³/s',
            'knot',
            'krm',
            'ksi',
            'L',
            'L/h',
            'L/min',
            'L/s',
            'lb',
            'm',
            'm/h',
            'm/s',
            'm2',
            'm³',
            'm³/h',
            'm³/min',
            'm³/s',
            'mA',
            'mV',
            'mVA',
            'mVAR',
            'mVARh',
            'mW',
            'mWh',
            'mcg',
            'mg',
            'mi',
            'mi2',
            'min',
            'mL',
            'mL/s',
            'mm',
            'mm2',
            'mm³',
            'mm³/s',
            'month',
            'ms',
            'msk',
            'mu',
            'ns',
            'oz',
            'pnt',
            'pnt/h',
            'pnt/min',
            'pnt/s',
            'ppb',
            'ppm',
            'ppq',
            'ppt',
            'psi',
            'qt',
            'qt/s',
            's',
            't',
            'torr',
            'tsk',
            'tsp',
            'tsp/s',
            'week',
            'yd',
            'yd2',
            'yd³',
            'yd³/h',
            'yd³/min',
            'yd³/s',
            'year',
            'F',
            'µF',
            'Ω',
            'kΩ',
            'lb⋅ft',
            'nF',
            'N⋅m'
        ];
    try {
        assert.deepEqual(actual.sort(), expected.sort());
    }
    catch (e) {
        // This gets too long, and gets truncated
        process.stderr.write(e + '\n');
        throw e;
    }
};

module.exports = tests;
