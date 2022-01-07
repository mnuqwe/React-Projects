import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>No of cakes - {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfCakes : state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)