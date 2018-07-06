import React, { Component } from 'react';
import { connect } from 'react-redux';
import Channel from './Channel';

class ChannelList extends Component {

handleClick = (channel) => {
  this.props.selectChannel(channel);
}

render() {
  return (
    <div>
      {this.props.channels.map((channel) => <Channel key={channel} channel={channel} />)}
    </div>
    )
}
}

function mapStateToProps(reduxState) {
  return {
    channels: reduxState.channels
  }
}

export default connect(mapStateToProps)(ChannelList);
