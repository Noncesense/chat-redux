import { FETCH_MESSAGES, ADD_MESSAGE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages
    case ADD_MESSAGE:
        let messages_array = state.slice(0);
        messages_array.push(action.payload)
       return messages_array
    default:
      return state;
  }
}
