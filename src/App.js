import React from "react";
import { nanoid } from "nanoid";

// import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [
          { id: "1", todo: "Feed fish" },
          { id: "2", todo: "Go to place" },
          { id: "3", todo: "Something else" },
      ],
      text: "",
    };
  }


  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      todos: [...this.state.todos, { id: nanoid(), todo: this.state.text}],
      text: "",
    });
  };

  handleClick = (e, id) => {
    console.log(e.target.innertext)
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
    

    this.setState({
      todos: filteredTodos,
    })
  };

  componentDidUpdate() {}

  render() {
    return (
      <div className="app">
        <h2>To Do</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {this.state.todos.map(({ todo, id }) => {
            return <li key={id} onClick={(e) => this.handleClick(e, id)}>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
