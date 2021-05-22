import {BrowserRouter, Redirect, Route, Switch, useLocation, useParams} from "react-router-dom";
import {EveryEntitiesApp}                                               from "../app/EveryEntitiesApp";
import {EveryEntityGroupApp}                                            from "../app/EveryEntityGroupApp";
import {EveryLimitsApp}                                                 from "../app/EveryLimitsApp";
import {EveryThemesApp}                                                 from "../app/EveryThemesApp";
import HomeApp                                                          from "../app/HomeApp";
import {Languages}                                                      from "../lang/Languages";
import React                                                            from "react";

type SimpleRoute = { path: string, renderCallback: () => JSX.Element };

const everySimpleRoutes: SimpleRoute[] = [
    {path: '/home', renderCallback: () => <HomeApp/>,},
    {path: '/every/entity', renderCallback: () => <EveryEntitiesApp/>,},
    {path: '/every/group', renderCallback: () => <EveryEntityGroupApp/>,},
    {path: '/every/limit', renderCallback: () => <EveryLimitsApp/>,},
    {path: '/every/theme', renderCallback: () => <EveryThemesApp/>,},
];

export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/"><Redirect to={`/${Languages.defaultLanguage.acronym}/home`}/></Route>
            {renderRoutesInSwitch()}
            <Route path="/:lang"><DirectRoutes/></Route>
        </Switch>
    </BrowserRouter>;
}

function renderRoutesInSwitch() {
    everySimpleRoutes.map(route =>
        <Route key={`switchRoute${route.path}`} path={route.path}>
            <Redirect to={`/${Languages.defaultLanguage.acronym}${route.path}`}/>
        </Route>
    );
}

function DirectRoutes() {
    const params: { lang?: string } = useParams();
    const location = useLocation();
    if ('lang' in params && typeof params.lang === 'string') {
        Languages.setCurrentLanguage(params.lang);
        const currentLanguage = Languages.getValue(params.lang);
        if (currentLanguage != null)
            return everySimpleRoutes.find(route => location.pathname === '/' + currentLanguage.acronym + route.path)?.renderCallback()
                ?? <Redirect to={`/${currentLanguage.acronym}/home`}/>;
    }
    return <Redirect to={`/${Languages.defaultLanguage.acronym}/home`}/>;
}
