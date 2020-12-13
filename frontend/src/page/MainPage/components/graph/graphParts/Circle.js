import React from 'react'
import { Shape } from 'react-konva'

export default function Circle() {
    return (
        <Shape
            sceneFunc={(context, shape) => {
                context.beginPath()
                context.moveTo(150, 180)
                context.arc(150, 180, 140, 0, (3 * Math.PI) / 2, true)
                context.closePath()
                context.fillStrokeShape(shape)
            }}
            fill="pink"
        />
    )
}
