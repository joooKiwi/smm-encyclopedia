import everySoundEffects from '../../resources/Sound effect.csv';

import type {PropertiesArray as LanguagesPropertyArray}            from '../../lang/Loader.types';
import type {Loader}                                               from '../../util/loader/Loader';
import type {PropertiesArrayFrom1And2 as GamesPropertyArray}       from '../game/Loader.types';
import type {PossibleSoundEffectCategoryType, SoundEffectTemplate} from './SoundEffect.template';
import type {PossibleEnglishName}                                  from './SoundEffects.types';
import type {SoundEffect}                                          from './SoundEffect';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {SoundEffectBuilder}      from './SoundEffect.builder';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

enum Headers {

    //region -------------------- Games --------------------

    isInSuperMarioMaker1And3DS,
    isInSuperMarioMaker2,

    //endregion -------------------- Games --------------------
    //region -------------------- Triggers --------------------

    doesTrigger_player_jumpAfterLanding,
    doesTrigger_player_turnAroundAfterBeingAtFullSpeed,
    doesTrigger_player_crouch,
    doesTrigger_player_after3SecondsRepeatedly,

    doesTrigger_player_collectPowerUp,
    doesTrigger_player_getIntoAnEntity,

    doesTrigger_player_spawn,
    doesTrigger_player_damage,
    doesTrigger_player_lostALife,

    //endregion -------------------- Triggers --------------------
    category,
    //region -------------------- Languages --------------------

    english, americanEnglish, europeanEnglish,
    french, canadianFrench, europeanFrench,
    german,
    spanish, americanSpanish, europeanSpanish,
    italian,
    dutch,
    portuguese, americanPortuguese, europeanPortuguese,
    russian,
    japanese,
    chinese, traditionalChinese, simplifiedChinese,
    korean,
    greek,

    //endregion -------------------- Languages --------------------

}

//region -------------------- Properties --------------------

//region -------------------- Exclusive properties --------------------

type ExclusivePropertiesArray = [
    //region -------------------- Triggers --------------------

    doesTrigger_player_jumpAfterLanding: boolean,
    doesTrigger_player_turnAroundAfterBeingAtFullSpeed: boolean,
    doesTrigger_player_crouch: boolean,
    doesTrigger_player_after3SecondsRepeatedly: boolean,

    doesTrigger_player_collectPowerUp: boolean,
    doesTrigger_player_getIntoAnEntity: boolean,

    doesTrigger_player_atSpawn: boolean,
    doesTrigger_player_takeDamage: boolean,
    doesTrigger_player_lostALife: boolean,

    //endregion -------------------- Triggers --------------------

    category: PossibleSoundEffectCategoryType,

];

//endregion -------------------- Exclusive properties --------------------

type PropertiesArray = [
    ...GamesPropertyArray,
    ...ExclusivePropertiesArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link SoundEffects}>
 */
export class SoundEffectLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, SoundEffect>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, SoundEffect>;

    public load(): ReadonlyMap<PossibleEnglishName, SoundEffect> {
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, SoundEffect>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, SoundEffect, keyof typeof Headers>(everySoundEffects, convertedContent => new SoundEffectBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertToBoolean(
                    'isInSuperMarioMaker1And3DS', 'isInSuperMarioMaker2',

                    'doesTrigger_player_jumpAfterLanding', 'doesTrigger_player_turnAroundAfterBeingAtFullSpeed', 'doesTrigger_player_crouch', 'doesTrigger_player_after3SecondsRepeatedly',
                    'doesTrigger_player_collectPowerUp', 'doesTrigger_player_getIntoAnEntity',
                    'doesTrigger_player_spawn', 'doesTrigger_player_damage', 'doesTrigger_player_lostALife',
                )
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleSoundEffectCategoriesNames, 'category',)
                .convertTo(HeaderTypesForConvertor.everyPossibleSoundEffectsNames, 'english',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.english as PossibleEnglishName, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "sound effect" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "sound effect" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<SoundEffectTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): SoundEffectTemplate {
        return {
            properties: {
                isIn: {
                    game: this._createGameTemplateFrom1And2(),

                    trigger: {
                        player: {

                            movement: {
                                jumpAfterLanding: this._getContent(this._headersIndexMap.doesTrigger_player_jumpAfterLanding),
                                turnAroundAfterBeingAtFullSpeed: this._getContent(this._headersIndexMap.doesTrigger_player_turnAroundAfterBeingAtFullSpeed),
                                crouch: this._getContent(this._headersIndexMap.doesTrigger_player_crouch),
                                after3SecondsRepeatedly: this._getContent(this._headersIndexMap.doesTrigger_player_after3SecondsRepeatedly),
                            },

                            interaction: {
                                collectPowerUp: this._getContent(this._headersIndexMap.doesTrigger_player_collectPowerUp),
                                getIntoAnEntity: this._getContent(this._headersIndexMap.doesTrigger_player_getIntoAnEntity),
                            },

                            environment: {
                                spawn: this._getContent(this._headersIndexMap.doesTrigger_player_spawn),
                                damage: this._getContent(this._headersIndexMap.doesTrigger_player_damage),
                                lostALife: this._getContent(this._headersIndexMap.doesTrigger_player_lostALife),
                            },

                        },
                    },
                },
                category: this._getContent(this._headersIndexMap.category),
            },
            name: this._createNameTemplate(),
        };
    }

}
