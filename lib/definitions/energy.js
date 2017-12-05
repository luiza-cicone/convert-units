var metric
  , imperial;

metric = {
  Wh: {
    name: {
      singular: 'Watt-hour'
    , plural: 'Watt-hours'
    }
  , to_anchor: 3600
  }
, mWh: {
    name: {
      singular: 'Milliwatt-hour'
      , plural: 'Milliwatt-hours'
    }
    , to_anchor: 3.6
  }
, kWh: {
    name: {
      singular: 'Kilowatt-hour'
    , plural: 'Kilowatt-hours'
    }
  , to_anchor: 3600000
  }
, MWh: {
    name: {
      singular: 'Megawatt-hour'
    , plural: 'Megawatt-hours'
    }
  , to_anchor: 3600000000
  }
, GWh: {
    name: {
      singular: 'Gigawatt-hour'
    , plural: 'Gigawatt-hours'
    }
  , to_anchor: 3600000000000
  }
, J: {
    name: {
      singular: 'Joule'
    , plural: 'Joules'
    }
  , to_anchor: 1
  }
, kJ: {
    name: {
      singular: 'Kilojoule'
    , plural: 'Kilojoules'
    }
  , to_anchor: 1000
  }
, cal: {
    name: {
      singular: 'Calorie'
      , plural: 'Calories'
    }
    , to_anchor: 4.184
  }
, kcal: {
    name: {
      singular: 'Kilocalorie'
      , plural: 'Kilocalories'
    }
    , to_anchor: 4184
  }
};

imperial = {
  Btu: {
    name: {
        singular: 'British thermal unit ',
        plural: 'British thermal unit '
    },
    to_anchor: 1
  },
  kBtu: {
    name: {
      singular: 'Kilo-British thermal unit ',
      plural: 'Kilo-British thermal unit '
    },
    to_anchor: 1000
  },
  MBtu: {
    name: {
      singular: 'Mega-British thermal unit ',
      plural: 'Mega-British thermal unit '
    },
    to_anchor: 1000000
  }
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'J'
    , ratio: 1/1055.06
    },
    imperial: {
      unit: 'Btu',
      ratio: 1055.06
    }
  }
};
