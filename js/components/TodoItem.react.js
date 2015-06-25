var React = require('React');
var TodoActions = require('../actions/TodoActions');

var TodoItem = React.createClass({

  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function () {
    var todo = this.props.todo;
    return (
      <li key={todo.id}>
        <label>
          {todo.text}
        </label>
        <button className="destroy" onClick={this._onDestroyClick}>✓</button>
      </li>
    );
  },

  _onDestroyClick: function () {
    TodoActions.destroy(this.props.todo.id);
  }

});

module.exports = TodoItem;
