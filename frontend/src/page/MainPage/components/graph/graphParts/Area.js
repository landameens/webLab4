import { Rect } from 'react-konva'
import React from 'react'
import apiCaller from '../../../../../utils/apiCaller'
import { addDot } from '../../../../../state/points/actions'
import checker from '../../../../../utils/checker'

export default function Area(props) {
    const hanldeClick = async event => {
        const r = props.r

        const getCoord = (event, k) => {
            return {
                x: ((event.evt.clientX - 190) * k).toFixed(2),
                y: ((330 - event.evt.clientY) * k).toFixed(2),
            }
        }

        const k = r / 140
        const coord = getCoord(event, k)
        const x = Number(coord.x)
        const y = Number(coord.y)

        const response = await apiCaller('POST', '/api/point', {
            x,
            y,
            r,
        }, true)

        props.dispatch(addDot({ id: null, x, y, r, result: checker(x, y, r) }))

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