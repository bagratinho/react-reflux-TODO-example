import React from 'react';
import ToDoList from './todolist.jsx';
import Modal from './modal.jsx';

var Main = React.createClass({
	render() {
		return (
		  <div> 
		  	<ToDoList/>
		  	<Modal/>
		  </div>
		); 
	} 
})

export default Main;
