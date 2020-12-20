import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from '../../components/Copyright'
import { MAIN, SIGN_UP } from '../../utils/routes'
import apiCaller from '../../utils/apiCaller'
import { useInput } from '../../utils/useInput'
import { useHistory } from 'react-router'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/featured/?nature)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function SignInPage() {
    const classes = useStyles()
    const { onChange: onChangeLogin, value: login } = useInput('')
    const { onChange: onChangePassword, value: password } = useInput('')
    const snackBar = useSnackbar()
    const history = useHistory()

    useEffect(() => {
        if (localStorage.getItem('user')) {
            history.push(MAIN)
        }
    }, [])

    const handleSubmit = async event => {
        event.preventDefault()
        if ((login === '') || (password === '')) {
            snackBar.enqueueSnackbar('Заполните все поля', {
                variant: 'error',
            })
            return
        }
        const response = await apiCaller('POST', '/api/signIn', {
            login,
            password,
        })

        console.log(response)

        switch (response.code) {
            case '2U0':
                localStorage.setItem('user', response.user)
                snackBar.enqueueSnackbar('Вы успешно вошли в аккаунт', {
                    variant: 'success',
                })
                history.push(MAIN)
                break
            case '4U1':
                snackBar.enqueueSnackbar('Такого пользователя не существует', {
                    variant: 'error',
                })
                break
            case '4U2':
                snackBar.enqueueSnackbar('Неверный пароль', {
                    variant: 'error',
                })
                break
            default:
                break
        }

    }

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Вход
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='login'
                            label='Логин'
                            name='login'
                            autoComplete='login'
                            autoFocus
                            onChange={onChangeLogin}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Пароль'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            onChange={onChangePassword}
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                            onSubmit={handleSubmit}>
                            Войти
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href={SIGN_UP} variant='body2'>
                                    Нет аккаунта? Зарегистрироваться
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}
