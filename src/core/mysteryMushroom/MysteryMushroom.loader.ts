import file from 'resources/compiled/Mystery Mushroom (SMM).json'

import type {LanguageContent}                                                                                                                                                                                                    from 'core/_template/LanguageContent'
import type {UniqueNameContent}                                                                                                                                                                                                  from 'core/_template/UniqueNameContent'
import type {PossibleEnglishName as PossibleGameReference}                                                                                                                                                                       from 'core/gameReference/GameReferences.types'
import type {MysteryMushroom}                                                                                                                                                                                                    from 'core/mysteryMushroom/MysteryMushroom'
import type {PossibleUniqueEnglishName}                                                                                                                                                                                          from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {MysteryMushroomTemplate, PokemonGeneration}                                                                                                                                                                         from 'core/mysteryMushroom/MysteryMushroom.template'
import type {PossibleConditionToUnlockIt}                                                                                                                                                                                        from 'core/mysteryMushroom/properties/UnlockProperty'
import type {PossibleGamesReceived as GameInStarMode, PossibleValuesReceived as PossibleSpecialMusicInStarMode}                                                                                                                  from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode'
import type {PossibleGamesReceived as GameOnSoundEffectOnDeath, PossibleTranslationKeys as TranslationKeyOnDeath, PossibleTypesReceived as TypeOfSoundEffectOnDeath, PossibleValuesReceived as PossibleSoundEffectOnDeath}       from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath'
import type {PossibleGamesReceived as GameOnSoundEffectOnGoalPole, PossibleTranslationKeys as TranslationKeyOnGoalPole, PossibleTypesReceived as TypeOfMusicOnGoalPole, PossibleValuesReceived as PossibleSoundEffectOnGoalPole} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole'
import type {PossibleGamesReceived as GameOnSoundEffectOnGroundAfterJump, PossibleValuesReceived as PossibleSoundEffectOnGroundAfterJump}                                                                                        from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump'
import type {PossibleGamesReceived as GameOnSoundEffectOnJump, PossibleValuesReceived as PossibleSoundEffectOnJump}                                                                                                              from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump'
import type {PossibleValuesReceived as PossibleSoundEffectOnMovement}                                                                                                                                                            from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement'
import type {PossibleGamesReceived as GameOnSoundEffectOnTaunt, PossibleValuesReceived as PossibleSoundEffectOnTaunt}                                                                                                            from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt'
import type {PossibleValuesReceived as PossibleSoundEffectOnTurnAfterRun}                                                                                                                                                        from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun'
import type {PossibleGamesReceived as GameOnSoundEffectWhenCollected, PossibleValuesReceived as PossibleSoundEffectWhenCollected}                                                                                                from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected'
import type {PossibleName_SMM1 as PossibleVersionNameInSMM}                                                                                                                                                                      from 'core/version/Versions.types'
import type {Loader}                                                                                                                                                                                                             from 'util/loader/Loader'

import {isInProduction}         from 'variables'
import * as TemplateMethods     from 'core/_template/templateMethods'
import {MysteryMushroomCreator} from 'core/mysteryMushroom/MysteryMushroom.creator'

/** @singleton */
export class MysteryMushroomLoader
    implements Loader<ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MysteryMushroomLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleUniqueEnglishName, MysteryMushroom>

    public load(): ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom> {
        if (this.#map == null) {
            const references = new Map<PossibleUniqueEnglishName, MysteryMushroom>()

            file.map(it => new MysteryMushroomCreator(createTemplate(it as Content,),),)
                .forEach(it => references.set(it.template.uniqueName, it.create(),))

            if (!isInProduction)
                console.info(
                    '-------------------- "mystery mushroom" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "mystery mushroom" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
    }

}


interface Content
    extends LanguageContent, UniqueNameContent<PossibleUniqueEnglishName> {

    readonly conditionToUnlockIt: PossibleConditionToUnlockIt
    readonly canBeUnlockedByAnAmiibo: boolean

    readonly firstAppearanceInMarioMaker: PossibleVersionNameInSMM

    readonly reference: | PossibleGameReference | PokemonGeneration


    readonly haveASoundEffectWhenCollected_game: GameOnSoundEffectWhenCollected
    readonly haveASoundEffectWhenCollected: PossibleSoundEffectWhenCollected

    readonly haveASoundEffectOnTaunt_game: GameOnSoundEffectOnTaunt
    readonly haveASoundEffectOnTaunt: PossibleSoundEffectOnTaunt

    readonly haveASoundEffectOnJump_game: GameOnSoundEffectOnJump
    readonly haveASoundEffectOnJump: PossibleSoundEffectOnJump
    readonly haveASoundEffectOnGroundAfterJump_game: GameOnSoundEffectOnGroundAfterJump
    readonly haveASoundEffectOnGroundAfterJump: PossibleSoundEffectOnGroundAfterJump

    readonly soundEffectOnMovement: PossibleSoundEffectOnMovement

    readonly haveASoundEffectOnTurnAfterRun: PossibleSoundEffectOnTurnAfterRun

    readonly haveASpecialMusicInStarMode_game: GameInStarMode
    readonly haveASpecialMusicInStarMode: PossibleSpecialMusicInStarMode

    readonly haveASoundEffectWhenOnGoalPole_type: TypeOfMusicOnGoalPole
    readonly haveASoundEffectWhenOnGoalPole_game: GameOnSoundEffectOnGoalPole
    readonly haveASoundEffectWhenOnGoalPole_smallDefinition: TranslationKeyOnGoalPole
    readonly haveASoundEffectWhenOnGoalPole: PossibleSoundEffectOnGoalPole

    readonly haveASoundEffectOnDeath_type: TypeOfSoundEffectOnDeath
    readonly haveASoundEffectOnDeath_game: GameOnSoundEffectOnDeath
    readonly haveASoundEffectOnDeath_smallDefinition: TranslationKeyOnDeath
    readonly haveASoundEffectOnDeath: PossibleSoundEffectOnDeath

}

function createTemplate(content: Content,): MysteryMushroomTemplate {
    return {
        properties: {
            firstAppearance: content.firstAppearanceInMarioMaker,
            unlock: {
                condition: content.conditionToUnlockIt,
                amiibo: content.canBeUnlockedByAnAmiibo,
            },
            sound: {
                soundEffect: {
                    movement: content.soundEffectOnMovement,
                },
                hasSoundEffect: {
                    collected: {
                        value: content.haveASoundEffectWhenCollected,
                        game: content.haveASoundEffectWhenCollected_game,
                    },
                    taunt: {
                        value: content.haveASoundEffectOnTaunt,
                        game: content.haveASoundEffectOnTaunt_game,
                    },
                    jump: {
                        value: {
                            value: content.haveASoundEffectOnJump,
                            game: content.haveASoundEffectOnJump_game,
                        },
                        ground: {
                            value: content.haveASoundEffectOnGroundAfterJump,
                            game: content.haveASoundEffectOnGroundAfterJump_game,
                        },
                    },
                    turn: content.haveASoundEffectOnTurnAfterRun,
                    goalPole: {
                        value: content.haveASoundEffectWhenOnGoalPole,
                        game: content.haveASoundEffectWhenOnGoalPole_game,
                        smallDefinition: content.haveASoundEffectWhenOnGoalPole_smallDefinition,
                        type: content.haveASoundEffectWhenOnGoalPole_type,
                    },
                    death: {
                        value: content.haveASoundEffectOnDeath,
                        game: content.haveASoundEffectOnDeath_game,
                        smallDefinition: content.haveASoundEffectOnDeath_smallDefinition,
                        type: content.haveASoundEffectOnDeath_type,
                    },
                },
                hasSpecialMusic: {
                    starMode: {
                        value: content.haveASpecialMusicInStarMode,
                        game: content.haveASpecialMusicInStarMode_game,
                    },
                },
            },
        },
        uniqueName: content.uniqueName,
        gameReference: content.reference,
        name: TemplateMethods.createNameTemplate(content,),
    }
}
