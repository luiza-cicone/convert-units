var metric
  , imperial;

metric = {
  Nm: {
    name: {
      singular: 'Newton metre'
    , plural: 'Newton metre'
    }
  , to_anchor: 1
  }
};

imperial = {
  lbft: {
    name: {
      singular: 'Pound-foot'
    , plural: 'Pound-foot'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'Nm'
    , ratio: 1/1.35581795
    }
  , imperial: {
      unit: 'lbft'
    , ratio: 1.35581795
    }
  }
};
