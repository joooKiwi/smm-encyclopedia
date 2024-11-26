import type {CollectionHolder} from '@joookiwi/collection'
import type {NullOr}           from '@joookiwi/type'
import {useState}              from 'react'

import {Times} from 'core/time/Times'

import Companion = Times.Companion

export function useCurrentTimes(key: string,): NullOr<CollectionHolder<Times>> {
    const [currentTimes, setCurrentTimes,] = useState(Companion.currentOrNull,)
    Companion.setOnCurrentEvent(key, setCurrentTimes,)
    return currentTimes
}
