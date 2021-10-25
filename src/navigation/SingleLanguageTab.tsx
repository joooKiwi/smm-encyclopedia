import type {ReactProperty} from '../util/react/ReactProperty';

import {ProjectLanguages}           from '../lang/ProjectLanguages';
import LanguageTranslationComponent from '../lang/components/LanguageTranslationComponent';
import LanguageChangerTab           from './LanguageChangerTab';

interface SingleLanguageTabProperty
    extends ReactProperty {

    language: ProjectLanguages

    callbackToSetLanguage: (language: ProjectLanguages,) => void

}

export default function SingleLanguageTab({language, callbackToSetLanguage,}: SingleLanguageTabProperty) {
    const key = `languageChanger (li) - ${language.englishName}`;

    return language === ProjectLanguages.currentLanguage
        ? <li key={key} className="dropdown-item disabled"><LanguageTranslationComponent>{translation => <span className="nav-link disabled">{translation(language.englishName)}</span>}</LanguageTranslationComponent></li>
        : <li key={key} className="dropdown-item"><LanguageChangerTab language={language} callbackToSetLanguage={callbackToSetLanguage}/></li>;
}