import {SAVEDPASSWORD} from '../Data/SavedPassword'

const initState = {
    savedPasswords : SAVEDPASSWORD
}

const rootReducer = (state= initState, action) =>{
    return state;
}

export default rootReducer