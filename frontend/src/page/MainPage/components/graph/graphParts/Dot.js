import React from 'react'
import { Circle } from 'react-konva'

export default function Dot(props) {
    return (
        <Circle x={props.x} y={props.y} radius={3} fill='black' />
    )
}