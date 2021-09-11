import { types } from "./types"

export const reducer = (state = {}, action) => {

    switch (action.type) {
        case types.set_word:
            return {
                ...state,
                ...action.payload,
            }

        case types.count_error:
            return {
                ...state,
                count: state.count + 1
            }

        case types.add_rightletter:
            return {
                ...state,
                rightLetters: action.payload
            }

        case types.add_wrongletter:
            return {
                ...state,
                wrongLetters: action.payload
            }

        case types.reset_game:
            return {
                ...state,
                rightLetters: [],
                wrongLetters: [],
            }

        default:
            return state;
    }

}