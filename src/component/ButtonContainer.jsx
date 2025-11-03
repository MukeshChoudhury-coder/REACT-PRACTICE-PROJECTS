import style from "./ButtonsContainer.module.css"

        function ButtonContainer({handleNumbers}){
            const buttonNames=["c", "1", "2", "+","3","4","-", "5", "6","*" , "7"
        ,"8","/","=","9","0","."
    ]
            return (
                <>
                <div className={style.btns}>
            {buttonNames.map((btns)=>{
               return <button className={style.button} onClick={()=>handleNumbers(btns)}>{btns}</button>
            })}
      </div>
                </>
            )
        }
        export default ButtonContainer

       