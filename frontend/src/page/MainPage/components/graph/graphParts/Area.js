import { Rect } from 'react-konva'
import React from 'react'
import { useSnackbar, withSnackbar } from 'notistack'
import apiCaller from '../../../../../utils/apiCaller'

function Area(props) {
    const snackBar = useSnackbar()

    const hanldeClick = async event => {
        console.log(event)
        if (props.r == null) {
            console.log(snackBar)
            snackBar.enqueueSnackbar('Выберите R', {
                variant: 'error',
            })
            return
        }
        console.log(event)
        const x = event.evt.clientX
        const y = event.evt.clientY

        const xNormal = (x - 190) / 140 * props.r
        const yNormal = (330 - y) / 140 * props.r
        console.log({ xNormal, yNormal })

        const response = await apiCaller('POST', '/api/checkPoint', {
            xNormal,
            yNormal,
            r: props.r,
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
export default Area