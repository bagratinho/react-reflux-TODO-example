import React from 'react';
import Reflux from 'reflux';
import SelectedTaskStore from '../stores/selectedTaskStore';
import Actions from '../actions/actions';

var Task = React.createClass({
	mixins: [Reflux.ListenerMixin],
	getInitialState(){
		return {
			heading: "New Task",
			name: "",
			date: "",
			description: "",
			newtask: true,
			id: -1
		}
	},
	setName(event){
		this.setState({
			name: event.target.value
		})	
	},
	setDescription(event){
		this.setState({
			description: event.target.value
		})	
	},
	setDate(event){
		this.setState({
			date: event.target.value
		})	
	},
	onData(task) {
		if(task == -1){
			this.setState({
				heading: "NEW TASK",
				name: "",
				date: "",
				description: "",
				newtask: true,
				id: -1
			});
		} else {
			this.setState({
				heading: "UPDATE TASK",
				name: task.title,
				date: task.date,
				description: task.description,
				id: task.id,
				newtask: false,
				id: task.id
			});
		}
	},
	componentDidMount(){
		this.listenTo(SelectedTaskStore, this.onData);
	},
	validateAndSend(){
		if(this.state.newtask){
			Actions.createNewTask(this.state.name, this.state.date, this.state.description);
		} else {
			Actions.updateTask(this.state.id, this.state.name, this.state.date, this.state.description);
		}
    	Actions.getTask();
		Actions.closeModal();
	},
	
  render() {
    return (
      <div className="todo-list-wrapper">
        <div className="title-bar">
      		<h3>{this.state.heading}</h3>
        </div>
        <input type="text" placeholder="Title" onChange={this.setName} value={this.state.name}/>
        <input type="date" placeholder="Date" onChange={this.setDate} value={this.state.date}/>
        <textarea placeholder="Description" onChange={this.setDescription} value={this.state.description}/>
        <button className="save" onClick={this.validateAndSend}>SAVE</button>
      </div>    	

    );
  }
})

export default Task;
