import React, { useContext } from 'react'
import { Row } from 'react-bootstrap';
import { Context } from '../../reducer/Context'
import { DeathScreen } from './DeathScreen'
import { InputScreen } from './InputScreen'

export const PlayScreen = () => {

    const { game: { count } } = useContext(Context)

    return (
        <div className="container">
            <h1 className="text-center">The hangman</h1>

            <Row className="justify-content-between">
                <DeathScreen
                    count={count}
                />

                <InputScreen/>
            </Row>

        </div>
    )
}
