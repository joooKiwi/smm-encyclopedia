import './GameGroup.scss'

import {Link, useLocation} from 'react-router-dom'

import type {PossibleRoutePath} from 'route/EveryRoutes.types'
import type {ReactProperties}   from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {Games}                    from 'core/game/Games'
import {PARAMETER_MODAL_ID}       from 'navigation/button/modalIds'

interface GameLinkProperties
    extends ReactProperties {

    readonly game: Games

    readonly gamesInUrl: readonly Games[]

}

/** @reactComponent */
export default function GameGroup() {
    const pathname = useLocation().pathname
    const gamesInUrl = Games.CompanionEnum.get.getValueInUrl(pathname,)

    return <div key={`game option container`} id={`games-option-container`} className="btn-group" role="group">
        <GameLink game={Games.SUPER_MARIO_MAKER_1} gamesInUrl={gamesInUrl}/>
        <GameLink game={Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS} gamesInUrl={gamesInUrl}/>
        <GameLink game={Games.SUPER_MARIO_MAKER_2} gamesInUrl={gamesInUrl}/>
    </div>
}

/** @reactComponent */
function GameLink({game, gamesInUrl,}: GameLinkProperties,) {
    const {pathname,} = useLocation()

    const id = `gameLink-${game.englishNameInHtml}-button`

    if (gamesInUrl.length === 0) //FIXME: Find a better way to handle this. This is a temporary solution to handle empty arrays
        return <button type="button" id={id} className="btn btn-secondary link-button disabled">
            {game.renderSingleComponent}
        </button>

    if (game.isSelected && gamesInUrl.length === 1)
        return <button type="button" id={id} className="btn btn-secondary link-button disabled">
            {game.renderSingleComponent}
        </button>

    const gamesAsUrl = Games.getGroupUrlValue(gamesInUrl,)
    const gamesFromSelectionAsUrl = game.isSelected && gamesInUrl.length === 1 ? gamesAsUrl : Games.getGroupUrlValue(game.isSelected ? gamesInUrl.filter(it => it !== game) : [...gamesInUrl, game,],)
    const newPath = pathname.replace(`game-${gamesAsUrl}`, `game-${gamesFromSelectionAsUrl}`,) as PossibleRoutePath

    return <Link type="button" id={id} className={`btn btn-${game.isSelected ? '' : 'outline-'}secondary link-button`} to={newPath}
                 onClick={() => BootstrapInstanceHandler.get.getModalInstanceOrNull(PARAMETER_MODAL_ID)?.instance.hide()}>
        {game.renderSingleComponent}
    </Link>
}
