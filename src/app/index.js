var React = require('react');
var ReactDOM = require('react-dom');

//create Component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['get up', 'wash up', 'eat some cheese', 'take a nap'],
    }
  },

  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item={item} key={index} />
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

// create TodoItem Component

var TodoItem = React.createClass({
  render:function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
})
//put Component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
