import type {NameTemplate}             from '../../lang/name/Name.template';
import type {SimpleGameTemplate}       from '../game/SimpleGame.template';
import type {TemplateWithNameTemplate} from '../_template/TemplateWithName.template';

/**
 * @template
 */
export interface ThemeTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

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
