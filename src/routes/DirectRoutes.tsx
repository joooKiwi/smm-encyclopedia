import {useLocation, useParams} from 'react-router-dom';

import {everySimpleRoutes} from './everyRoutes';
import {ProjectLanguages}  from '../lang/ProjectLanguages';
import {redirectToHome}    from './redirectToHome';

export default function DirectRoutes() {
    const parameters = useParams<{ lang?: string, }>();
    const location = useLocation();

    if (parameters.lang == null)
        return redirectToHome();

    const currentLanguage = ProjectLanguages.setCurrentLanguage(parameters.lang).getValue(parameters.lang);
    if (currentLanguage == null)
        return redirectToHome();

    return everySimpleRoutes.find(route => location.pathname === `/${currentLanguage.projectAcronym}${route.path}`)?.renderCallback()
        ?? redirectToHome(currentLanguage);
}

