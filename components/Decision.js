var Symbol = require('./Symbol');

// TODO: https://css-tricks.com/examples/ShapesOfCSS/
// Diamond Narrow

var DecisionStyle = {
  width: 0,
	height: 0,
	border: '50px solid transparent',
	borderBottom: '70px solid red',
	position: 'relative',
	top: -50
}

var DecisionStyleAfter = {
  content: '',
  position: 'absolute',
  left: -50,
  top: 70,
  width: 0,
  height: 0,
  border: '50px solid transparent',
  borderTop: '70px solid red'
}

class Decision extends Symbol {
  constructor(props) {
    super({
      style: DecisionStyle,
      value: props.value
    });
  }
}

module.exports = Decision;
