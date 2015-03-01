var React = require('react');
var _ = require('underscore');

var SymbolStyle = {
  width: 200,
  height: 200,
  display: 'block',
  border: '1px solid black',
  top: -9999,
  left: -9999,
  position: 'fixed',
  textAlign: 'center',
  backgroundColor: '#fff'
};
var ValueStyle = {
  position: 'relative',
  top: '50%',
  padding: 0,
  margin: 0
};

class Symbol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: _.extend({}, SymbolStyle, props.style || {}),
      value: props.value
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }
  componentDidMount() {
    this.setPosition(100, 100);
  }
  setPosition(x, y) {
    var _SymbolStyle = JSON.parse(JSON.stringify(this.state.style));
    _SymbolStyle['left'] = x - (this.state.style.width / 2);
    _SymbolStyle['top'] = y - (this.state.style.height / 2);
    _SymbolStyle['cursor'] = 'pointer';
    _SymbolStyle['zIndex'] = 9999;

    this.setState({
      style: _SymbolStyle
    });
  }
  handleMouseMove(event) {
    this.setPosition(event.clientX, event.clientY);
  }
  handleMouseDown(event) {
    event.preventDefault();
    document.addEventListener('mousemove', this.handleMouseMove);
  }
  handleMouseUp(event) {
    document.removeEventListener('mousemove', this.handleMouseMove);

    var _SymbolStyle = JSON.parse(JSON.stringify(this.state.style));
    _SymbolStyle['zIndex'] = 0;
    this.setState({
      style: _SymbolStyle
    });
  }
  render() {
    return <div
      onMouseDown={this.handleMouseDown}
      onMouseUp={this.handleMouseUp}
      style={this.state.style}>
      <span style={ValueStyle}>{this.state.value}</span>
    </div>;
  }
}

module.exports = Symbol;
