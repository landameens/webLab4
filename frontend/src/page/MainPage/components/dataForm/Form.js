import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Title from '../../../../components/Title'
import XSelect from './inputItems/SelectX'
import YText from './inputItems/InputY'
import RSelect from './inputItems/SelectR'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'

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

    return (
        <React.Fragment>
            <Title>Данные для проверки</Title>
            <form className={classes.root} noValidate autoComplete="off">
                <XSelect />
                <YText />
                <RSelect currentR={r}/>
                <Button variant="contained" color="primary">
                    Проверить
                </Button>
            </form>
        </React.Fragment>
    )
}
