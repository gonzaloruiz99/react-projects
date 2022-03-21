
 export const reducer = (state,action) =>{
  if(action.type === 'ADD_ITEM'){
    const newList = [...state.tasks, action.payload]

    return{...state, tasks:newList, isModalOpen:true, modalContent:'item added', modalType:'success'}
  }
  if(action.type === 'DONE_ITEM'){
    const newList = [...state.completedTasks, action.payload]

    return{...state, completedTasks:newList, isModalOpen:true, modalContent:'item Completed!', modalType:'success'}
  }
  if(action.type === 'NO_VALUE'){
    return{...state, isModalOpen:true, modalContent:'please enter value', modalType:'danger'}
  }


  if(action.type === 'REMOVE_ITEM'){
    const filterPeople = state.tasks.filter((task)=>
    task.id !== action.payload)
    return{...state, tasks:filterPeople}
  }
  if(action.type === 'REMOVE_DONE_ITEM'){
    const filterPeople = state.completedTasks.filter((task)=>
    task.id !== action.payload)
    return{...state, completedTasks:filterPeople}
  }


  if(action.type === 'EMPTY_LIST'){
    const newList = []
    return{...state, tasks:newList, completedTasks:newList,isModalOpen:true, modalContent:'list clear', modalType:'success'}
  }
  if(action.type === 'CLOSE_MODAL'){
    return{...state, isModalOpen:false}
    
  }


  throw new Error('no matching action type');
};

/*
export const reducer = (state,action) => {
    if(action.type === 'ADD_ITEM'){
        const newList = [...state.toDos, action.payload]
        return {...state, toDos:newList}
    }

    throw new Error('no matching action type');
}
*/
