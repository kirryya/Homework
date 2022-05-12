import React, {ChangeEvent, useState} from 'react';
import {RequestsAPI} from "./api";

export const Request = () => {

    const [value, setValue] = useState<boolean>(true)
    const [state, setState] = useState<string>('')

    const postRequest = () => {
        RequestsAPI.postRequest(value)
            .then((response) => setState(response.data))
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
        setState("")
    }

    return (
        <div>
            <button onClick={postRequest}>REQUEST</button>
            <input type={"checkbox"} checked={value} onChange={onChangeHandler}/>
            <div>
                {
                    state ?
                        JSON.stringify(state)
                        : "Please click 'REQUEST' or change value in checkbox on 'TRUE' and try again."
                }
            </div>
        </div>
    );
};
