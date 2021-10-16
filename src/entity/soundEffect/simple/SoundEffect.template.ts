import type {SimpleGameTemplate}                       from '../../game/SimpleGame.template';
import type {TemplateWithNameTemplate}                 from '../../TemplateWithName.template';
import type {PossibleSoundEffectCategoriesEnglishName} from '../category/SoundEffectCategories.types';

export interface SoundEffectTemplate
    extends TemplateWithNameTemplate {

    properties: {

        isIn: {
            game: SimpleGameTemplate
        }

        category: | PossibleSoundEffectCategoriesEnglishName | null

    }

}
