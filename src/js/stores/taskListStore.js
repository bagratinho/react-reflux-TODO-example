import Reflux from 'reflux';
import Actions from '../actions/actions';
import _ from 'underscore';

var TaskListStore = Reflux.createStore({
    listenables: [Actions],
    taskList: [],

    getTaskList: function() {
    	if(localStorage.getItem("tasks")==null){
	    	localStorage.setItem("tasks","[]");
	    }	
    	this.taskList = JSON.parse(localStorage.getItem("tasks"));	  	
    	this.trigger(this.taskList);
    },
    createNewTask: function(name, date, description) {
		let newTaskID = 0;
	    this.taskList = JSON.parse(localStorage.getItem("tasks"));
    	if (this.taskList.length > 0){
	    	newTaskID = this.taskList.length
		} 
	    this.taskList.push({"title":name,"date":date,"description":description, "id": newTaskID, "completed":false});	
	    let newTasksString = JSON.stringify(this.taskList);
	    localStorage.tasks = newTasksString;  
    	this.trigger(this.taskList);
    },
    updateTask: function(id, name, date, description) {
	    this.taskList = JSON.parse(localStorage.getItem("tasks"));
	    this.taskList[id].title = name;	
	    this.taskList[id].date = date;	
	    this.taskList[id].description = description;
	    let newTasksString = JSON.stringify(this.taskList);
	    localStorage.tasks = newTasksString;  
    	this.trigger(this.taskList); 
    },
    deleteTask: function(id) {
	    this.taskList = JSON.parse(localStorage.getItem("tasks"));
	    this.taskList.splice(id,1);	
	    console.log(id)
		_.chain( this.taskList ).
			each( ( task ) => {
				if(task.id > id){task.id = task.id - 1}
			});	
		console.log(this.taskList)	
	    let newTasksString = JSON.stringify(this.taskList);
	    localStorage.tasks = newTasksString;  
    	this.trigger(this.taskList);
    },
    toggleTask: function(id){
	    this.taskList = JSON.parse(localStorage.getItem("tasks"));
	    this.taskList[id].completed = !this.taskList[id].completed;
	    let newTasksString = JSON.stringify(this.taskList);
	    localStorage.tasks = newTasksString;  
    	this.trigger(this.taskList);
    }
}); 

module.exports = TaskListStore;
