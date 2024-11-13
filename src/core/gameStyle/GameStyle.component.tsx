import type {MutableArray} from '@joookiwi/type'
import {getFirstByArray}   from '@joookiwi/collection'

import type {EntityPropertyProperties} from 'core/_component/EntityPropertyProperties'
import type {GameStyleProperty}        from 'core/entity/properties/gameStyle/GameStyleProperty'

import TextComponent            from 'app/tools/text/TextComponent'
import GameStyleImage           from 'core/gameStyle/GameStyleImage'
import {GameStyles}             from 'core/gameStyle/GameStyles'
import {gameContentTranslation} from 'lang/components/translationMethods'

/**
 * @deprecated This component should be replaced to something else
 * @reactComponent
 */
export default function GameStyleComponent({reference, name, displayAllAsText,}: EntityPropertyProperties<GameStyleProperty>,) {
    if (reference.isInSuperMarioBrosStyle
        && reference.isInSuperMarioBros3Style
        && reference.isInSuperMarioWorldStyle
        && reference.isInNewSuperMarioBrosUStyle
        && reference.isInSuperMario3DWorldStyle === true) {
        if (displayAllAsText)
            return <TextComponent content={gameContentTranslation('game style.all',)}/>
        return <div key={`${name.english} (every game styles)`}>{GameStyles.CompanionEnum.get.values.map(it =>
            <GameStyleImage reference={it}/>,)}</div>
    }

    const gameStyles: MutableArray<GameStyles> = []
    reference.toGameStyleMap().forEach((isSelected, gameStyle,) => {
        if (isSelected)
            gameStyles.push(gameStyle,)
    },)
    if (gameStyles.length === 1)
        return <GameStyleImage reference={getFirstByArray(gameStyles,)}/>
    return <div key={`${name.english} - group`}>{gameStyles.map(it => <GameStyleImage reference={it}/>)}</div>
}
