import React, { useContext } from 'react'
import { Button, Row } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { Context } from '../../reducer/Context';
import { types } from '../../reducer/types';

export const ResetButton = ({ hasWon }) => {
    const { dispatch } = useContext(Context)

    const history = useHistory();

    const handleRestart = () => {
        dispatch({
            type: types.reset_game
        })

        history.replace('/')
    }

    return (
        <Row className="justify-content-center">
            {
                !hasWon
                    ? (
                        <Button
                            variant={'warning'}
                            onClick={handleRestart}
                            className="col-7 animate__animated animate__rubberBand"
                        >
                            Sorry, try again!
                        </Button>
                    )
                    : (
                        <Button
                            variant='success'
                            onClick={handleRestart}
                            className="col-7 animate__animated animate__rubberBand"
                        >
                            Congratulations! Keep it up!
                        </Button>
                    )
            }
        </Row>
    )
}
