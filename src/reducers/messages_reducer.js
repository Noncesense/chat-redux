import { FETCH_MESSAGES, ADD_MESSAGE } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages
    case ADD_MESSAGE:
        console.log(state);
       let newMessages = state.push(action.payload)
      return newMessages
    default:
      return state;
  }
}
