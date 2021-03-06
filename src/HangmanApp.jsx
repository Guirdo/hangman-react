import { AppRouter } from "./routers/AppRouter"
import { Context } from './reducer/Context'
import { useEffect, useReducer } from "react"
import { reducer } from "./reducer/reducer"

const init = () => {
    return {
        word: 'Taco',
        count: 0,
        rightLetters: [],
        wrongLetters: [],
    }
}

export const HangmanApp = () => {

    const [game, dispatch] = useReducer(reducer, {}, init);

    useEffect(() => {
        localStorage.setItem('game', JSON.stringify(game))
    }, [game])

    return (
        <Context.Provider value={{ game, dispatch }}>
            <AppRouter />
        </Context.Provider>
    )
}