// TODO: add and export your own actions

export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}

export function fetchMessages(channel) {
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) =>{
      return {
        type: FETCH_MESSAGES,
        payload: data
      };
    });
}

export function addMessage(channel, author, content) {
  const body = { author: author, content: content, channel: channel };
  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
  .then((data) => {
    return {
      type: ADD_MESSAGE,
      payload: data
    }
  });
}
