import {Link, useLocation} from 'react-router'

import type {ReactProperties} from 'util/react/ReactProperties'

import Tooltip               from 'bootstrap/tooltip/Tooltip'
import {languageTranslation} from 'lang/components/translationMethods'
import {ProjectLanguages}    from 'lang/ProjectLanguages'
import {routeFromLocation}   from 'route/method/route.fromLocation'
import {StringContainer}     from 'util/StringContainer'

import getInHtml = StringContainer.getInHtml
import {useRef}              from 'react'

interface SingleLanguageChangerLinkProperties
    extends ReactProperties {

    readonly language: ProjectLanguages

    changeLanguage(language: ProjectLanguages,): void

}

/** @reactComponent */
export function LanguageChangerSingleLink({language, changeLanguage,}: SingleLanguageChangerLinkProperties,) {
    const location = useLocation()
    const linkHtmlElement = useRef<HTMLAnchorElement>(null,)
    const buttonHtmlElement = useRef<HTMLButtonElement>(null,)
    const englishNameAsId = getInHtml(language.englishName,)
    const buttonId = `single-languageChanger-${englishNameAsId}`

    if (language.isCurrent)
        return <Tooltip option={({title: languageTranslation(language.englishName), placement: 'top',})} reference={buttonHtmlElement}>
            <button ref={buttonHtmlElement} id={buttonId} className="btn btn-lg btn-outline-primary active w-100">{language.originalName}</button>
        </Tooltip>

    return <Tooltip option={({title: languageTranslation(language.englishName), placement: 'top',})} reference={linkHtmlElement} >
        <Link ref={linkHtmlElement} id={buttonId} to={routeFromLocation(location, language,)} className="btn btn-lg btn-outline-primary w-100"
              onClick={() => changeLanguage(language)}>{language.originalName}</Link>
    </Tooltip>
}
