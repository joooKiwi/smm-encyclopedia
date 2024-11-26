import file from 'resources/compiled/Mystery Mushroom (SMM).json' assert { type: 'json', }

import type {Array, NullableString, NullOr, NullOrNumber, NullOrString} from '@joookiwi/type'
import {forEachByArray}                                                 from '@joookiwi/collection'

import type {LanguageContent}                                                                                                                                                                                                                                                                       from 'core/_template/LanguageContent'
import type {UniqueNameContent}                                                                                                                                                                                                                                                                     from 'core/_template/UniqueNameContent'
import type {PossibleAcronym as PossibleAcronym_GameReference}                                                                                                                                                                                                                                      from 'core/gameReference/GameReferences.types'
import type {PokemonGeneration, PossibleConditionToUnlockIt, PossibleFirstAppearance}                                                                                                                                                                                                               from 'core/mysteryMushroom/loader.types'
import type {MysteryMushroom}                                                                                                                                                                                                                                                                       from 'core/mysteryMushroom/MysteryMushroom'
import type {PossibleUniqueEnglishName}                                                                                                                                                                                                                                                             from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {Loader}                                                                                                                                                                                                                                                                                from 'util/loader/Loader'
import type {AdditionalSoundOnDeath, AdditionalSoundOnGoalPole, GameInStarMode, MysteryMushroomGames, PossibleAmountOfSoundEffectOnJump, PossibleTranslationKeyOnDeath, PossibleTranslationKeyOnGoalPole, SoundEffectOnMovement, SpecialMusicInStarMode, TypeOfSoundOnDeath, TypeOfSoundOnGoalPole} from 'core/mysteryMushroom/MysteryMushroom.types'

import {isInProduction}           from 'variables'
import {GameReferences}           from 'core/gameReference/GameReferences'
import {MysteryMushroomContainer} from 'core/mysteryMushroom/MysteryMushroom.container'
import {createNameFromContent}    from 'lang/name/createNameFromContent'
import {UNKNOWN_REFERENCE}        from 'util/commonVariables'

import GameReferenceCompanion = GameReferences.Companion

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

    #map?: ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom>

    public load(): ReadonlyMap<PossibleUniqueEnglishName, MysteryMushroom> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleUniqueEnglishName, MysteryMushroom>()
        forEachByArray(file as Array<Content>, content =>
            references.set(content.uniqueName, createReference(content,),),)

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


    readonly haveASoundEffectWhenCollected_game: NullOrString<PossibleAcronym_GameReference>
    readonly haveASoundEffectWhenCollected: BooleanOrNotApplicable

    readonly haveASoundEffectOnTaunt_game: NullOrString<PossibleAcronym_GameReference>
    readonly haveASoundEffectOnTaunt: BooleanOrNotApplicable

    readonly haveASoundEffectOnJump_game: NullOrString<PossibleAcronym_GameReference>
    readonly haveASoundEffectOnJump_amount: NullOrNumber<PossibleAmountOfSoundEffectOnJump>
    readonly haveASoundEffectOnJump_multipleImage: BooleanOrNotApplicable
    readonly haveASoundEffectOnJump: BooleanOrNotApplicable

    readonly haveASoundEffectOnGroundAfterJump_game: NullOrString<PossibleAcronym_GameReference>
    readonly haveASoundEffectOnGroundAfterJump: BooleanOrNotApplicable

    readonly soundEffectOnMovement_sound: NullOrString<SoundEffectOnMovement>
    readonly soundEffectOnMovement: BooleanOrNotApplicable

    readonly haveASoundEffectOnTurnAfterRun: BooleanOrNotApplicable

    readonly haveASpecialMusicInStarMode_game: NullOrString<GameInStarMode>
    readonly haveASpecialMusicInStarMode_music: NullOrString<SpecialMusicInStarMode>
    readonly haveASpecialMusicInStarMode: BooleanOrNotApplicable

    readonly haveASoundEffectWhenOnGoalPole_game: NullOrString<| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference>
    readonly haveASoundEffectWhenOnGoalPole_type: NullOrString<TypeOfSoundOnGoalPole>
    readonly haveASoundEffectWhenOnGoalPole_smallDefinition: PossibleTranslationKeyOnGoalPole
    readonly haveASoundEffectWhenOnGoalPole_plus: NullOrString<AdditionalSoundOnGoalPole>
    readonly haveASoundEffectWhenOnGoalPole: BooleanOrNotApplicable

    readonly haveASoundEffectOnDeath_game: NullOrString<| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference>
    readonly haveASoundEffectOnDeath_type: NullOrString<TypeOfSoundOnDeath>
    readonly haveASoundEffectOnDeath_smallDefinition: PossibleTranslationKeyOnDeath
    readonly haveASoundEffectOnDeath_plus: NullOrString<AdditionalSoundOnDeath>
    readonly haveASoundEffectOnDeath: BooleanOrNotApplicable

}

function createReference(content: Content,): MysteryMushroom {
    return new MysteryMushroomContainer(
        createNameFromContent(content, 1, true,),
        retrieveGames(content.reference,),
        content.conditionToUnlockIt, content.canBeUnlockedByAnAmiibo,
        content.haveASoundEffectWhenCollected, retrieveGameReference(content.haveASoundEffectWhenCollected_game,),
        content.haveASoundEffectOnTaunt, retrieveGameReference(content.haveASoundEffectOnTaunt_game,),
        content.soundEffectOnMovement, content.soundEffectOnMovement_sound,
        content.haveASoundEffectOnJump, content.haveASoundEffectOnJump_amount, content.haveASoundEffectOnJump_multipleImage, retrieveGameReference(content.haveASoundEffectOnJump_game,),
        content.haveASoundEffectOnGroundAfterJump, retrieveGameReference(content.haveASoundEffectOnGroundAfterJump_game,),
        content.haveASoundEffectOnTurnAfterRun,
        content.haveASpecialMusicInStarMode, content.haveASpecialMusicInStarMode_music, retrieveGameReference(content.haveASpecialMusicInStarMode_game,),
        content.haveASoundEffectWhenOnGoalPole, content.haveASoundEffectWhenOnGoalPole_plus, content.haveASoundEffectWhenOnGoalPole_smallDefinition, content.haveASoundEffectWhenOnGoalPole_type, retrieveGameReferenceOrPokemonGenerationOrUnknown(content.haveASoundEffectWhenOnGoalPole_game,),
        content.haveASoundEffectOnDeath, content.haveASoundEffectOnDeath_plus, content.haveASoundEffectOnDeath_smallDefinition, content.haveASoundEffectOnDeath_type, retrieveGameReferenceOrPokemonGenerationOrUnknown(content.haveASoundEffectOnDeath_game,),
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
            return [GameReferenceCompanion.getValueByAcronym(value,),]
    }
}

function retrieveGameReference(value: NullableString<PossibleAcronym_GameReference>,): NullOr<GameReferences> {
    if (value == null)
        return null
    return GameReferenceCompanion.getValueByAcronym(value,)
}

function retrieveGameReferenceOrPokemonGenerationOrUnknown(value: NullOrString<| PossibleAcronym_GameReference | PokemonGeneration | UnknownReference>,): NullOr<GameReferences> {
    if (value == null)
        return null
    if (value === UNKNOWN_REFERENCE)
        return null //TODO Try finding the references of the games
    if (value.startsWith('Pokémon gen'))
        return null //TODO return each values of the pokémon games
    return GameReferenceCompanion.getValueByAcronym(value,)
}
