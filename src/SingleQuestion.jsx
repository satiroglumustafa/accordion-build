import { useState } from "react"
import "./Questions.css"

const SingleQuestion = ({title,info}  )=> {

    const [showInfo,setShowInfo] = useState(false)

    const showFunct = ()=> {
        setShowInfo (!showInfo)
    }

    return (
        <article className="question">
                <header>
                    <h4>{title}</h4>
                    <button className="btn" onClick={showFunct} >
                        { showInfo ? "-" :  "+"}
                    </button>
                </header>
                {showInfo ? <p>{info}</p> : <p> </p>}
        </article>
    )
}
export default SingleQuestion