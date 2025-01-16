import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'
import type {TimeProperty}             from 'core/entity/properties/time/TimeProperty'

import TextComponent            from 'app/tools/text/TextComponent'
import {Times}                  from 'core/time/Times'
import TimeImage                from 'core/time/component/TimeImage'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {ArrayAsCollection}      from 'util/collection/ArrayAsCollection'

import ALL = Times.ALL

const all = new ArrayAsCollection(ALL,)

/**
 * @deprecated This component should be replaced with something else
 * @reactComponent
 */
export default function TimeComponent({reference, name, displayAllAsText,}: EntityPropertyProperties<TimeProperty>,) {
    if (all.all(it => it.get(reference,),))
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('time.all',)}/>
        else
            return <div key={`Every times images (${name.english})`}>{all.map(it => <TimeImage reference={it}/>,)}</div>

    if (reference.isInDayTheme)
        return <TimeImage reference={Times.DAY}/>
    return <TimeImage reference={Times.NIGHT}/>
}
