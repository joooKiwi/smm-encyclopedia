import './GameGroup.scss'

import {Link, useLocation} from 'react-router-dom'

import type {ReactProperties} from 'util/react/ReactProperties'
import type {GameCollection}  from 'util/collection/GameCollection'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {Games}                    from 'core/game/Games'
import {ProjectLanguages}         from 'lang/ProjectLanguages'
import {PARAMETER_MODAL_ID}       from 'navigation/button/modalIds'

interface GameLinkProperties
    extends ReactProperties {

    readonly game: Games

    readonly selected: GameCollection

}

/** @reactComponent */
export default function GameGroup() {
    const gamesInUrl = Games.CompanionEnum.get.selected

    return <div key="option container (Game)" id="games-option-container" className="btn-group" role="group">
        <GameLink game={Games.SUPER_MARIO_MAKER_1} selected={gamesInUrl}/>
        <GameLink game={Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS} selected={gamesInUrl}/>
        <GameLink game={Games.SUPER_MARIO_MAKER_2} selected={gamesInUrl}/>
    </div>
}

/** @reactComponent */
function GameLink({game, selected,}: GameLinkProperties,) {
    const pathname = useLocation().pathname
    const id = `gameLink-${game.englishNameInHtml}-button`

    if (game.isSelected && selected.size === 1)
        return <button type="button" id={id} className="btn btn-secondary link-button disabled">
            {game.renderSingleComponent}
        </button>

    const GameCompanion = Games.CompanionEnum.get
    const pathToReplace = game.isSelected
        ? `game-${GameCompanion.getGroupUrlValue(selected.filterNot(it => it === game,),)}` as const
        : `game-${GameCompanion.getGroupUrlValue([...selected, game,],)}` as const
    let newPath: string
    if (pathname.includes('game-1',) || pathname.includes('game-3ds',) || pathname.includes('game-2',))
        newPath = pathname.replace(`game-${GameCompanion.getGroupUrlValue(selected,)}`, pathToReplace,)
    else {
        const languagesInPath = `/${ProjectLanguages.CompanionEnum.get.current.urlValue}` as const
        newPath = pathname.replace(languagesInPath, `${languagesInPath}/${pathToReplace}`,)
    }

    return <Link type="button" id={id} className={`btn btn-${game.isSelected ? '' : 'outline-'}secondary link-button`} to={newPath}
                 onClick={() => BootstrapInstanceHandler.get.getModalInstanceOrNull(PARAMETER_MODAL_ID)?.instance.hide()}>
        {game.renderSingleComponent}
    </Link>
}
