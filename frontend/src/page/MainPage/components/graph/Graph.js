import React from 'react'
import { Layer, Stage } from 'react-konva'
import Title from '../../../../components/Title'
import YAxe from './graphParts/YAxe'
import XAxe from './graphParts/XAxe'
import Square from './graphParts/Square'
import Circle from './graphParts/Circle'
import Triangle from './graphParts/Triangle'
import Arrows from './graphParts/Arrows'
import Labels from './graphParts/Labels'
import { useSelector } from 'react-redux'
import Area from './graphParts/Area'


export default function Graph() {
    const { r } = useSelector((state) => state.formState)

    return (
        <>
            <Title>График</Title>
            <Stage width={340} height={340}>
                <Layer>
                    <Square />
                    <Circle />
                    <Triangle />
                    <YAxe />
                    <XAxe />
                    <Arrows />
                    <Labels r={r} />
                    <Area r={r}/>
                </Layer>
            </Stage>
        </>
    )
}
