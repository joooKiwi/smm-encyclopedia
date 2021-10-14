import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import DirectRoutes        from './DirectRoutes';
import {everySimpleRoutes} from './everyRoutes';
import {ProjectLanguages}  from '../lang/ProjectLanguages';
import {redirectToHome}    from './redirectToHome';

/**
 *
 * @reactComponent
 */
export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">{redirectToHome()}</Route>
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
