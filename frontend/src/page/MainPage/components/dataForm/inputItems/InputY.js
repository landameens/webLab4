import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import FormControl from '@material-ui/core/FormControl'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

const validationSchema = yup.number({
    y: yup.number,
})

export default function YText() {
    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            y: '',
        },
        validationSchema: validationSchema,
        validateOnChange: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <div>
            <FormControl className={classes.formControl}>
                <TextField
                    id="standard-basic"
                    name="y"
                    label="Y"
                    value={formik.values.y}
                    onChange={formik.handleChange}
                    error={formik.touched.y && Boolean(formik.errors.y)}
                    helperText={formik.touched.y && formik.errors.y}
                />
            </FormControl>
        </div>
    )
}
