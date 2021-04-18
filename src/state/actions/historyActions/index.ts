import { IOutput } from '@cognigy/socket-client/lib/interfaces/output'
import * as HistoryActions from '../../../models/actions/historyActions'

export const updateTypingStatus = (status:string) => {
  return (dispatch: (arg0: any) => void) => {
    try {
      dispatch(updateTypingStatusSuccessfully(status))
      return Promise.resolve()
    } catch (err) {
      dispatch(updateTypingStatusFailed(err))
      return Promise.resolve()
    }
  }
}

const updateTypingStatusSuccessfully = (status:string): HistoryActions.HistoryActionInterfaces => {
  return {
    type: HistoryActions.UPDATE_TYPING_STATUS_SUCCESSFULLY,
    status
  }
}

const updateTypingStatusFailed = (err:any): HistoryActions.HistoryActionInterfaces => {
  return {
    type: HistoryActions.UPDATE_TYPING_STATUS_FAILED,
    err
  }
}

export const addBotOutput = (output: IOutput) => {
  return (dispatch: (arg0: any) => void) => {
    try {
      dispatch(addBotOutputSuccessfully(output))
      return Promise.resolve()
    } catch (err) {
      dispatch(addBotOutputFailed(err))
      return Promise.resolve()
    }
  }
}

const addBotOutputSuccessfully = (output: IOutput): HistoryActions.HistoryActionInterfaces => {
  return {
    type: HistoryActions.ADD_BOT_OUTPUT_SUCCESSFULLY,
    text: output.text,
    data: output.data
  }
}

const addBotOutputFailed = (err:any): HistoryActions.HistoryActionInterfaces => {
  return {
    type: HistoryActions.ADD_BOT_OUTPUT_FAILED,
    err
  }
}

export const addMessage = (input: IOutput) => {
  return (dispatch: (arg0: any) => void) => {
    try {
      dispatch(addMessageSuccessfully(input))
      return Promise.resolve()
    } catch (err) {
      dispatch(addMessageFailed(err))
      return Promise.resolve()
    }
  }
}

const addMessageSuccessfully = (input: IOutput): HistoryActions.HistoryActionInterfaces => {
  return {
    type: HistoryActions.ADD_MESSAGE_SUCCESSFULLY,
    text: input.text,
    data: input.data
  }
}

const addMessageFailed = (err:any): HistoryActions.HistoryActionInterfaces => {
  return {
    type: HistoryActions.ADD_MESSAGE_FAILED,
    err
  }
}
