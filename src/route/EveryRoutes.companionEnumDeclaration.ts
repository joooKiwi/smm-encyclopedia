import type {CompanionEnumDeclaration} from '@joookiwi/enumerable'

import type {ProjectLanguages}                       from 'lang/ProjectLanguages'
import type {EveryRoutes}                            from 'route/EveryRoutes'
import type {EveryPossibleRoutes, PossibleRouteName} from 'route/EveryRoutes.types'
import type {SimpleRoute}                            from 'route/SimpleRoute'

export interface CompanionEnumDeclaration_EveryRoutes
    extends CompanionEnumDeclaration<EveryRoutes, typeof EveryRoutes> {

    get everyRoute(): readonly SimpleRoute[]

    getValueInUrl(url: string,): NullOr<EveryRoutes>

    getRouteFromName(name: PossibleRouteName, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes

}
