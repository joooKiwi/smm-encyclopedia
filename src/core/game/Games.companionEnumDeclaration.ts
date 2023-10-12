import type {Games}                   from 'core/game/Games'
import type {CompanionEnumByAcronym}  from 'util/enumerable/companion/CompanionEnumByAcronym'
import type {CompanionEnumByName}     from 'util/enumerable/companion/CompanionEnumByName'
import type {CompanionEnumByUrlValue} from 'util/enumerable/companion/CompanionEnumByUrlValue'

export interface CompanionEnumDeclaration_Games
    extends CompanionEnumByAcronym<Games, typeof Games>,
        CompanionEnumByName<Games, typeof Games>,
        CompanionEnumByUrlValue<Games, typeof Games> {

    /** The separator the every url parts */
    readonly URL_NAME_SEPARATOR: '/'
    /** The separator the names */
    readonly NAME_ARGUMENT_SEPARATOR: ','

    readonly SINGLE_URL_REGEX: RegExp
    readonly PREFIX: string
    readonly PREFIX_WITHOUT_SLASH: string
    readonly ALL_PREFIX_GROUP: string
    readonly AMOUNT_OF_VALUES: number

    getValueInUrl(url: string,): readonly Games[]

    getValueBySimpleValue(value: Nullable<| Games | string | number>,): Games

}
