import { useState } from "react"
import style from "./App.module.css"
import Display from "./Display"
import ButtonContainer from "./component/ButtonContainer"
function App(){
 const[currentVal, setVal]=useState('0')

 const handleNumbers=(pere)=>{
   if(pere==="c"){
    setVal('')
   }else if(pere==="="){
    let newVal=eval(currentVal)
    console.log(newVal)
    setVal(newVal)
   }else{
   let againNew= currentVal+pere
   setVal(againNew)
   }
 }
  return(
    <>
    <div className={style.container}>
     <Display current={currentVal}></Display>
      <ButtonContainer handleNumbers={handleNumbers} ></ButtonContainer>
    </div>
    </>
  )
}
export default App

