import {FormattedDateParts} from 'react-intl';

import {DayNumber, MonthNumber}     from './types';
import {DateDayLanguages}           from './DateDayLanguages';
import {PossibleValueToGetLanguage} from '../Languages';

export interface DateTimeFormat {
    language: PossibleValueToGetLanguage
    year: number
    month: MonthNumber
    day: DayNumber
}

/**
 * A simple date component that return a date
 * from the {@link Languages.currentLanguage current language}.
 *
 * @param props
 * @constructor
 * @see https://formatjs.io/docs/react-intl/components#formatteddate
 */
export default function SimpleDate({year, month, day,}: DateTimeFormat) {
    console.log(DateDayLanguages.currentLanguage);
    return <FormattedDateParts
        value={new Date(year, month - 1, day,)}
        year="numeric"
        month="long"
        day="numeric">
        {parts => <>{parts.map(part => <>{part.type === 'day' ? DateDayLanguages.currentLanguage.newDayComponent(Number(part.value) as DayNumber) : part.value}</>)}</>}
    </FormattedDateParts>;
}