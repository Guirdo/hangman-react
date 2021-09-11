import { Row } from 'react-bootstrap';
import { DeathScreen } from './DeathScreen'
import { InputScreen } from './InputScreen'

export const PlayScreen = () => {

    return (
        <Row className="justify-content-between px-5">
            <DeathScreen />

            <InputScreen />
        </Row>
    )
}
