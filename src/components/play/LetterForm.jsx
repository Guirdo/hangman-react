import { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm';
import { Context } from '../../reducer/Context';
import { types } from '../../reducer/types';

export const LetterForm = () => {

    const { game: { rightLetters,wrongLetters }, dispatch } = useContext(Context)

    const [formValues, handleInputChange, reset] = useForm({
        letter: ''
    });

    const { letter } = formValues;

    const handleConfirm = (e) => {
        e.preventDefault()

        if(rightLetters.find(e => e === letter.toLowerCase())){
            dispatch({
                type: types.add_rightletter,
                payload: rightLetters.map(
                    le => le === letter ? letter.toUpperCase() : le
                )
            })
        }else{
            dispatch({
                type: types.add_wrongletter,
                payload: [...wrongLetters,letter]
            })
        }

        reset()
    }

    return (
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
    )
}
