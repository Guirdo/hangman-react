import React from 'react'
import { Col } from 'react-bootstrap';
import { draw } from '../../drawing/draw';
import { useCanvas } from '../../hooks/useCanvas'

export const DeathScreen = ({ count }) => {

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
