import {FormattedDate}              from 'react-intl';
import {PossibleValueToGetLanguage} from './Languages';
import {DayNumber, MonthNumber}     from './date/DateInstanceCreator';

export interface DateTimeFormat {
    language: PossibleValueToGetLanguage
    year: number
    month: MonthNumber
    day: DayNumber
}

const globalDate = globalThis.Date;

export function Date(props: DateTimeFormat) {
    return <FormattedDate
        value={new globalDate(props.year, props.month - 1, props.day,)}
        year="numeric"
        month="long"
        day="numeric"
    />;
}
