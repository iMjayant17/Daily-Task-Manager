import React, { useState } from "react";
import TaskComponent from "./TaskComponent";

const Search = () => {

    const [Task, setTask] = useState("")
    const [TaskList, setTaskList] = useState([])

    const deleteTask = (index) => {
        setTaskList(TaskList.filter((_, i) => {
           return i !== index
       }))
   }
	return (
		<div style={{ height: "40px",margin:"10px" }}>
            <input
				type="text"
				style={{
					backgroundColor: "#1D1C21",
					border: "none",
					width: "40%",
					height: "100%",
					marginLeft: "25%",
                    marginTop: "1%",
                    color: "white",
                    fontSize: "22px",
                    borderRadius:"10px"
                }}
                value={Task}
                placeholder="    Enter your today TASKS...!!!"
                onChange={(e)=> {
                    setTask(e.target.value)   
                }}
                
            />

            <button style={{
                height: "115%",
                marginLeft: "20px",
                fontSize: "22px",
                backgroundColor: "green",
                borderRadius: "10px",
                alignItems: "center",
                color: "white",
            }}
                onClick={() => {
                    if (Task.trim() !== "") {
                     setTaskList([...TaskList, Task])
                    }
                    setTask("")
                }}>Add Task</button>
            

            
            <ul>
        {TaskList.map((value,key) => (
            <TaskComponent details={value} keys={key} deleteTasks = {deleteTask} />
        ))}
      </ul>
       
		</div>
	);
};

export default Search;
