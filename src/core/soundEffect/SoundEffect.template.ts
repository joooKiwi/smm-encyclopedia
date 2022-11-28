import type {NullOr}                                                        from '../../util/types'
import type {PlayerSoundEffectTriggerTemplate}                              from './property/PlayerSoundEffectTrigger.template'
import type {PossibleEnglishName as PossibleSoundEffectCategoryEnglishName} from '../soundEffectCategory/SoundEffectCategories.types'
import type {SimpleGameFrom1And2Template}                                   from '../game/SimpleGame.template'
import type {TemplateWithNameTemplate}                                      from '../_template/TemplateWithName.template'

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
