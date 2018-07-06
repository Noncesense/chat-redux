import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message) => <Message key={message.content} message={message}/>)}
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessageList);
