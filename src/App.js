import React from "react";
import "./App.css";
import data from "./data.json";
import Search from "./_components/Search";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>
        <div className="main">
          <Search {...data.table} />
        </div>
      </div>
    );
  }
}

export default App;
