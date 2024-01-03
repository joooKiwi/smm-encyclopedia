import {Link, useLocation} from 'react-router-dom'

import type {ReactProperties} from 'util/react/ReactProperties'

import Tooltip               from 'bootstrap/tooltip/Tooltip'
import {languageTranslation} from 'lang/components/translationMethods'
import {ProjectLanguages}    from 'lang/ProjectLanguages'
import {routeFromLocation}   from 'route/route'
import {StringContainer}     from 'util/StringContainer'

interface SingleLanguageChangerLinkProperties
    extends ReactProperties {

    language: ProjectLanguages

    callbackToSetLanguage: (language: ProjectLanguages,) => void

}

/** @reactComponent */
export function LanguageChangerSingleLink({language, callbackToSetLanguage,}: SingleLanguageChangerLinkProperties,) {
    const location = useLocation()
    const englishNameAsId = StringContainer.getInHtml(language.englishName)
    const buttonId = `single-languageChanger-${englishNameAsId}`

    return createTooltip(language, buttonId,
        language.isCurrent
            ? <button key={`single language changer link (${language.englishName}) - button`} id={buttonId} className="btn btn-lg btn-outline-primary active w-100">{language.originalName}</button>
            : <Link key={`single language changer link (${language.englishName} - link)`} id={buttonId} to={routeFromLocation(location, language,)} className="btn btn-lg btn-outline-primary w-100"
                    onClick={() => callbackToSetLanguage(language)}>{language.originalName}</Link>,
    )
}

function createTooltip(language: ProjectLanguages, id: string, element: ReactElement,) {
    const englishName = language.englishName

    return <Tooltip key={`single language changer link (tooltip - ${englishName} - in ${ProjectLanguages.current.englishName})`} elementId={id}
                    option={({title: languageTranslation(englishName), placement: 'top',})}>{element}</Tooltip>
}
