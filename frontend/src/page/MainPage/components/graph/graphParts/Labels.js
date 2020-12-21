import React from 'react'
import { Text } from 'react-konva'

export default function Labels(props) {
    let val = props.r
    let halfVal = val / 2

    return (
        <>
            <Text x={212} y={160} text={halfVal} />
            <Text x={160} y={105} text={halfVal} />
            <Text x={70} y={160} text={'-' + halfVal} />
            <Text x={160} y={245} text={'-' + halfVal} />
            <Text x={285} y={160} text={val} />
            <Text x={160} y={35} text={val} />
            <Text x={3} y={160} text={'-' + val} />
            <Text x={160} y={315} text={'-' + val} />
            <Text x={320} y={190} text={'X'} />
            <Text x={135} y={5} text={'Y'} />
        </>
    )
}
