const SENDER_ME = "me"
const SENDER_API = "api"

export interface historyStateInterface {
    entries: entryInterface[],
    typingStatus: boolean,
}

type senderType = typeof SENDER_ME | typeof SENDER_API
type payload = payloadText | payloadImage

interface payloadText{
    text: String
}

interface payloadImage{
    url: String,
    width?: number,
    height?: number,
    mouseOverText: string
}

export interface entryInterface{
    interfaceId:string,
    from: senderType,
    sent: Date,
    text?: string
    data?: {[key: string]: any};
}
