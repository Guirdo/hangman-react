import { Col } from 'react-bootstrap'

export const LetterScreen = ({ letter }) => {
    return (
        <Col sm={1}>
            <Col>
                <p className={`${letter === letter.toUpperCase() ? 'text-dark' : 'text-white' } text-center letter-bold`}>
                    {
                        letter === letter.toUpperCase() ? letter : '__'
                    }
                </p>
            </Col>
            <Col className="text-center letter-bold">__</Col>
        </Col>
    )
}
