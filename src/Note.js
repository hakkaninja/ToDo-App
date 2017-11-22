import React, { Component } from 'react';

export default class Note extends Component {
  render() {
    return(
      <label> <p className ='ToDoApp-Items'> <input type="checkbox"
      onClick={this.props.onClick} checked={false} /> {this.props.name}
      </p></label>
  );
  }
}
