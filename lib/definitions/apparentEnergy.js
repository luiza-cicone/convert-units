var apparentEnergy;

apparentEnergy = {
  VAh: {
    name: {
      singular: 'Volt-Ampere Hour'
    , plural: 'Volt-Amperes Hour'
    }
  , to_anchor: 1
  }
, mVAh: {
    name: {
      singular: 'Millivolt-Ampere Hour'
      , plural: 'Millivolt-Amperes Hour'
    }
    , to_anchor: .001
  }
, kVAh: {
    name: {
      singular: 'Kilovolt-Ampere Hour'
    , plural: 'Kilovolt-Amperes Hour'
    }
  , to_anchor: 1000
  }
, MVAh: {
    name: {
      singular: 'Megavolt-Ampere Hour'
    , plural: 'Megavolt-Amperes Hour'
    }
  , to_anchor: 1000000
  }
, GVAh: {
    name: {
      singular: 'Gigavolt-Ampere Hour'
    , plural: 'Gigavolt-Amperes Hour'
    }
  , to_anchor: 1000000000
  }
};

module.exports = {
  metric: apparentEnergy
, _anchors: {
    metric: {
      unit: 'VAh'
    , ratio: 1
    }
  }
};
