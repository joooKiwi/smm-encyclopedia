import './PageProgress.scss'

import {Link} from 'react-router-dom'

import type {PossibleRouteName} from 'route/EveryRoutes.types'
import type {ReactProperties}   from 'util/react/ReactProperties'

import {ProjectLanguages}   from 'lang/ProjectLanguages'
import {contentTranslation} from 'lang/components/translationMethods'
import {routeFromName}      from 'route/route'

interface PageProgressProperties
    extends ReactProperties {

    readonly progress: PageProgressType

    readonly link?: PossibleRouteName

    readonly content: ReactElementOrString

    readonly exclusiveGame?: | 'SMM1' | 'SMM2' | 'SMM3DS'

}


type PageProgressType = | 'completed' | 'completed with missing data'
                        | 'page almost done' | 'page in progress' | 'page with missing data'
                        | 'data in progress' | 'data done'
                        | 'not created'

/**
 * A single text container to display some progress over the content received
 * (and possibly add a link to the content)
 *
 * @reactComponent
 * @see TextComponent
 */
export default function PageProgress({progress, link, content, exclusiveGame,}: PageProgressProperties,) {
    const currentLanguage = ProjectLanguages.current
    const exclusiveGameComponent = exclusiveGame == null ? null : <sup className="fst-italic text-dark text-opacity-25">{currentLanguage.space}{currentLanguage.textInParentheses(exclusiveGame)}</sup>

    return <div className="pageProgress-container">
        {createPageProgressType(progress,)}
        {link == null
            ? <span>{content}{exclusiveGameComponent}</span>
            : <Link to={routeFromName(link,)} className="link-info">{content}{exclusiveGameComponent}</Link>}
    </div>
}

function createPageProgressType(type: PageProgressType,) {
    switch (type) {
        case 'completed':
            return <small className="pageProgress pageProgress-completed d-block text-center text-light bg-green-teal rounded px-1 me-1">{contentTranslation('home.progress.Completed',)}</small>
        case 'completed with missing data':
            return <small className="pageProgress pageProgress-completedWithMissingData d-block text-center text-light bg-green-red rounded px-1 me-1">{contentTranslation('home.progress.Completed with missing data',)}</small>
        case 'page almost done':
            return <small className="pageProgress pageProgress-pageAlmostDone d-block text-center text-light bg-green-yellow rounded px-1 me-1">{contentTranslation('home.progress.Page almost done',)}</small>
        case 'page in progress':
            return <small className="pageProgress pageProgress-pageInProgress d-block text-center bg-yellow-orange rounded px-1 me-1">{contentTranslation('home.progress.Page in progress',)}</small>
        case 'page with missing data':
            return <small className="pageProgress pageProgress-pageWithMissingData d-block text-center text-light bg-orange-pink rounded px-1 me-1">{contentTranslation('home.progress.Page with missing data',)}</small>
        case 'data done':
            return <small className="pageProgress pageProgress-dataDone d-block text-center bg-orange-yellow rounded px-1 me-1">{contentTranslation('home.progress.Data done',)}</small>
        case 'data in progress':
            return <small className="pageProgress pageProgress-dataInProgress d-block text-center text-light bg-red-orange rounded px-1 me-1">{contentTranslation('home.progress.Data in progress',)}</small>
        case 'not created':
            return <small className="pageProgress pageProgress-notCreated d-block text-center text-light bg-red-pink rounded px-1 me-1">{contentTranslation('home.progress.Not created',)}</small>
    }
}
