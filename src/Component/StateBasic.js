import React,{useState} from "react";

//useState - reload the whole component
let a=10
const StateBasic=()=>{


const [ count,setCount]=useState(10);


function increaseCount(){
    setCount(count+1)
}
    



function increase(){
    a++
    console.log(a)
}

return(
    <div>
        <h1>
          a:   {a}
          </h1>
         
            <button onClick={increase} >
                Increase
                </button>
           
       

        <h1>Count: {count}</h1>
        <button onClick={increaseCount} >
                Increase
                </button>
    
    </div>
)

}


export default StateBasic;


    // const [count,updateCount]=useState(100)

    // //above statement is array destructring
    // // let x=useState(100)
    // //let [c,d]=x

    // // == > let[c,d] =useState(100)
     
   