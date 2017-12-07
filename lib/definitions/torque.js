var metric
  , imperial;

metric = {
  'N⋅m': {
    name: {
      singular: 'Newton metre'
    , plural: 'Newton metre'
    }
  , to_anchor: 1
  }
};

imperial = {
  'lb⋅ft': {
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
      unit: 'N⋅m'
    , ratio: 1/1.35581795
    }
  , imperial: {
      unit: 'lb⋅ft'
    , ratio: 1.35581795
    }
  }
};
