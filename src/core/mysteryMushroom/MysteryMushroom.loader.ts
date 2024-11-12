import file from 'resources/compiled/Mystery Mushroom (SMM).json'

import type {Array}     from '@joookiwi/type'
import {forEachByArray} from '@joookiwi/collection'

import type {LanguageContent}                                                                                                                                                                                                                                                                       from 'core/_template/LanguageContent'
import type {UniqueNameContent}                                                                                                                                                                                                                                                                     from 'core/_template/UniqueNameContent'
import type {PossibleAcronym as PossibleAcronym_GameReference}                                                                                                                                                                                                                                      from 'core/gameReference/GameReferences.types'
import type {PokemonGeneration, PossibleConditionToUnlockIt, PossibleFirstAppearance}                                                                                                                                                                                                               from 'core/mysteryMushroom/loader.types'
import type {MysteryMushroom}                                                                                                                                                                                                                                                                       from 'core/mysteryMushroom/MysteryMushroom'
import type {PossibleUniqueEnglishName}                                                                                                                                                                                                                                                             from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {CompanionEnumByAcronymOrName}                                                                                                                                                                                                                                                          from 'util/enumerable/companion/CompanionEnumByAcronymOrName'
import type {Loader}                                                                                                                                                                                                                                                                                from 'util/loader/Loader'
import type {AdditionalSoundOnDeath, AdditionalSoundOnGoalPole, GameInStarMode, MysteryMushroomGames, PossibleAmountOfSoundEffectOnJump, PossibleTranslationKeyOnDeath, PossibleTranslationKeyOnGoalPole, SoundEffectOnMovement, SpecialMusicInStarMode, TypeOfSoundOnDeath, TypeOfSoundOnGoalPole} from 'core/mysteryMushroom/MysteryMushroom.types'

import {isInProduction}           from 'variables'
import {GameReferences}           from 'core/gameReference/GameReferences'
import {MysteryMushroomContainer} from 'core/mysteryMushroom/MysteryMushroom.container'
import {createNameFromContent}    from 'lang/name/createNameFromContent'
import {UNKNOWN_REFERENCE}        from 'util/commonVariables'

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
        forEachByArray(file as Array<Content>, content =>
            references.set(content.uniqueName, createReference(content, GameReferenceCompanion,),),)

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
    readonly haveASoundEffectWhenCollected: BooleanOrNotApplicable

    readonly haveASoundEffectOnTaunt_game: NullOr<PossibleAcronym_GameReference>
    readonly haveASoundEffectOnTaunt: BooleanOrNotApplicable

    readonly haveASoundEffectOnJump_game: NullOr<PossibleAcronym_GameReference>
    readonly haveASoundEffectOnJump_amount: NullOr<PossibleAmountOfSoundEffectOnJump>
    readonly haveASoundEffectOnJump_multipleImage: BooleanOrNotApplicable
    readonly haveASoundEffectOnJump: BooleanOrNotApplicable

    readonly haveASoundEffectOnGroundAfterJump_game: NullOr<PossibleAcronym_GameReference>
    readonly haveASoundEffectOnGroundAfterJump: BooleanOrNotApplicable

    readonly soundEffectOnMovement_sound: NullOr<SoundEffectOnMovement>
    readonly soundEffectOnMovement: BooleanOrNotApplicable

    readonly haveASoundEffectOnTurnAfterRun: BooleanOrNotApplicable

    readonly haveASpecialMusicInStarMode_game: NullOr<GameInStarMode>
    readonly haveASpecialMusicInStarMode_music: NullOr<SpecialMusicInStarMode>
    readonly haveASpecialMusicInStarMode: BooleanOrNotApplicable

    readonly haveASoundEffectWhenOnGoalPole_game: NullOr<| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference>
    readonly haveASoundEffectWhenOnGoalPole_type: NullOr<TypeOfSoundOnGoalPole>
    readonly haveASoundEffectWhenOnGoalPole_smallDefinition: PossibleTranslationKeyOnGoalPole
    readonly haveASoundEffectWhenOnGoalPole_plus: NullOr<AdditionalSoundOnGoalPole>
    readonly haveASoundEffectWhenOnGoalPole: BooleanOrNotApplicable

    readonly haveASoundEffectOnDeath_game: NullOr<| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference>
    readonly haveASoundEffectOnDeath_type: NullOr<TypeOfSoundOnDeath>
    readonly haveASoundEffectOnDeath_smallDefinition: PossibleTranslationKeyOnDeath
    readonly haveASoundEffectOnDeath_plus: NullOr<AdditionalSoundOnDeath>
    readonly haveASoundEffectOnDeath: BooleanOrNotApplicable

}

/** A type-alias for the {@link GameReferences.CompanionEnum} */
type GameReferenceCompanion = CompanionEnumByAcronymOrName<GameReferences, typeof GameReferences>

function createReference(content: Content, gameReferenceCompanion: GameReferenceCompanion,): MysteryMushroom {
    return new MysteryMushroomContainer(
        createNameFromContent(content, 1, true,),
        retrieveGames(content.reference, gameReferenceCompanion,),
        content.conditionToUnlockIt, content.canBeUnlockedByAnAmiibo,
        content.haveASoundEffectWhenCollected, retrieveGameReference(content.haveASoundEffectWhenCollected_game, gameReferenceCompanion,),
        content.haveASoundEffectOnTaunt, retrieveGameReference(content.haveASoundEffectOnTaunt_game, gameReferenceCompanion,),
        content.soundEffectOnMovement, content.soundEffectOnMovement_sound,
        content.haveASoundEffectOnJump, content.haveASoundEffectOnJump_amount, content.haveASoundEffectOnJump_multipleImage, retrieveGameReference(content.haveASoundEffectOnJump_game, gameReferenceCompanion,),
        content.haveASoundEffectOnGroundAfterJump, retrieveGameReference(content.haveASoundEffectOnGroundAfterJump_game, gameReferenceCompanion,),
        content.haveASoundEffectOnTurnAfterRun,
        content.haveASpecialMusicInStarMode, content.haveASpecialMusicInStarMode_music, retrieveGameReference(content.haveASpecialMusicInStarMode_game, gameReferenceCompanion,),
        content.haveASoundEffectWhenOnGoalPole, content.haveASoundEffectWhenOnGoalPole_plus, content.haveASoundEffectWhenOnGoalPole_smallDefinition, content.haveASoundEffectWhenOnGoalPole_type, retrieveGameReferenceOrPokemonGenerationOrUnknown(content.haveASoundEffectWhenOnGoalPole_game, gameReferenceCompanion,),
        content.haveASoundEffectOnDeath, content.haveASoundEffectOnDeath_plus, content.haveASoundEffectOnDeath_smallDefinition, content.haveASoundEffectOnDeath_type, retrieveGameReferenceOrPokemonGenerationOrUnknown(content.haveASoundEffectOnDeath_game, gameReferenceCompanion,),
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

function retrieveGameReference(value: Nullable<PossibleAcronym_GameReference>, gameReferenceCompanion: GameReferenceCompanion,): NullOr<GameReferences> {
    if (value == null)
        return null
    return gameReferenceCompanion.getValueByAcronym(value,)
}

function retrieveGameReferenceOrPokemonGenerationOrUnknown(value: NullOr<| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference>, gameReferenceCompanion: GameReferenceCompanion,): NullOr<GameReferences> {
    if (value == null)
        return null
    if (value === UNKNOWN_REFERENCE)
        return null //TODO Try finding the references of the games
    if (value.startsWith('Pokémon gen'))
        return null //TODO return each values of the pokémon games
    return gameReferenceCompanion.getValueByAcronym(value,)
}
