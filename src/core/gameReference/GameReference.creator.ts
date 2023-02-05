import type {GameReference}         from 'core/gameReference/GameReference'
import type {GameReferenceTemplate} from 'core/gameReference/GameReference.template'
import type {Name}                  from 'lang/name/Name'

import {TemplateWithNameCreator} from 'core/_template/TemplateWithName.creator'
import {GameReferenceContainer}  from 'core/gameReference/GameReference.container'

export class GameReferenceCreator
    extends TemplateWithNameCreator<GameReferenceTemplate, GameReference> {

    public constructor(template: GameReferenceTemplate,) {
        super(template, 'all', false,)
    }

    //region -------------------- Build helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    protected override _create(name: Name<string>,): GameReference {
        return new GameReferenceContainer(this.template.acronym, name,)
    }

}
