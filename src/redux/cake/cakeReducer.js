import { BUY_CAKE } from "./cakeTypes"

const initialState={
    numbofCakes:10
}

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE :
            return{
                ...state, 
                numbofCakes:state.numbofCakes -1
            }
        default:
            return state
    }
}

export default cakeReducer;