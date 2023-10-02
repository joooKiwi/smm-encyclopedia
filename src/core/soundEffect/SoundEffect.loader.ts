import file from 'resources/compiled/Sound effect.json'

import type {LanguageContent}                                               from 'core/_template/LanguageContent'
import type {GameContentFrom1And2}                                          from 'core/game/Loader.types'
import type {SoundEffect}                                                   from 'core/soundEffect/SoundEffect'
import type {PossibleEnglishName}                                           from 'core/soundEffect/SoundEffects.types'
import type {SoundEffectTemplate}                                           from 'core/soundEffect/SoundEffect.template'
import type {PossibleEnglishName as PossibleSoundEffectCategoryEnglishName} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {Loader}                                                        from 'util/loader/Loader'

import {isInProduction}          from 'variables'
import {AbstractTemplateCreator} from 'core/_template/AbstractTemplate.creator'
import * as TemplateMethods      from 'core/_template/templateMethods'
import {SoundEffectCreator}      from 'core/soundEffect/SoundEffect.creator'

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
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, SoundEffect>()

            file.map(it => new SoundEffectCreator(new TemplateCreator(it as Content).create()).create())
                .forEach(it => references.set(it.english as PossibleEnglishName, it,))

            if (!isInProduction)
                console.info(
                    '-------------------- "sound effect" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "sound effect" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
    }

}


interface Content
    extends LanguageContent, GameContentFrom1And2 {

    //region -------------------- Triggers --------------------

    doesTrigger_player_jumpAfterLanding: boolean
    doesTrigger_player_turnAroundAfterBeingAtFullSpeed: boolean
    doesTrigger_player_crouch: boolean
    doesTrigger_player_after3SecondsRepeatedly: boolean

    doesTrigger_player_collectPowerUp: boolean
    doesTrigger_player_getIntoAnEntity: boolean

    doesTrigger_player_spawn: boolean
    doesTrigger_player_damage: boolean
    doesTrigger_player_lostALife: boolean

    //endregion -------------------- Triggers --------------------

    category: NullOr<PossibleSoundEffectCategoryEnglishName>

}

class TemplateCreator
    extends AbstractTemplateCreator<SoundEffectTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): SoundEffectTemplate {
        const content = this._content

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

}
