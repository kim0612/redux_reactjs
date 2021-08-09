import {createStore} from 'redux';

const INCREMENT = "INCREMENT";

const reducer = (state, action)=>{
  if (state === undefined){
    return (
      {number : 10}
    )
  }
  else{
    switch (action.type) {
      case INCREMENT:
        const newState = {
          ...state,
          number : state.number + action.size
        }
        return newState;
      default:
        console.log(`there is no action type : ${action.type}`)
        return state;
    }
  }
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;