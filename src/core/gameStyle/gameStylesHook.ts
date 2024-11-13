import type {CollectionHolder} from '@joookiwi/collection'
import type {NullOr}           from '@joookiwi/type'
import {useState}              from 'react'

import {GameStyles} from 'core/gameStyle/GameStyles'

const GameStyleCompanion = GameStyles.CompanionEnum.get

/** @reactHook */
export function useCurrentGameStyles(key: string,): NullOr<CollectionHolder<GameStyles>> {
    const [currentGameStyles, setCurrentGameStyles,] = useState(GameStyleCompanion.currentOrNull,)
    GameStyleCompanion.setOnCurrentEvent(key, setCurrentGameStyles,)
    return currentGameStyles
}
