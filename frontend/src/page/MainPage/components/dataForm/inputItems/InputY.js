import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import { TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { updateY } from '../../../../../state/form/actions'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

export default function YText() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const snackBar = useSnackbar()

    const handleChange = event => {
        const value = Number(event.target.value)
        if ((value >= 5) && (value <= -5)) {
            snackBar.enqueueSnackbar('Введите число от -5 до 5', {
                variant: 'error',
            })
            return
        }
        dispatch(updateY(value))
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <TextField
                    id='standard-basic'
                    name='y'
                    label='Y'
                    helperText='Число от -5 до 5'
                    type='number'
                    onChange={handleChange}
                />
            </FormControl>
        </div>
    )
}
