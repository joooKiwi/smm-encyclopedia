import type {CollectionHolder} from '@joookiwi/collection'
import type {Array, Nullable}  from '@joookiwi/type'

import type {GameStyles}                                             from 'core/gameStyle/GameStyles'
import type {GroupUrlName, GroupUrlValue}                            from 'core/gameStyle/GameStyles.types'
import type {CompanionEnumByAcronym}                                 from 'util/enumerable/companion/CompanionEnumByAcronym'
import type {CompanionEnumByName}                                    from 'util/enumerable/companion/CompanionEnumByName'
import type {CompanionEnumByUrlValue}                                from 'util/enumerable/companion/CompanionEnumByUrlValue'
import type {CompanionEnumWithCurrentAndSetCurrentEventAsCollection} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'

export interface CompanionEnumDeclaration_GameStyles
    extends CompanionEnumByAcronym<GameStyles, typeof GameStyles>,
        CompanionEnumByName<GameStyles, typeof GameStyles>,
        CompanionEnumByUrlValue<GameStyles, typeof GameStyles>,
        CompanionEnumWithCurrentAndSetCurrentEventAsCollection<GameStyles, typeof GameStyles> {

    /** The separator the every url parts */
    readonly URL_NAME_SEPARATOR: '/'
    /** The separator the names */
    readonly NAME_ARGUMENT_SEPARATOR: ','

    readonly PREFIX: '/game-style-'
    readonly PREFIX_WITHOUT_SLASH: 'game-style-'
    readonly ALL_PREFIX_GROUP: '/game-style-all/'

    /**
     * Get a value by the {@link GameStyles.urlValue}
     *
     * @param value The value to find
     */
    getValueByUrlValue(value: Nullable<| GameStyles | string | number>,): GameStyles

    /**
     * Get a value by the {@link GameStyles.urlName}
     *
     * @param value The value to find
     */
    getValueByUrlName(value: Nullable<| GameStyles | string | number>,): GameStyles


    /**
     * Find the {@link GameStyles game styles} present in the {@link url} received
     *
     * @param url The url to find the {@link GameStyles} present
     * @arrayReutilization
     */
    findInUrl(url: string,): Array<GameStyles>

    /**
     * Find the {@link GameStyles game styles} present in the {@link name} received
     *
     * @param name The name to find the {@link GameStyles} present
     * @arrayReutilization
     */
    findInName(name: string,): Array<GameStyles>


    /**
     * Generate a {@link GroupUrlValue} for the {@link GameStyles} from the {@link gameStyles} received
     *
     * @param gameStyles The given {@link GameStyles}
     */
    getGroupUrlValue(gameStyles: | Array<GameStyles> | CollectionHolder<GameStyles>,): GroupUrlValue

    /**
     * Generate a {@link GroupUrlName} for the {@link GameStyles} from the {@link gameStyles} received
     *
     * @param gameStyles The given {@link GameStyles}
     */
    getGroupUrlName(gameStyles: | Array<GameStyles> | CollectionHolder<GameStyles>,): GroupUrlName

}
