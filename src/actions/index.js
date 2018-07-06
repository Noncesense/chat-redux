// TODO: add and export your own actions

export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const FETCH_MESSAGES = "FETCH_MESSAGES";

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
