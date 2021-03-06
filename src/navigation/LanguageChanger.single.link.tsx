import {Link, useLocation} from 'react-router-dom';

import type {LanguageChangerLinkProperties} from './LanguageChanger.link';
import type {ReactElement, ReactProperty}   from '../util/react/ReactProperty';

import LanguageTranslationComponent from '../lang/components/LanguageTranslationComponent';
import {ProjectLanguages}           from '../lang/ProjectLanguages';
import {route}                      from '../routes/route';
import {StringContainer}            from '../util/StringContainer';
import Tooltip                      from '../bootstrap/tooltip/Tooltip';

export interface SingleLanguageChangerLinkProperties
    extends ReactProperty, LanguageChangerLinkProperties {

    type: | 'button' | 'label'

}

/**
 * @reactComponent
 */
export function LanguageChangerSingleLink({language, callbackToSetLanguage, type,}: SingleLanguageChangerLinkProperties,) {
    const location = useLocation();

    const key = `single language changer link (${language.englishName})`;
    const englishNameAsId = StringContainer.getInHtml(language.englishName);
    const _callbackToSetLanguage = () => callbackToSetLanguage(language);

    switch (type) {
        case 'button':
            const buttonId = `single-languageChanger-${englishNameAsId}`;
            if (language.isCurrentLanguage)
                return createTooltip(language, buttonId,
                    <button key={key} id={buttonId} className="btn btn-lg btn-outline-primary active">{
                        language.originalName
                    }</button>,);
            return createTooltip(language, buttonId,
                <Link key={key} id={buttonId} to={route(location, language,)} className="btn btn-lg btn-outline-primary" onClick={_callbackToSetLanguage}>{
                    language.originalName
                }</Link>,);
        case 'label':
            const labelId = `label-${englishNameAsId}`;
            const labelKey = `${language.englishName} (label)`;
            if (language.isCurrentLanguage)
                return createTooltip(language, labelId,
                    <label key={labelKey} id={labelId} className="btn btn-outline-primary" htmlFor={`input-${englishNameAsId}`}>{
                        language.originalName
                    }</label>,);

            const linkId = `link-${englishNameAsId}`;
            return createTooltip(language, linkId,
                <Link key={key} id={linkId} to={route(location, language,)} className="btn btn-outline-primary" onClick={_callbackToSetLanguage}>
                    <label key={labelKey} id={labelId} htmlFor={`input-${englishNameAsId}`} hidden/>
                    {language.originalName}
                </Link>,);
    }
}

function createTooltip(language: ProjectLanguages, id: string, element: ReactElement,) {
    return <LanguageTranslationComponent>{translation =>
        <Tooltip key={`single language changer link (tooltip - ${language.englishName})`}
                 elementId={id} option={({title: translation(language.englishName), placement: 'top',})}>{
            element
        }</Tooltip>
    }</LanguageTranslationComponent>;
}
