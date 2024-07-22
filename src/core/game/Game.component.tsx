import type {GameProperty}             from 'core/entity/properties/game/GameProperty'
import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'

import TextComponent            from 'app/tools/text/TextComponent'
import GameImage                from 'core/game/GameImage'
import {Games}                  from 'core/game/Games'
import {gameContentTranslation} from 'lang/components/translationMethods'

/**
 * @deprecated This component should be replaced to something else
 * @reactComponent
 */
export default function GameComponent({reference, name, displayAllAsText,}: EntityPropertyProperties<GameProperty>,) {
    if (reference.isInSuperMarioMaker1 && reference.isInSuperMarioMakerFor3DS && reference.isInSuperMarioMaker2) {
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('game.all',)}/>
        return <div key={`${name.english} (every games)`}>{Games.CompanionEnum.get.values.map(it =>
            <GameImage reference={it}/>,)}</div>
    }

    const games = [] as Games[]
    reference.toGameMap().forEach((isSelected, game,) => {
        if (isSelected)
            games.push(game,)
    },)
    if (games.length === 1)
        return <GameImage reference={games[0]}/>
    return <div key={`${name.english} - group`}>{games.map(it => <GameImage reference={it}/>)}</div>
}
