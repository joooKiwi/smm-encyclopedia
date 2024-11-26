import {Link, useLocation} from 'react-router-dom'

import type {ReactProperties} from 'util/react/ReactProperties'

import Tooltip               from 'bootstrap/tooltip/Tooltip'
import {languageTranslation} from 'lang/components/translationMethods'
import {ProjectLanguages}    from 'lang/ProjectLanguages'
import {routeFromLocation}   from 'route/method/route.fromLocation'
import {StringContainer}     from 'util/StringContainer'

import getInHtml = StringContainer.getInHtml

interface SingleLanguageChangerLinkProperties
    extends ReactProperties {

    readonly language: ProjectLanguages

    readonly callbackToSetLanguage: (language: ProjectLanguages,) => void

}

/** @reactComponent */
export function LanguageChangerSingleLink({language, callbackToSetLanguage,}: SingleLanguageChangerLinkProperties,) {
    const location = useLocation()
    const englishNameAsId = getInHtml(language.englishName,)
    const buttonId = `single-languageChanger-${englishNameAsId}`

    if (language.isCurrent)
        return <Tooltip option={({title: languageTranslation(language.englishName), placement: 'top',})} reference={buttonId}>
            <button id={buttonId} className="btn btn-lg btn-outline-primary active w-100">{language.originalName}</button>
        </Tooltip>

    return <Tooltip option={({title: languageTranslation(language.englishName), placement: 'top',})} reference={buttonId} >
        <Link id={buttonId} to={routeFromLocation(location, language,)} className="btn btn-lg btn-outline-primary w-100"
              onClick={() => callbackToSetLanguage(language)}>{language.originalName}</Link>
    </Tooltip>
}
