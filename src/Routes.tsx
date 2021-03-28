import App from "./App";
import {Languages} from "./Languages";
import {BrowserRouter, Redirect, Route, Switch, useParams} from "react-router-dom";
import React from "react";

export default function Routes() {
    return <BrowserRouter>
        <Switch>
            <Route path="/:lang" children={<LanguageRedirector/>}/>
            <Route path="/"><Redirect to={`/${Languages.defaultLanguage}`}/></Route>
        </Switch>
    </BrowserRouter>;
}

function LanguageRedirector() {
    const params: { lang?: string } = useParams();
    if ('lang' in params && params.lang != null) {
        Languages.setCurrentLanguage(params.lang);
        let currentLanguage = Languages.getValue(params.lang);
        if (currentLanguage != null)
            return <App/>;
    }
    return <Redirect to={`/${Languages.defaultLanguage}`}/>;
}
