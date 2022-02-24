import type {Builder}                from '../../util/builder/Builder';
import type {EntityCategory}         from './EntityCategory';
import type {EntityCategoryTemplate} from './EntityCategory.template';
import type {Name}                   from '../../lang/name/Name';

import {EntityCategoryContainer} from './EntityCategory.container';
import {Games}                   from '../game/Games';
import {TemplateWithNameBuilder} from '../_template/TemplateWithName.builder';

export class EntityCategoryBuilder
    extends TemplateWithNameBuilder<EntityCategoryTemplate, EntityCategory>
    implements Builder<EntityCategory> {

    public constructor(templateBuilder: Builder<EntityCategoryTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, true,);
    }

    protected get _static() {
        return EntityCategoryBuilder;
    }

    protected _build(name: Name<string>,): EntityCategory {
        return new EntityCategoryContainer(
            name,
        );
    }
}