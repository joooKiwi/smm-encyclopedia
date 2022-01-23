import everyMysteryMushrooms from '../../resources/Mystery Mushroom.csv';

import type {Loader}                                                                                                                                                                                                             from '../../util/loader/Loader';
import type {MysteryMushroom}                                                                                                                                                                                                    from './MysteryMushroom';
import type {MysteryMushroomTemplate, PokemonGeneration}                                                                                                                                                                         from './MysteryMushroom.template';
import type {PossibleConditionToUnlockIt}                                                                                                                                                                                        from './properties/UnlockProperty';
import type {PossibleEnglishName as PossibleGameReference}                                                                                                                                                                       from '../gameReference/GameReferences.types';
import type {PossibleGamesReceived as GameInStarMode, PossibleValuesReceived as PossibleSpecialMusicInStarMode}                                                                                                                  from './properties/sound/SpecialMusicInStarMode';
import type {PossibleGamesReceived as GameOnSoundEffectOnDeath, PossibleTranslationKeys as TranslationKeyOnDeath, PossibleTypesReceived as TypeOfSoundEffectOnDeath, PossibleValuesReceived as PossibleSoundEffectOnDeath}       from './properties/sound/SoundEffectOnDeath';
import type {PossibleGamesReceived as GameOnSoundEffectOnGoalPole, PossibleTranslationKeys as TranslationKeyOnGoalPole, PossibleTypesReceived as TypeOfMusicOnGoalPole, PossibleValuesReceived as PossibleSoundEffectOnGoalPole} from './properties/sound/SoundEffectOnGoalPole';
import type {PossibleGamesReceived as GameOnSoundEffectOnGroundAfterJump, PossibleValuesReceived as PossibleSoundEffectOnGroundAfterJump}                                                                                        from './properties/sound/SoundEffectOnGroundAfterJump';
import type {PossibleGamesReceived as GameOnSoundEffectOnJump, PossibleValuesReceived as PossibleSoundEffectOnJump}                                                                                                              from './properties/sound/SoundEffectOnJump';
import type {PossibleGamesReceived as GameOnSoundEffectOnTaunt, PossibleValuesReceived as PossibleSoundEffectOnTaunt}                                                                                                            from './properties/sound/SoundEffectOnTaunt';
import type {PossibleGamesReceived as GameOnSoundEffectWhenCollected, PossibleValuesReceived as PossibleSoundEffectWhenCollected}                                                                                                from './properties/sound/SoundEffectWhenCollected';
import type {PossibleValuesReceived as PossibleSoundEffectOnMovement}                                                                                                                                                            from './properties/sound/SoundEffectOnMovement';
import type {PossibleValuesReceived as PossibleSoundEffectOnTurnAfterRun}                                                                                                                                                        from './properties/sound/SoundEffectOnTurnAfterRun';
import type {PropertiesArrayWithOptionalLanguages as LanguagesPropertyArray}                                                                                                                                                     from '../../lang/Loader.types';
import type {SoundPropertyTemplate}                                                                                                                                                                                              from './properties/sound/SoundProperty.template';
import type {PossibleUniqueEnglishName}                                                                                                                                                                                          from './MysteryMushrooms.types';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';
import {MysteryMushroomBuilder}  from './MysteryMushroom.builder';

//region -------------------- CSV array related types --------------------

enum Headers {
    conditionToUnlockIt,
    canBeUnlockedByAnAmiibo,

    reference,

    uniqueName,

    haveASoundEffectWhenCollected_game, haveASoundEffectWhenCollected,
    haveASoundEffectOnTaunt_game, haveASoundEffectOnTaunt,
    haveASoundEffectOnJump_game, haveASoundEffectOnJump,
    haveASoundEffectOnGroundAfterJump_game, haveASoundEffectOnGroundAfterJump,
    soundEffectOnMovement,
    haveASoundEffectOnTurnAfterRun,
    haveASpecialMusicInStarMode_game, haveASpecialMusicInStarMode,
    haveASoundEffectWhenOnGoalPole_type, haveASoundEffectWhenOnGoalPole_game, haveASoundEffectWhenOnGoalPole_smallDefinition, haveASoundEffectWhenOnGoalPole,
    haveASoundEffectOnDeath_type, haveASoundEffectOnDeath_game, haveASoundEffectOnDeath_smallDefinition, haveASoundEffectOnDeath,

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

type ExclusivePropertiesArray = [

    conditionToUnlockIt: PossibleConditionToUnlockIt,
    canBeUnlockedByAnAmiibo: boolean,

    reference: | PossibleGameReference | PokemonGeneration,

    uniqueName: PossibleUniqueEnglishName,


    haveASoundEffectWhenCollected_game: GameOnSoundEffectWhenCollected,
    haveASoundEffectWhenCollected: PossibleSoundEffectWhenCollected,

    haveASoundEffectOnTaunt_game: GameOnSoundEffectOnTaunt,
    haveASoundEffectOnTaunt: PossibleSoundEffectOnTaunt,

    haveASoundEffectOnJump_game: GameOnSoundEffectOnJump,
    haveASoundEffectOnJump: PossibleSoundEffectOnJump,
    haveASoundEffectOnGroundAfterJump_game: GameOnSoundEffectOnGroundAfterJump,
    haveASoundEffectOnGroundAfterJump: PossibleSoundEffectOnGroundAfterJump,

    soundEffectOnMovement: PossibleSoundEffectOnMovement,

    haveASoundEffectOnTurnAfterRun: PossibleSoundEffectOnTurnAfterRun,

    haveASpecialMusicInStarMode_game: GameInStarMode,
    haveASpecialMusicInStarMode: PossibleSpecialMusicInStarMode,

    haveASoundEffectWhenOnGoalPole_type: TypeOfMusicOnGoalPole,
    haveASoundEffectWhenOnGoalPole_game: GameOnSoundEffectOnGoalPole,
    haveASoundEffectWhenOnGoalPole_smallDefinition: TranslationKeyOnGoalPole,
    haveASoundEffectWhenOnGoalPole: PossibleSoundEffectOnGoalPole,

    haveASoundEffectOnDeath_type: TypeOfSoundEffectOnDeath,
    haveASoundEffectOnDeath_game: GameOnSoundEffectOnDeath,
    haveASoundEffectOnDeath_smallDefinition: TranslationKeyOnDeath,
    haveASoundEffectOnDeath: PossibleSoundEffectOnDeath,
];

type PropertiesArray = [
    ...ExclusivePropertiesArray,
    ...LanguagesPropertyArray,
];

//endregion -------------------- Exclusive properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link MysteryMushrooms}>
 */
export class MysteryMushroomLoader
    implements Loader<ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MysteryMushroomLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleUniqueEnglishName, MysteryMushroom>;

    public load(): ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom> {
        if (this.#map == null) {
            const references = new Map<PossibleUniqueEnglishName, MysteryMushroom>();

            //region -------------------- Builder initialisation --------------------

            // @ts-ignore FIXME add toMap() function on gameReferences
            // MysteryMushroomBuilder.gameReferencesMap = GameReferences.toMap();

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, MysteryMushroom, keyof typeof Headers>(everyMysteryMushrooms, convertedContent => new MysteryMushroomBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('emptyable string')

                .convertTo(HeaderTypesForConvertor.everyPossibleConditionToUnlockIt_mysteryMushroom, 'conditionToUnlockIt',)
                .convertToBoolean('canBeUnlockedByAnAmiibo',)
                .convertTo(HeaderTypesForConvertor.everyPossibleGameReferenceAcronymWithPokemonGeneration, 'reference',)


                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGameReferenceAcronym, 'haveASoundEffectWhenCollected_game',)
                .convertToNullableBoolean('haveASoundEffectWhenCollected',)

                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGameReferenceAcronym, 'haveASoundEffectOnTaunt_game',)
                .convertToNullableBoolean('haveASoundEffectOnTaunt',)

                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGameReferenceAcronym, 'haveASoundEffectOnJump_game',)
                .convertToNullableBooleanAnd([2, '3 images',], 'haveASoundEffectOnJump',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGameReferenceAcronym, 'haveASoundEffectOnGroundAfterJump_game',)
                .convertToNullableBoolean('haveASoundEffectOnGroundAfterJump',)

                .convertToNullableBooleanAnd(['Twinkle', 'Engine sound',], 'soundEffectOnMovement',)

                .convertToNullableBoolean('haveASoundEffectOnTurnAfterRun',)

                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGameReferenceAcronym, 'haveASpecialMusicInStarMode_game',)
                .convertToNullableBooleanAnd(['Flying Mario', 'Metal Mario', 'Super Star',], 'haveASpecialMusicInStarMode',)

                .convertToEmptyableStringAnd(['Marimba', 'Rock',], 'haveASoundEffectWhenOnGoalPole_type',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGameReferenceAcronym, 'haveASoundEffectWhenOnGoalPole_game',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleSmallDefinition_soundEffectOnGoalPole_mysteryMushroom, 'haveASoundEffectWhenOnGoalPole_smallDefinition',)
                .convertToNullableBooleanAnd(['+ sound', '+ "Yatta"', '+ barks', '+ "Yeah"', '+ humming', '+ singing', '+ Car sound',], 'haveASoundEffectWhenOnGoalPole',)

                .convertToEmptyableStringAnd(['Marimba', 'Techno',], 'haveASoundEffectOnDeath_type',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGameReferenceAcronym, 'haveASoundEffectOnDeath_game',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleSmallDefinition_soundEffectOnDeath_mysteryMushroom, 'haveASoundEffectOnDeath_smallDefinition',)
                .convertToNullableBooleanAnd(['+ "Oh no!"', '+ "Nooo!"', '+ "Nooo"', '+ "Woah!"', '+ "Yaha!"',], 'haveASoundEffectOnDeath',)

                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleMysteryMushroomIndividualEnglishNames, 'english', 'americanEnglish',)

                .onAfterFinalObjectCreated((finalContent, convertedContent,) => references.set(convertedContent[Headers.uniqueName], finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "mystery mushroom" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "mystery mushroom" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<MysteryMushroomTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): MysteryMushroomTemplate {
        return {
            properties: {
                unlock: {
                    condition: this._getContent(this._headersIndexMap.conditionToUnlockIt),
                    amiibo: this._getContent(this._headersIndexMap.canBeUnlockedByAnAmiibo),
                },
                sound: this.__createSoundTemplate(),
            },
            uniqueName: this._getContent(this._headersIndexMap.uniqueName),
            gameReference: this._getContent(this._headersIndexMap.reference),
            name: this._createNameTemplate(),
        };
    }

    private __createSoundTemplate(): SoundPropertyTemplate {
        return {
            soundEffect: {
                movement: this._getContent(this._headersIndexMap.soundEffectOnMovement),
            },
            hasSoundEffect: {
                collected: {
                    value: this._getContent(this._headersIndexMap.haveASoundEffectWhenCollected),
                    game: this._getContent(this._headersIndexMap.haveASoundEffectWhenCollected_game),
                },
                taunt: {
                    value: this._getContent(this._headersIndexMap.haveASoundEffectOnTaunt),
                    game: this._getContent(this._headersIndexMap.haveASoundEffectOnTaunt_game),
                },
                jump: {
                    value: {
                        value: this._getContent(this._headersIndexMap.haveASoundEffectOnJump),
                        game: this._getContent(this._headersIndexMap.haveASoundEffectOnJump_game),
                    },
                    ground: {
                        value: this._getContent(this._headersIndexMap.haveASoundEffectOnGroundAfterJump),
                        game: this._getContent(this._headersIndexMap.haveASoundEffectOnGroundAfterJump_game),
                    },
                },
                turn: this._getContent(this._headersIndexMap.haveASoundEffectOnTurnAfterRun),
                goalPole: {
                    value: this._getContent(this._headersIndexMap.haveASoundEffectWhenOnGoalPole),
                    game: this._getContent(this._headersIndexMap.haveASoundEffectWhenOnGoalPole_game),
                    smallDefinition: this._getContent(this._headersIndexMap.haveASoundEffectWhenOnGoalPole_smallDefinition),
                    type: this._getContent(this._headersIndexMap.haveASoundEffectWhenOnGoalPole_type),
                },
                death: {
                    value: this._getContent(this._headersIndexMap.haveASoundEffectOnDeath),
                    game: this._getContent(this._headersIndexMap.haveASoundEffectOnDeath_game),
                    smallDefinition: this._getContent(this._headersIndexMap.haveASoundEffectOnDeath_smallDefinition),
                    type: this._getContent(this._headersIndexMap.haveASoundEffectOnDeath_type),
                },
            },
            hasSpecialMusic: {
                starMode: {
                    value: this._getContent(this._headersIndexMap.haveASpecialMusicInStarMode),
                    game: this._getContent(this._headersIndexMap.haveASpecialMusicInStarMode_game),
                },
            },
        };
    }

}
