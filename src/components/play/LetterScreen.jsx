import { Col } from 'react-bootstrap'

export const LetterScreen = ({ letter }) => {
    return (
        <Col 
            sm={1}
            className="animate__animated animate__bounce"
        >
            <Col>
                <p className={'text-dark text-center letter-bold'}>
                    {
                        letter === letter.toUpperCase() ? letter : '__'
                    }
                </p>
            </Col>
        </Col>
    )
}
