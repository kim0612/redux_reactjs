import {createStore} from 'redux';

const reducer = (state, action) => {
  if (state === undefined){
    return {
      mode : "welcome",
      selected_id : 0,
      contents : [
        {id:0, title:"HTML", desc:"HTML is ..."},
        {id:1, title:"CSS", desc:"CSS is ..."},
        {id:2, title:"JS", desc:"JS is ..."},
      ]
    }
  }
  else{
    let newState;
    switch (action.type){
      case "CHANGE_MODE":
        newState = {
          ...state,
          mode : action.mode
        }
        console.log(action, action.type, state, newState);
        return newState;
      case "SELECT_CONTENT":
        newState = {
          ...state,
          mode:"read",
          selected_id : action.selected_id
        }
        console.log(action, action.type, state, newState);
        return newState;
      default:
        alert("reducer에 해당 action type이 없다!!")
        return state;
    }
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
)

export default store;