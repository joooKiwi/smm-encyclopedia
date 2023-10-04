import type {Games}                             from 'core/game/Games'
import type {CompanionEnumByAcronym}            from 'util/enumerable/companion/CompanionEnumByAcronym'
import type {CompanionEnumByName}               from 'util/enumerable/companion/CompanionEnumByName'
import type {CompanionEnumByUrlValue}           from 'util/enumerable/companion/CompanionEnumByUrlValue'
import type {CompanionEnumDualRetrievableInUrl} from 'util/enumerable/companion/CompanionEnumDualRetrievableInUrl'

export interface CompanionEnumDeclaration_Games
    extends CompanionEnumDualRetrievableInUrl<Games, typeof Games>,
        CompanionEnumByAcronym<Games, typeof Games>,
        CompanionEnumByName<Games, typeof Games>,
        CompanionEnumByUrlValue<Games, typeof Games> {

    getValueBySimpleValue(value: Nullable<| Games | string | number>,): Games

}
