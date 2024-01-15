import type {CollectionHolder} from '@joookiwi/collection'

import type {GameStyles}                   from 'core/gameStyle/GameStyles'
import type {GroupUrlValue}                from 'core/gameStyle/GameStyles.types'
import type {GameStyleCollection}          from 'util/collection/GameStyleCollection'
import type {CompanionEnumByAcronymOrName} from 'util/enumerable/companion/CompanionEnumByAcronymOrName'
import type {CompanionEnumByUrlValue}      from 'util/enumerable/companion/CompanionEnumByUrlValue'

export interface CompanionEnumDeclaration_GameStyles
    extends CompanionEnumByAcronymOrName<GameStyles, typeof GameStyles>,
        CompanionEnumByUrlValue<GameStyles, typeof GameStyles> {

    /** The separator the every url parts */
    readonly URL_NAME_SEPARATOR: '/'
    /** The separator the names */
    readonly NAME_ARGUMENT_SEPARATOR: ','

    readonly URL_REGEX: RegExp
    readonly PREFIX: '/game-style-'
    readonly PREFIX_WITHOUT_SLASH: 'game-style-'
    readonly ALL_PREFIX_GROUP: '/game-style-all/'

    getValueInUrl(url: string,): readonly GameStyles[]

    getGroupUrlValue(gameStyles: | readonly GameStyles[] | CollectionHolder<GameStyles>,): GroupUrlValue

    getValueBySimpleValue(value: Nullable<| GameStyles | string | number>,): GameStyles


    get selected(): GameStyleCollection

    set selected(value: readonly GameStyles[],)

}
