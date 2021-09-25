import type {BooleanGameTemplate}               from '../game/Game.template';
import type {SMM2NameWithoutPortugueseTemplate} from '../lang/SMM2Name.template';

/**
 * @template
 */
export interface ThemeTemplate {

    isIn: {
        game: BooleanGameTemplate
        theme: {
            course: boolean
            world: boolean
        }
    }

    name: SMM2NameWithoutPortugueseTemplate

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