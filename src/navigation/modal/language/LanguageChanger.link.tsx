import type {ReactProperties} from 'util/react/ReactProperties'

import {ProjectLanguages}          from 'lang/ProjectLanguages'
import {LanguageChangerSingleLink} from 'navigation/modal/language/LanguageChanger.single.link'
import {StringContainer}           from 'util/StringContainer'

export interface LanguageChangerLinkProperties
    extends ReactProperties {

    language: ProjectLanguages

    callbackToSetLanguage: (language: ProjectLanguages,) => void

}

/** @reactComponent */
export default function LanguageChangerLink({language, callbackToSetLanguage,}: LanguageChangerLinkProperties,) {
    const childrenLanguages = (language.language.parent ?? language.language).children
    const englishNameAsId = StringContainer.getInHtml(language.englishName)

    if (childrenLanguages.length === 0)
        return <div key={`language changer (single - ${language.englishName})`} id={`single-language-changer-${englishNameAsId}`}
                    className="languageChanger-link-container col-12 col-xl-5 m-2">
            <LanguageChangerSingleLink language={language} callbackToSetLanguage={callbackToSetLanguage}/>
        </div>

    return <div key={`language changer (double - ${language.language.parent!.englishName})`} id={`double-language-changer-${englishNameAsId}`}
                className="languageChanger-link-container btn-group btn-group-lg col-12 col-xl-5 m-2" role="group">{childrenLanguages.map(language =>
        <LanguageChangerSingleLink key={`${language.englishName} (single button in group)`} language={ProjectLanguages.CompanionEnum.get.getValueByLanguage(language,)} callbackToSetLanguage={callbackToSetLanguage}/>)}</div>
}
