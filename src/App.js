import React, { Component } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Nav from './components/Nav';
import ToDo from './views/ToDo';


export default class App extends Component {
  constructor(){
    super();this.state = {
      age: 9000,
      myList: [],
    }
    
    
  }
  addToDo = (e) => {
    e.preventDefault();
    const text = e.target.myText.value
    this.setState({ myList: this.state.myList.concat([text]) })
  };
  deleteToDo = (indexToDelete) => {
    const copy = [...this.state.myList]
    copy.splice(indexToDelete, 1)
    this.setState({myList: copy})
  };
  render() {
    return (
      <Router>
      <div>
        <Nav />

        <Routes>
          <Route path='/' element={<Home age={this.state.age} happyBirthday={this.happyBirthday} />} />
          <Route path='/todo' element={<ToDo myList={this.state.myList} handleToDoSubmit={this.addToDo} deleteToDo={this.deleteToDo}/>} />
        </Routes>

      </div>
    </Router>
    )
  }
}

