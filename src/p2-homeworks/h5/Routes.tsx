import React from 'react'
import {Route, Routes as Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Main from './pages/Main';

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/Homework'} element={<Main/>}/>
                <Route path={'/Homework/pre-junior'} element={<PreJunior/>}/>
                <Route path={'/Homework/junior'} element={<Junior/>}/>
                <Route path={'/Homework/junior-plus'} element={<JuniorPlus/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
