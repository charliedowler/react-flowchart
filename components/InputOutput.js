var Symbol = require('./Symbol');
var _ = require('underscore');

var InputOutputStyle = {
  'WebkitTransform': 'skew(-20deg)',
  'MozTransform': 'skew(-20deg)',
  'OTransform': 'skew(-20deg)',
  height: 100
};

class InputOutput extends Symbol {
  constructor(props) {
    super({
      style: InputOutputStyle,
      value: props.value
    });
  }
}

module.exports = InputOutput;
