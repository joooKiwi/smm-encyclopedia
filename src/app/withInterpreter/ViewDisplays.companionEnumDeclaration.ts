import type {CompanionEnumRetrievableInUrl}              from 'util/enumerable/companion/CompanionEnumRetrievableInUrl'
import type {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'
import type {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'

export interface CompanionEnumDeclaration_ViewDisplays
    extends CompanionEnumWithCurrentAndSetCurrentEvent<ViewDisplays, typeof ViewDisplays>,
        CompanionEnumRetrievableInUrl<ViewDisplays, typeof ViewDisplays> {}