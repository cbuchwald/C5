// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import { initializeSocketClient } from './utils/websocket'
import { useDispatch } from 'react-redux'
import UI from './UI'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    initializeSocketClient(dispatch)
  }, [])

  return (
    <UI/>
  )
}

export default App
