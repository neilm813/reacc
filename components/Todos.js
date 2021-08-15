import Component from "../Component.js";

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ todos: json });
      });
  }

  handleNewTodoChange = (e) => {
    this.setState({ newTodo: e.target.value });
    console.log(this.state);
  };

  addNewTodo = (e) => {
    const { newTodo, todos } = this.state;

    e.preventDefault();
    const newTodoObj = {
      title: newTodo,
      id: todos.length,
      completed: false,
    };

    this.setState({
      todos: [newTodoObj, ...todos],
      newTodo: "",
    });
    console.log(this.state);
  };

  render() {
    const { newTodo, todos } = this.state;

    const wrap = document.createElement("div");
    wrap.classList.add("todo-list");
    wrap.style.border = "1px solid ivory";
    wrap.style.padding = "15px";

    const heading = document.createElement(`h2`);
    wrap.appendChild(heading);
    heading.innerText = "Todos";

    const newTodoInput = document.createElement("input");
    wrap.appendChild(newTodoInput);
    newTodoInput.value = newTodo;
    newTodoInput.addEventListener("change", this.handleNewTodoChange);

    const newTodoBtn = document.createElement("button");
    wrap.appendChild(newTodoBtn);
    newTodoBtn.innerText = "Add";
    newTodoBtn.addEventListener("click", this.addNewTodo);

    wrap.appendChild(document.createElement("hr"));

    const ul = document.createElement("ul");
    wrap.appendChild(ul);

    todos.forEach((todo) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.id = `todo-${todo.id}`;
      li.innerText = `${todo.completed ? "✅ " : " "}${todo.title}`;
    });

    return wrap;
  }
}
