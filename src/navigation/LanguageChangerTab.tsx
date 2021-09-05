import {Link, useLocation} from 'react-router-dom';
import React               from 'react';
import {useTranslation}    from 'react-i18next';

import {ProjectLanguages} from '../lang/ProjectLanguages';
import Tooltip            from '../bootstrap/tooltip/Tooltip';

interface Properties {

    language: ProjectLanguages

    callbackToSetLanguage: (language: ProjectLanguages) => void

}

export function LanguageChangerTab({language, callbackToSetLanguage,}: Properties,): JSX.Element {
    const {t: languageTranslation,} = useTranslation('language');
    const location = useLocation();

    const id = `languageChanger_${language.projectAcronym}`;
    const nextLocation = location.pathname.replace(ProjectLanguages.currentLanguage.projectAcronym, language.projectAcronym,);

    return <Tooltip elementId={id} option={({title: languageTranslation(language.englishName), placement: 'left',})}>
        <Link key={id} id={id} className="dropdown-item" to={nextLocation} onClick={() => callbackToSetLanguage(language)}>
            {language.originalName}
        </Link>
    </Tooltip>;
}