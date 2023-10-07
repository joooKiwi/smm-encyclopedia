import file from 'resources/compiled/Sound effect.json'

import type {LanguageContent}                                               from 'core/_template/LanguageContent'
import type {GameContentFrom1And2}                                          from 'core/game/Loader.types'
import type {SoundEffect}                                                   from 'core/soundEffect/SoundEffect'
import type {PossibleEnglishName}                                           from 'core/soundEffect/SoundEffects.types'
import type {PossibleEnglishName as PossibleSoundEffectCategoryEnglishName} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {Loader}                                                        from 'util/loader/Loader'

import {isInProduction}               from 'variables'
import * as TemplateMethods           from 'core/_template/templateMethods'
import {GamePropertyProvider}         from 'core/entity/properties/game/GameProperty.provider'
import {SoundEffectContainer}         from 'core/soundEffect/SoundEffect.container'
import {PlayerSoundEffectTriggers}    from 'core/soundEffect/property/PlayerSoundEffectTriggers'
import {SoundEffectPropertyContainer} from 'core/soundEffect/property/SoundEffectProperty.container'
import {EmptySoundEffectCategory}     from 'core/soundEffectCategory/EmptySoundEffectCategory'
import {SoundEffectCategoryLoader}    from 'core/soundEffectCategory/SoundEffectCategory.loader'
import {NameBuilderContainer}         from 'lang/name/Name.builder.container'

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

    #map?: Map<PossibleEnglishName, SoundEffect>

    public load(): ReadonlyMap<PossibleEnglishName, SoundEffect> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, SoundEffect>()
        let index = file.length
        while (index-- > 0) {
            const reference = createContent(file[index] as Content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        }

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

    readonly category: NullOr<PossibleSoundEffectCategoryEnglishName>

}

function createContent(content: Content,): SoundEffect {
    const category = content.category

    return new SoundEffectContainer(
        new NameBuilderContainer(TemplateMethods.createNameTemplate(content,), 2, false,).build(),
        category == null ? EmptySoundEffectCategory.get : SoundEffectCategoryLoader.get.load().get(category,)!,
        new SoundEffectPropertyContainer(
            GamePropertyProvider.get.get(content.isInSuperMarioMaker1And3DS, content.isInSuperMarioMaker2,),
            PlayerSoundEffectTriggers.getValueByTrigger(//TODO replace PlayerSoundEffectTriggers.getValueByTrigger in "SoundEffect.loader.ts" in a simple function
                content.doesTrigger_player_jumpAfterLanding, content.doesTrigger_player_turnAroundAfterBeingAtFullSpeed, content.doesTrigger_player_crouch, content.doesTrigger_player_after3SecondsRepeatedly,
                content.doesTrigger_player_collectPowerUp, content.doesTrigger_player_getIntoAnEntity,
                content.doesTrigger_player_spawn, content.doesTrigger_player_damage, content.doesTrigger_player_lostALife,
            ),
        ),
    )
}
