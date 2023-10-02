import './GameReferenceApp.scss'

import {Fragment} from 'react'

import type {PossibleEnglishName_Games} from 'core/soundEffect/SoundEffects.types'
import type {GameContentTranslationKey} from 'lang/components/TranslationProperty'

import AbstractApp              from 'app/AbstractApp'
import {Games}                  from 'core/game/Games'
import {GameReferences}         from 'core/gameReference/GameReferences'
import {GameStyles}             from 'core/gameStyle/GameStyles'
import {SoundEffects}           from 'core/soundEffect/SoundEffects'
import {gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent            from 'lang/name/component/Name.component'

/** @reactComponent */
export default class GameReferenceApp
    extends AbstractApp {

    //region -------------------- Fields --------------------

    /**
     * Every {@link GameReferences} that will do a return of line after its rendering.
     */
    public static RETURN_OF_LINES = [GameReferences.MARIO_AND_LUIGI_PAPER_JAM, GameReferences.DONKEY_KONG_COUNTRY, GameReferences.KIRBY_ADVENTURE,
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

    static #otherGameReferences?: readonly GameReferences[]

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & initialisation methods --------------------

    private static get __otherGameReferences(): readonly GameReferences[] {
        if (this.#otherGameReferences == null) {
            const alreadyIncludedNames = [
                ...Games.values.map(game => game.englishName),
                ...GameStyles.values.map(game => game.englishName),
                ...SoundEffects.soundEffect_games.map(game => game.englishName) as PossibleEnglishName_Games[],
            ]
            this.#otherGameReferences = GameReferences.values.filter(it => !alreadyIncludedNames.includes(it.englishName as never)).toArray()
        }
        return this.#otherGameReferences
    }

    //endregion -------------------- Getter & initialisation methods --------------------
    //region -------------------- Methods --------------------

    protected _getContainer(groupId: string, title: GameContentTranslationKey, enumReferences: readonly (| Games | GameStyles | SoundEffects)[],): ReactElement
    protected _getContainer(groupId: string, title: GameContentTranslationKey, enumReferences: readonly GameReferences[], returnOfLine: readonly GameReferences[],): ReactElement
    protected _getContainer(groupId: string, title: GameContentTranslationKey, enumReferences: readonly PossibleGameReference[], returnOfLine?: readonly GameReferences[],) {
        return <div key={`names container - ${groupId}`} id={`${groupId}-names-container`} className="names-container">
            <h2 key={`names title - ${groupId}`} id={`${groupId}-names-title`} className="col-12 names-title">{gameContentTranslation(title)}</h2>
            <div key={`name (container) - ${groupId}`} id={`${groupId}-name-container`} className="container-fluid name-container">{
                enumReferences.map(gameReference => [gameReference, GameReferences.getValueByNameOrAcronym(gameReference.englishName),] as const).map(([enumReference, gameReference,]) =>
                    <Fragment key={`single name container - ${gameReference.englishName}`}>
                        <div id={`${gameReference.englishNameInHtml}-name-container`} className={`${enumReferences.length > 5 ? 'col-3' : 'col'} single-name-container`}>
                            <div className="single-name-sub-container">
                                {enumReference.renderSingleComponent}
                                <NameComponent id={`${groupId}-name`} name={gameReference.reference}/>
                            </div>
                        </div>
                        {returnOfLine?.includes(gameReference) ? <div className="col-12 name-container return-of-line-name-container"/> : null}
                    </Fragment>)
            }</div>
        </div>
    }

    //endregion -------------------- Methods --------------------

    protected override _mainContent() {
        return <div id="gameReference-container" className="container-fluid main-container">
            <h2 id="main-names-title" className="col-12 names-title">{gameContentTranslation('game reference.plural')}</h2>
            {this._getContainer('game', 'game.plural', Games.values.toArray(),)}
            {this._getContainer('gameStyle', 'game style.plural', GameStyles.values.toArray(),)}
            {this._getContainer('soundEffect', 'sound effect.plural', SoundEffects.soundEffect_games,)}
            {this._getContainer('otherGameReferences', 'game reference.others', GameReferenceApp.__otherGameReferences, GameReferenceApp.RETURN_OF_LINES,)}
        </div>
    }

}

type PossibleGameReference = (Games | GameStyles | SoundEffects | GameReferences) & { renderSingleComponent?: ReactElement }
