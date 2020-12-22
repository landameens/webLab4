import React, { useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Graph from './components/graph/Graph'
import Form from './components/dataForm/Form'
import History from './components/history/History'
import Copyright from '../../components/Copyright'
import { Avatar, Menu, MenuItem } from '@material-ui/core'
import { useHistory } from 'react-router'
import { ROOT } from '../../utils/routes'
import { deepOrange } from '@material-ui/core/colors'
import apiCaller from '../../utils/apiCaller'
import { useDispatch, useSelector } from 'react-redux'
import { getDots } from '../../state/points/actions'

const drawerWidth = 240


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 420,
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}))

export default function MainPage() {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const { dots } = useSelector(state => state.dotsState)

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    const [anchorEl, setAnchorEl] = React.useState(null)
    const openAcc = Boolean(anchorEl)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleCloseExit = () => {
        setAnchorEl(null)
        localStorage.removeItem('user')
        history.push(ROOT)
    }

    useEffect(async () => {
        const response = await apiCaller('POST', '/api/point/user', {}, true)
        dispatch(getDots(response))
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='absolute'
                className={clsx(classes.appBar)}>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component='h1'
                        variant='h6'
                        color='inherit'
                        noWrap
                        className={classes.title}>
                        Проверятель
                    </Typography>
                    <IconButton
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleMenu}
                        color='inherit'
                    >
                        <Avatar className={classes.orange}>{localStorage.getItem('user').substring(0, 1)}</Avatar>
                    </IconButton>
                    <Menu
                        id='menu-appbar'
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={openAcc}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleCloseExit}>Выйти из аккаунта</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth='lg' className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={10} md={12} lg={8}>
                            <Paper className={fixedHeightPaper}>
                                <Graph dots={dots} />
                            </Paper>
                        </Grid>
                        <Grid item xs={10} md={12} lg={4}>
                            <Paper className={fixedHeightPaper}>
                                <Form />
                            </Paper>
                        </Grid>
                        <Grid item xs={10} ld={12}>
                            <Paper className={classes.paper}>
                                <History dots={dots} />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    )
}
