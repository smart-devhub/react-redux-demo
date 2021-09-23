import {BUY_ICECREAM} from './IcecreamTypes'

const initialState={
    numbofIceCreams:20,
}
const IceCreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,numbofIceCreams:state.numbofIceCreams-2
            }
        default:
            return state;
    }
}

export default IceCreamReducer;