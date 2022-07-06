//giving us an array of books to later map over

const collectionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COLLECTION':
            return action.payload;
        default:
            return state;
    }
  }


  export default collectionReducer;