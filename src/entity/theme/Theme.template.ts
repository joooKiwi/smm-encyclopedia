import type {SimpleGameTemplate}       from '../game/SimpleGame.template';
import type {SMM2NameTemplate}         from '../lang/SMM2Name.template';
import type {TemplateWithNameTemplate} from '../_template/TemplateWithName.template';

/**
 * @template
 */
export interface ThemeTemplate
    extends TemplateWithNameTemplate<SMM2NameTemplate> {

    isIn: {
        game: SimpleGameTemplate
        theme: {
            course: boolean
            world: boolean
        }
    }
    effect: PossibleEffectInNightTheme

}

export type PossibleEffectInNightTheme = | 'Special effect on entities' | 'Screen upside down' | 'Dark' | 'Wind' | 'Slippery'
                                         | 'Low gravity' | 'Poison liquid' | `${| 'Entities' | 'Characters'} in water`
                                         | null;
