import style from "./Container.module.css"
function Container({currentInput}){
    return(
    <>
    <div>{currentInput.map((list)=>{
      return  <p>{list}</p>
    })}</div>
    </>
    )
}
export default Container