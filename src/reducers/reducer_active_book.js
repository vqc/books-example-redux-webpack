//state is set to null as a default
export default function(state = null, action){
  //state argument is not application state
  //only the state this reducer is responsible for
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
