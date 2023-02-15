import React, { Component, useState } from 'react'
import CheckboxList from '../components/CheckBoxList'

export default class ToDo extends Component {
    constructor(){
        super();
        
    }

    
    

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleToDoSubmit}>
                    <input placeholder='What has to be done?' name='myText'/>
                    <button type='submit'>Add</button>
                </form>



                <CheckboxList myList = {this.props.myList} deleteToDo={this.props.deleteToDo}/>

            </div>
        )
    }
    
}