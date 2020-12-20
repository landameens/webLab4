import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import { TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { updateY } from '../../../../../state/form/actions'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

export default function YText() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleChange = event => {
        dispatch(updateY(Number(event.target.value)))
    }

    return (
        <div>
            <FormControl className={classes.formControl}>
                <TextField
                    id='standard-basic'
                    name='y'
                    label='Y'
                    helperText='Число от -5 до 5'
                    type='tel'
                    pattern="^-?[0-9]\d*\.?\d*$"
                    onChange={handleChange}
                />
            </FormControl>
        </div>
    )
}
