import type {TemplateWithNameTemplate}                                      from 'core/_template/TemplateWithName.template'
import type {SimpleGameFrom1And2Template}                                   from 'core/game/SimpleGame.template'
import type {PlayerSoundEffectTriggerTemplate}                              from 'core/soundEffect/property/PlayerSoundEffectTrigger.template'
import type {PossibleEnglishName as PossibleSoundEffectCategoryEnglishName} from 'core/soundEffectCategory/SoundEffectCategories.types'
import type {NullOr}                                                        from 'util/types/nullable'

export interface SoundEffectTemplate
    extends TemplateWithNameTemplate {

    properties: {

        isIn: {
            game: SimpleGameFrom1And2Template<boolean, boolean>

            trigger: {
                player: PlayerSoundEffectTriggerTemplate
            }
        }

        category: NullOr<PossibleSoundEffectCategoryEnglishName>

    }

}
