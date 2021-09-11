import React, { useContext } from 'react'
import { Col } from 'react-bootstrap';
import { draw } from '../../drawing/draw';
import { useCanvas } from '../../hooks/useCanvas'
import { Context } from '../../reducer/Context';

export const DeathScreen = () => {
    const { game: { wrongLetters } } = useContext(Context)

    const canvasRef = useCanvas(draw, wrongLetters.length);

    return (
        <Col className="p-0">
            <canvas
                width="600"
                height="450"
                ref={canvasRef}
            />
        </Col>
    )
}
