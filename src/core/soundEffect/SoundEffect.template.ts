import type {PlayerSoundEffectTriggerTemplate}                              from './properties/PlayerSoundEffectTrigger.template';
import type {PossibleEnglishName as PossibleSoundEffectCategoryEnglishName} from '../soundEffectCategory/SoundEffectCategories.types';
import type {SimpleGameTemplate}                                            from '../game/SimpleGame.template';
import type {TemplateWithNameTemplate}                                      from '../_template/TemplateWithName.template';

export interface SoundEffectTemplate
    extends TemplateWithNameTemplate {

    properties: {

        isIn: {
            game: SimpleGameTemplate

            trigger: {
                player: PlayerSoundEffectTriggerTemplate
            }
        }

        category: PossibleSoundEffectCategoryType

    }

}

export type PossibleSoundEffectCategoryType = | PossibleSoundEffectCategoryEnglishName | null;