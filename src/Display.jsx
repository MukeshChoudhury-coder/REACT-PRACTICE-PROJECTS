import style from "./Display.module.css";
function Display({current}){
    return(
        <>
        <input className={style.display} type="text" 
       value={current}  readOnly/>
        </>
    )
}
export default Display


