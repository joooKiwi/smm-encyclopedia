import type {CollectionHolder} from '@joookiwi/collection'
import type {Array, Nullable}  from '@joookiwi/type'

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

    readonly PREFIX: '/game-'
    readonly PREFIX_WITHOUT_SLASH: 'game-'
    readonly ALL_PREFIX_GROUP: '/game-all/'

    /**
     * Get a value by the {@link Games.urlValue}
     *
     * @param value The value to find
     */
    getValueByUrlValue(value: Nullable<| Games | string | number>,): Games

    /**
     * Get a value by the {@link Games.urlName}
     *
     * @param value The value to find
     */
    getValueByUrlName(value: Nullable<| Games | string | number>,): Games


    /**
     * Find all the {@link Games} values present in the {@link url} received
     *
     * @param url The url to find the {@link Games} present
     */
    getValueInUrl(url: string,): Array<Games>


    /**
     * Generate a {@link GroupUrlValue} for the {@link Games} from the {@link games} received
     *
     * @param games The given {@link Games}
     */
    getGroupUrlValue(games: | Array<Games> | CollectionHolder<Games>,): GroupUrlValue

    /**
     * Generate a {@link GroupUrlName} for the {@link Games} from the {@link games} received
     *
     * @param games The given {@link Games}
     */
    getGroupUrlName(games: | Array<Games> | CollectionHolder<Games>,): GroupUrlName

}
