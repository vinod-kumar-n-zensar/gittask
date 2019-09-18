import React from "react";
import Searchtext from "./Searchtext";
import Tablelist from "./Tablelist";
import Buffer from "../buffer.gif";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props, body: this.props.body };
    this.displayImage = false;
  }
  componentWillUpdate() {
    this.displayImage = false;
  }
  render() {
    const findArrayElementByTitle = event => {
      this.displayImage = true;
      if (event.target.value !== "") {
        if (isNaN(event.target.value)) {
          filterSearch(
            ["_id", "name", "gender"],
            event.target.value.toLowerCase()
          );
        }
      } else {
        this.setState({ body: this.props.body });
      }
    };
    const filterSearch = (AphaNum, value) => {
      this.setState({
        body: this.props.body.filter(v =>
          AphaNum.some(function(k) {
            return (
              v[k]
                .toString()
                .toLowerCase()
                .indexOf(value) !== -1
            );
          })
        )
      });
    };

    return (
      <div className="table ">
        <div className="table__head">
          <Searchtext findArrayElementByTitle={findArrayElementByTitle} />
        </div>
        {this.displayImage ? (
          <div className="buffer">
            <img src={Buffer} alt="" />
          </div>
        ) : (
          <div>
            <Tablelist body={this.state.body} head={this.props.head} />
          </div>
        )}
      </div>
    );
  }
}
