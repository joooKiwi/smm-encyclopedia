import type {ReactProperty} from '../util/react/ReactProperty';

import {EveryLanguages}             from '../lang/EveryLanguages';
import {ProjectLanguages}           from '../lang/ProjectLanguages';
import LanguageTranslationComponent from '../lang/components/LanguageTranslationComponent';
import LanguageChangerTab           from './LanguageChangerTab';
import SingleTextLanguageTab        from './SingleTextLanguageTab';

interface DoubleLanguageTabProperty
    extends ReactProperty {

    languages: [parentLanguage: EveryLanguages, firstLanguage: ProjectLanguages, secondLanguage: ProjectLanguages,]

    callbackToSetLanguage: (language: ProjectLanguages,) => void

}

export default function DoubleLanguageTab({languages: [parentLanguage, firstLanguage, secondLanguage,], callbackToSetLanguage,}: DoubleLanguageTabProperty,) {
    const key = `languageChanger (li) - ${parentLanguage.englishName}`;

    return <li key={key} className="double-languageChanger-tab dropdown-item">
        <LanguageTranslationComponent>{translation => <div className="text-container d-flex flex-row">
            <pre>{translation(parentLanguage.englishName)}{ProjectLanguages.currentLanguage.space}{ProjectLanguages.currentLanguage.startingParenthesis}</pre>
            {firstLanguage === ProjectLanguages.currentLanguage ? <SingleTextLanguageTab language={firstLanguage} isEnglishName={false}/> :
                <LanguageChangerTab language={firstLanguage} value={translation(firstLanguage.differentWords)} callbackToSetLanguage={callbackToSetLanguage}/>}
            <pre>{`${ProjectLanguages.currentLanguage.space}${ProjectLanguages.currentLanguage.slash}${ProjectLanguages.currentLanguage.space}`}</pre>
            {secondLanguage === ProjectLanguages.currentLanguage ? <SingleTextLanguageTab language={secondLanguage} isEnglishName={false}/>
                : <LanguageChangerTab language={secondLanguage} value={translation(secondLanguage.differentWords)} callbackToSetLanguage={callbackToSetLanguage}/>}
            <pre>{ProjectLanguages.currentLanguage.endingParenthesis}</pre>
        </div>}</LanguageTranslationComponent>
    </li>;
}