import {Redirect} from 'react-router-dom';

import {ProjectLanguages} from '../lang/ProjectLanguages';

export function redirectToHome(language: ProjectLanguages = ProjectLanguages.default,) {
    return <Redirect to={`/${language.projectAcronym}/home`}/>;
}
