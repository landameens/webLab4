import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Title from '../../../../components/Title'
import XSelect from './inputItems/SelectX'
import YText from './inputItems/InputY'
import RSelect from './inputItems/SelectR'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'
import apiCaller from '../../../../utils/apiCaller'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
    depositContext: {
        flex: 1,
    },
}))

export default function Form() {
    const classes = useStyles()
    const { x, y, r } = useSelector((state) => state.formState)
    const snackBar = useSnackbar()

    const handleSubmit = async event => {
        event.preventDefault()

        if ((x === null) || (y === null) || (r === null)) {
            snackBar.enqueueSnackbar('Заполните все поля', {
                variant: 'error',
            })
            return
        }

        const user = localStorage.getItem('user')

        const response = await apiCaller('POST', '/api/checkPoint', {
            x,
            y,
            r,
            user
        })

        console.log(response)
    }

    return (
        <>
            <Title>Данные для проверки</Title>
            <form className={classes.root}
                  noValidate
                  autoComplete='off'
                  onSubmit={handleSubmit}>
                <XSelect currentX={x} />
                <YText />
                <RSelect currentR={r} />
                <Button variant='contained'
                        color='primary'
                        type='submit'>
                    Проверить
                </Button>
            </form>
        </>
    )
}
