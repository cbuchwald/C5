// eslint-disable-next-line no-use-before-define
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import History from './History'
import InputArea from './InputArea'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600
  }
}))

const ChatWindow = () => {
  const classes = useStyles()
  return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2} direction='column'>
                    <Grid item xs={12}>
                        <History/>
                    </Grid>
                    <Grid item xs={12}>
                        <InputArea/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
  )
}

export default ChatWindow
