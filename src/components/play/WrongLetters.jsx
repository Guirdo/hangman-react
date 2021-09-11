import React, { useContext } from 'react'
import { Alert } from 'react-bootstrap'
import { Context } from '../../reducer/Context'

export const WrongLetters = () => {
    const { game:{ wrongLetters } } = useContext(Context)

    return (
        <Alert
            className="my-5 animate__animated animate__bounce text-center"
            variant={'danger'}
        >
            {wrongLetters}
        </Alert>
    )
}
