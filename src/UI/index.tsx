// eslint-disable-next-line no-use-before-define
import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Chatwindow from './ChatWindow'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2),
    top: '0px',
    bottom: '0px'
  }
}))

const UI = () => {
  const classes = useStyles()
  return (
        <Paper className={classes.root}>
            <Chatwindow/>
        </Paper>
  )
}

export default UI
