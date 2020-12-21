import React, { useState } from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from '../../../../components/Title'
import { Modal } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}))

export default function History(props) {
    const [isOpen, setOpen] = useState(false)
    const classes = useStyles()

    const handleModalOpen = (event) => {
        event.preventDefault()
        setOpen(true)
    }

    const handleModalClose = (event) => {
        event.preventDefault()
        setOpen(false)
    }

    const modalBody = (
        <>
            Hello world
            <button onClick={handleModalClose}>Close</button>
        </>
    )

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
            <div className={classes.seeMore}>
                <Link color='primary' href='#' onClick={handleModalOpen}>
                    Увидеть больше результатов
                </Link>
            </div>
            <Modal open={isOpen} onClose={handleModalClose}>
                {modalBody}
            </Modal>
        </>
    )
}
