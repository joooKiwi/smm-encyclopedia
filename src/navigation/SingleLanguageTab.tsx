import type {ReactProperty} from '../util/react/ReactProperty';

import {ProjectLanguages}           from '../lang/ProjectLanguages';
import LanguageChangerTab           from './LanguageChangerTab';
import SingleTextLanguageTab        from './SingleTextLanguageTab';

interface SingleLanguageTabProperty
    extends ReactProperty {

    language: ProjectLanguages

    callbackToSetLanguage: (language: ProjectLanguages,) => void

}

export default function SingleLanguageTab({language, callbackToSetLanguage,}: SingleLanguageTabProperty) {
    const key = `languageChanger (li) - ${language.englishName}`;

    return language === ProjectLanguages.currentLanguage
        ? <li key={key} className="single-languageChanger-tab dropdown-item disabled"><SingleTextLanguageTab language={language} isEnglishName={true}/></li>
        : <li key={key} className="single-languageChanger-tab dropdown-item"><LanguageChangerTab language={language} value={language.originalName} callbackToSetLanguage={callbackToSetLanguage}/></li>;
}