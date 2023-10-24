import React,{useState} from "react";

const BasicForm=()=>{

    const [name,setName]= useState("")


    function updateName(event){

        setName(event.target.value)
    }  
    function showInput(){
        
    }

    return(
        <div>
            <input type="text" placeholder="Enter name" 
            onChange={updateName}
            />
            <button onClick={showInput}>Submit</button>
         



        </div>
    )

   




}

export default BasicForm;
