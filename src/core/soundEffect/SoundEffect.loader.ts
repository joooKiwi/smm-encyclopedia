import file from 'resources/compiled/Sound effect.json'

import type {LanguageContent}                                               from 'core/_template/LanguageContent'
import type {GameContentFrom1And2}                                          from 'core/game/Loader.types'
import type {SoundEffect}                                                   from 'core/soundEffect/SoundEffect'
import type {PossibleEnglishName}                                           from 'core/soundEffect/SoundEffects.types'
import type {SoundEffectTemplate}                                           from 'core/soundEffect/SoundEffect.template'
import type {PossibleEnglishName as PossibleSoundEffectCategoryEnglishName} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {Loader}                                                        from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import * as TemplateMethods from 'core/_template/templateMethods'
import {createContent}      from 'core/soundEffect/SoundEffect.creator'

/** @singleton */
export class SoundEffectLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, SoundEffect>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: SoundEffectLoader

    private constructor() {
    }

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
            const reference = createContent(createTemplate(file[index] as Content,),)
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

function createTemplate(content: Content,): SoundEffectTemplate {
    return {
        properties: {
            isIn: {
                game: TemplateMethods.createGameTemplateFrom1And2(content,),

                trigger: {
                    player: {

                        movement: {
                            jumpAfterLanding: content.doesTrigger_player_jumpAfterLanding,
                            turnAroundAfterBeingAtFullSpeed: content.doesTrigger_player_turnAroundAfterBeingAtFullSpeed,
                            crouch: content.doesTrigger_player_crouch,
                            after3SecondsRepeatedly: content.doesTrigger_player_after3SecondsRepeatedly,
                        },

                        interaction: {
                            collectPowerUp: content.doesTrigger_player_collectPowerUp,
                            getIntoAnEntity: content.doesTrigger_player_getIntoAnEntity,
                        },

                        environment: {
                            spawn: content.doesTrigger_player_spawn,
                            damage: content.doesTrigger_player_damage,
                            lostALife: content.doesTrigger_player_lostALife,
                        },

                    },
                },
            },
            category: content.category,
        },
        name: TemplateMethods.createNameTemplate(content,),
    }
}
