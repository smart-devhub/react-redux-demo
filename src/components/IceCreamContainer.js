import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/icecreame/iceCreamActions'

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Ice Cream Container:{props.numbofIceCream}</h2>
            <button onClick={props.buyIcecream}>buy IceCream</button>
        </div>
    )
}

const mapStatetoProps=state=>{
    return{
        numbofIceCream:state.IceCream.numbofIceCreams
    }
}
const mapDispatchtoProps=dispatch=>{
    return{
        buyIcecream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(IceCreamContainer)
