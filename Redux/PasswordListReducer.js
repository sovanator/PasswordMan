import { SAVEDPASSWORD } from '../Data/SavedPassword';

const initState = SAVEDPASSWORD;

export default function(state = initState, action) {
  switch (action.type) {
    case 'EDIT_PASSWORD':
      // console.log(action.payload)
      // console.log(state)
      return action.payload

    case 'ADD_PASSWORD':
      return [...state, action.payload];
    case 'DELETE_PASSWORD':
      return state.filter(item=>item.key!==action.payload)
      
    default:
      return state;
  }
}
