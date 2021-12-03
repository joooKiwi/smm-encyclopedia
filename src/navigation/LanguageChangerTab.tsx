import {Link, useLocation} from 'react-router-dom';
import {useTranslation}    from 'react-i18next';

import type {ReactProperty} from '../util/react/ReactProperty';

import {ProjectLanguages} from '../lang/ProjectLanguages';
import {route}            from '../routes/route';
import Tooltip            from '../bootstrap/tooltip/Tooltip';
import {TooltipInstance}  from '../bootstrap/tooltip/TooltipInstance';

interface Properties
    extends ReactProperty {

    language: ProjectLanguages

    value: string

    callbackToSetLanguage: (language: ProjectLanguages,) => void

}

/**
 *
 * @param properties
 * @reactComponent
 */
export default function LanguageChangerTab({language, value, callbackToSetLanguage,}: Properties,) {
    const {t: languageTranslation,} = useTranslation('language');
    const location = useLocation();

    const id = `languageChanger-${language.projectAcronym}`;

    return <Tooltip elementId={id} option={({title: languageTranslation(language.englishName), placement: 'left',})}>
        <Link key={id} id={id} className="nav-link active" to={route(location, language,)} onClick={() => {
            callbackToSetLanguage(language);
            TooltipInstance.getInstance(id).instance.dispose();
        }}>
            {value}
        </Link>
    </Tooltip>;
}
