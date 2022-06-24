const ratingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RATING':
            return action.payload;
        default:
            return state;
    }
  }


  export default ratingReducer;