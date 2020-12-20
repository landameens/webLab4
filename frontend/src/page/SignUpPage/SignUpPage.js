import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Copyright from '../../components/Copyright'
import { MAIN, ROOT } from '../../utils/routes'

import apiCaller from '../../utils/apiCaller'
import { useInput } from '../../utils/useInput'
import { useHistory } from 'react-router'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function SignUpPage() {
    const classes = useStyles()
    const { onChange: onNameChange, value: name } = useInput('')
    const { onChange: onLoginChange, value: login } = useInput('')
    const { onChange: onPasswordChange, value: password } = useInput('')
    const snackBar = useSnackbar()
    const history = useHistory()

    const handleSubmit = async event => {
        event.preventDefault()
        if ((name === '') || (login === '') || (password === '')) {
            snackBar.enqueueSnackbar('Заполните все поля', {
                variant: 'error',
            })
            return
        }
        const response = await apiCaller('POST', '/api/register', {
            login,
            password,
            name,
        })

        console.log(response)

        switch (response.code) {
            case '2U1':
                localStorage.setItem('user', response.user)
                snackBar.enqueueSnackbar('Вы успешно зарегистрировались', {
                    variant: 'success',
                })
                history.push(MAIN)
                break
            case '4U3':
                snackBar.enqueueSnackbar('Логин уже используется другим пользователем', {
                    variant: 'error',
                })
                break
            default:
                break
        }
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Регистрация
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete='fname'
                                variant='outlined'
                                required
                                fullWidth
                                id='firstName'
                                label='Имя'
                                value={name}
                                onChange={onNameChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                required
                                fullWidth
                                id='login'
                                label='Логин'
                                autoComplete='login'
                                value={login}
                                onChange={onLoginChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                required
                                fullWidth
                                label='Пароль'
                                type='password'
                                id='password'
                                autoComplete='current-password'
                                value={password}
                                onChange={onPasswordChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        onSubmit={handleSubmit}
                        className={classes.submit}>
                        Зарегистрироваться
                    </Button>
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Link href={ROOT} variant='body2'>
                                Уже есть аккаунт? Войти
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    )
}
