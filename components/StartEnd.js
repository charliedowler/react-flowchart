var React = require('react');
var Symbol = require('./Symbol');

class StartEnd extends Symbol {
  constructor(props) {
    super({
      style: {
        borderRadius: 60,
        height: 50
      },
      value: props.value
    });
  }
}

module.exports = StartEnd;
