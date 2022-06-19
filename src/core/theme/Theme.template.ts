import type {NameTemplate}                    from '../../lang/name/Name.template';
import type {PossibleEnglishName}             from '../nightEffect/NightEffects.types';
import type {PossibleIsAvailableFromTheStart} from '../availableFromTheStart/loader.types';
import type {SimpleGameFrom1And2Template}     from '../game/SimpleGame.template';
import type {TemplateWithNameTemplate}        from '../_template/TemplateWithName.template';

/**
 * @template
 */
export interface ThemeTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    is: {
        in: {
            game: SimpleGameFrom1And2Template<boolean, boolean>
            theme: {
                course: boolean
                world: boolean
            }
        }
        availableFromTheStart: PossibleIsAvailableFromTheStart
    }
    effect: PossibleEffectInNightTheme

}

export type PossibleEffectInNightTheme = | PossibleEnglishName | null;
