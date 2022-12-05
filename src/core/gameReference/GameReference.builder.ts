import type {GameReference}         from 'core/gameReference/GameReference'
import type {GameReferenceTemplate} from 'core/gameReference/GameReference.template'
import type {Name}                  from 'lang/name/Name'
import type {Builder}               from 'util/builder/Builder'

import {TemplateWithNameBuilder} from 'core/_template/TemplateWithName.builder'
import {GameReferenceContainer}  from 'core/gameReference/GameReference.container'

export class GameReferenceBuilder
    extends TemplateWithNameBuilder<GameReferenceTemplate, GameReference> {

    public constructor(templateBuilder: Builder<GameReferenceTemplate>,) {
        super(templateBuilder, 'all', false,)
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
        return GameReferenceBuilder
    }

    //endregion -------------------- Build helper methods --------------------

    protected override _build(name: Name<string>,): GameReference {
        return new GameReferenceContainer(this.template.acronym, name,)
    }

}
