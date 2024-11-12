import {FormattedDateParts} from 'react-intl'
import {Fragment}           from 'react'

import type {ReactProperties} from 'util/react/ReactProperties'

import {DateDayLanguages} from 'lang/date/DateDayLanguages'

interface DateTimeFormatFromSeparatedValuesProperties
    extends ReactProperties {

    readonly year: number
    readonly month: MonthNumber
    readonly day: DayNumber

}

interface DateTimeFormatFromDateProperties
    extends ReactProperties {
    readonly date: Date
}

/**
 * A date component that returns a date
 * from the {@link DateDayLanguages.current current language}.
 *
 * @reactComponent
 * @see https://formatjs.io/docs/react-intl/components#formatteddate
 */
export default function SimpleDate(properties: | DateTimeFormatFromSeparatedValuesProperties | DateTimeFormatFromDateProperties,) {
    if ('date' in properties)
        return <SimpleDateFromDate date={properties.date}/>
    return <SimpleDateFromDate date={new Date(properties.year, properties.month - 1, properties.day,)}/>
}

function SimpleDateFromDate({date,}: DateTimeFormatFromDateProperties,) {
    return <FormattedDateParts
        value={date}
        year="numeric"
        month="long"
        day="numeric">
        {parts => <>{parts.map(({type, value,}) => type === 'day' ?
            <Fragment key={`${date} - ${type}`}>{DateDayLanguages.CompanionEnum.get.current.newDayComponent(Number(value,) as DayNumber,)}</Fragment> : value)}</>}
    </FormattedDateParts>
}
