import React,{useState} from "react";


const StateWithObject= ()=>{

    const [coins,setCoins]= useState({gold:0, silver:0, bronze:0})

    console.log(coins)
 




function inGold(){
    setCoins({...coins,gold : coins.gold+1 })
}

return(
    <div>


        <h1>Gold :{coins.gold}  Silver:{coins.silver}  Bronze:{coins.bronze} </h1>

        <button onClick={inGold}>Gold</button>

        <button onClick={()=>setCoins({...coins, silver : coins.silver + 1})}>Silver</button>

        <button onClick={()=>setCoins({...coins, bronze : coins.bronze + 1})}>Bronze</button>








    </div>



)
}

export default StateWithObject;