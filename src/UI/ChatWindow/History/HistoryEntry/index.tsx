// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { entryInterface } from '../../../../models/states/historyState'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import clsx from 'clsx'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    // Add styling for bubbles here
  },
  fromMe: {
    backgroundColor: theme.palette.primary.light
  },
  fromApi: {
    backgroundColor: theme.palette.secondary.light
  },
  title: {
    fontSize: 14
  }
}))

const HistoryEntry = ({ ...props }:entryInterface) => {
  const classes = useStyles()
  const [width, setWidth] = useState(0)

  return (
        <Grid container flex-direction='column' ref={(el) => {
          if (el && el.offsetWidth - 10 !== width) {
            setWidth(el.offsetWidth - 10)
          }
        }}>
            <Grid item container justify={props.from === 'me' ? 'flex-start' : 'flex-end'} flex-direction='column' xs={12}>
            <Grid item container justify={props.from === 'me' ? 'flex-start' : 'flex-end'} flex-direction='column' xs={12} md={10}>
                <Card className={clsx(classes.root, props.from === 'me' ? classes.fromMe : classes.fromApi)} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {format(props.sent, 'PPPpp', { locale: de })}
                        </Typography>
                        <Typography variant="body2">
                            {props.data ? <><img src={props.data.imgSrc} width={width}/><br/></> : null}
                            {props.text}
                        </Typography>
                    </CardContent>
                </Card>
                <Grid container justify={props.from === 'me' ? 'flex-start' : 'flex-end'}>
                <Avatar>{props.from === 'me' ? 'me' : 'api'}</Avatar>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
  )
}

export default HistoryEntry
