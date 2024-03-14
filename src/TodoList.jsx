import * as React from 'react';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import {Box, Typography} from '@mui/material';


const getInitialData = () =>{
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return []; 
    return data; 
}; 


const initialTodos = [
    {id:1, text:"Balance Boat", completed:false},
    {id:2, text:"Prep Parts", completed:false},
    {id:3, text:"Sand Clean or Edges", completed:false},
    {id:4, text:"Tack Parts", completed:true},
    {id:5, text:"Fully Weld Parts", completed:false},
]

function TodoList(){
    const [todos, setTodos]=useState(getInitialData);
    useEffect(()=>{
        localStorage.setItem(
            'todos', 
            JSON.stringify(todos)
        )
    }, [todos])

    const removeTodo = (id)=>{
        setTodos(prevTodos =>{
            return prevTodos.filter(t => t.id !==id)
        })

    }
    const toggleTodo = (id) =>{
        setTodos(prevTodos => {
            return prevTodos.map(todo=>{
                if(todo.id===id){
                    return {...todo, completed:!todo.completed}
                }else{
                    return todo; 
                }
            })
        })
    }
    const addTodo = (text)=>{
        setTodos(prevTodos=>{
           return [...prevTodos, {text:text, id:crypto.randomUUID(), completed:false}]
        })
    }

    return(
        <Box 
            sx={{
                display:'flex',
                justifyContent:"center",
                flexDirection:"column", 
                alignItems:"center", 
                m:3, 


            }}
        >
            <Typography variant="h3" gutterBottom>
                TO-DO's
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {todos.map((todo)=>(
                        <TodoItem todo={todo} key={todo.id} remove={removeTodo} toggle={()=> toggleTodo(todo.id)}  />          
                    )
                )}
                <TodoForm addTodo={addTodo}/>

            </List>
        </Box>


    );
}

export default TodoList; 

