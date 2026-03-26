import { createSlice, nanoid } from "@reduxjs/toolkit"; 

const initialState = {
    todos: [{id:1, text:"helloworld"}]
}

 export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo= {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id!==action.payload)
        },
        updateTodo: (state, action)=>{
            const {id, text}= action.payload;
         state.todos= state.todos.map((todo)=> todo.id===id ? {...todo, text}: todo)
        },

        // deleteTodo: (state, action )=>{
        //     const {id}= action.payload;
        //     state.todos= state.todos.filter((todo)=> todo.id!==id )
        // }  // this deleTodo is not needed bz above removetodo is  doing the same job 
    }       
 });

 export const{ addTodo ,removeTodo , updateTodo}= todoSlice.actions
 export default todoSlice.reducer