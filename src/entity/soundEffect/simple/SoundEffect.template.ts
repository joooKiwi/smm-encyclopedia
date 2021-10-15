import type {BooleanGameTemplate}                      from '../../game/Game.template';
import type {TemplateWithNameTemplate}                 from '../../TemplateWithName.template';
import type {PossibleSoundEffectCategoriesEnglishName} from '../category/SoundEffectCategories.types';

export interface SoundEffectTemplate
    extends TemplateWithNameTemplate {

    properties: {

        isIn: {
            game: BooleanGameTemplate
        }

        category: | PossibleSoundEffectCategoriesEnglishName | null

    }

}
