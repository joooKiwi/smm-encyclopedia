import {BrowserRouter, Redirect, Route, Switch, useLocation, useParams} from 'react-router-dom';
import React                                                            from 'react';

import EveryEntitiesApp         from '../app/EveryEntitiesApp';
import EveryEntityCategoriesApp from '../app/EveryEntityCategoriesApp';
import EveryEntityGroupApp      from '../app/EveryEntityGroupApp';
import EveryGameStylesApp       from '../app/EveryGameStylesApp';
import EveryLimitsApp           from '../app/EveryLimitsApp';
import EveryThemesApp           from '../app/EveryThemesApp';
import HomeApp                  from '../app/HomeApp';
import {Languages}              from '../lang/Languages';

type SimpleRoute = { path: string, renderCallback: () => JSX.Element, };

const everySimpleRoutes: SimpleRoute[] = [
    {path: '/home',            renderCallback: () => <HomeApp/>,},
    {path: '/every/entity',    renderCallback: () => <EveryEntitiesApp/>,},
    {path: '/every/gameStyle', renderCallback: () => <EveryGameStylesApp/>,},
    {path: '/every/category',  renderCallback: () => <EveryEntityCategoriesApp/>,},
    {path: '/every/group',     renderCallback: () => <EveryEntityGroupApp/>,},
    {path: '/every/limit',     renderCallback: () => <EveryLimitsApp/>,},
    {path: '/every/theme',     renderCallback: () => <EveryThemesApp/>,},
];

export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/"><Redirect to={`/${Languages.default.projectAcronym}/home`}/></Route>
            {renderRoutesInSwitch()}
            <Route path="/:lang"><DirectRoutes/></Route>
        </Switch>
    </BrowserRouter>;
}

function renderRoutesInSwitch() {
    return everySimpleRoutes.map(route =>
        <Route key={`switchRoute${route.path}`} path={route.path}>
            <Redirect to={`/${Languages.default.projectAcronym}${route.path}`}/>
        </Route>
    );
}

function DirectRoutes() {
    const params: { lang?: string } = useParams();
    const location = useLocation();
    if ('lang' in params && typeof params.lang === 'string') {
        Languages.currentLanguage = params.lang;
        const currentLanguage = Languages.getValue(params.lang);
        if (currentLanguage != null)
            return everySimpleRoutes.find(route => location.pathname === '/' + currentLanguage.projectAcronym + route.path)?.renderCallback()
                ?? <Redirect to={`/${currentLanguage.projectAcronym}/home`}/>;
    }
    return <Redirect to={`/${Languages.default.projectAcronym}/home`}/>;
}
