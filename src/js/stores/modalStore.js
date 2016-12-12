import Reflux from 'reflux';
import Actions from '../actions/actions';

var ModalStore = Reflux.createStore({
    listenables: [Actions],
    isOpen: false,
    openModal: function(id) {
        this.isOpen = true;
        this.trigger(this.isOpen)
    },
    closeModal: function(id) {
        this.isOpen = false;
        this.trigger(this.isOpen)
    }
});

module.exports = ModalStore;
