import React from 'react'
import { Alert } from 'react-bootstrap'

export const WrongLetters = ({letters}) => {
    return (
        <Alert
            className="my-5 animate__animated animate__bounce text-center"
            variant={'danger'}
        >
            {letters}
        </Alert>
    )
}
