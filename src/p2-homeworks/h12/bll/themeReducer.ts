type ChangeThemeTypeAT = {
    type: "CHANGE_THEME_TYPE"
    theme: string
}

export type InitialStateType = {
    theme: string
}

const initState = {
    theme: "original"
};

export const themeReducer = (state: InitialStateType = initState, action: ChangeThemeTypeAT): InitialStateType => {
    switch (action.type) {
        case "CHANGE_THEME_TYPE": {
            return {
                ...state,
                theme: action.theme
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string): ChangeThemeTypeAT => ({
    type: "CHANGE_THEME_TYPE",
    theme
});