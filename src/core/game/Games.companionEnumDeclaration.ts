import type {CollectionHolder} from '@joookiwi/collection'

import type {Games}                                                  from 'core/game/Games'
import type {GroupUrlName, GroupUrlValue}                            from 'core/game/Games.types'
import type {CompanionEnumByAcronym}                                 from 'util/enumerable/companion/CompanionEnumByAcronym'
import type {CompanionEnumByName}                                    from 'util/enumerable/companion/CompanionEnumByName'
import type {CompanionEnumByUrlValue}                                from 'util/enumerable/companion/CompanionEnumByUrlValue'
import type {CompanionEnumWithCurrentAndSetCurrentEventAsCollection} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'

export interface CompanionEnumDeclaration_Games
    extends CompanionEnumByAcronym<Games, typeof Games>,
        CompanionEnumByName<Games, typeof Games>,
        CompanionEnumByUrlValue<Games, typeof Games>,
        CompanionEnumWithCurrentAndSetCurrentEventAsCollection<Games, typeof Games> {

    /** The separator the every url parts */
    readonly URL_NAME_SEPARATOR: '/'
    /** The separator the names */
    readonly NAME_ARGUMENT_SEPARATOR: ','

    readonly URL_REGEX: RegExp
    readonly SINGLE_URL_REGEX: RegExp
    readonly DOUBLE_URL_REGEX: RegExp
    readonly PREFIX: '/game-'
    readonly PREFIX_WITHOUT_SLASH: 'game-'
    readonly ALL_PREFIX_GROUP: '/game-all/'

    getValueInUrl(url: string,): readonly Games[]

    getGroupUrlValue(games: | readonly Games[] | CollectionHolder<Games>,): GroupUrlValue

    getGroupUrlName(games: | readonly Games[] | CollectionHolder<Games>,): GroupUrlName

    getValueBySimpleValue(value: Nullable<| Games | string | number>,): Games

}
