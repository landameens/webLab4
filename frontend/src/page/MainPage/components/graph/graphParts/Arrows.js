import React from 'react'
import { Shape } from 'react-konva'

export default function Arrows() {
    return (
        <Shape
            sceneFunc={(context, shape) => {
                context.beginPath()
                context.moveTo(147, 40)
                context.lineTo(153, 40)
                context.stroke()
                context.moveTo(147, 110)
                context.lineTo(153, 110)
                context.stroke()
                context.moveTo(220, 177)
                context.lineTo(220, 183)
                context.stroke()
                context.moveTo(290, 177)
                context.lineTo(290, 183)
                context.stroke()
                context.moveTo(147, 250)
                context.lineTo(153, 250)
                context.stroke()
                context.moveTo(147, 320)
                context.lineTo(153, 320)
                context.stroke()
                context.moveTo(80, 177)
                context.lineTo(80, 183)
                context.stroke()
                context.moveTo(10, 177)
                context.lineTo(10, 183)
                context.stroke()
                context.moveTo(320, 175)
                context.lineTo(330, 180)
                context.lineTo(320, 185)
                context.stroke()
                context.moveTo(145, 10)
                context.lineTo(150, 0)
                context.lineTo(155, 10)
                context.stroke()
                context.moveTo(0, 0)
                context.closePath()
                context.fillStrokeShape(shape)
            }}
            stroke="black"
        />
    )
}
