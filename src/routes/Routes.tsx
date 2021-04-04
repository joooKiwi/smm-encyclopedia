import App from "../App";
import {Languages} from "../lang/Languages";
import {BrowserRouter, Redirect, Route, Switch, useLocation, useParams} from "react-router-dom";
import React from "react";
import {Translation, useTranslation} from "react-i18next";

type SimpleRoute = { path: string, renderCallback: () => JSX.Element };

const everySimpleRoutes: SimpleRoute[] = [
    {path: '/home', renderCallback: () => <App/>,},
    {path: '/every/entity', renderCallback: () => <Test/>,},
    {path: '/every/limit', renderCallback: () => <>every limits</>,},
];

export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/"><Redirect to={`/${Languages.defaultLanguage}/home`}/></Route>
            {renderRoutesInSwitch()}
            <Route path="/:lang"><DirectRoutes/></Route>
        </Switch>
    </BrowserRouter>;
}

function renderRoutesInSwitch() {
    everySimpleRoutes.map(route =>
        <Route key={`switchRoute${route.path}`} path={route.path}>
            <Redirect to={`/${Languages.defaultLanguage}${route.path}`}/>
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
                || <Redirect to={`/${currentLanguage.acronym}/home`}/>;
    }
    return <Redirect to={`/${Languages.defaultLanguage}/home`}/>;
}

function Test(){
    let translation = useTranslation('language');
    console.log([translation, translation.t]);
    translation.i18n.changeLanguage('en_US').then(value => {
        value('English');
    });
    return <>{translation.t('test')}</>
    // return <>{translation.t('test')}</>
    // return <Translation ns={['language']}>{(t) => <>every entity</>}</Translation>;
    // window.test = translation;
}