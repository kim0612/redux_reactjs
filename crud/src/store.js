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

  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
)

export default store;