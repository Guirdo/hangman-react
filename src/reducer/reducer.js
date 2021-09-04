import { types } from "./types"

export const reducer = (state = {},action) => {

    switch(action.type){
        case types.set_word:
            return {
                ...action.payload,
            }
        
        case types.count_error:
            return {
                ...state,
                count: state.count +1
            }
        
        default:
            return state;
    }

}