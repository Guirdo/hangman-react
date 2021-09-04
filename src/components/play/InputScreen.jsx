import { useContext, useState, useEffect } from "react";
import { Button, Col, Form,Row } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { Context } from '../../reducer/Context'
import { types } from "../../reducer/types";
import { LetterScreen } from "./LetterScreen";
import { WrongLetters } from "./WrongLetters";

export const InputScreen = () => {

    const history = useHistory();

    const { game: { word },dispatch } = useContext(Context)

    const [rightLetters, setRightLetters] = useState([...word.toLowerCase().split('')])
    const [wrongLetters, setWrongLetters] = useState([])

    const [formValues, handleInputChange,reset] = useForm({
        letter: ''
    });

    const { letter } = formValues;

    const handleConfirm = (e) => {
        e.preventDefault()

        if (rightLetters.find(e => e === letter.toLowerCase())) {
            setRightLetters(rl => rl.map(
                le => le === letter ? letter.toUpperCase() : le
            ))
        }else{
            setWrongLetters( wl => [...wl,letter])

            dispatch({
                type: types.count_error,
                payload: 1
            })
        }

        reset()
    }

    const handleSorry = () =>{
        history.replace('/')
    }

    useEffect(() => {
        if(wrongLetters.length === 7){
            alert('Has perdido!')
        }
    }, [rightLetters,wrongLetters])

    return (
        <Col className="p-3">

            <Row className="justify-content-center my-4">
                {
                    rightLetters.map( (le,i) => (
                        <LetterScreen 
                            key={`${le}-${ i }`}
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
                    />

                    <Button
                        className="mt-3"
                        variant="primary"
                        type="submit"
                    >
                        Confirm
                    </Button>
                </Form.Group>
            </Form>
            
            <WrongLetters
                letters={wrongLetters}
            />

            {
                wrongLetters.length === 7 && 
                    <Button
                        variant={'warning'}
                        onClick={ handleSorry }
                    >
                        Sorry, click here! 
                    </Button>
            }
        </Col>
    )
}
