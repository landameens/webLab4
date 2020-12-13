import React from 'react'
import { Shape } from 'react-konva'

export default function Triangle() {
    return (
        <Shape
            sceneFunc={(context, shape) => {
                context.beginPath()
                context.moveTo(150, 180)
                context.lineTo(290, 180)
                context.lineTo(150, 250)
                context.lineTo(150, 180)
                context.closePath()
                context.fillStrokeShape(shape)
            }}
            fill="pink"
        />
    )
}
