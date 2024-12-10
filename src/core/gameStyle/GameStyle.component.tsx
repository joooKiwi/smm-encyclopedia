import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'
import type {GameStyleProperty}        from 'core/entity/properties/gameStyle/GameStyleProperty'

import TextComponent            from 'app/tools/text/TextComponent'
import {GameStyles}             from 'core/gameStyle/GameStyles'
import GameStyleImage           from 'core/gameStyle/component/GameStyleImage'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {ArrayAsCollection}      from 'util/collection/ArrayAsCollection'

import ALL = GameStyles.ALL

const all = new ArrayAsCollection(ALL,)

/**
 * @deprecated This component should be replaced to something else
 * @reactComponent
 */
export default function GameStyleComponent({reference, name, displayAllAsText,}: EntityPropertyProperties<GameStyleProperty>,) {
    if (all.all(it => it.get(reference,),))
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('game style.all',)}/>
        else
            return <div key={`${name.english} (every game styles)`}>{all.map(it => <GameStyleImage reference={it}/>,)}</div>

    const gameStyles = all.filter(it => it.get(reference,),)
    if (gameStyles.length === 1)
        return <GameStyleImage reference={gameStyles.getFirst()}/>
    return <div key={`${name.english} - group`}>{gameStyles.map(it => <GameStyleImage reference={it}/>)}</div>
}
