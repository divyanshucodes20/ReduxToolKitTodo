import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello world"}]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload//yaha payload.text bhi likhna padta agar variable ka name text na hota to
            }
            state.todos.push(todo)
        },//state aur action har baar har ek function ke syntax me milega yahanpe state ka matlab abhi jo todo wali state ya array hai uske andar kya kya hai us,a access milta hai aur action ka mtlb ki jaise add todo hai to usme todo ka id aur todo chaiye toh woh variables with data actionme aata h
        removeTodo:(state,action)=>{
          state.todos=state.todos.filter((todo)=>todo.id!==action.payload)  
        },
        updateTodo:(state,action)=>{
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
           if (todo) {
            todo.text = action.payload.text; // Update the text
            }
        },
    }
})
export const{addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer