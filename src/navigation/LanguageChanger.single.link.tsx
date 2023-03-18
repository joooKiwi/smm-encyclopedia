import {Link, useLocation} from 'react-router-dom'

import type {LanguageChangerLinkProperties} from 'navigation/LanguageChanger.link'
import type {ReactElement, ReactProperties} from 'util/react/ReactProperties'

import Tooltip               from 'bootstrap/tooltip/Tooltip'
import {languageTranslation} from 'lang/components/translationMethods'
import {ProjectLanguages}    from 'lang/ProjectLanguages'
import {route}               from 'route/route'
import {StringContainer}     from 'util/StringContainer'

export interface SingleLanguageChangerLinkProperties
    extends ReactProperties, LanguageChangerLinkProperties {
}

/**
 * @reactComponent
 */
export function LanguageChangerSingleLink({language, callbackToSetLanguage,}: SingleLanguageChangerLinkProperties,) {
    const location = useLocation()
    const key = `single language changer link (${language.englishName})`,
        englishNameAsId = StringContainer.getInHtml(language.englishName),
        buttonId = `single-languageChanger-${englishNameAsId}`

    return createTooltip(language, buttonId,
        language.isCurrentLanguage
            ? <button key={key} id={buttonId} className="btn btn-lg btn-outline-primary active">{language.originalName}</button>
            : <Link key={key} id={buttonId} to={route(location, language,)} className="btn btn-lg btn-outline-primary"
                    onClick={() => callbackToSetLanguage(language)}>{language.originalName}</Link>,
    )
}

function createTooltip(language: ProjectLanguages, id: string, element: ReactElement,) {
    const englishName = language.englishName

    return <Tooltip key={`single language changer link (tooltip - ${englishName})`} elementId={id}
                    option={({title: languageTranslation(englishName), placement: 'top',})}>{element}</Tooltip>
}
