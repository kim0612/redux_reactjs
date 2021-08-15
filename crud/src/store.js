import {createStore} from 'redux';

const reducer = (state, action) => {
  if (state === undefined){
    return {
      mode : "welcome",
      selected_id : 10,
      contents : [
        {id:0, title:"HTML", desc:"HTML is ..."},
        {id:4, title:"CSS", desc:"CSS is ..."},
        {id:5, title:"JS", desc:"JS is ..."},
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
        console.log("====================\ndispatch action : ",action, "\n기존 state", state,"\n새로운 state", newState);
        return newState;

      case "SELECT_CONTENT":
        newState = {
          ...state,
          mode:"read",
          selected_id : action.selected_id
        }
        console.log("====================\ndispatch action : ",action, "\n기존 state", state,"\n새로운 state", newState);
        return newState;

      case "CREATE_CONTENT":
        newState = {
          ...state,
          mode:"read",
          selected_id : state.contents[state.contents.length-1].id+1,
          contents : [
            ...state.contents,
            {id: state.contents[state.contents.length-1].id+1, title:action.title, desc:action.desc}
          ]
        }
        console.log("====================\ndispatch action : ",action, "\n기존 state", state,"\n새로운 state", newState);
        return newState;

      case "DELETE_CONTENT":
        let selected_contents;
        let selected_contents_index;
        for (let i=0 ; i<state.contents.length ; i++){
          if(state.contents[i].id === state.selected_id){
            selected_contents = state.contents[i];
            selected_contents_index = i;
            break;
          }
        }
        if(selected_contents === undefined){
          alert("선택된 컨텐츠가 없습니다!");
          return state;
        }
        else{
          if(window.confirm(`${selected_contents.title}를 정말 삭제하시겠습니까?`)){
            let new_contents = Array.from(state.contents);
            new_contents.splice(selected_contents_index,1);
            newState = {
              ...state,
              mode : "welcome",
              contents : new_contents
            }
            console.log("====================\ndispatch action : ",action, "\n기존 state", state,"\n새로운 state", newState);
            return newState;
          }
          else{
            return state;
          }
        }

      default:
        alert("reducer에 해당 action type이 없다!!")
        return state;
    }
  }
}
      
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);

export default store;