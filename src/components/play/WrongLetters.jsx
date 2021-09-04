import React from 'react'
import { Alert } from 'react-bootstrap'

export const WrongLetters = ({letters}) => {
    return (
        <Alert
            className="my-5"
            variant={'danger'}
        >
            {letters}
        </Alert>
    )
}
