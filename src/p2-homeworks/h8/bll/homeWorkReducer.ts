import {UserType} from "../HW8";

type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckType = {
    type: 'check'
    payload: number
}

type ActionType = SortType | CheckType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort(function (a, b) {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}