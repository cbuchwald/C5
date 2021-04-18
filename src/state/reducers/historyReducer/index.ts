import { historyStateInterface } from '../../../models/states/historyState'
import * as HistoryActions from '../../../models/actions/historyActions'
import { updateObject } from '../../../utils/state'
import { v4 as uuidv4 } from 'uuid'

const initialState: historyStateInterface = {
  entries: [],
  typingStatus: false,
}

const updateTypingStatus = (
  state: historyStateInterface,
  action: HistoryActions.HistoryAction
) => {
  return updateObject(state, { typingStatus: action.status !== 'typingOff' })
}

const addBotOutput = (
  state: historyStateInterface,
  action: HistoryActions.HistoryAction
) => {
  const newEntries = state.entries
  if (action.data && Object.keys(action.data).length > 0) {
    newEntries.push({ interfaceId: uuidv4(), from: 'api', sent: new Date(), text: action.text, data: action.data })
  } else {
    newEntries.push({ interfaceId: uuidv4(), from: 'api', sent: new Date(), text: action.text })
  }

  return updateObject(state, { entries: newEntries })
}

const addMessage = (
  state: historyStateInterface,
  action: HistoryActions.HistoryAction
) => {
  const newEntries = state.entries
  newEntries.push({ interfaceId: uuidv4(), from: 'me', sent: new Date(), text: action.text })
  return updateObject(state, { entries: newEntries })
}

export default function history (
  state = initialState,
  action: HistoryActions.HistoryAction
) {
  switch (action.type) {
    case HistoryActions.UPDATE_TYPING_STATUS_SUCCESSFULLY:
      return updateTypingStatus(state, action)
    case HistoryActions.ADD_BOT_OUTPUT_SUCCESSFULLY:
      return addBotOutput(state, action)
    case HistoryActions.ADD_MESSAGE_SUCCESSFULLY:
      return addMessage(state, action)
    default:
      return state
  }
}
