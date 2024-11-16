import './GameStyleGroup.scss'

import type {CollectionHolder} from '@joookiwi/collection'
import {CollectionConstants}   from '@joookiwi/collection'
import {Link, useLocation}     from 'react-router-dom'

import type {ReactProperties} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import GameStyleImage             from 'core/gameStyle/GameStyleImage'
import {GameStyles}               from 'core/gameStyle/GameStyles'
import {useCurrentGameStyles}     from 'core/gameStyle/gameStylesHook'
import {Games}                    from 'core/game/Games'
import {useCurrentGames}          from 'core/game/gamesHook'
import {ProjectLanguages}         from 'lang/ProjectLanguages'
import {PARAMETER_MODAL_ID}       from 'navigation/button/modalIds'
import {Empty}                    from 'util/emptyVariables'

import EMPTY_STRING =      Empty.EMPTY_STRING
import Companion =         GameStyles.Companion
import GameCompanion =     Games.Companion
import LanguageCompanion = ProjectLanguages.Companion
import NSMBU =             GameStyles.NSMBU
import SMB =               GameStyles.SMB
import SMB3 =              GameStyles.SMB3
import SMM2 =              Games.SMM2
import SMW =               GameStyles.SMW
import SM3DW =             GameStyles.SM3DW

/** @reactComponent */
export default function GameStyleGroup() {
    const gameStyles = useCurrentGameStyles('game style group',)
    const games = useCurrentGames('game style group (game)',) ?? CollectionConstants.EMPTY_COLLECTION_HOLDER
    if (gameStyles == null)
        return null
    if (gameStyles.isEmpty)
        return null
    const isSmm2Selected = games.has(SMM2,)

    return <div key="option container (Game styles)" id="gameStyles-option-container">
        <div className="btn-group-vertical d-lg-none">
            <div className="btn-group" role="group">
                <GameStyleLink gameStyle={SMB} selected={gameStyles}/>
                <GameStyleLink gameStyle={SMB3} selected={gameStyles}/>
                <GameStyleLink gameStyle={SMW} selected={gameStyles}/>
            </div>
            <div className="btn-group" role="group">
                <GameStyleLink gameStyle={NSMBU} selected={gameStyles}/>
                <GameStyleLink gameStyle={SM3DW} selected={gameStyles} disabled={!isSmm2Selected}/>
            </div>
        </div>
        <div className="btn-group d-none d-lg-inline-flex" role="group">
            <GameStyleLink gameStyle={SMB} selected={gameStyles}/>
            <GameStyleLink gameStyle={SMB3} selected={gameStyles}/>
            <GameStyleLink gameStyle={SMW} selected={gameStyles}/>
            <GameStyleLink gameStyle={NSMBU} selected={gameStyles}/>
            <GameStyleLink gameStyle={SM3DW} selected={gameStyles} disabled={!isSmm2Selected}/>
        </div>
    </div>
}


interface GameStyleLinkProperties
    extends ReactProperties {

    readonly gameStyle: GameStyles

    readonly disabled?: boolean

    readonly selected: CollectionHolder<GameStyles>

}

function GameStyleLink({gameStyle, disabled = false, selected,}: GameStyleLinkProperties,) {
    const pathname = useLocation().pathname
    const id = `gameStyleLink-${gameStyle.englishNameInHtml}-button`
    const isSelected = selected.has(gameStyle,)

    if (isSelected && selected.size === 1)
        return <button type="button" id={id} className="btn btn-secondary link-button" disabled>
            <GameStyleImage reference={gameStyle}/>
        </button>

    const pathToReplace = isSelected
        ? `game-style-${Companion.getGroupUrlValue(selected.filterNot(it => it === gameStyle,),)}` as const
        : `game-style-${Companion.getGroupUrlValue([...selected, gameStyle,],)}` as const
    let newPath: string
    if (pathname.includes('game-style-',))
        newPath = pathname.replace(`game-style-${Companion.getGroupUrlValue(selected,)}`, pathToReplace,)
    else if (pathname.includes('game-1',) || pathname.includes('game-3ds',) || pathname.includes('game-2',)) {
        const gamesInPath = `/game-${GameCompanion.getGroupUrlValue(GameCompanion.current,)}` as const
        newPath = pathname.replace(gamesInPath, `${gamesInPath}/${pathToReplace}`,)
    } else {
        const languagesInPath = `/${LanguageCompanion.current.urlValue}` as const
        newPath = pathname.replace(languagesInPath, `${languagesInPath}/${pathToReplace}`,)
    }


    return <Link type="button" id={id} className={`btn btn${isSelected ? EMPTY_STRING : '-outline'}-secondary link-button ${disabled ? 'disabled' : EMPTY_STRING}`} to={newPath}
                 onClick={() => BootstrapInstanceHandler.get.getModalInstanceOrNull(PARAMETER_MODAL_ID,)?.instance.hide()}>
        <GameStyleImage reference={gameStyle}/>
    </Link>
}
