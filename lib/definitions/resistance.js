var capacity;

capacity = {
  Ω: {
    name: {
      singular: 'Ohm'
    , plural: 'Ohms'
    }
  , to_anchor: 1
  }
, kΩ: {
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
      unit: 'Ω'
    , ratio: 1
    }
  }
};
