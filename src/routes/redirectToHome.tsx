import {ProjectLanguages} from '../lang/ProjectLanguages';
import {Redirect}         from 'react-router-dom';
import React              from 'react';

export function redirectToHome(language: ProjectLanguages = ProjectLanguages.default,) {
    return <Redirect to={`/${language.projectAcronym}/home`}/>;
}