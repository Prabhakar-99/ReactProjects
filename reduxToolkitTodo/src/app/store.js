import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice';    // we are importing reducer so i can name anything while importing like myReducer, todoReducer ,prabhakrReducer

export const store = configureStore({
    reducer: todoReducer
})