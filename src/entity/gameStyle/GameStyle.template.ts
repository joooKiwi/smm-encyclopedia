import type {BooleanGameTemplate}               from '../game/Game.template';
import type {SMM2NameWithoutPortugueseTemplate} from '../lang/SMM2Name.template';

/**
 * @template
 */
export interface GameStyleTemplate {

    isIn: {
        game: BooleanGameTemplate
    }
    name: SMM2NameWithoutPortugueseTemplate

}

export interface BooleanGameStyleTemplate {

    superMarioBros: boolean

    superMarioBros3: boolean

    superMarioWorld: boolean

    newSuperMarioBrosU: boolean

    superMario3DWorld: | boolean | null

}