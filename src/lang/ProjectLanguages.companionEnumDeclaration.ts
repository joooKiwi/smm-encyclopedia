import type {PossibleEnumerableValueBy}           from '@joookiwi/enumerable'
import type {Dispatch, SetStateAction}            from 'react'
import {ImpossibleNames, PossibleEnumerableValue} from '@joookiwi/enumerable'

import type {ProjectLanguages}              from 'lang/ProjectLanguages'
import type {EveryLanguages}                from 'lang/EveryLanguages'
import type {CompanionEnumRetrievableInUrl} from 'util/enumerable/companion/CompanionEnumRetrievableInUrl'

export interface CompanionEnumDeclaration_ProjectLanguages
    extends CompanionEnumRetrievableInUrl<ProjectLanguages, typeof ProjectLanguages> {

    get defaultValue(): ProjectLanguages

    set defaultValue(value: Nullable<PossibleEnumerableValue<| ProjectLanguages | EveryLanguages>>,)

    setDefaultValue(value: ImpossibleNames,): never

    setDefaultValue(value: Nullable<PossibleEnumerableValue<| ProjectLanguages | EveryLanguages>>,): this


    /** Get the current value or null <i>(if it has not been initialized)</i> */
    get currentOrNull(): NullOr<ProjectLanguages>

    /**
     * Get the current value
     *
     * @throws {ReferenceError} The value has not been initialized
     */
    get current(): ProjectLanguages

    /**
     * Set the current value by a value applicable to an {@link import('@joookiwi/enumerable').CompanionEnum CompanionEnum}
     *
     * @param value The value to set
     * @see import('@joookiwi/enumerable').CompanionEnum.getValue CompanionEnum.getValue
     */
    set current(value: PossibleEnumerableValueBy<| ProjectLanguages | EveryLanguages>,)

    /** Get the event listener on the setting of {@link current} or <b>null</b> (if it has not been initialized) */
    get onSetCurrentEventOrNull(): NullOr<Dispatch<SetStateAction<NullOr<EveryLanguages>>>>

    /**
     * Get the event listener on the setting of {@link current}
     *
     * @throws {ReferenceError} The event listener has not been initialized
     */
    get onSetCurrentEvent(): Dispatch<SetStateAction<NullOr<EveryLanguages>>>

    /**
     * Initialize the event listener to set the {@link current}
     *
     * @param value The event listener to set
     * @shouldOnlyBeCalledOnce
     */
    set onSetCurrentEvent(value: Dispatch<SetStateAction<NullOr<EveryLanguages>>>,)


    getValueByLanguage(value: PossibleEnumerableValueBy<| EveryLanguages | ProjectLanguages>,): ProjectLanguages

}