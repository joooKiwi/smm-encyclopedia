import './EveryGameReferencesApp.scss';

import type {GameReference}             from '../game/GameReference';
import type {PossibleEnglishName}       from '../game/GameReferences.types';
import type {PossibleEnglishName_Games} from '../entity/soundEffect/simple/SoundEffects.types';

import AbstractApp                     from './AbstractApp';
import {GameReferenceLoader}           from '../game/GameReference.loader';
import {GameReferences}                from '../game/GameReferences';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {Games}                         from '../entity/game/Games';
import {GameStyles}                    from '../entity/gameStyle/GameStyles';
import NameComponent                   from '../lang/name/Name.component';
import {SoundEffects}                  from '../entity/soundEffect/simple/SoundEffects';
import {SingleTranslationKey}          from '../lang/components/TranslationProperty';
import {Fragment}                      from 'react';
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
        GameReferences.EXCITEBIKE, GameReferences.NISEKOI, GameReferences.JAM_WITH_THE_BAND, GameReferences.DAIGASSO_BAND_BROS_P,
        GameReferences.THE_LEGENDARY_STARFY, GameReferences.BALLOON_FIGHT, GameReferences.SHIN_ONIGASHIMA,
        GameReferences.FAMICOM_DETECTIVE_CLUB_PART_II, GameReferences.PUSHMO, GameReferences.CLU_CLU_LAND, GameReferences.VOLLEYBALL,
        GameReferences.ICE_CLIMBER, GameReferences.SHAUN_THE_SHEEP,
    ] as const;

    #map?: ReadonlyMap<PossibleEnglishName, GameReference>;
    #haveBeenInitialised: boolean = false;
    #games?: GameReferences_Game;
    #gameStyles?: GameReferences_GameStyle;
    #soundEffects?: GameReferences_SoundEffect;
    #otherGames?: GameReferences_Others;

    //endregion -------------------- Attributes --------------------
    //region -------------------- Getter & initialisation methods --------------------

    protected get map() {
        return this.#map ??= GameReferenceLoader.get.load();
    }

    protected get enum() {
        return GameReferences.values;
    }


    private __initialiseReferences(): this {
        if (!this.#haveBeenInitialised) {
            const gameNames = Games.values.map(game => game.englishName);
            this.#games = this.enum.filter(enumerable => gameNames.includes(enumerable.englishName as never)) as unknown as GameReferences_Game;

            const gameStyleNames = GameStyles.values.map(game => game.englishName);
            this.#gameStyles = this.enum.filter(enumerable => gameStyleNames.includes(enumerable.englishName as never)) as unknown as GameReferences_GameStyle;

            const soundEffectNames = SoundEffects.values.map(game => game.englishName) as PossibleEnglishName_Games[];
            this.#soundEffects = this.enum.filter(enumerable => soundEffectNames.includes(enumerable.englishName as never)) as unknown as GameReferences_SoundEffect;

            const alreadyIncludedNames = [...gameNames, ...gameStyleNames, ...soundEffectNames,];
            this.#otherGames = this.enum.filter(enumerable => !alreadyIncludedNames.includes(enumerable.englishName as never));
        }
        return this;
    }

    protected get games(): GameReferences_Game {
        return this.__initialiseReferences().#games!;
    }

    protected get gameStyles(): GameReferences_GameStyle {
        return this.__initialiseReferences().#gameStyles!;
    }

    protected get soundEffects(): GameReferences_SoundEffect {
        return this.__initialiseReferences().#soundEffects!;
    }

    protected get otherGameReferences(): GameReferences_Others {
        return this.__initialiseReferences().#otherGames!;
    }

    //endregion -------------------- Getter & initialisation methods --------------------
    //region -------------------- Methods --------------------

    protected _getContainer(groupId: string, title: SingleTranslationKey<'gameContent'>, enumReferences: readonly GameReferences[], returnOfLine?: readonly GameReferences[],) {
        return <div key={`names container - ${groupId}`} id={`${groupId}-names-container`} className="names-container">
            <GameContentTranslationComponent>{translation =>
                <h2 key={`names title - ${groupId}`} id={`${groupId}-names-title`} className="col-12 names-title">{translation(title)}</h2>
            }</GameContentTranslationComponent>
            <div key={`name (container) - ${groupId}`} id={`${groupId}-name-container`} className="container name-container">{enumReferences.map(game =>
                <Fragment key={`single name container - ${game.englishName}`}>
                    <div id={`${game.englishNameInHtml}-name-container`} className={`${enumReferences.length > 5 ? 'col-3' : 'col'} single-name-container`}>
                        <div className="single-name-sub-container">
                            <NameComponent id={`${groupId}-name`} name={game.reference}/>
                        </div>
                    </div>
                    {returnOfLine?.includes(game) ? <div className="col-12 name-container return-of-line-name-container"/> : EMPTY_REACT_ELEMENT}
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

type GameReferences_Game = readonly [typeof GameReferences['SUPER_MARIO_MAKER_1'], typeof GameReferences['SUPER_MARIO_MAKER_2'],];
type GameReferences_GameStyle = readonly [typeof GameReferences['SUPER_MARIO_BROS'], typeof GameReferences['SUPER_MARIO_BROS_3'], typeof GameReferences['SUPER_MARIO_WORLD'], typeof GameReferences['NEW_SUPER_MARIO_BROS_U'], typeof GameReferences['SUPER_MARIO_3D_WORLD'],];
type GameReferences_SoundEffect = readonly [typeof GameReferences['SUPER_MARIO_KART'], typeof GameReferences['SUPER_MARIO_64'], typeof GameReferences['SUPER_MARIO_SUNSHINE'], typeof GameReferences['SUPER_MARIO_GALAXY'],];
type GameReferences_Others = readonly GameReferences[];