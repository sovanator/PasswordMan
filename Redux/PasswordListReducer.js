import { SAVEDPASSWORD } from '../Data/SavedPassword';

const initState = SAVEDPASSWORD;

export default function(state = initState, action) {
  switch (action.type) {
    // case 'EDIT_PASSWORD':

    case 'ADD_PASSWORD':
      return [...state, action.payload];
    // case 'DELETE_PASSWORD':

    default:
      return state;
  }
}
