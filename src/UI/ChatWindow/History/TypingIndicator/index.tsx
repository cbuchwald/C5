// eslint-disable-next-line no-use-before-define
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  indicator: {
    flexGrow: 1,
    paddingRight: '12px'
  }
}))

const TypingIndicator = (typing:{typing:boolean}) => {
  const classes = useStyles()
  return (
        <Grid container justify='flex-end'>
            <Grid item>
                {typing.typing
                  ? <Typography variant="h4" className={classes.indicator}>...</Typography>
                  : null}
            </Grid>
        </Grid>

  )
}

export default TypingIndicator
