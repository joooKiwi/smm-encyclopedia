import type {CompanionEnumWithParent, PossibleEnumerableValueBy} from '@joookiwi/enumerable'

import type {EveryLanguages}   from 'lang/EveryLanguages'
import type {ProjectLanguages} from 'lang/ProjectLanguages'
import type {DateDayLanguages} from 'lang/date/DateDayLanguages'

export interface CompanionEnumDeclaration_DateDayLanguages
    extends CompanionEnumWithParent<DateDayLanguages, typeof DateDayLanguages, ProjectLanguages, typeof ProjectLanguages> {

    get defaultValue(): DateDayLanguages

    set defaultValue(value: unknown,)

    setDefaultValue(value: unknown,): never


    /** Get the current value or null <i>(if it has not been initialized)</i> */
    get currentOrNull(): NullOr<DateDayLanguages>

    /**
     * Get the current value
     *
     * @throws {ReferenceError} The value has not been initialized
     */
    get current(): DateDayLanguages

    /**
     * Set the current value by a value applicable to an {@link import('@joookiwi/enumerable').CompanionEnum CompanionEnum}
     *
     * @param value The value to set
     * @see import('@joookiwi/enumerable').CompanionEnum.getValue CompanionEnum.getValue
     */
    set current(value: PossibleEnumerableValueBy<| DateDayLanguages | ProjectLanguages | EveryLanguages>,)


    getValueByLanguage(value: Nullable<PossibleEnumerableValueBy<| ProjectLanguages | DateDayLanguages | EveryLanguages>>,): DateDayLanguages

}
