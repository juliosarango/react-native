function videos(state = {}, action) {
  switch (action.type) {

    case 'SET_SUGGESTION_LIST': {
      return { ...state, ...action.payload }
      
    }
    break;
    case 'SET_CATEGORY_LIST': {
      return { ...state, ...action.payload }

    }          
      
    default:
      return state
      break;
  }
  
}

export default videos