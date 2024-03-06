import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'
import type {TimeProperty}             from 'core/entity/properties/time/TimeProperty'

import TextComponent            from 'app/tools/text/TextComponent'
import TimeImage                from 'core/time/TimeImage'
import {Times}                  from 'core/time/Times'
import {gameContentTranslation} from 'lang/components/translationMethods'

/**
 * @deprecated This component should be replaced with something else
 * @reactComponent
 */
export default function TimeComponent({reference, name, displayAllAsText,}: EntityPropertyProperties<TimeProperty>,) {
    if (reference.isInDayTheme && reference.isInNightTheme === true) {
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('time.all',)}/>
        return <div key={`Every times images (${name.english})`}>{Times.CompanionEnum.get.values.map(it =>
            <TimeImage reference={it}/>,)}</div>
    }

    if (reference.isInDayTheme)
        return <TimeImage reference={Times.DAY}/>
    return <TimeImage reference={Times.NIGHT}/>
}
