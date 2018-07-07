import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  handleChange = (e) => {
    let input = e.target.value
    this.setState({
      input: input
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMessage(this.props.selectedChannel, this.props.currentUser, this.state.input);
    this.setState({
      input: ""
    })
    console.log(this.state.input)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.input} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      )
  }
}

import { addMessage } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      { addMessage: addMessage},
      dispatch
    );
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
