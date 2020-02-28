export const addPassword = (key,title, username, password, website, notes) =>({
    type: 'ADD_PASSWORD', 
    payload: {key,title, username, password, website, notes}
})
export const editPassword = (key,title, username, password, website, notes) =>({
    type: 'EDIT_PASSWORD', 
    payload: {key,title, username, password, website, notes}
})


