import type {CompanionEnumDeclaration} from '@joookiwi/enumerable'
import type {Nullable, NullOr}         from '@joookiwi/type'

import type {ProjectLanguages}                       from 'lang/ProjectLanguages'
import type {EveryRoutes}                            from 'route/EveryRoutes'
import type {EveryPossibleRoutes, PossibleRouteName} from 'route/EveryRoutes.types'

export interface CompanionEnumDeclaration_EveryRoutes
    extends CompanionEnumDeclaration<EveryRoutes, typeof EveryRoutes> {

    getValueInUrl(url: string,): NullOr<EveryRoutes>

    getRouteFromName(name: PossibleRouteName, language?: Nullable<ProjectLanguages>,): EveryPossibleRoutes

}
