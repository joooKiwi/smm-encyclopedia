import type {CollectionHolder} from '@joookiwi/collection'
import type {NullOr}           from '@joookiwi/type'
import {useState}              from 'react'

import {Games} from 'core/game/Games'

import Companion = Games.Companion

/** @reactHook */
export function useCurrentGames(key: string,): NullOr<CollectionHolder<Games>> {
    const [currentGames, setCurrentGames,] = useState(Companion.currentOrNull,)
    Companion.setOnCurrentEvent(key, setCurrentGames,)
    return currentGames
}
