import {allByArray, mapByArray} from '@joookiwi/collection'

import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'
import type {TimeProperty}             from 'core/entity/properties/time/TimeProperty'

import TextComponent            from 'app/tools/text/TextComponent'
import {Times}                  from 'core/time/Times'
import TimeImage                from 'core/time/component/TimeImage'
import {gameContentTranslation} from 'lang/components/translationMethods'

import ALL = Times.ALL

/**
 * @deprecated This component should be replaced with something else
 * @reactComponent
 */
export default function TimeComponent({reference, name, displayAllAsText,}: EntityPropertyProperties<TimeProperty>,) {
    if (allByArray(ALL, it => it.get(reference,),))
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('time.all',)}/>
        else
            return <div key={`Every times images (${name.english})`}>{mapByArray(ALL, it => <TimeImage reference={it}/>,)}</div>

    if (reference.isInDayTheme)
        return <TimeImage reference={Times.DAY}/>
    return <TimeImage reference={Times.NIGHT}/>
}
