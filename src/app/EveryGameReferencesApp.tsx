import './EveryGameReferencesApp.scss';

import {Fragment} from 'react';

import type {GameReference}                     from '../game/GameReference';
import type {EnumArray as EnumArray_Games}      from '../core/game/Games.types';
import type {EnumArray as EnumArray_GameStyles} from '../core/gameStyle/GameStyles.types';
import type {PossibleEnglishName}               from '../game/GameReferences.types';
import type {PossibleEnglishName_Games}         from '../core/soundEffect/simple/SoundEffects.types';
import type {ReactElement}                      from '../util/react/ReactProperty';

import AbstractApp                     from './AbstractApp';
import {GameReferenceLoader}           from '../game/GameReference.loader';
import {GameReferences}                from '../game/GameReferences';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../core/game/Games';
import {GameStyles}                    from '../core/gameStyle/GameStyles';
import NameComponent                   from '../lang/name/component/Name.component';
import {SoundEffects}                  from '../core/soundEffect/simple/SoundEffects';
import {SingleTranslationKey}          from '../lang/components/TranslationProperty';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';

/**
 * @reactComponent
 */
export default class EveryGameReferencesApp
    extends AbstractApp {

    //region -------------------- Attributes --------------------

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
    ] as const;

    #map?: ReadonlyMap<PossibleEnglishName, GameReference>;
    #games?: EnumArray_Games;
    #gameStyles?: EnumArray_GameStyles;
    #soundEffects?: EnumArray_SoundEffects;
    #otherGames?: GameReferences_Others;

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter & initialisation methods --------------------

    protected get map() {
        return this.#map ??= GameReferenceLoader.get.load();
    }

    protected get enum() {
        return GameReferences.values;
    }


    protected get games(): EnumArray_Games {
        return this.#games ??= Games.values;
    }

    protected get gameStyles(): EnumArray_GameStyles {
        return this.#gameStyles ??= GameStyles.values;
    }

    protected get soundEffects(): EnumArray_SoundEffects {
        return this.#soundEffects ??= [SoundEffects.SUPER_MARIO_KART, SoundEffects.SUPER_MARIO_64, SoundEffects.SUPER_MARIO_SUNSHINE, SoundEffects.SUPER_MARIO_GALAXY,];
    }

    protected get otherGameReferences(): GameReferences_Others {
        if (this.#otherGames == null) {
            const alreadyIncludedNames = [
                ...this.games.map(game => game.englishName),
                ...this.gameStyles.map(game => game.englishName),
                ...this.soundEffects.map(game => game.englishName) as PossibleEnglishName_Games[],
            ];
            this.#otherGames = this.enum.filter(enumerable => !alreadyIncludedNames.includes(enumerable.englishName as never));
        }
        return this.#otherGames;
    }

    //endregion -------------------- Getter & initialisation methods --------------------
    //region -------------------- Methods --------------------

    protected _getContainer(groupId: string, title: SingleTranslationKey<'gameContent'>, enumReferences: readonly (| Games | GameStyles | SoundEffects)[],): ReactElement
    protected _getContainer(groupId: string, title: SingleTranslationKey<'gameContent'>, enumReferences: readonly GameReferences[], returnOfLine: readonly GameReferences[],): ReactElement
    protected _getContainer(groupId: string, title: SingleTranslationKey<'gameContent'>, enumReferences: readonly PossibleGameReference[], returnOfLine?: readonly GameReferences[],) {
        return <div key={`names container - ${groupId}`} id={`${groupId}-names-container`} className="names-container">
            <GameContentTranslationComponent>{translation =>
                <h2 key={`names title - ${groupId}`} id={`${groupId}-names-title`} className="col-12 names-title">{translation(title)}</h2>
            }</GameContentTranslationComponent>
            <div key={`name (container) - ${groupId}`} id={`${groupId}-name-container`} className="container-fluid name-container">{
                enumReferences.map(gameReference => [gameReference, GameReferences.getValue(gameReference.name)!] as const).map(([enumReference, gameReference,]) =>
                    <Fragment key={`single name container - ${gameReference.englishName}`}>
                        <div id={`${gameReference.englishNameInHtml}-name-container`} className={`${enumReferences.length > 5 ? 'col-3' : 'col'} single-name-container`}>
                            <div className="single-name-sub-container">
                                {enumReference.renderSingleComponent ?? EMPTY_REACT_ELEMENT}
                                <NameComponent id={`${groupId}-name`} name={gameReference.reference}/>
                            </div>
                        </div>
                        {returnOfLine?.includes(gameReference) ? <div className="col-12 name-container return-of-line-name-container"/> : EMPTY_REACT_ELEMENT}
                    </Fragment>)
            }</div>
        </div>;
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent() {
        return <div className="container-fluid main-container">
            <GameContentTranslationComponent>{translation =>
                <h2 id="main-names-title" className="col-12 names-title">{translation('Game references')}</h2>
            }</GameContentTranslationComponent>
            {this._getContainer('game', 'Games', this.games,)}
            {this._getContainer('gameStyle', 'Game styles', this.gameStyles,)}
            {this._getContainer('soundEffect', 'Sound effects', this.soundEffects,)}
            {this._getContainer('otherGameReferences', 'Other game references', this.otherGameReferences, EveryGameReferencesApp.RETURN_OF_LINES,)}
        </div>;
    }

}

type EnumArray_SoundEffects = readonly [typeof SoundEffects['SUPER_MARIO_KART'], typeof SoundEffects['SUPER_MARIO_64'], typeof SoundEffects['SUPER_MARIO_SUNSHINE'], typeof SoundEffects['SUPER_MARIO_GALAXY'],];
type GameReferences_Others = readonly GameReferences[];

type PossibleGameReference = (Games | GameStyles | SoundEffects | GameReferences)
                             & { renderSingleComponent?: ReactElement };
