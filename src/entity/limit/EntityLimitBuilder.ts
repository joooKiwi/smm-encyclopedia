import {Builder}              from '../../util/Builder';
import {EntityLimit}          from './EntityLimit';
import {EntityLimitTemplate}  from './EntityLimitTemplate';
import {EntityLimitContainer} from './EntityLimitContainer';
import {EntityLimitTypes}     from './EntityLimitTypes';

export class EntityLimitBuilder
    implements Builder<EntityLimit> {

    readonly #template;

    public constructor(template: EntityLimitTemplate) {
        this.#template = template;
    }


    public build(): EntityLimit {
        return new EntityLimitContainer(
            this.#template.full,
            this.#template.alternative,
            EntityLimitTypes.getValue(this.#template.type),
            this.#template.limit,
        );
    }

}