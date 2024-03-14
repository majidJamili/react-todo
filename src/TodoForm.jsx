import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create"
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

import { useState } from "react";

function TodoForm({addTodo}){
    const [text, setText] = useState(""); 
    const handleChange = (evt)=>{
        setText(evt.target.value)
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault(); 
        addTodo(text)
        setText("")
    }
    return(
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Create to do " 
                    variant="outlined" 
                    value={text} 
                    onChange={handleChange}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                              <IconButton aria-label="create todo" edge="end" type="submit">
                                <Create/>
                              </IconButton>
                            </InputAdornment>                        
                    }}
                />
            </form>       
        </ListItem>
    );
}

export default TodoForm; 
