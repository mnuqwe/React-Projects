import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No of Cakes - {noOfCakes}</h2>
            <button onClick = {()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer