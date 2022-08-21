import './LanguageChanger.link.scss'

import {Fragment} from 'react';

import type {ReactProperties} from '../util/react/ReactProperties';

import {LanguageChangerSingleLink} from './LanguageChanger.single.link';
import {ProjectLanguages}          from '../lang/ProjectLanguages';
import {StringContainer}           from '../util/StringContainer';

export interface LanguageChangerLinkProperties
    extends ReactProperties {

    language: ProjectLanguages

    callbackToSetLanguage: (language: ProjectLanguages,) => void

}

/**
 * @reactComponent
 */
export default function LanguageChangerLink({language, callbackToSetLanguage,}: LanguageChangerLinkProperties,) {
    const childrenLanguages = (language.language.parent ?? language.language).children;
    const englishNameAsId = StringContainer.getInHtml(language.englishName);

    if (childrenLanguages.length === 0)
        return <div key={`language changer (single - ${language.englishName})`} id={`single-language-changer-${englishNameAsId}`}
                    className="languageChanger-link-container  col-12 col-xl-5">
            <LanguageChangerSingleLink language={language} callbackToSetLanguage={callbackToSetLanguage} type="button"/>
        </div>;

    return <div key={`language changer (double - ${language.language.parent!.englishName})`} id={`double-language-changer-${englishNameAsId}`}
                className="languageChanger-link-container btn-group btn-group-lg col-12 col-xl-5" role="group">{childrenLanguages.map(language => {
        const englishNameAsId = StringContainer.getInHtml(language.englishName);

        return <Fragment key={`${language.englishName} (input & label)`}>
            <input key={`${language.englishName} (input)`} id={`input-${englishNameAsId}`} className="btn-check" autoComplete="off" defaultChecked={language.isCurrentLanguage} type="radio"/>
            <LanguageChangerSingleLink language={ProjectLanguages.getValue(language)!} callbackToSetLanguage={callbackToSetLanguage} type="label"/>
        </Fragment>;
    })}</div>;
}
