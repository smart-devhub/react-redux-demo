import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buycake } from '../redux/cake/cakeActions'

const HookcakeContainer = () => {

    const numbofCakes=useSelector(state=>state.cake.numbofCakes)
    const dispatch=useDispatch()
    return (
        <div>
            <h2>No Of Cakes:{numbofCakes}</h2>
            <button onClick={()=>dispatch(buycake())}>buy cake</button>
        </div>
    )
}

export default HookcakeContainer
