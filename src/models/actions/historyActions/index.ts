export const UPDATE_TYPING_STATUS_SUCCESSFULLY = 'UPDATE_TYPING_STATUS_SUCCESSFULLY'
export const ADD_BOT_OUTPUT_SUCCESSFULLY = 'ADD_BOT_OUTPUT_SUCCESSFULLY'
export const ADD_MESSAGE_SUCCESSFULLY = 'ADD_MESSAGE_SUCCESSFULLY'
export const UPDATE_TYPING_STATUS_FAILED = 'UPDATE_TYPING_STATUS_FAILED'
export const ADD_BOT_OUTPUT_FAILED = 'ADD_BOT_OUTPUT_FAILED'
export const ADD_MESSAGE_FAILED = 'ADD_MESSAGE_FAILED'

export interface updateTypingStatusSuccessfully{
    type:typeof UPDATE_TYPING_STATUS_SUCCESSFULLY;
    status:string
}

export interface addBotMessageSuccessfully{
    type:typeof ADD_BOT_OUTPUT_SUCCESSFULLY;
    text?:string;
    data?:{[key: string]: any};
}

export interface addMessageSuccessfully{
    type:typeof ADD_MESSAGE_SUCCESSFULLY;
    text?:string;
    data?:{[key: string]: any};
}

export interface updateTypingStatusFailed{
    type:typeof UPDATE_TYPING_STATUS_FAILED;
    err:any;
}

export interface addBotMessageFailed{
    type:typeof ADD_BOT_OUTPUT_FAILED;
    err:any;
}

export interface addMessageFailed{
    type:typeof ADD_MESSAGE_FAILED;
    err:any;
}

export type HistoryActionTypes =
typeof UPDATE_TYPING_STATUS_SUCCESSFULLY
| typeof ADD_BOT_OUTPUT_SUCCESSFULLY
| typeof ADD_MESSAGE_SUCCESSFULLY
| typeof UPDATE_TYPING_STATUS_FAILED
| typeof ADD_BOT_OUTPUT_FAILED
| typeof ADD_MESSAGE_FAILED

export type HistoryActionInterfaces =
updateTypingStatusSuccessfully
| addBotMessageSuccessfully
| addMessageSuccessfully
| updateTypingStatusFailed
| addBotMessageFailed
| addMessageFailed

export type HistoryAction = {
    type:HistoryActionTypes;
    status?:string;
    err?:any;
    text?:string;
    data?: {[key: string]: any};
}
