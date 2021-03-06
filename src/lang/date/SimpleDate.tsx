import {FormattedDateParts} from 'react-intl';
import {Fragment}           from 'react';

import type {DayNumber, MonthNumber} from './types';
import type {ReactProperty}          from '../../util/react/ReactProperty';

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
 * @reactComponent
 * @see https://formatjs.io/docs/react-intl/components#formatteddate
 */
export default function SimpleDate({year, month, day,}: DateTimeFormatProperties,) {
    const date = new Date(year, month - 1, day,);

    return <FormattedDateParts
        value={date}
        year="numeric"
        month="long"
        day="numeric">
        {parts => <>{parts.map(({type, value,}) => type === 'day' ? <Fragment key={`${date} - ${type}`}>{DateDayLanguages.currentLanguage.newDayComponent(Number(value) as DayNumber)}</Fragment> : value)}</>}
    </FormattedDateParts>;
}

