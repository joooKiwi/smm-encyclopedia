import './GameGroup.scss'

import {Link, useLocation} from 'react-router-dom'

import type {PossibleRoutePath} from 'route/EveryRoutes.types'
import type {ReactProperties}   from 'util/react/ReactProperties'
import type {GameCollection}    from 'util/collection/GameCollection'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {Games}                    from 'core/game/Games'
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

    if (selected.length === 0) //FIXME: Find a better way to handle this. This is a temporary solution to handle empty arrays
        return <button type="button" id={id} className="btn btn-secondary link-button disabled">
            {game.renderSingleComponent}
        </button>

    if (game.isSelected && selected.length === 1)
        return <button type="button" id={id} className="btn btn-secondary link-button disabled">
            {game.renderSingleComponent}
        </button>

    const gamesAsUrl = Games.getGroupUrlValue(selected,)
    const gamesFromSelectionAsUrl = game.isSelected && selected.length === 1 ? gamesAsUrl : Games.getGroupUrlValue(game.isSelected ? selected.filter(it => it !== game) : [...selected, game,],)
    const newPath = pathname.replace(`game-${gamesAsUrl}`, `game-${gamesFromSelectionAsUrl}`,) as PossibleRoutePath

    return <Link type="button" id={id} className={`btn btn-${game.isSelected ? '' : 'outline-'}secondary link-button`} to={newPath}
                 onClick={() => BootstrapInstanceHandler.get.getModalInstanceOrNull(PARAMETER_MODAL_ID)?.instance.hide()}>
        {game.renderSingleComponent}
    </Link>
}
