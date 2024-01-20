import { version, Component } from "inferno";
import Logo from "./logo.js";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    // set initial time:
    this.state = {
      time: Date.now(),
    };
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString();
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <p>{`Welcome to Inferno ${version}`}</p>
          <p>
            Time: <code>{time}</code>
          </p>
        </header>
      </div>
    );
  }
}
