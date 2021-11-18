import {Navigate} from 'react-router-dom';

import {ProjectLanguages} from '../lang/ProjectLanguages';
import {route}            from './route';

export function redirectToHome(language: ProjectLanguages = ProjectLanguages.default,) {
    return <Navigate replace to={`${route('home', language,)}`}/>;
}
