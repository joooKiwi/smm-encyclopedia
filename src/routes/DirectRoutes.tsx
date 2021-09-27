import {Redirect, useLocation, useParams} from 'react-router-dom';
import React                              from 'react';

import {everySimpleRoutes} from './everyRoutes';
import {ProjectLanguages}  from '../lang/ProjectLanguages';

export default function DirectRoutes() {
    const {lang} = useParams<{ lang?: string, }>();
    const location = useLocation();

    if (lang == null)
        return homeRedirect;

    const currentLanguage = ProjectLanguages.setCurrentLanguage(lang).getValue(lang);
    if (currentLanguage == null)
        return homeRedirect;

    return everySimpleRoutes.find(route => location.pathname === '/' + currentLanguage.projectAcronym + route.path)?.renderCallback()
        ?? <Redirect to={`/${currentLanguage.projectAcronym}/home`}/>;
}

const homeRedirect = <Redirect to={`/${ProjectLanguages.default.projectAcronym}/home`}/>;