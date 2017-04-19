var React = require('react');
var ReactDOM = require('react-dom');

//create Component
var ToDoComponent = React.createClass({
  render: function(){
    return(
      <div>
        <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
        <p><strong>Cheese smellFactor: </strong> {this.props.cheese.smellFactor}</p>
        <p><strong>Cheese price: </strong> {this.props.cheese.price}</p>


      </div>
    );
  }
});

var myCheese = {
  name: "Camembert",
  smellFactor: "Extreme pong",
  price: "3.50"
}

//put Component into HTML page
ReactDOM.render(<ToDoComponent mssg="I like cheese" cheese={myCheese} />, document.getElementById('todo-wrapper'));
