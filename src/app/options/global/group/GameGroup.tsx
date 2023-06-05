import './GameGroup.scss'

import {Link, useLocation} from 'react-router-dom'

import type {EveryPossibleRouteInstance} from 'route/everyRoutes.types'
import type {ReactProperties}            from 'util/react/ReactProperties'

import {ModalInstance}      from 'bootstrap/modal/ModalInstance'
import {Games}              from 'core/game/Games'
import {PARAMETER_MODAL_ID} from 'navigation/button/modalIds'

interface GameLinkProperties
    extends ReactProperties {

    readonly game: Games

    readonly gamesInUrl: readonly Games[]

}

/**
 * @reactComponent
 */
export default function GameGroup() {
    const {pathname,} = useLocation(),
        gamesInUrl = Games.getInUrl(pathname)

    return <div key={`game option container`} id={`games-option-container`} className="btn-group" role="group">
        {Games.values.map(it => <GameLink key={`game option (${it.englishName})`} game={it} gamesInUrl={gamesInUrl}/>)}
    </div>
}

/**
 * @reactComponent
 */
function GameLink({game,gamesInUrl,}: GameLinkProperties,) {
    const {pathname,} = useLocation()

    const id = `gameLink-${game.englishNameInHtml}-button`

    if(game.isSelected && gamesInUrl.length === 1)
        return <button type="button" id={id} className="btn btn-secondary link-button disabled">
            {game.renderSingleComponent}
        </button>

     const gamesAsUrl = Games.getGroupUrlValue(gamesInUrl,),
     gamesFromSelectionAsUrl = game.isSelected && gamesInUrl.length === 1 ? gamesAsUrl : Games.getGroupUrlValue(game.isSelected ? gamesInUrl.filter(it => it !== game) : [...gamesInUrl, game,],),
     newPath = pathname.replace(`game-${gamesAsUrl}`, `game-${gamesFromSelectionAsUrl}`,) as EveryPossibleRouteInstance['path']

    return <Link type="button" id={id} className={`btn btn-${game.isSelected ? '' : 'outline-'}secondary link-button`} to={newPath}
                 onClick={() => ModalInstance.getInstance(PARAMETER_MODAL_ID)?.instance.hide()}>
            {game.renderSingleComponent}
    </Link>
}