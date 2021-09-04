import { useContext, useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { Context } from '../../reducer/Context'
import { types } from "../../reducer/types";
import { LetterScreen } from "./LetterScreen";
import { WrongLetters } from "./WrongLetters";

export const InputScreen = () => {

    const history = useHistory();

    const { game: { word }, dispatch } = useContext(Context)

    const [rightLetters, setRightLetters] = useState([...word.toLowerCase().split('')])
    const [wrongLetters, setWrongLetters] = useState([])
    const [disable, setDisable] = useState(false)
    const [hasWon, setHasWon] = useState(false)

    const [formValues, handleInputChange, reset] = useForm({
        letter: ''
    });

    const { letter } = formValues;

    const handleConfirm = (e) => {
        e.preventDefault()

        if (rightLetters.find(e => e === letter.toLowerCase())) {
            setRightLetters(rl => rl.map(
                le => le === letter ? letter.toUpperCase() : le
            ))
        } else {
            setWrongLetters(wl => [...wl, letter])

            dispatch({
                type: types.count_error,
                payload: 1
            })
        }

        reset()
    }

    const handleRestart = () => {
        history.replace('/')
    }

    useEffect(() => {
        if (wrongLetters.length === 7) {
            alert('You lose!')
            setDisable(true)
        }

        if (rightLetters.toString() === rightLetters.toString().toUpperCase()) {
            alert('You won!')
            setDisable(true)
            setHasWon(true)
        }
    }, [rightLetters, wrongLetters])

    return (
        <Col className="p-3">

            <Row className="justify-content-center my-4">
                {
                    rightLetters.map((le, i) => (
                        <LetterScreen
                            key={`${le}-${i}`}
                            letter={le}
                        />
                    ))
                }
            </Row>

            <Form onSubmit={handleConfirm}>
                <Form.Group>
                    <Form.Label>
                        Enter a letter
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="letter"
                        value={letter}
                        onChange={handleInputChange}
                        autoComplete="off"
                        disabled={disable}
                    />

                    <Button
                        className="mt-3"
                        variant="primary"
                        type="submit"
                        disabled={disable}
                    >
                        Confirm
                    </Button>
                </Form.Group>
            </Form>

            <WrongLetters
                letters={wrongLetters}
            />

            <Row className="justify-content-center">
                {
                    wrongLetters.length === 7 &&
                    <Button
                        variant={'warning'}
                        onClick={handleRestart}
                        className="col-7 animate__animated animate__rubberBand"
                    >
                        Sorry, try again!
                    </Button>
                }
                {
                    hasWon &&
                    <Button
                        variant='success'
                        onClick={handleRestart}
                        className="col-7 animate__animated animate__rubberBand"
                    >
                        Congratulations! Keep it up!
                    </Button>
                }
            </Row>
        </Col>
    )
}
