import type {CollectionHolder} from '@joookiwi/collection'
import {useState}              from 'react'

import {Games} from 'core/game/Games'

const GameCompanion = Games.CompanionEnum.get

/** @reactHook */
export function useCurrentGames(key: string,): NullOr<CollectionHolder<Games>> {
    const [currentGames, setCurrentGames,] = useState(GameCompanion.currentOrNull,)
    GameCompanion.setOnCurrentEvent(key, setCurrentGames,)
    return currentGames
}
