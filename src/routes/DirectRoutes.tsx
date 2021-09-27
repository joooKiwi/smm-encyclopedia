import {useLocation, useParams} from 'react-router-dom';

import {everySimpleRoutes} from './everyRoutes';
import {ProjectLanguages}  from '../lang/ProjectLanguages';
import {redirectToHome}    from './redirectToHome';

export default function DirectRoutes() {
    const {lang} = useParams<{ lang?: string, }>();
    const location = useLocation();

    if (lang == null)
        return redirectToHome();

    const currentLanguage = ProjectLanguages.setCurrentLanguage(lang).getValue(lang);
    if (currentLanguage == null)
        return redirectToHome();

    return everySimpleRoutes.find(route => location.pathname === `/${currentLanguage.projectAcronym}${route.path}`)?.renderCallback()
        ?? redirectToHome(currentLanguage);
}

