import React, { useState, useRef, useEffect } from "react";


const Test = () => {
    
    //useRef
    // 1. access to DOM element and manipulate them
    // 2. useRef to store the previous state
    // 3. hold mutable vlaue prevent re-render of component

    //useMemo
    // 

    const [name, setName] = useState("");
    const [counter, setCounter] = useState(0);
    const previousRef = useRef("");
    const inputE1 = useState("");
    // console.log(inputE1);

    const reset = () => {
        setName("");
        inputE1.current.focus();
    }

    useEffect(() => {
        previousRef.current = counter;
    }, [counter]);
    
    return (
        <div >
            <input autoComplete = 'off'  ref = {inputE1} type="text" name = "name" value = {name} onChange = {(e)=>{setName(e.target.value)}} />
            <button onClick = {reset} >Reset</button>
            <div> My Name is {name}</div>
            <div>
                <h1> counter  : {counter} </h1>
                {typeof previousRef.current !== "undefined" && (
                    <h2> previous value : {previousRef.current} </h2>
                )}
                <button onClick = {(e)=> setCounter(Math.ceil(Math.random() * 100))}>Generate Number</button>
                
            </div>
        </div>
    );
}

export default Test;