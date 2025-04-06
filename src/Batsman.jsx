import { useState } from "react"
export default function Batsman (){
    const [runs,setRuns] = useState(0);
    const [sixes,setSixes] = useState(0)
    const [four,setFours] = useState(0)
    
    const handleSingles = ()=>{
        const updatedRuns = runs+1;
     setRuns(updatedRuns);
    }

    const handleFour = ()=>{
        const updatedRuns = runs +4;
        const updatedFour = four +1;
        setFours(updatedFour);
        setRuns(updatedRuns);
    }
    const handleSix = ()=>{
        const updatedRuns = runs + 6;
        const updatedSix = sixes +1;
        setSixes(updatedSix)
        setRuns(updatedRuns);
    }

    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            <p><small>Four: {four}</small></p>
            {
                runs > 50 && <p>Your Score: 50</p>
            }
            <h1>Score : {runs}</h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}