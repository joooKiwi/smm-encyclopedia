import type {BooleanGameTemplate}      from '../game/Game.template';
import type {SMM2NameTemplate}         from '../lang/SMM2Name.template';
import type {TemplateWithNameTemplate} from '../TemplateWithName.template';

/**
 * @template
 */
export interface ThemeTemplate
    extends TemplateWithNameTemplate<SMM2NameTemplate> {

    isIn: {
        game: BooleanGameTemplate
        theme: {
            course: boolean
            world: boolean
        }
    }

}

export interface BooleanThemeTemplate {

    ground: boolean

    underground: boolean

    underwater: boolean

    desert: | boolean | null

    snow: | boolean | null

    sky: | boolean | null

    forest: | boolean | null

    ghostHouse: boolean

    airship: boolean

    castle: boolean

}