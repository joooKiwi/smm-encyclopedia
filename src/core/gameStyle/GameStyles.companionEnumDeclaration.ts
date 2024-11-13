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

    readonly URL_REGEX: RegExp
    readonly PREFIX: '/game-style-'
    readonly PREFIX_WITHOUT_SLASH: 'game-style-'
    readonly ALL_PREFIX_GROUP: '/game-style-all/'

    getValueInUrl(url: string,): Array<GameStyles>

    getGroupUrlValue(gameStyles: | Array<GameStyles> | CollectionHolder<GameStyles>,): GroupUrlValue

    getGroupUrlName(gameStyles: | Array<GameStyles> | CollectionHolder<GameStyles>,): GroupUrlName

    getValueBySimpleValue(value: Nullable<| GameStyles | string | number>,): GameStyles

}
