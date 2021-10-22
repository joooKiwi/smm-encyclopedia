import type {SimpleGameTemplate}                       from '../../game/SimpleGame.template';
import type {TemplateWithNameTemplate}                 from '../../_template/TemplateWithName.template';
import type {PossibleSoundEffectCategoriesEnglishName} from '../category/SoundEffectCategories.types';

export interface SoundEffectTemplate
    extends TemplateWithNameTemplate {

    properties: {

        isIn: {
            game: SimpleGameTemplate
        }

        category: PossibleSoundEffectCategoryType

    }

}

export type PossibleSoundEffectCategoryType = | PossibleSoundEffectCategoriesEnglishName | null;
