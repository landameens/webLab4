import { Rect } from 'react-konva'
import React from 'react'
import apiCaller from '../../../../../utils/apiCaller'

export default function Area(props) {
    const hanldeClick = async event => {
        const r = props.r

        const getCoord = (event, k) => {
            return {
                x: (event.evt.clientX - 190) * k,
                y: (330 - event.evt.clientY) * k,
            }
        }

        const k = r / 140
        const coord = getCoord(event, k)
        const x = coord.x
        const y = coord.y

        const response = await apiCaller('POST', '/api/point', {
            x,
            y,
            r,
        }, true)

        console.log(response)
    }

    return (
        <Rect x={0}
              y={0}
              width={350}
              height={350}
              onClick={hanldeClick}
        />
    )
}