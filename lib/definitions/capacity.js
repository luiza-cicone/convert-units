var capacity;

capacity = {
  F: {
    name: {
      singular: 'Farad'
    , plural: 'Farads'
    }
  , to_anchor: 1
  }
, µF: {
    name: {
      singular: 'Microfarads'
    , plural: 'Microfarads'
    }
  , to_anchor: .000001
  }
, nF: {
    name: {
        singular: 'Nanofarad'
        , plural: 'Nanofarads'
    }
    , to_anchor: .000000001
  }
};

module.exports = {
  metric: capacity
, _anchors: {
    metric: {
      unit: 'F'
    , ratio: 1
    }
  }
};
