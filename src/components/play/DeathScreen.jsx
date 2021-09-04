import React, { useContext } from 'react'
import { Col } from 'react-bootstrap';
import { draw } from '../../drawing/draw';
import { useCanvas } from '../../hooks/useCanvas'
import { Context } from '../../reducer/Context';

export const DeathScreen = () => {
    const { game: { count } } = useContext(Context)

    const canvasRef = useCanvas(draw, count);

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
