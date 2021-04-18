// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../../../models/states'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import HistoryEntry from './HistoryEntry'
import TypingIndicator from './TypingIndicator'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import Typography from '@material-ui/core/Typography'
import { entryInterface, historyStateInterface } from '../../../models/states/historyState'

const useStyles = makeStyles({
  root: {
    height: '500px',
    overflow: 'auto'
  },
  scrollBottom: {
    clear: 'both'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

const History = () => {
  const classes = useStyles()
  const historyState:historyStateInterface = useTypedSelector((state) => state.history)
  const entries:entryInterface[] = historyState.entries
  const [bottom, setBottom] = useState<HTMLDivElement|null>(null)
  const [started, setStarted] = useState<Date | null>(null)
  useEffect(() => {
    if (!started && entries.length > 0) {
      setStarted(new Date())
    }
  })
  useEffect(() => {
    bottom?.scrollIntoView({ behavior: 'smooth' })
  })
  return (
        <Grid container className={classes.root}>
            {started ? <Typography variant="h2">Unterhaltung gestartet: {format(started, 'PPPpp', { locale: de })}</Typography> : null}
            {entries.map((entry:entryInterface, index:number) => (
                <HistoryEntry {...entry} key={index}/>
            ))}
            <TypingIndicator typing={historyState.typingStatus}/>
            <div className={classes.scrollBottom} ref={(el) => {
              setBottom(el)
            }}>
            </div>
        </Grid>
  )
}

export default History
