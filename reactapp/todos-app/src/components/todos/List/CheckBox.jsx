import React, { Component } from "react";

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked,
    };
  }
  handleChange(e) {
    const { checked } = e.target;

    this.setState(checked);
    this.props.onChange(checked);
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.checked.bind(this)} />
      </div>
    );
  }
}
