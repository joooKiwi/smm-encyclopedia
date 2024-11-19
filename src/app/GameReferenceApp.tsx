import './GameReferenceApp.scss'

import type {Array}             from '@joookiwi/type'
import {hasByArray, mapByArray} from '@joookiwi/collection'
import {Fragment}               from 'react'

import type {PossibleEnglishName_Games} from 'core/soundEffect/SoundEffects.types'

import GameImage                from 'core/game/GameImage'
import {Games}                  from 'core/game/Games'
import {GameReferences}         from 'core/gameReference/GameReferences'
import GameStyleImage           from 'core/gameStyle/GameStyleImage'
import {GameStyles}             from 'core/gameStyle/GameStyles'
import SoundEffectImage         from 'core/soundEffect/SoundEffectImage'
import {SoundEffects}           from 'core/soundEffect/SoundEffects'
import {gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent            from 'lang/name/component/Name.component'

import Companion =         GameReferences.Companion
import ALL_GAMES =         Games.ALL
import ALL_GAME_STYLES =   GameStyles.ALL
import soundEffect_games = SoundEffects.soundEffect_games

/** Every {@link GameReferences} that will do a return of line after its rendering */
const RETURN_OF_LINES = [
    GameReferences.MARIO_AND_LUIGI_PAPER_JAM, GameReferences.DONKEY_KONG_COUNTRY, GameReferences.KIRBY_ADVENTURE,
    GameReferences.KID_ICARIUS_UPRISING, GameReferences.MEGA_MAN, GameReferences.METROID_ZERO_MISSION,
    GameReferences.NINTENDO_ENTERTAINMENT_SYSTEM_ROB, GameReferences.FIRE_EMBLEM_AWAKENING,
    GameReferences.POKEMON_Y, GameReferences.PIKMIN_3, GameReferences.THE_LEGEND_OF_ZELDA_TRI_FORCE_HEROES,
    GameReferences.XENOBLADE_CHRONICLES, GameReferences.MOTHER3, GameReferences.SPLATOON,
    GameReferences.WII_FIT, GameReferences.CHIBI_ROBO, GameReferences.ANIMAL_CROSSING_HAPPY_HOME_DESIGNER,
    GameReferences.F_ZERO, GameReferences.GAME_AND_WATCH, GameReferences.SONIC_THE_HEDGEHOG,
    GameReferences.DUCK_HUNT, GameReferences.PAC_MAN, GameReferences.WRECKING_CREW,
    GameReferences.PUNCH_OUT, GameReferences.STAR_FOX_ZERO, GameReferences.YAKUMAN_HO_O,
    GameReferences.BIG_BRAIN_ACADEMY, GameReferences.MONSTER_MANOR, GameReferences.BABYMETAL,
    GameReferences.MONSTER_HUNTER, GameReferences.EXCITEBIKE, GameReferences.NISEKOI,
    GameReferences.JAM_WITH_THE_BAND, GameReferences.DAIGASSO_BAND_BROS_P, GameReferences.THE_LEGENDARY_STARFY,
    GameReferences.BALLOON_FIGHT, GameReferences.SHIN_ONIGASHIMA, GameReferences.FAMICOM_DETECTIVE_CLUB_PART_II,
    GameReferences.PUSHMO, GameReferences.CLU_CLU_LAND, GameReferences.VOLLEYBALL,
    GameReferences.ICE_CLIMBER, GameReferences.SHAUN_THE_SHEEP,
] as const

const otherGameReferences = (() => {
    const alreadyIncludedNames = [
        ...ALL_GAMES.map(it => it.englishName,),
        ...ALL_GAME_STYLES.map(it => it.englishName,),
        ...soundEffect_games.map(it => it.englishName,) as Array<PossibleEnglishName_Games>,
    ]
    return Companion.values.filter(it => !hasByArray(alreadyIncludedNames, it.englishName as never,),)
})()

/** @reactComponent */
export default function GameReferenceApp() {
    return <div id="gameReference-container" className="container-fluid main-container">
        <h2 id="main-names-title" className="names-title">{gameContentTranslation('game reference.plural',)}</h2>
        <div id="game-names-container" className="names-container">
            <h3 id="game-names-title" className="names-title">{gameContentTranslation('game.plural',)}</h3>
            <div id="game-name-container" className="container-fluid name-container">
                {mapByArray(ALL_GAMES, it =>
                    <div key={`single name container (${it.englishName})`} id={`${it.englishNameInHtml}-name-container`} className="col single-name-container">
                        <div className="single-name-sub-container">
                            <GameImage reference={it}/>
                            <NameComponent id="game-name" name={Companion.getValue(it.name,).reference}/>
                        </div>
                    </div>,)}
            </div>
        </div>
        <div id="gameStyle-names-container" className="names-container">
            <h3 id="gameStyle-names-title" className="names-title">{gameContentTranslation('game style.plural',)}</h3>
            <div id="gameStyle-name-container" className="container-fluid name-container">
                {mapByArray(ALL_GAME_STYLES, it =>
                    <div key={`single name container (${it.englishName})`} id={`${it.englishNameInHtml}-name-container`} className="col single-name-container">
                        <div className="single-name-sub-container">
                            <GameStyleImage reference={it}/>
                            <NameComponent id="gameStyle-name" name={Companion.getValue(it.name,).reference}/>
                        </div>
                    </div>,)}
            </div>
        </div>
        <div id="soundEffect-names-container" className="names-container">
            <h3 id="soundEffect-names-title" className="col-12 names-title">{gameContentTranslation('sound effect.plural',)}</h3>
            <div id="soundEffect-name-container" className="container-fluid name-container">{
                mapByArray(soundEffect_games, it =>
                    <div key={`single name container (${it.englishName})`} id={`${it.englishNameInHtml}-name-container`} className="col single-name-container">
                        <div className="single-name-sub-container">
                            <SoundEffectImage reference={it}/>
                            <NameComponent id="soundEffect-name" name={Companion.getValueByName(it.englishName,).reference}/>
                        </div>
                    </div>,)
            }</div>
        </div>
        <div id="otherGameReferences-names-container" className="names-container">
            <h3 id="otherGameReferences-name-title" className="names-title">{gameContentTranslation('game reference.others',)}</h3>
            <div id="otherGameReferences-name-container" className="container-fluid name-container">
                {otherGameReferences.map(it =>
                    <Fragment key={`single name container - ${it.englishName}`}>
                        <div id={`${it.englishNameInHtml}-name-container`} className="col-3 single-name-container">
                            <div className="single-name-sub-container">
                                <NameComponent id="otherGameReferences-name" name={it.reference}/>
                            </div>
                        </div>
                        {hasByArray(RETURN_OF_LINES, it,) ? <div className="col-12 name-container return-of-line-name-container"/> : null}
                    </Fragment>,)}
            </div>
        </div>
    </div>
}
