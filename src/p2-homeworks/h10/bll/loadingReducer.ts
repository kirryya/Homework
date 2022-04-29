const initState = {
    isLoading: false
}

export type SetLoadingAT = {
    type: "SET-LOADING",
    isLoading: boolean
}

export type InitialStateType = {
    isLoading: boolean
}

export const loadingReducer = (state: InitialStateType = initState, action: SetLoadingAT): InitialStateType => { // fix any
    switch (action.type) {
        case "SET-LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): SetLoadingAT => ({
    type: "SET-LOADING",
    isLoading: isLoading
});
