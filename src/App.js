import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import Context from "./components/Context";
function App() {
  const handleChange = (e) => {};
  return (
    <div className="App">
      <Context>
        <Home />
      </Context>
    </div>
  );
}

export default App;
