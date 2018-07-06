import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Channel extends Component {

  handleClick = () => {
    this.props.selectChannel(this.props.channel)
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.channel}{this.props.channel == this.props.selectedChannel ? "*" : null}
      </div>
      )
  }
}

import { selectChannel } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      { selectChannel: selectChannel },
      dispatch
    );
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);

