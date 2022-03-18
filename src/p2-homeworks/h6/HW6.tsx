import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "../h4/HW4.module.css";

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))
    }

    return (
        <div>
            <hr/>
            <div className={s.homework}>
                Homeworks 6
            </div>

            {/*should work (должно работать)*/}
            <div className={s.column}>
                <div>
                    <img style={{height:"20px", width:"20px", paddingRight:"7px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfjlEqpfL9kAAGWLl5EfAK8bExNN6GLJvihu8o-4OPBKyjWPXHZSx6pBJ2CbcnhBzFY8&usqp=CAU"
                    alt="Pen"/>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <div>
                    <SuperButton onClick={save}>save</SuperButton>
                    <SuperButton onClick={restore}>restore</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default HW6
