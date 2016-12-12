import Reflux from 'reflux';

var Actions = Reflux.createActions([
	'getTaskList',
	'getTask',
    'openModal',
    'closeModal',
    'createNewTask',
    'updateTask',
    'deleteTask',
    'toggleTask'

    ]);

module.exports = Actions;

