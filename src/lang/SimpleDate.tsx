import {FormattedDate}              from 'react-intl';
import {PossibleValueToGetLanguage} from './Languages';
import {DayNumber, MonthNumber}     from './date/DateInstanceCreator';

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
export function SimpleDate(props: DateTimeFormat) {
    return <FormattedDate
        value={new Date(props.year, props.month - 1, props.day,)}
        year="numeric"
        month="long"
        day="numeric"
    />;
}