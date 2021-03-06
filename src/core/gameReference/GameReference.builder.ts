import type {Builder}               from '../../util/builder/Builder';
import type {GameReference}         from './GameReference';
import type {GameReferenceTemplate} from './GameReference.template';
import type {Name}                  from '../../lang/name/Name';

import {TemplateWithNameBuilder} from '../_template/TemplateWithName.builder';
import {GameReferenceContainer}  from './GameReference.container';

export class GameReferenceBuilder
    extends TemplateWithNameBuilder<GameReferenceTemplate, GameReference> {

    public constructor(templateBuilder: Builder<GameReferenceTemplate>,) {
        super(templateBuilder, 'all', false,);
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
        return GameReferenceBuilder;
    }

    //endregion -------------------- Build helper methods --------------------

    protected override _build(name: Name<string>,): GameReference {
        return new GameReferenceContainer(this.template.acronym, name,);
    }

}
