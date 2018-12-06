const initialState = {
  username: "Andrew",
  notifications: 5,
  age: 30,
  position: "CTO"
}

function store (state = initialState, action) {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return {...state, notifications: state.notifications + 1}
  }

  return state
}

export default store