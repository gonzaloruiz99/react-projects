import React,{useState,useReducer, useEffect } from 'react'
import Attribution from './Attribution';

import {reducer} from './reducer';
import Modal from './Modal';
import DarkMode from './DarkMode';






const defaultState = {
    tasks : [],
    completedTasks : [],
    isModalOpen : false,
    modalContent: '',
    modalType: '',
    isCompleted:false,
};


const App = () => {

      useEffect(()=>{ // dynamic css and title
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./styles/todoapp.css";
  
        document.head.appendChild(link);
        document.title = "ToDo App | GR projects";
    }, [])
    
      


    
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [displayList, setDisplayList] = useState('all')
    

    const handleSubmit = (e) => { // Crea un nuevo item en allTasks y despacha bajo 'ADD_ITEM'
        e.preventDefault();
        
        if(task){
            const newTask = {id: new Date().getTime().toString(), task:task, isCompleted: false};
            dispatch({type:'ADD_ITEM', payload: newTask});

            setTask('');
        }else{
            dispatch({type:'NO_VALUE'});
        }
        
    }

    const closeModal = ()=>{ // Cierra Modal
        dispatch({type:'CLOSE_MODAL'});
    };


    const changeCategory = (item) =>{
        const {id, task, isCompleted} = item;

        if(isCompleted){
            
            dispatch({type:'REMOVE_DONE_ITEM', payload:id});
            const newTask = {id, task:task, isCompleted: true};
            dispatch({type:'ADD_ITEM', payload: newTask});
        }else if(!isCompleted){
            dispatch({type:'REMOVE_ITEM', payload:id});
            const doneTask = {id, task:task, isCompleted: true};
            dispatch({type:'DONE_ITEM', payload: doneTask});
        }

    }




    return (
        <>
        <header></header>
        <main>
            <div className="main-container">
                <section className="title">
                    <h1>t o d o</h1>
                    <DarkMode></DarkMode>
                </section>
                <section className="new-item">
                    {state.isModalOpen && ( //Modal Solo si esta activo el isModalOpen.
                        <Modal modalContent={state.modalContent} modalType={state.modalType} closeModal={closeModal}></Modal>
                    )}

                    <form action="" onSubmit={handleSubmit}> 
                        <input type="text" placeholder="Create a new todo..." value={task}
                        onChange={(e)=>setTask(e.target.value )}/>
                    </form>
                </section>

                <section className="item-list">
                    {(displayList === 'all' ||  displayList === 'active'  ) && 
                    state.tasks.map((item)=>{ // Despliega los items activos en "all" o en "active"               
                        return <div className="item" key={item.id}>
                            <div className="left">
                                <button className="circle" 
                                onClick={() => changeCategory(item)}></button>
                                <h3>{item.task}</h3>
                            </div>
                            <button>
                                <img src="./styles/images8/icon-cross.svg" alt="x" 
                                onClick={()=> dispatch({type:'REMOVE_ITEM', payload:item.id})}/>    
                            </button>
                        </div>
                    })}
                    {(displayList === 'all' ||  displayList === 'completed'  ) && // Despliega los items hechos en "all" o en "completed"  
                     state.completedTasks.map((item)=>{            
                        return <div className="item completed" key={item.id}>
                            <div className="left">
                                <button className="circle task-done" 
                                onClick={() => changeCategory(item)}></button>
                                <h3>{item.task}</h3>
                            </div>
                            <button>
                                <img src="./styles/images8/icon-cross.svg" alt="x" 
                                onClick={()=> dispatch({type:'REMOVE_DONE_ITEM', payload:item.id})}/>    
                            </button>
                        </div>
                    })
                    }


                    <div className="items-left">
                        <p>{state.tasks.length} items left</p>
                        <div className="filter-btns">
                            <button onClick={()=>setDisplayList('all')}>all</button>
                            <button onClick={()=>setDisplayList('active')}>active</button>
                            <button onClick={()=>setDisplayList('completed')}>completed</button>
                        </div>
                        <button onClick={()=>dispatch({type:'EMPTY_LIST'})}>clear items</button>
                    </div>

                    
                </section>

            </div>         
        </main>
        <Attribution></Attribution>
        </>
    )
}

export default App
