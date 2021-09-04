import React, { useContext } from 'react'
import queryString from 'query-string'
import { Button, Form, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { Context } from '../../reducer/Context'
import { types } from '../../reducer/types'

export const MenuScreen = ({ history }) => {

    const { game: { word }, dispatch } = useContext(Context);

    const location = useLocation();
    const { q: query = word } = queryString.parse(location.search);

    const [formValues, handlInputChange] = useForm({
        wordSet: query
    });

    const { wordSet } = formValues;

    const handleStart = (e) => {
        e.preventDefault();

        dispatch({
            type: types.set_word,
            payload: {
                word: wordSet,
                count: 0
            }
        })

        history.replace('/play');
    }

    return (
        <Row className="justify-content-center animate__animated animate__backInUp">
            <div className="col-6 bg-success p-3">
                <h1 className="text-white">Menu</h1>

                <Form onSubmit={handleStart}>
                    <Form.Group
                        className="mt-3"
                    >
                        <Form.Label
                            className="text-white"
                        >
                            Enter a word
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="wordSet"
                            value={wordSet}
                            autoComplete="off"
                            onChange={handlInputChange}
                        />
                    </Form.Group>

                    <Button
                        className="mt-3"
                        type="submit"
                    >
                        Star game
                    </Button>
                </Form>
            </div>
        </Row>
    )
}
