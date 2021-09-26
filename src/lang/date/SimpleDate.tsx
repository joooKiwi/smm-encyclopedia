import {FormattedDateParts} from 'react-intl';

import type {DayNumber, MonthNumber} from './types';
import type {ReactProperty}          from '../../util/ReactProperty';

import {DateDayLanguages} from './DateDayLanguages';

export interface DateTimeFormatProperties
    extends ReactProperty {

    year: number

    month: MonthNumber

    day: DayNumber

}

/**
 * A simple date component that return a date
 * from the {@link DateDayLanguages.currentLanguage current language}.
 *
 * @see https://formatjs.io/docs/react-intl/components#formatteddate
 */
export default function SimpleDate({year, month, day,}: DateTimeFormatProperties,) {
    return <FormattedDateParts
        value={new Date(year, month - 1, day,)}
        year="numeric"
        month="long"
        day="numeric">
        {parts => <>{parts.map(part => <>{part.type === 'day' ? DateDayLanguages.currentLanguage.newDayComponent(Number(part.value) as DayNumber) : part.value}</>)}</>}
    </FormattedDateParts>;
}