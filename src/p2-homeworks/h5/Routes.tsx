import React from 'react'
import {Navigate, Route, Routes as Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Main from './pages/Main';

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/pre-junior'} element={<PreJunior/>}/>
                <Route path={'/junior'} element={<Junior/>}/>
                <Route path={'/junior-plus'} element={<JuniorPlus/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
