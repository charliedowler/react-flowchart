var React = require('react');
var Symbol = require('./Symbol');

class Process extends Symbol {
  constructor(props) {
    super({
      value: props.value
    });
  }
}

module.exports = Process;
