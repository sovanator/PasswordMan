export const addPassword = (key,title, username, password, website, notes) =>({
    type: 'ADD_PASSWORD', 
    payload: {key,title, username, password, website, notes}
})