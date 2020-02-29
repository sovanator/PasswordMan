export const addPassword = (key,title, username, password, website, notes) =>({
    type: 'ADD_PASSWORD', 
    payload: {key,title, username, password, website, notes}
})
export const editPassword = (newItem) =>({
    type: 'EDIT_PASSWORD', 
    payload: newItem
})
export const deletePassword = (key) =>({
    type: 'DELETE_PASSWORD', 
    payload: key
})


