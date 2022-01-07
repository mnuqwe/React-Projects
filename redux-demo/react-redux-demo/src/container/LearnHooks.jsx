import React, {useState, useEffect} from 'react'

const LearnHooks = () => {
    const [noOfclick, setNoOfclick] = useState(0);
    let a = 0;

    useEffect(()=> {
            console.log("hi", a , noOfclick);
        }, [a]);
    
    return (
        <div>
            <h2>No of clicks are - {noOfclick} - {a}</h2>
            <button 
            onClick={()=>{
            setNoOfclick(noOfclick+1);
            a = a+1;
            } }>Click me</button>
        </div>
    )
}

export default LearnHooks
