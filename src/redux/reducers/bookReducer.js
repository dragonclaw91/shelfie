const bookReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BOOK':
            return action.payload;
        default:
            return state;
    }
  }


  export default bookReducer;