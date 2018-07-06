// TODO: add and export your own actions

export const SELECT_CHANNEL = "SELECT_CHANNEL";

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}
