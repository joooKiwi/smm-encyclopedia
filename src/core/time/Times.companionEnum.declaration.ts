import type {CollectionHolder} from '@joookiwi/collection'
import type {Array, Nullable}  from '@joookiwi/type'

import type {Times}                                                  from 'core/time/Times'
import type {CompanionEnumByName}                                    from 'util/enumerable/companion/CompanionEnumByName'
import type {CompanionEnumWithCurrentAndSetCurrentEventAsCollection} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'
import type {GroupUrl}                                               from 'core/time/Times.types'

export interface CompanionEnumDeclaration_Times
    extends CompanionEnumByName<Times, typeof Times>,
        CompanionEnumWithCurrentAndSetCurrentEventAsCollection<Times, typeof Times> {

    /** The separator the every url parts */
    readonly URL_NAME_SEPARATOR: '/'
    /** The separator the names */
    readonly NAME_ARGUMENT_SEPARATOR: ','

    readonly PREFIX: '/time-'
    readonly PREFIX_WITHOUT_SLASH: 'time-'
    readonly ALL_PREFIX_GROUP: '/time-all/'

    /**
     * Get a value by the url value ({@link Times.urlValue} or {@link Times.urlName})
     *
     * @param value The value to find
     */
    getValueByUrl(value: Nullable<| Times | string>,): Times


    /**
     * Find all the {@link Times} values present in the {@link url} received
     *
     * @param url The url to find the {@link Times} present
     */
    getValueInUrl(url: string,): Array<Times>


    /**
     * Generate a {@link GroupUrl url value} for the {@link Times} from the {@link times} received
     *
     * @param times The given {@link Times}
     */
    getGroupUrl(times: | Array<Times> | CollectionHolder<Times>,): GroupUrl

}
