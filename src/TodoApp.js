import React, { Component } from 'react';
import './TodoApp.css';
import Note from './Note';

let listofItems = [];
let deletedItems = [];

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      list: [],
      deletedList: [],
      characters: ''
    }
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 handleChange(event) {
  this.setState({
    input: event.target.value
  });
 }

 handleDelete(item) {
   let index = listofItems.indexOf(item);
   if(index >= 0) {
     listofItems.splice(index,1);
     deletedItems.push(item);
   }
   this.setState({
     list: listofItems,
     deletedList: deletedItems
   });
}

handleKeyUp(e) {
  this.setState ({
    characters: `You have  ${150 - e.target.value.length} characters left`
  })
}

 handleAdd(inputString) {
   if(inputString === '') {
     alert("Your New Note Cannot be Empty!");
   }
  else if(listofItems.indexOf(inputString) >= 0) {
       alert("You cannot duplicate notes!");
  }
   else {
     listofItems.push(inputString);
     this.setState({
       list: listofItems,
       input: '',
       characters: ''
     })
   }
 }

  render() {
    return (
      <div className="ToDoApp">
      <div className="ToDoApp-box-one">
      <div className="ToDoApp-To-do-list-box">
            <h2> To Do </h2>
            {listofItems.length > 0 ? (
            listofItems.map((item) => {
              return (
                <Note name={item} onClick={() => {this.handleDelete(item)}} />
              );
            })
          ) :
          ( <h3> No Pending Items </h3>)
          }
      </div>
      </div>

      <div className="ToDoApp-box-two">

      <div className="ToDoApp-input-box">
      <textarea className="ToDoApp-input-field" onKeyUp= {this.handleKeyUp} maxlength="150" placeholder="Your note..." value={this.state.input} onChange={this.handleChange} />
      <p><small className="ToDoApp-char-left"> {this.state.characters} </small></p>
      <button className= "ToDoApp-add-button" onClick= { () => {this.handleAdd(this.state.input)}} > Add </button>
      </div>

      <div className="ToDoApp-Recent-History">
      <h4> Recent History </h4>
      {deletedItems.length > 0 ? (deletedItems.map((item) => {
        return (
          <p className="ToDoApp-Items"> {item} </p>
        );}) ) : (<h5> No Recent History </h5>)
      }
      </div>
      </div>

      </div>
    );
  }
}

export default TodoApp;
