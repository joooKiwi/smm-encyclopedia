import './GameStyleGroup.scss'

import {Link, useLocation} from 'react-router-dom'

import type {GameStyleCollection} from 'util/collection/GameStyleCollection'
import type {ReactProperties}     from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {GameStyles}               from 'core/gameStyle/GameStyles'
import {Games}                    from 'core/game/Games'
import {ProjectLanguages}         from 'lang/ProjectLanguages'
import {PARAMETER_MODAL_ID}       from 'navigation/button/modalIds'

/** @reactComponent */
export default function GameStyleGroup() {
    const selected = GameStyles.CompanionEnum.get.selected
    const isSmm2Selected = Games.SUPER_MARIO_MAKER_2.isSelected

    return <div key="option container (Game styles)" id="gameStyles-option-container">
        <div className="btn-group-vertical d-lg-none">
            <div className="btn-group" role="group">
                <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_BROS} selected={selected}/>
                <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_BROS_3} selected={selected}/>
                <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_WORLD} selected={selected}/>
            </div>
            <div className="btn-group" role="group">
                <GameStyleLink gameStyle={GameStyles.NEW_SUPER_MARIO_BROS_U} selected={selected}/>
                <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_3D_WORLD} selected={selected} disabled={!isSmm2Selected}/>
            </div>
        </div>
        <div className="btn-group d-none d-lg-inline-flex" role="group">
            <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_BROS} selected={selected}/>
            <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_BROS_3} selected={selected}/>
            <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_WORLD} selected={selected}/>
            <GameStyleLink gameStyle={GameStyles.NEW_SUPER_MARIO_BROS_U} selected={selected}/>
            <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_3D_WORLD} selected={selected} disabled={!isSmm2Selected}/>
        </div>
    </div>
}


interface GameStyleLinkProperties
    extends ReactProperties {

    readonly gameStyle: GameStyles

    readonly disabled?: boolean

    readonly selected: GameStyleCollection

}

function GameStyleLink({gameStyle, disabled = false, selected,}: GameStyleLinkProperties,) {
    const pathname = useLocation().pathname
    const id = `gameStyleLink-${gameStyle.englishNameInHtml}-button`

    if (gameStyle.isSelected && selected.size === 1)
        return <button type="button" id={id} className="btn btn-secondary link-button" disabled>
            {gameStyle.renderSingleComponent}
        </button>

    const GameStyleCompanion = GameStyles.CompanionEnum.get
    const pathToReplace = gameStyle.isSelected
        ? `game-style-${GameStyleCompanion.getGroupUrlValue(selected.filterNot(it => it === gameStyle,),)}` as const
        : `game-style-${GameStyleCompanion.getGroupUrlValue([...selected, gameStyle,],)}` as const
    let newPath: string
    if (pathname.includes('game-style-',))
        newPath = pathname.replace(`game-style-${GameStyleCompanion.getGroupUrlValue(selected,)}`, pathToReplace,)
    else if (pathname.includes('game-1',) || pathname.includes('game-3ds',) || pathname.includes('game-2',)) {
        const GameCompanion = Games.CompanionEnum.get
        const gamesInPath = `/game-${GameCompanion.getGroupUrlValue(GameCompanion.selected,)}` as const
        newPath = pathname.replace(gamesInPath, `${gamesInPath}/${pathToReplace}`,)
    } else {
        const languagesInPath = `/${ProjectLanguages.CompanionEnum.get.current.urlValue}` as const
        newPath = pathname.replace(languagesInPath, `${languagesInPath}/${pathToReplace}`,)
    }


    return <Link type="button" id={id} className={`btn btn${gameStyle.isSelected ? '' : '-outline'}-secondary link-button ${disabled ? 'disabled' : ''}`} to={newPath}
                 onClick={() => BootstrapInstanceHandler.get.getModalInstanceOrNull(PARAMETER_MODAL_ID)?.instance.hide()}>
        {gameStyle.renderSingleComponent}
    </Link>
}
