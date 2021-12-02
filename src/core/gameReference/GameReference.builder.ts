import type {Builder}               from '../../util/Builder';
import type {GameReference}         from './GameReference';
import type {GameReferenceTemplate} from './GameReference.template';
import type {Name}                  from '../../lang/name/Name';

import {TemplateWithNameBuilder} from '../_template/TemplateWithName.builder';
import {GameReferenceContainer}  from './GameReference.container';

export class GameReferenceBuilder
    extends TemplateWithNameBuilder<GameReferenceTemplate, GameReference> {

    public constructor(templateBuilder: Builder<GameReferenceTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_1, false,);
    }

    //region -------------------- Build helper methods --------------------

    protected get _static() {
        return GameReferenceBuilder;
    }

    //endregion -------------------- Build helper methods --------------------

    protected _build(name: Name,): GameReference {
        return new GameReferenceContainer(this.template.acronym, name,);
    }

}
