import {allByArray, filterByArray} from '@joookiwi/collection'

import type {GameProperty}             from 'core/entity/properties/game/GameProperty'
import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'

import TextComponent            from 'app/tools/text/TextComponent'
import GameImage                from 'core/game/GameImage'
import {Games}                  from 'core/game/Games'
import {gameContentTranslation} from 'lang/components/translationMethods'

import ALL = Games.ALL

/**
 * @deprecated This component should be replaced to something else
 * @reactComponent
 */
export default function GameComponent({reference, name, displayAllAsText,}: EntityPropertyProperties<GameProperty>,) {
    if (allByArray(ALL, it => it.get(reference,),))
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('game.all',)}/>
        else
            return <div key={`${name.english} (every games)`}>{ALL.map(it => <GameImage reference={it}/>,)}</div>

    const games = filterByArray(ALL, it => it.get(reference,),)
    if (games.length === 1)
        return <GameImage reference={games.getFirst()}/>
    return <div key={`${name.english} - group`}>{games.map(it => <GameImage reference={it}/>)}</div>
}
