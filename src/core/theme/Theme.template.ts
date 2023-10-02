import type {TemplateWithNameTemplate}        from 'core/_template/TemplateWithName.template'
import type {PossibleIsAvailableFromTheStart} from 'core/availableFromTheStart/loader.types'
import type {SimpleGameFrom1And2Template}     from 'core/game/SimpleGame.template'
import type {PossibleEnglishName}             from 'core/nightEffect/NightEffects.types'

/** @template */
export interface ThemeTemplate
    extends TemplateWithNameTemplate {

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

export type PossibleEffectInNightTheme = NullOr<PossibleEnglishName>
