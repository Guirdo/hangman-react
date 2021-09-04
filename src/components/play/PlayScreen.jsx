import { Row } from 'react-bootstrap';
import { DeathScreen } from './DeathScreen'
import { InputScreen } from './InputScreen'

export const PlayScreen = () => {

    return (
        <div className="container animate__animated animate__bounceInUp">
            <h1 className="text-center">The hangman</h1>

            <Row className="justify-content-between">
                <DeathScreen />

                <InputScreen/>
            </Row>

        </div>
    )
}
