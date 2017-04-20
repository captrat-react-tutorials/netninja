var React = require('react');
var ReactDOM = require('react-dom');

//create Component
var ToDoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['get up', 'wash up', 'eat some cheese', 'take a nap'],
    }
  },

  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <li>{item}</li>
      );
    });

    return(
      <div id="todo-list">
        <p>Comfort retards growth.</p>
        <ul>{todos}</ul>
      </div>
    );
  }
});

//put Component into HTML page
ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));
