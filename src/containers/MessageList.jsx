import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from '../components/Message.jsx';
import MessageForm from './MessageForm.jsx';

class MessageList extends Component {

  componentDidMount = () => {
    this.props.fetchMessages(this.props.selectedChannel)
  }

  render() {
    let channelTitle = this.props.selectedChannel.charAt(0).toUpperCase() + this.props.selectedChannel.slice(1);
    return (
      <div className="col-sm-8 col-xs-8">
        <div>
          <h2>{channelTitle}</h2>
        </div>
        <div>
          {this.props.messages.map((message) => <Message key={message.id} message={message}/>)}
        </div>
        <MessageForm />
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
}

import { fetchMessages } from "../actions";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
