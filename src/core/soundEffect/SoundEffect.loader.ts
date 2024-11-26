import file from 'resources/compiled/Sound effect.json' assert { type: 'json', }

import type {Array, NullOrString} from '@joookiwi/type'
import {forEachByArray}           from '@joookiwi/collection'

import type {LanguageContent}                                     from 'core/_template/LanguageContent'
import type {GameContentFrom1And2}                                from 'core/game/Loader.types'
import type {SoundEffect}                                         from 'core/soundEffect/SoundEffect'
import type {PossibleEnglishName}                                 from 'core/soundEffect/SoundEffects.types'
import type {PossibleEnglishName as PossibleEnglishName_Category} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {Loader}                                              from 'util/loader/Loader'
import type {SoundEffectCategory}                                 from 'core/soundEffectCategory/SoundEffectCategory'

import {isInProduction}            from 'variables'
import {SoundEffectContainer}      from 'core/soundEffect/SoundEffect.container'
import {PlayerSoundEffectTriggers} from 'core/soundEffect/property/PlayerSoundEffectTriggers'
import {EmptySoundEffectCategory}  from 'core/soundEffectCategory/EmptySoundEffectCategory'
import {SoundEffectCategoryLoader} from 'core/soundEffectCategory/SoundEffectCategory.loader'
import {createNameFromContent}     from 'lang/name/createNameFromContent'

/**
 * @dependsOn<{@link PlayerSoundEffectTriggers}>
 * @dependsOn<{@link SoundEffectCategoryLoader}>
 * @singleton
 */
export class SoundEffectLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, SoundEffect>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: ReadonlyMap<PossibleEnglishName, SoundEffect>

    public load(): ReadonlyMap<PossibleEnglishName, SoundEffect> {
        if (this.#map != null)
            return this.#map

        const soundEffectCategoryMap = SoundEffectCategoryLoader.get.load()
        const references = new Map<PossibleEnglishName, SoundEffect>()
        forEachByArray(file as Array<Content>, content => {
            const reference = createReference(content, soundEffectCategoryMap,)
            references.set(reference.english as PossibleEnglishName, reference,)
        },)

        if (!isInProduction)
            console.info(
                '-------------------- "sound effect" has been loaded --------------------\n',
                references,
                '\n-------------------- "sound effect" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent, GameContentFrom1And2 {

    //region -------------------- Triggers --------------------

    readonly doesTrigger_player_jumpAfterLanding: boolean
    readonly doesTrigger_player_turnAroundAfterBeingAtFullSpeed: boolean
    readonly doesTrigger_player_crouch: boolean
    readonly doesTrigger_player_after3SecondsRepeatedly: boolean

    readonly doesTrigger_player_collectPowerUp: boolean
    readonly doesTrigger_player_getIntoAnEntity: boolean

    readonly doesTrigger_player_spawn: boolean
    readonly doesTrigger_player_damage: boolean
    readonly doesTrigger_player_lostALife: boolean

    //endregion -------------------- Triggers --------------------

    readonly category: NullOrString<PossibleEnglishName_Category>

}

/** A type-alias definition of the {@link SoundEffectCategories} name-reference {@link ReadonlyMap map} */
type SoundEffectCategoryMap = ReadonlyMap<PossibleEnglishName_Category, SoundEffectCategory>

function createReference(content: Content, soundEffectCategoryMap: SoundEffectCategoryMap,): SoundEffect {
    const category = content.category

    return new SoundEffectContainer(
        createNameFromContent(content, 2, false,),
        content.isInSuperMarioMaker1And3DS, content.isInSuperMarioMaker2,
        category == null ? EmptySoundEffectCategory.get : soundEffectCategoryMap.get(category,)!,
        getValueByTrigger(content,),
    )
}

/**
 * Return only one possible instance based on the boolean received.
 * It cannot receive any dual true since only the first boolean will be considered.
 *
 * Note that only the arguments ({@link content.doesTrigger_player_damage onDamageTaken}
 * & {@link content.doesTrigger_player_lostALife whenLosingALife}) can be both true.
 *
 * @param content The sound effect csv content
 */
function getValueByTrigger(content: Content,): PlayerSoundEffectTriggers {
    if (content.doesTrigger_player_jumpAfterLanding)
        return PlayerSoundEffectTriggers.JUMP_AFTER_LANDING
    if (content.doesTrigger_player_turnAroundAfterBeingAtFullSpeed)
        return PlayerSoundEffectTriggers.TURN_AROUND_AFTER_BEING_AT_FULL_SPEED
    if (content.doesTrigger_player_crouch)
        return PlayerSoundEffectTriggers.ON_CROUCH
    if (content.doesTrigger_player_after3SecondsRepeatedly)
        return PlayerSoundEffectTriggers.AFTER_3_SECONDS_OF_NON_MOVEMENT

    if (content.doesTrigger_player_collectPowerUp)
        return PlayerSoundEffectTriggers.COLLECT_POWER_UP
    if (content.doesTrigger_player_getIntoAnEntity)
        return PlayerSoundEffectTriggers.GET_INTO_AN_ENTITY

    if (content.doesTrigger_player_spawn)
        return PlayerSoundEffectTriggers.AT_SPAWN

    const whenLosingALife = content.doesTrigger_player_lostALife
    if (content.doesTrigger_player_damage)
        if (whenLosingALife)
            return PlayerSoundEffectTriggers.TAKE_DAMAGE_OR_LOSE_A_LIFE
        else
            return PlayerSoundEffectTriggers.TAKE_DAMAGE
    if (whenLosingALife)
        return PlayerSoundEffectTriggers.LOSE_A_LIFE

    throw new TypeError('There is no player sound effect trigger usable with no possible property.',)
}
