import type {CollectionHolder} from '@joookiwi/collection'
import type {NullOr}           from '@joookiwi/type'
import {useState}              from 'react'

import {GameStyles} from 'core/gameStyle/GameStyles'

import Companion = GameStyles.Companion

/** @reactHook */
export function useCurrentGameStyles(key: string,): NullOr<CollectionHolder<GameStyles>> {
    const [currentGameStyles, setCurrentGameStyles,] = useState(Companion.currentOrNull,)
    Companion.setOnCurrentEvent(key, setCurrentGameStyles,)
    return currentGameStyles
}
