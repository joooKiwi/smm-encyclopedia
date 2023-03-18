import {Fragment} from 'react'

import type {EveryPossibleRouteInstance} from 'route/everyRoutes.types'
import type {ReactProperties}            from 'util/react/ReactProperties'

import {ProjectLanguages} from 'lang/ProjectLanguages'

interface DirectRoutesProperties
    extends ReactProperties {

    language: ProjectLanguages

    route: EveryPossibleRouteInstance
}

/**
 * Render the route received.
 * But, beforehand, it changes the current language to be the one received since it is a link.
 *
 * @reactComponent
 */
export default function DirectRoute({language, route,}: DirectRoutesProperties,) {
    ProjectLanguages.setCurrentLanguage(language)

    return <Fragment key={route.name}>{route.renderCallback()}</Fragment>
}
