import Component from "../Component.js";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      mouseenterCount: 0,
    };

    console.log(this.props);
  }

  componentDidMount() {
    console.log("Counter mounted to DOM.");
  }

  onMouseenter = (_e) => {
    this.setState({ mouseenterCount: this.state.mouseenterCount + 1 });
  };

  onClick = (e) => {
    console.log("clicked");

    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { headingSize = 4, headingText = "Count" } = this.props;

    const wrap = document.createElement("div");
    wrap.classList.add("counter");
    wrap.style.border = "1px solid ivory";
    wrap.style.padding = "15px";
    // wrap.addEventListener("mouseenter", this.onMouseenter);

    const heading = document.createElement(`h${headingSize}`);
    wrap.appendChild(heading);
    heading.innerText = headingText;

    // const mouseenterCountStats = document.createElement("p");
    // wrap.appendChild(mouseenterCountStats);
    // mouseenterCountStats.innerText = this.state.mouseenterCount;

    const clickStats = document.createElement("p");
    wrap.appendChild(clickStats);
    clickStats.innerText = `Clicked ${this.state.count} times.`;

    const btn = document.createElement("button");
    wrap.appendChild(btn);
    btn.innerText = `Click`;
    btn.addEventListener("click", this.onClick);

    return wrap;
  }
}
