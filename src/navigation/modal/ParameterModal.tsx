import './ParameterModal.scss'

import type {CollectionHolder} from '@joookiwi/collection'
import {useRef, useState}      from 'react'
import {Link, useLocation}     from 'react-router-dom'

import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import Modal                      from 'bootstrap/modal/Modal'
import {Games}                    from 'core/game/Games'
import GameImage                  from 'core/game/component/GameImage'
import {GameStyles}               from 'core/gameStyle/GameStyles'
import GameStyleImage             from 'core/gameStyle/component/GameStyleImage'
import {Themes}                   from 'core/theme/Themes'
import ThemeImage                 from 'core/theme/component/ThemeImage'
import {Times}                    from 'core/time/Times'
import TimeImage                  from 'core/time/component/TimeImage'
import {contentTranslation}       from 'lang/components/translationMethods'
import {PARAMETER_MODAL_ID}       from 'navigation/button/modalIds'
import ParameterToLanguageButton  from 'navigation/button/ParameterToLanguage.button'
import {EveryRoutes}              from 'route/EveryRoutes'
import {Empty}                    from 'util/emptyVariables'
import {assert}                   from 'util/utilitiesMethods'
import {ArrayAsCollection}        from 'util/collection/ArrayAsCollection'

import EMPTY_STRING =       Empty.EMPTY_STRING
import GameCompanion =      Games.Companion
import GameStyleCompanion = GameStyles.Companion
import NSMBU =              GameStyles.NSMBU
import SM3DW =              GameStyles.SM3DW
import SMB =                GameStyles.SMB
import SMB3 =               GameStyles.SMB3
import SMM1 =               Games.SMM1
import SMM2 =               Games.SMM2
import SMM3DS =             Games.SMM3DS
import SMW =                GameStyles.SMW
import TimeCompanion =      Times.Companion

//region -------------------- Import from deconstruction --------------------

const {DAY, NIGHT,} = Times
const {GROUND, UNDERGROUND, UNDERWATER, DESERT, SNOW, SKY, FOREST, GHOST_HOUSE, AIRSHIP, CASTLE,} = Themes
const instanceHandler = BootstrapInstanceHandler.get

//endregion -------------------- Import from deconstruction --------------------

/** @reactComponent */
export default function ParameterModal() {
    const {pathname: currentPath,} = useLocation()
    const modal = useRef<HTMLDivElement>(null,)

    //region -------------------- Game fields --------------------

    const currentGames = GameCompanion.currentOrEmpty
    const hasNoCurrentGames = currentGames.isEmpty
    const [hasSmm1, setSmm1,] =     useState(hasNoCurrentGames ? false : currentGames.has(SMM1,),)
    const [hasSmm3ds, setSmm3ds,] = useState(hasNoCurrentGames ? false : currentGames.has(SMM3DS,),)
    const [hasSmm2, setSmm2,] =     useState(hasNoCurrentGames ? true : currentGames.has(SMM2,),)
    const selectedGames = new ArrayAsCollection([
        hasSmm1 ? SMM1 : null,
        hasSmm3ds ? SMM3DS : null,
        hasSmm2 ? SMM2 : null,
    ],).filterNotNull()
    const hasAllGames = hasSmm1 && hasSmm3ds && hasSmm2
    const hasNoGames = !hasSmm1 && !hasSmm3ds && !hasSmm2
    const setAllGames: BooleanCallback = it => {
        setSmm1(it,)
        setSmm3ds(it,)
        setSmm2(it,)
    }

    //endregion -------------------- Game fields --------------------
    //region -------------------- Game style fields --------------------

    const currentGameStyles = GameStyleCompanion.currentOrEmpty
    const hasNoCurrentGameStyles = currentGameStyles.isEmpty
    const [hasSmb, setSmb,] =     useState(hasNoCurrentGameStyles ? true : currentGameStyles.has(SMB,),)
    const [hasSmb3, setSmb3,] =   useState(hasNoCurrentGameStyles ? true : currentGameStyles.has(SMB3,),)
    const [hasSmw, setSmw,] =     useState(hasNoCurrentGameStyles ? true : currentGameStyles.has(SMW,),)
    const [hasNsmbu, setNsmbu,] = useState(hasNoCurrentGameStyles ? true : currentGameStyles.has(NSMBU,),)
    const [hasSm3dw, setSm3dw,] = useState(hasNoCurrentGameStyles ? true : currentGameStyles.has(SM3DW,),)
    const selectedGameStyles = new ArrayAsCollection([
        hasSmb ? SMB : null,
        hasSmb3 ? SMB3 : null,
        hasSmw ? SMW : null,
        hasNsmbu ? NSMBU : null,
        hasSm3dw ? SM3DW : null,
    ],).filterNotNull()
    const hasAllGameStyles = hasSmb && hasSmb3 && hasSmw && hasNsmbu && hasSm3dw
    const hasNoGameStyles = !hasSmb && !hasSmb3 && !hasSmw && !hasNsmbu && !hasSm3dw
    const setAllGameStyles: BooleanCallback = it => {
        setSmb(it,)
        setSmb3(it,)
        setSmw(it,)
        setNsmbu(it,)
        setSm3dw(it,)
    }

    //endregion -------------------- Game style fields --------------------
    //region -------------------- Time fields --------------------

    const currentTimes = TimeCompanion.currentOrEmpty
    const hasNoCurrentTimes = currentTimes.isEmpty
    const [hasDay, setDay,] =     useState(hasNoCurrentTimes ? true : currentTimes.has(DAY,),)
    const [hasNight, setNight,] = useState(hasNoCurrentTimes ? true : currentTimes.has(NIGHT,),)
    const selectedTimes = new ArrayAsCollection([
        hasDay ? DAY : null,
        hasNight ? NIGHT : null,
    ],).filterNotNull()
    const hasAllTimes = hasDay && hasNight
    const hasNoTimes = !hasDay && !hasNight
    const setAllTimes: BooleanCallback = it => {
        setDay(it,)
        setNight(it,)
    }

    //endregion -------------------- Time fields --------------------
    //region -------------------- Route fields --------------------

    const route = EveryRoutes.Companion.getValueInUrl(currentPath,)
    assert(route != null, `The route was not expected to be null with the path ${currentPath}.`,)
    const pathToGo = route.getPath(null, selectedGames, selectedGameStyles, selectedTimes.toArray(),)

    //endregion -------------------- Route fields --------------------

    return <>
        <Modal modalReference={modal}/>
        <div ref={modal} id={PARAMETER_MODAL_ID} className="modal fade">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="btn-group" role="group">
                            <button className="btn btn-outline-primary rounded-pill bi bi-palette-fill" disabled/>
                            <ParameterToLanguageButton/>
                        </div>
                        <h4 className="modal-title w-100 text-center">{contentTranslation('Options',)}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label={contentTranslation('Close',)}/>
                    </div>
                    <div className="modal-body text-center">
                        <p>{contentTranslation('parameter.instruction',)}</p>
                        <div id="parameter-container">
                            <div id="game-parameter-container" className="btn-group-vertical me-1" role="group">
                                <SwitchableButton value={hasAllGames} change={setAllGames}>{contentTranslation('All')}</SwitchableButton>
                                <div className="btn-group" role="group">
                                    <SwitchableButton value={hasSmm1} change={setSmm1}><GameImage reference={SMM1}/></SwitchableButton>
                                    <SwitchableButton value={hasSmm3ds} change={setSmm3ds}><GameImage reference={SMM3DS}/></SwitchableButton>
                                    <SwitchableButton value={hasSmm2} change={setSmm2}><GameImage reference={SMM2}/></SwitchableButton>
                                </div>
                            </div>
                            <div id="gameStyle-parameter-container" className="btn-group-vertical mt-1 me-1" role="group">
                                <SwitchableButton value={hasAllGameStyles} change={setAllGameStyles}>{contentTranslation('All',)}</SwitchableButton>
                                <div className="btn-group" role="group">
                                    <SwitchableButton value={hasSmb} change={setSmb}><GameStyleImage reference={SMB}/></SwitchableButton>
                                    <SwitchableButton value={hasSmb3} change={setSmb3}><GameStyleImage reference={SMB3}/></SwitchableButton>
                                    <SwitchableButton value={hasSmw} change={setSmw}><GameStyleImage reference={SMW}/></SwitchableButton>
                                </div>
                                <div className="btn-group" role="group">
                                    <SwitchableButton value={hasNsmbu} change={setNsmbu}><GameStyleImage reference={NSMBU}/></SwitchableButton>
                                    <SwitchableButton value={hasSm3dw} change={setSm3dw}><GameStyleImage reference={SM3DW}/></SwitchableButton>
                                </div>
                            </div>
                            <div id="theme-parameter-container" className="d-inline-block mt-1 me-1">
                                <div className="btn-group-vertical d-sm-none" role="group">
                                    <button type="button" className="btn btn-success" disabled>{contentTranslation('All',)}</button>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={GROUND}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={UNDERGROUND}/></button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={UNDERWATER}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={DESERT}/></button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={SNOW}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={SKY}/></button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={FOREST}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={GHOST_HOUSE}/></button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={AIRSHIP}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={CASTLE}/></button>
                                    </div>
                                </div>
                                <div className="btn-group-vertical d-none d-sm-inline-flex" role="group">
                                    <button type="button" className="btn btn-success" disabled>{contentTranslation('All',)}</button>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={GROUND}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={UNDERGROUND}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={UNDERWATER}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={DESERT}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={SNOW}/></button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={SKY}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={FOREST}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={GHOST_HOUSE}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={AIRSHIP}/></button>
                                        <button type="button" className="btn btn-success" disabled><ThemeImage reference={CASTLE}/></button>
                                    </div>
                                </div>
                            </div>
                            <div id="time-parameter-container" className="btn-group-vertical mt-1" role="group">
                                <SwitchableButton value={hasAllTimes} change={setAllTimes}>{contentTranslation('All',)}</SwitchableButton>
                                <div className="btn-group" role="group">
                                    <SwitchableButton value={hasDay} change={setDay}><TimeImage reference={DAY}/></SwitchableButton>
                                    <SwitchableButton value={hasNight} change={setNight}><TimeImage reference={NIGHT}/></SwitchableButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Link type="button" to={pathToGo} className={`btn btn-success${hasNoGames || hasNoGameStyles || hasNoTimes ? ' disabled' : EMPTY_STRING}`}
                              onClick={() => updateGlobalOptions(selectedGames, selectedGameStyles, selectedTimes,)}>{
                            contentTranslation('Confirm',)
                        }</Link>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">{contentTranslation('Cancel',)}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

function updateGlobalOptions(games: CollectionHolder<Games>, gameStyles: CollectionHolder<GameStyles>, times: CollectionHolder<Times>,) {
    GameCompanion.current = games
    GameStyleCompanion.current = gameStyles
    TimeCompanion.current = times

    const modal = instanceHandler.getModalInstanceOrNull(PARAMETER_MODAL_ID,)
    assert(modal != null, `The modal “${PARAMETER_MODAL_ID}” was not expected to be null`,)
    modal.instance.hide()
}

interface SwitchableButtonProperties
    extends ReactPropertiesWithChildren<NonNullReactElementOrString> {

    /** The value that is it selected or not */
    readonly value: boolean

    /** The event to change the selection state */
    change(value: boolean,): void

}

/** @reactComponent */
function SwitchableButton({children, value, change,}: SwitchableButtonProperties,) {
    if (value)
        return <button type="button" className="btn btn-success" onClick={() => change(false,)}>{children}</button>
    return <button type="button" className="btn btn-outline-danger" onClick={() => change(true,)}>{children}</button>
}

type BooleanCallback = (value: boolean,) => void
