import './GameGroup.scss'

import type {CollectionHolder} from '@joookiwi/collection'
import {Link, useLocation}     from 'react-router-dom'

import type {ReactProperties} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {Games}                    from 'core/game/Games'
import GameImage                  from 'core/game/component/GameImage'
import {useCurrentGames}          from 'core/game/gamesHook'
import {ProjectLanguages}         from 'lang/ProjectLanguages'
import {PARAMETER_MODAL_ID}       from 'navigation/button/modalIds'
import {Empty}                    from 'util/emptyVariables'

import EMPTY_STRING =      Empty.EMPTY_STRING
import Companion =         Games.Companion
import LanguageCompanion = ProjectLanguages.Companion
import SMM1 =              Games.SMM1
import SMM2 =              Games.SMM2
import SMM3DS =            Games.SMM3DS

interface GameLinkProperties
    extends ReactProperties {

    readonly game: Games

    readonly selected: CollectionHolder<Games>

}

/** @reactComponent */
export default function GameGroup() {
    const games = useCurrentGames('game group',)
    if (games == null)
        return null
    if (games.isEmpty)
        return null

    return <div key={`option container (Games = ${games.toString()})`} id="games-option-container" className="btn-group" role="group">
        <GameLink game={SMM1} selected={games}/>
        <GameLink game={SMM3DS} selected={games}/>
        <GameLink game={SMM2} selected={games}/>
    </div>
}

/** @reactComponent */
function GameLink({game, selected,}: GameLinkProperties,) {
    const pathname = useLocation().pathname
    const id = `gameLink-${game.englishNameInHtml}-button`
    const isSelected = selected.has(game,)

    if (isSelected && selected.size === 1)
        return <button type="button" id={id} className="btn btn-secondary link-button disabled">
            <GameImage reference={game}/>
        </button>

    const pathToReplace = isSelected
        ? `game-${Companion.getGroupUrlValue(selected.filterNot(it => it === game,),)}` as const
        : `game-${Companion.getGroupUrlValue([...selected, game,],)}` as const
    let newPath: string
    if (pathname.includes('game-1',) || pathname.includes('game-3ds',) || pathname.includes('game-2',))
        newPath = pathname.replace(`game-${Companion.getGroupUrlValue(selected,)}`, pathToReplace,)
    else {
        const languagesInPath = `/${LanguageCompanion.current.urlValue}` as const
        newPath = pathname.replace(languagesInPath, `${languagesInPath}/${pathToReplace}`,)
    }

    return <Link type="button" id={id} className={`btn btn-${isSelected ? EMPTY_STRING : 'outline-'}secondary link-button`} to={newPath}
                 onClick={() => BootstrapInstanceHandler.get.getModalInstanceOrNull(PARAMETER_MODAL_ID,)?.instance.hide()}>
        <GameImage reference={game}/>
    </Link>
}
