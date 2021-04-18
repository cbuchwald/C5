import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { historyStateInterface } from './historyState'

export interface RootState{
    history: historyStateInterface
    // here new states can be added
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
