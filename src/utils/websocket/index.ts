import { SocketClient } from '@cognigy/socket-client'
import { IOutput } from '@cognigy/socket-client/lib/interfaces/output'
import { endpointURL, urlToken } from '../../config'
import * as actions from '../../state/actions'

let client:SocketClient | null = null

export const initializeSocketClient = async (dispatch:Function) => {
  client = new SocketClient(endpointURL, urlToken, {
    forceWebsockets: true
  })

  client.on('typingStatus', (status) => {
    dispatch(actions.updateTypingStatus(status.status))
  })

  client.on('output', output => {
    dispatch(actions.addBotOutput({ text: output.text, data: output.data }))
  })

  await client.connect()
}

export const sendMessage = (input:IOutput, dispatch:Function) => {
  let text = ''
  if (input.text) {
    text = input.text
  }
  if (client) {
    if (input.data) {
      client.sendMessage(text, input.data)
      dispatch(actions.addMessage(input))
    } else {
      client.sendMessage(text)
      dispatch(actions.addMessage(input))
    }
  }
}
