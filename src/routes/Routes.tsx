import App from "../App";
import {Languages} from "../lang/Languages";
import {BrowserRouter, Redirect, Route, Switch, useLocation, useParams} from "react-router-dom";
import React from "react";

export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/"><Redirect to={`/${Languages.defaultLanguage}/home`}/></Route>
            <Route path="/home"><Redirect to={`/${Languages.defaultLanguage}/home`}/></Route>
            <Route path="/every/entity"><Redirect to={`/${Languages.defaultLanguage}/every/entity`}/></Route>
            <Route path="/every/limit"><Redirect to={`/${Languages.defaultLanguage}/every/limit`}/></Route>
            <Route path="/:lang"><DirectRoutes/></Route>
        </Switch>
    </BrowserRouter>;
}

function DirectRoutes() {
    const params: { lang?: string } = useParams();
    const location = useLocation();
    if ('lang' in params && typeof params.lang === 'string') {
        Languages.setCurrentLanguage(params.lang);
        const currentLanguage = Languages.getValue(params.lang);
        if (currentLanguage != null) {
            switch (location.pathname) {
                case '/' + currentLanguage.acronym + '/home':
                    return <App/>;
                case '/' + currentLanguage.acronym + '/every/entity':
                    return <>every entities</>;
                case '/' + currentLanguage.acronym + '/every/limit':
                    return <>every limit</>;
                default:
                    return <Redirect to={`/${currentLanguage.acronym}/home`}/>;
            }
        }
    }
    return <Redirect to={`/${Languages.defaultLanguage}/home`}/>;
}
