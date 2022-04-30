import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {Dispatch} from "redux";
import {AppStoreType} from "../h10/bll/store";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['original','dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch<Dispatch>()

    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>

            <span className={s[theme + '-text']}>
                Homeworks 12
            </span>
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />

        </div>
    );
}

export default HW12;
