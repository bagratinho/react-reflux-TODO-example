import Reflux from 'reflux';
import Actions from '../actions/actions';

var SelectedTaskStore = Reflux.createStore({
    listenables: [Actions],
    selectedTask: -1,
    getTask: function(id) {
        if(typeof id !== "undefined"){
            let taskList = JSON.parse(localStorage.getItem("tasks"));
            this.selectedTask = taskList[id];
        } else {
            this.selectedTask = -1;
        }
        this.trigger(this.selectedTask);              
    }
});

module.exports = SelectedTaskStore;
