import file from 'resources/compiled/Mystery Mushroom (SMM).json'

import type {LanguageContent}                                                                                                                                                                                                    from 'core/_template/LanguageContent'
import type {UniqueNameContent}                                                                                                                                                                                                  from 'core/_template/UniqueNameContent'
import type {PossibleAcronym as PossibleAcronym_GameReference}                                                                                                                                                                   from 'core/gameReference/GameReferences.types'
import type {PokemonGeneration}                                                                                                                                                                                                  from 'core/mysteryMushroom/loader.types'
import type {MysteryMushroom, MysteryMushroomGames}                                                                                                                                                                              from 'core/mysteryMushroom/MysteryMushroom'
import type {PossibleUniqueEnglishName}                                                                                                                                                                                          from 'core/mysteryMushroom/MysteryMushrooms.types'
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

import {isInProduction}                       from 'variables'
import * as TemplateMethods                   from 'core/_template/templateMethods'
import {GameReferences}                       from 'core/gameReference/GameReferences'
import {MysteryMushroomContainer}             from 'core/mysteryMushroom/MysteryMushroom.container'
import {MysteryMushroomPropertyContainer}     from 'core/mysteryMushroom/properties/MysteryMushroomProperty.container'
import {UnlockPropertyProvider}               from 'core/mysteryMushroom/properties/UnlockProperty.provider'
import {SoundEffectOnDeathProvider}           from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath.provider'
import {SoundEffectOnGoalPoleProvider}        from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole.provider'
import {SoundEffectOnGroundAfterJumpProvider} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump.provider'
import {SoundEffectOnJumpProvider}            from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump.provider'
import {SoundEffectOnMovementProvider}        from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement.provider'
import {SoundEffectOnTauntProvider}           from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt.provider'
import {SoundEffectOnTurnAfterRunProvider}    from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun.provider'
import {SoundEffectWhenCollectedProvider}     from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected.provider'
import {SoundPropertyContainer}               from 'core/mysteryMushroom/properties/sound/SoundProperty.container'
import {SpecialMusicInStarModeProvider}       from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode.provider'
import {NameBuilderContainer}                 from 'lang/name/Name.builder.container'

/**
 * @dependsOn<{@link GameReferences}>
 * @singleton
 */
export class MysteryMushroomLoader
    implements Loader<ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: MysteryMushroomLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleUniqueEnglishName, MysteryMushroom>

    public load(): ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleUniqueEnglishName, MysteryMushroom>()
        let index = file.length
        while (index-- > 0) {
            const content = file[index] as Content
            references.set(content.uniqueName, createReference(content,),)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "mystery mushroom" has been loaded --------------------\n',
                references,
                '\n-------------------- "mystery mushroom" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent, UniqueNameContent<PossibleUniqueEnglishName> {

    readonly conditionToUnlockIt: PossibleConditionToUnlockIt
    readonly canBeUnlockedByAnAmiibo: boolean

    readonly firstAppearanceInMarioMaker: PossibleVersionNameInSMM

    readonly reference: | PossibleAcronym_GameReference | PokemonGeneration


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

function createReference(content: Content,): MysteryMushroom {
    return new MysteryMushroomContainer(
        new NameBuilderContainer(TemplateMethods.createNameTemplate(content,), 1, false,).build(),//TODO change the false to true since it is a complete SMM1 name
        retrieveGames(content.reference,),
        new MysteryMushroomPropertyContainer(
            UnlockPropertyProvider.get.get(content.conditionToUnlockIt, content.canBeUnlockedByAnAmiibo,),
            new SoundPropertyContainer(
                SoundEffectWhenCollectedProvider.get.get(content.haveASoundEffectWhenCollected, content.haveASoundEffectWhenCollected_game,),
                SoundEffectOnTauntProvider.get.get(content.haveASoundEffectOnTaunt, content.haveASoundEffectOnTaunt_game,),
                SoundEffectOnMovementProvider.get.get(content.soundEffectOnMovement,),
                SoundEffectOnJumpProvider.get.get(content.haveASoundEffectOnJump, content.haveASoundEffectOnJump_game,),
                SoundEffectOnGroundAfterJumpProvider.get.get(content.haveASoundEffectOnGroundAfterJump, content.haveASoundEffectOnGroundAfterJump_game,),
                SoundEffectOnTurnAfterRunProvider.get.get(content.haveASoundEffectOnTurnAfterRun,),
                SpecialMusicInStarModeProvider.get.get(content.haveASpecialMusicInStarMode, content.haveASpecialMusicInStarMode_game,),
                SoundEffectOnGoalPoleProvider.get.get(content.haveASoundEffectWhenOnGoalPole, content.haveASoundEffectWhenOnGoalPole_type, content.haveASoundEffectWhenOnGoalPole_game, content.haveASoundEffectWhenOnGoalPole_smallDefinition,),
                SoundEffectOnDeathProvider.get.get(content.haveASoundEffectOnDeath, content.haveASoundEffectOnDeath_type, content.haveASoundEffectOnDeath_game, content.haveASoundEffectOnDeath_smallDefinition,),
            ),
        ),
    )
}

function retrieveGames(value: | PossibleAcronym_GameReference | PokemonGeneration,): MysteryMushroomGames {
    switch (value) {
        case 'Pokémon gen 1':
            return [GameReferences.POKEMON_RED, GameReferences.POKEMON_GREEN, GameReferences.POKEMON_BLUE, GameReferences.POKEMON_YELLOW,]
        case 'Pokémon gen 4':
            return [GameReferences.POKEMON_DIAMOND, GameReferences.POKEMON_PEARL,]
        case 'Pokémon gen 6':
            return [GameReferences.POKEMON_X, GameReferences.POKEMON_Y,]
        default:
            return [GameReferences.CompanionEnum.get.getValueByAcronym(value,),]
    }
}
