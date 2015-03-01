var React = require('react');
var StartEnd = require('./components/StartEnd');
var InputOutput = require('./components/InputOutput');
var Process = require('./components/Process');

React.render(<div>
  <StartEnd value="Start"/>
  <StartEnd value="End"/>
  <InputOutput value="Input/Output"/>
  <Process value="Process"/>
</div>, document.getElementById('content'));
