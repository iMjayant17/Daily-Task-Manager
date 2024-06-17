import React, { useState } from 'react'

const TaskComponent = ({ keys,details,deleteTasks }) => {
    
    const [isChecked, SetisChecked] = useState(false)


  return (
      <div style={{
        backgroundColor:isChecked?"green":"#1F1F1F",
        color: "white",
        textAlign: "left",
          fontFamily: "Segoe UI",
        fontSize: "20px",
        fontWeight: "bold",
        marginLeft: '23%',
        padding:"10px",
          borderRadius: "5px",
          width: "49%",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
      justifyContent: "space-between",
          overflow:"hidden"
    }}>
          
          <div style={{
                 marginLeft:"10px"
          }}>
              {details}
          </div>
          <input type='checkbox' checked={isChecked} onClick={() => {
              SetisChecked(true)
            
              setTimeout(() => {
                  if (!isChecked) deleteTasks(keys)
                  SetisChecked(false)
                },1000)


          }}
              style={{
                  marginRight: "0px",
                  marginLeft: "10px",
                  transform:"scale(1.8)",
          }}/>
      
          </div>
          
  )
}

export default TaskComponent
