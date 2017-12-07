var capacity;

capacity = {
  'Ohm': {
    name: {
      singular: 'Ohm'
    , plural: 'Ohms'
    }
  , to_anchor: 1
  }
, 'kOhm': {
    name: {
      singular: 'Kiloohm'
    , plural: 'Kiloohms'
    }
  , to_anchor: 1000
  }
};

module.exports = {
  metric: capacity
, _anchors: {
    metric: {
      unit: 'Ohm'
    , ratio: 1
    }
  }
};
