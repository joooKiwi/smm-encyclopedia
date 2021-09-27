import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import React                                    from 'react';

import DirectRoutes        from './DirectRoutes';
import {everySimpleRoutes} from './everyRoutes';
import {ProjectLanguages}  from '../lang/ProjectLanguages';

export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/"><Redirect to={`/${ProjectLanguages.default.projectAcronym}/home`}/></Route>
            {renderRoutesInSwitch()}
            <Route path="/:lang"><DirectRoutes/></Route>
        </Switch>
    </BrowserRouter>;
}

function renderRoutesInSwitch() {
    return everySimpleRoutes.map(route =>
        <Route key={`switchRoute${route.path}`} path={route.path}>
            <Redirect to={`/${ProjectLanguages.default.projectAcronym}${route.path}`}/>
        </Route>
    );
}

