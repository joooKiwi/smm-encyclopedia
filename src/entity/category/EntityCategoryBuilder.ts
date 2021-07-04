import {Builder}                from '../../util/Builder';
import {EntityCategory}         from './EntityCategory';
import {GenericEntityCategory}  from './GenericEntityCategory';
import {EntityCategoryTemplate} from './EntityCategoryTemplate';
import {TemplateBuilder}        from '../TemplateBuilder';
import {Name}                   from '../../lang/name/Name';

export class EntityCategoryBuilder
    extends TemplateBuilder<EntityCategoryTemplate, EntityCategory>
    implements Builder<EntityCategory> {

    static readonly #templateMap: Map<string, EntityCategoryTemplate> = new Map();

    public constructor(template: EntityCategoryTemplate,) {
        super(template);
    }

    protected /*static*/ get _templateMap() {
        return EntityCategoryBuilder.#templateMap;
    }

    protected _build(name: Name,): EntityCategory {
        return new GenericEntityCategory(
            name,
        );
    }
}