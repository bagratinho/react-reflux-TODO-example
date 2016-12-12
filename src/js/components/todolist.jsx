import React from 'react';
import Reflux from 'reflux';
import _ from 'underscore';
import TaskListStore from '../stores/taskListStore';
import Actions from '../actions/actions';

var ToDoList = React.createClass({

	mixins: [Reflux.ListenerMixin],
	getInitialState(){
		return {
			taskList: []
		}
	},
	onData(data) {
		this.setState({
		    taskList: data
		});
	},
	componentDidMount(){
		Actions.getTaskList();
		this.listenTo(TaskListStore, this.onData);
	},
	getTasks(data){
		let tasks = [];
		if(data.length==0){
	    	tasks.push(<li className="no-task">NOTHING TO SHOW</li>)
		}
		_.chain( data ).
			each( ( task ) => {
				let checkbox;

				console.log(task.completed)	
	        	tasks.push(<li className={task.completed}><span onClick={this.getTask.bind(this,task.id)}>{task.title}</span>
	        		<button className="delete" onClick={Actions.deleteTask.bind(this, task.id)}></button>
	        		<label onClick={Actions.toggleTask.bind(this, task.id)}  className={"toggle " + task.completed}></label>
	        		</li>)
			});		
		return tasks;	
	}, 
	newTask(){
		Actions.getTask();
		Actions.openModal();
	},
	getTask(id){
		Actions.getTask(id);
		Actions.openModal();
	},
  render() {
  	let currentTasks = this.getTasks(this.state.taskList);
    return (
      <div className="todo-list-wrapper">
        <div className="title-bar">
        	<h3>TODO LIST</h3>
        	<button onClick={this.newTask}>NEW TASK</button>
        </div>
        <div className="todo-list">
        	<ul>
        		{currentTasks}
        	</ul>
        </div>
      </div>
    );
  }
})

export default ToDoList;
