import React from 'react';
import ChannelList from '../containers/ChannelList.jsx';
import MessageList from '../containers/MessageList.jsx';

const App = () => {
  return (
    <div className="row">
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
