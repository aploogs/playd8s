const user = (state = {}, action) => {
  switch(action.type) {
    case 'USER':
      let { _id, role, username, firstname, lastname } = action
      return { _id, role, username, firstname, lastname }
    default:
      return state;
  }
}

export default user;
