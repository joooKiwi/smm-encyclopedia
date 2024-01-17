import './GameStyleGroup.scss'

import {Link, useLocation} from 'react-router-dom'

import type {GameStyleCollection} from 'util/collection/GameStyleCollection'
import type {ReactProperties}     from 'util/react/ReactProperties'

import {GameStyles}               from 'core/gameStyle/GameStyles'
import {Games}                    from 'core/game/Games'
import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import {PARAMETER_MODAL_ID}       from 'navigation/button/modalIds'

/** @reactComponent */
export default function GameStyleGroup() {
    const selected = GameStyles.CompanionEnum.get.selected
    const isSmm2Selected = Games.SUPER_MARIO_MAKER_2.isSelected

    return <div key="option container (Game styles)" id="gameStyles-option-container" className="btn-group" role="group">
        <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_BROS} selected={selected}/>
        <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_BROS_3} selected={selected}/>
        <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_WORLD} selected={selected}/>
        <GameStyleLink gameStyle={GameStyles.NEW_SUPER_MARIO_BROS_U} selected={selected}/>
        {isSmm2Selected ? <GameStyleLink gameStyle={GameStyles.SUPER_MARIO_3D_WORLD} selected={selected}/> : null}
    </div>
}


interface GameStyleLinkProperties
    extends ReactProperties {

    readonly gameStyle: GameStyles

    readonly selected: GameStyleCollection

}

function GameStyleLink({gameStyle, selected,}: GameStyleLinkProperties,) {
    const pathname = useLocation().pathname
    const id = `gameStyleLink-${gameStyle.englishNameInHtml}-button`

    if (gameStyle.isSelected && selected.size === 1)
        return <button type="button" id={id} className="btn btn-secondary link-button disabled">
            {gameStyle.renderSingleComponent}
        </button>

    if (!pathname.includes('game-style-',))
        return <button type="button" id={id} className="btn btn-outline-secondary link-button"
                       onClick={() => GameStyles.CompanionEnum.get.selected = selected.filterNot(it => it === gameStyle,).toArray()}>
            {gameStyle.renderSingleComponent}
        </button>

    const GameStyleCompanion = GameStyles.CompanionEnum.get
    const newPath = pathname.replace(
        `game-style-${GameStyleCompanion.getGroupUrlValue(selected,)}`,
        gameStyle.isSelected
            ? `game-style-${GameStyleCompanion.getGroupUrlValue(selected.filterNot(it => it === gameStyle,),)}`
            : `game-style-${GameStyleCompanion.getGroupUrlValue([...selected, gameStyle,],)}`,
    )
    return <Link type="button" id={id} className={`btn btn${gameStyle.isSelected ? '' : '-outline'}-secondary`} to={newPath}
                 onClick={() => BootstrapInstanceHandler.get.getModalInstanceOrNull(PARAMETER_MODAL_ID)?.instance.hide()}>
        {gameStyle.renderSingleComponent}
    </Link>
}
