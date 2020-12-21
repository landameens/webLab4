import React from 'react'
import { Circle } from 'react-konva'

export default function Dot(props) {
    const x = (props.x * 140 / props.r) + 150
    const y = 180 - (props.y * 140 / props.r)
    return (
        <Circle x={x} y={y} radius={3} fill={props.result ? 'green' : 'red'} />
    )
}