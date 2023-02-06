import type {TemplateWithUniqueNameTemplate} from 'core/_template/TemplateWithUniqueName.template'
import type {SimpleGameFromAllGamesTemplate}      from 'core/game/SimpleGame.template'

export interface CharacterNameTemplate
    extends TemplateWithUniqueNameTemplate {

    readonly properties: {
        readonly isIn: {
            readonly game: SimpleGameFromAllGamesTemplate<boolean, boolean, boolean>
        }
    }

}