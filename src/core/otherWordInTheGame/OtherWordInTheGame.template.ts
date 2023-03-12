import type {TemplateWithNameTemplate}       from 'core/_template/TemplateWithName.template'
import type {SimpleGameFromAllGamesTemplate} from 'core/game/SimpleGame.template'
import type {NullOr}                         from 'util/types/nullable'

/**
 * @template
 */
export interface OtherWordInTheGameTemplate
    extends TemplateWithNameTemplate {

    readonly properties: {
        readonly isIn: {
            readonly game: SimpleGameFromAllGamesTemplate<boolean, boolean, boolean>
        }
        pluralForm: NullOr<OtherWordInTheGameTemplate>
    }

}
