// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { sendMessage } from '../../../utils/websocket'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  }
}))

const InputArea = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [currentText, setCurrentText] = useState('')
  const handleTextChange = (event:{currentTarget: HTMLInputElement | HTMLTextAreaElement}) => {
    setCurrentText(event.currentTarget.value ? event.currentTarget.value : '')
  }
  const handleKeyDown = (event:React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      submitMessage()
    }
  }

  const handleButtonPress = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    submitMessage()
  }

  const submitMessage = () => {
    sendMessage({ text: currentText }, dispatch)
    setCurrentText('')
  }

  return (
        <div className={classes.root}>
            <Grid container spacing={2} direction='row'>
                <Grid item md={9} xs={12}>
                <TextField
                label="inputfield"
                variant="outlined"
                onChange={(e) => handleTextChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
                fullWidth
                type='search'
                value={currentText}
                />
                </Grid>
                <Grid item md={3} xs={12}>
                    <Button
                    variant="outlined"
                    color="secondary"
                    onClick={(e) => handleButtonPress(e)}
                    fullWidth>
                        Send
                    </Button>
                </Grid>
            </Grid>
        </div>

  )
}

export default InputArea
