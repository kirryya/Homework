import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "../h4/HW4.module.css";
import {loadingAC} from "./bll/loadingReducer";
import {Dispatch} from "redux";
import {AppStoreType} from "./bll/store";

function HW10() {
    const dispatch = useDispatch<Dispatch>();

    const isLoading = useSelector<AppStoreType>(state => state.loading.isLoading);

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div className={s.homework}>
            <hr/>
            Homeworks 10
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>Loading</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
