import file from 'resources/compiled/Mystery Mushroom (SMM).json'

import type {LanguageContent}                                                                                                                                                                                                                                                                       from 'core/_template/LanguageContent'
import type {UniqueNameContent}                                                                                                                                                                                                                                                                     from 'core/_template/UniqueNameContent'
import type {PossibleAcronym as PossibleAcronym_GameReference}                                                                                                                                                                                                                                      from 'core/gameReference/GameReferences.types'
import type {PokemonGeneration, PossibleConditionToUnlockIt, PossibleFirstAppearance, PossibleSoundEffectOnDeath, PossibleSoundEffectOnGoalPole, PossibleSoundEffectOnJump, PossibleSoundEffectOnMovement, PossibleSpecialMusicInStarMode}                                                          from 'core/mysteryMushroom/loader.types'
import type {MysteryMushroom}                                                                                                                                                                                                                                                                       from 'core/mysteryMushroom/MysteryMushroom'
import type {PossibleUniqueEnglishName}                                                                                                                                                                                                                                                             from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {CompanionEnumByAcronymOrName}                                                                                                                                                                                                                                                          from 'util/enumerable/companion/CompanionEnumByAcronymOrName'
import type {Loader}                                                                                                                                                                                                                                                                                from 'util/loader/Loader'
import type {AdditionalSoundOnDeath, AdditionalSoundOnGoalPole, GameInStarMode, MysteryMushroomGames, PossibleAmountOfSoundEffectOnJump, PossibleTranslationKeyOnDeath, PossibleTranslationKeyOnGoalPole, SoundEffectOnMovement, SpecialMusicInStarMode, TypeOfSoundOnDeath, TypeOfSoundOnGoalPole} from 'core/mysteryMushroom/MysteryMushroom.types'

import {isInProduction}                    from 'variables'
import {GameReferences}                    from 'core/gameReference/GameReferences'
import {MysteryMushroomContainer}          from 'core/mysteryMushroom/MysteryMushroom.container'
import {createNameFromContent}             from 'lang/name/createNameFromContent'
import {NOT_APPLICABLE, UNKNOWN_REFERENCE} from 'util/commonVariables'

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

        const GameReferenceCompanion = GameReferences.CompanionEnum.get
        const references = new Map<PossibleUniqueEnglishName, MysteryMushroom>()
        let index = file.length
        while (index-- > 0) {
            const content = file[index] as Content
            references.set(content.uniqueName, createReference(content, GameReferenceCompanion,),)
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

    readonly firstAppearanceInMarioMaker: PossibleFirstAppearance

    readonly reference: | PossibleAcronym_GameReference | PokemonGeneration


    readonly haveASoundEffectWhenCollected_game: NullOr<PossibleAcronym_GameReference>
    readonly haveASoundEffectWhenCollected: NullOrBoolean

    readonly haveASoundEffectOnTaunt_game: NullOr<PossibleAcronym_GameReference>
    readonly haveASoundEffectOnTaunt: NullOrBoolean

    readonly haveASoundEffectOnJump_game: NullOr<PossibleAcronym_GameReference>
    readonly haveASoundEffectOnJump: PossibleSoundEffectOnJump

    readonly haveASoundEffectOnGroundAfterJump_game: NullOr<PossibleAcronym_GameReference>
    readonly haveASoundEffectOnGroundAfterJump: NullOrBoolean

    readonly soundEffectOnMovement: PossibleSoundEffectOnMovement

    readonly haveASoundEffectOnTurnAfterRun: NullOrBoolean

    readonly haveASpecialMusicInStarMode_game: NullOr<GameInStarMode>
    readonly haveASpecialMusicInStarMode: PossibleSpecialMusicInStarMode

    readonly haveASoundEffectWhenOnGoalPole_game: NullOr<| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference>
    readonly haveASoundEffectWhenOnGoalPole_type: NullOr<TypeOfSoundOnGoalPole>
    readonly haveASoundEffectWhenOnGoalPole_smallDefinition: PossibleTranslationKeyOnGoalPole
    readonly haveASoundEffectWhenOnGoalPole: PossibleSoundEffectOnGoalPole

    readonly haveASoundEffectOnDeath_game: NullOr<| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference>
    readonly haveASoundEffectOnDeath_type: NullOr<TypeOfSoundOnDeath>
    readonly haveASoundEffectOnDeath_smallDefinition: PossibleTranslationKeyOnDeath
    readonly haveASoundEffectOnDeath: PossibleSoundEffectOnDeath

}

/** A type-alias for the {@link GameReferences.CompanionEnum} */
type GameReferenceCompanion = CompanionEnumByAcronymOrName<GameReferences, typeof GameReferences>

function createReference(content: Content, gameReferenceCompanion: GameReferenceCompanion,): MysteryMushroom {
    const soundEffectOnMovement = retrieveSoundEffectOnMovement(content,)
    const soundEffectOnJump = retrieveSoundEffectOnJump(content,)
    const specialMusicInStarMode = retrieveSpecialMusicInStarMode(content,)
    const soundEffectOnGoalPole = retrieveSoundEffectOnGoalPole(content,)
    const soundEffectOnDeath = retrieveSoundEffectOnDeath(content,)

    return new MysteryMushroomContainer(
        createNameFromContent(content, 1, true,),
        retrieveGames(content.reference, gameReferenceCompanion,),
        content.conditionToUnlockIt, content.canBeUnlockedByAnAmiibo,
        valueOrNotApplicable(content.haveASoundEffectWhenCollected,), retrieveGameReference(content.haveASoundEffectWhenCollected_game, gameReferenceCompanion,),
        valueOrNotApplicable(content.haveASoundEffectOnTaunt,), retrieveGameReference(content.haveASoundEffectOnTaunt_game, gameReferenceCompanion,),
        soundEffectOnMovement[0], soundEffectOnMovement[1],
        soundEffectOnJump[0], soundEffectOnJump[1], soundEffectOnJump[2], retrieveGameReference(content.haveASoundEffectOnJump_game, gameReferenceCompanion,),
        valueOrNotApplicable(content.haveASoundEffectOnGroundAfterJump,), retrieveGameReference(content.haveASoundEffectOnGroundAfterJump_game, gameReferenceCompanion,),
        valueOrNotApplicable(content.haveASoundEffectOnTurnAfterRun,),
        specialMusicInStarMode[0], specialMusicInStarMode[1], retrieveGameReference(content.haveASpecialMusicInStarMode_game, gameReferenceCompanion,),
        soundEffectOnGoalPole[0], soundEffectOnGoalPole[1], content.haveASoundEffectWhenOnGoalPole_smallDefinition, content.haveASoundEffectWhenOnGoalPole_type, retrieveGameReferenceOrPokemonGenerationOrUnknown(content.haveASoundEffectWhenOnGoalPole_game, gameReferenceCompanion,),
        soundEffectOnDeath[0], soundEffectOnDeath[1], content.haveASoundEffectOnDeath_smallDefinition, content.haveASoundEffectOnDeath_type, retrieveGameReferenceOrPokemonGenerationOrUnknown(content.haveASoundEffectOnDeath_game, gameReferenceCompanion,),
    )
}

function retrieveGames(value: | PossibleAcronym_GameReference | PokemonGeneration, gameReferenceCompanion: GameReferenceCompanion,): MysteryMushroomGames {
    switch (value) {
        case 'Pokémon gen 1':
            return [GameReferences.POKEMON_RED, GameReferences.POKEMON_GREEN, GameReferences.POKEMON_BLUE, GameReferences.POKEMON_YELLOW,]
        case 'Pokémon gen 4':
            return [GameReferences.POKEMON_DIAMOND, GameReferences.POKEMON_PEARL,]
        case 'Pokémon gen 6':
            return [GameReferences.POKEMON_X, GameReferences.POKEMON_Y,]
        default:
            return [gameReferenceCompanion.getValueByAcronym(value,),]
    }
}

function valueOrNotApplicable(value: NullableBoolean,): BooleanOrNotApplicable {
    if (value == null)
        return NOT_APPLICABLE
    return value
}

function retrieveGameReference(value: Nullable<PossibleAcronym_GameReference>, gameReferenceCompanion: GameReferenceCompanion,): NullOr<GameReferences> {
    if (value == null)
        return null
    return gameReferenceCompanion.getValueByNameOrAcronym(value,)
}

function retrieveGameReferenceOrPokemonGenerationOrUnknown(value: NullOr<| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference>, gameReferenceCompanion: GameReferenceCompanion,): NullOr<GameReferences> {
    if (value == null)
        return null
    if (value === UNKNOWN_REFERENCE)
        return null //TODO Try finding the references of the games
    if (value.startsWith('Pokémon gen'))
        return null //TODO return each values of the pokémon games
    return gameReferenceCompanion.getValueByNameOrAcronym(value,)
}


/**@deprecated This should already be separated in the CSV file */
function retrieveSoundEffectOnMovement(content: Content,): readonly [value: BooleanOrNotApplicable, translationKey: NullOr<SoundEffectOnMovement>,] {
    const value = content.soundEffectOnMovement

    if (value == null)
        return [NOT_APPLICABLE, null,]
    if (typeof value == 'boolean')
        return [value, null,]
    return [true, value,]
}

/**@deprecated This should already be separated in the CSV file */
function retrieveSoundEffectOnJump(content: Content,): readonly [value: BooleanOrNotApplicable, amount: NullOr<PossibleAmountOfSoundEffectOnJump>, haveMultipleImage: boolean,] {
    const value = content.haveASoundEffectOnJump

    if (value == null)
        return [NOT_APPLICABLE, null, false,]
    if (typeof value == 'boolean')
        return [value, value ? 0 : 1, false,]
    return [true, typeof value == 'string' ? 3 : 2, true,]
}

/**@deprecated This should already be separated in the CSV file */
function retrieveSpecialMusicInStarMode(content: Content,): readonly [value: BooleanOrNotApplicable, translationKey: NullOr<SpecialMusicInStarMode>,] {
    const value = content.haveASpecialMusicInStarMode

    if (value == null)
        return [NOT_APPLICABLE, null,]
    if (typeof value == 'boolean')
        return [value, null,]
    return [true, value,]
}

/**@deprecated This should already be separated in the CSV file */
function retrieveSoundEffectOnGoalPole(content: Content,): readonly [value: BooleanOrNotApplicable, translationKey: NullOr<AdditionalSoundOnGoalPole>,] {
    const value = content.haveASoundEffectWhenOnGoalPole
    if (value == null)
        return [NOT_APPLICABLE, null,]
    if (typeof value == 'boolean')
        return [value, null,]
    return [true, value,]
}

/**@deprecated This should already be separated in the CSV file */
function retrieveSoundEffectOnDeath(content: Content,): readonly [BooleanOrNotApplicable, NullOr<AdditionalSoundOnDeath>,] {
    const value = content.haveASoundEffectOnDeath
    if (value == null)
        return [NOT_APPLICABLE, null,]
    if (typeof value == 'boolean')
        return [value, null,]
    return [true, value,]
}
