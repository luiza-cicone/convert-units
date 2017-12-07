var frequency;

frequency = {
  Hz: {
    name: {
      singular: 'Hertz'
      , plural: 'Hertz'
    }
    , to_anchor: 1
  }
  , kHz: {
    name: {
      singular: 'Kilohertz'
      , plural: 'Kilohertz'
    }
    , to_anchor: 1000
  }
  , MHz: {
    name: {
      singular: 'Megahertz'
      , plural: 'Megahertz'
    }
    , to_anchor: 1000000
  }
  , GHz: {
    name: {
      singular: 'Gigahertz'
      , plural: 'Gigahertz'
    }
    , to_anchor: 1000000000
  }
};

module.exports = {
  metric: frequency
  , _anchors: {
    metric: {
      unit: 'Hz'
      , ratio: 1
    }
  }
};
