import React from 'react'
import { buycake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Cake Container:{props.numbofCakes}</h2>
            <button onClick={props.buycake}>buy cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        numbofCakes:state.cake.numbofCakes
    }
}

const mapDispatchtoProps=dispatch=>{
    return{
        buycake:()=>dispatch(buycake())
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(CakeContainer)
