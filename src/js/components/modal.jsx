import React from 'react';
import Reflux from 'reflux';
import _ from 'underscore';
import ModalStore from '../stores/modalStore';
import Actions from '../actions/actions';
import Task from './task.jsx';

var Modal = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState(){
    return {
      modalClass: "close"
    }
  },
  onData(bool) {
    if(bool){
      this.setState({
        modalClass: "open"
      });   
    } else {
      this.setState({
          modalClass: "close"
      });        
    }
  },

  componentDidMount(){
    this.listenTo(ModalStore, this.onData);
  },
  closeModal(){
    Actions.closeModal();
  },
  render() {
    return (
      <div className={"modal-wrapper " + this.state.modalClass}>
        <div className="overlay"></div>
        <div className="modal">
          <div className="modal-inner">
            <Task/>
            <button onClick={this.closeModal}></button> 
          </div>
        </div>
      </div>
    );
  }
})

export default Modal;
