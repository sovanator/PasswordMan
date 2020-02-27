import {SAVEDPASSWORD} from '../Data/SavedPassword'

const initState = {
    savedPasswords : SAVEDPASSWORD
}

const rootReducer = (state= initState, action) =>{
   switch(action.type){
       case 'EDIT_PASSWORD':
           
       case 'ADD_PASSSWORD':
            return [...state, action.payload]
       case 'DELETE_PASSWORD':

       default:
           return state
   };
}

export default rootReducer