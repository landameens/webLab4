import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from '../../../../components/Title'

export default function History(props) {
    return (
        <>
            <Title>История</Title>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        {/*<TableCell>Дата</TableCell>*/}
                        <TableCell>X</TableCell>
                        <TableCell>Y</TableCell>
                        <TableCell>R</TableCell>
                        <TableCell align='right'>Результат попадания</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.dots.map((dot, index) => (
                        <TableRow key={index}>
                            {/*<TableCell>{dot.date}</TableCell>*/}
                            <TableCell>{dot.x}</TableCell>
                            <TableCell>{dot.y}</TableCell>
                            <TableCell>{dot.r}</TableCell>
                            <TableCell align='right'>{String(dot.result)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
