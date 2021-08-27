import {Link, useLocation} from 'react-router-dom';
import React               from 'react';

import LanguageTranslationComponent from '../lang/components/LanguageTranslationComponent';
import {ProjectLanguages} from '../lang/ProjectLanguages';

interface Properties {
    language: ProjectLanguages
    callbackToSetLanguage: (language: ProjectLanguages) => void
}

export function LanguageChangerTab({language, callbackToSetLanguage,}: Properties,): JSX.Element {
    const location = useLocation();

    const id = `languageChanger_${language.projectAcronym}`;
    const nextLocation = location.pathname.replace(ProjectLanguages.currentLanguage.projectAcronym, language.projectAcronym,);

    return <Link key={id} id={id} className="dropdown-item" to={nextLocation} onClick={() => callbackToSetLanguage(language)}>
        <LanguageTranslationComponent translationCallback={translation => translation(language.englishName)}/>
        <sup>({language.originalName})</sup>
    </Link>;
}