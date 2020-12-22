import React, { useState } from 'react'
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

const yValidators = [
    {
        type: 'AMOUNT',
        isValid: (value) => value.length < 5,
        errorMessage: 'Переменная Y должна быть меньше 5 символов',
    },
    {
        type: 'NULL_SAFETY',
        isValid: (value) => value !== '',
        errorMessage: 'Переменная Y не может быть пустой строкой',
    },
    {
        type: 'CHECK_TYPE',
        isValid: (value) => !!Number(value) || Number(value) === 0,
        errorMessage: 'Переменная Y должна быть числом',
    },
    {
        type: 'RANGE',
        isValid: (value) => Number(value) >= -5 && Number(value) <= 5,
        errorMessage: 'Переменная Y должна находиться в промежутке от -5 до 5',
    },
]

export default function YText() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [error, setError] = useState(null)
    const [isValid, setValidity] = useState(false)
    const [validationType, setValidationType] = useState(null)

    const handleChange = event => {
        const value = event.target.value
        for (const validator of yValidators) {
            if (!validator.isValid(value)) {
                console.log(value)
                console.log(validator.type)
                setValidity(false)
                setValidationType(validator.type)

                if (validator.type === 'NULL_SAFETY') {
                    setValue('')
                }

                if (validator.type === 'CHECK_TYPE' && value === '-') {
                    setValue('-')
                    return
                }

                setError(validator.errorMessage)
                return
            }
        }

        setValidity(true)
        setValue(value)
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
                    value={value}
                    onChange={handleChange}
                />
            </FormControl>
        </div>
    )
}
