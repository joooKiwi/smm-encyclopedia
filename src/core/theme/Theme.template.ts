import type {TemplateWithNameTemplate}        from 'core/_template/TemplateWithName.template'
import type {PossibleIsAvailableFromTheStart} from 'core/availableFromTheStart/loader.types'
import type {SimpleGameFrom1And2Template}     from 'core/game/SimpleGame.template'
import type {PossibleEnglishName}             from 'core/nightEffect/NightEffects.types'
import type {NameTemplate}                    from 'lang/name/Name.template'
import type {NullOr}                          from 'util/types/nullable'

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

export type PossibleEffectInNightTheme = NullOr<PossibleEnglishName>
