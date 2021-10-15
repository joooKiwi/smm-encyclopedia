import type {AlternativeEntityLimit, EntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit';
import type {AlternativeLimitTemplate, EntityLimitTemplate}                                      from './EntityLimit.template';
import type {Builder}                                                                            from '../../util/Builder';
import type {DebugEntityReferences}                                                              from '../simple/Entity.loader';
import type {Entity}                                                                             from '../simple/Entity';
import type {EntityLimitAmount}                                                                  from './properties/EntityLimitAmount';
import type {EntityLimitLink}                                                                    from './properties/EntityLimitLink';
import type {PossibleAlternativeEntityLimits, PossibleEntityLimits}                              from './EntityLimits.types';
import type {PossibleGroupName, SingleEntityName}                                                from '../entityTypes';

import {AlternativeEntityLimitContainer} from './AlternativeEntityLimitContainer';
import {EmptyEntityLimit}                from './EmptyEntityLimit';
import {EmptyEntityLimitAmount}          from './properties/EmptyEntityLimitAmount';
import {EmptyEntityLimitLink}            from './properties/EmptyEntityLimitLink';
import {EntityLimitContainer}            from './EntityLimit.container';
import {EntityLimitTypes}                from './EntityLimitTypes';
import {EntityLimits}                    from './EntityLimits';
import {EntityLimitAmountContainer}      from './properties/EntityLimitAmount.container';
import {EntityLimitLinkContainer}        from './properties/EntityLimitLink.container';
import {NameBuilder}                     from '../lang/NameBuilder';

export class EntityLimitBuilder
    implements Builder<EntityLimit> {

    //region ---------- external object references ----------

    public static references: Map<PossibleEntityLimits | PossibleAlternativeEntityLimits, EntityLimit>;

    public static entitiesMap: Map<string, DebugEntityReferences>;

    //endregion ---------- external object references ----------

    readonly #template;

    public constructor(template: | EntityLimitTemplate | AlternativeLimitTemplate,) {
        this.#template = template;
    }

    //region -------------------- Build helper methods --------------------

    public get template() {
        return this.#template;
    }

    //region -------------------- Name methods --------------------

    private __createName() {
        return new NameBuilder(this.template.name, false,).build();
    }

    //region -------------------- Name methods --------------------

    //region -------------------- Limit amount helper methods --------------------

    private __createLimitAmount(): EntityLimitAmount {
        const limit = this.template.limit;

        return limit == null
            ? EmptyEntityLimitAmount.get
            : new EntityLimitAmountContainer(limit.amount, limit.isUnknown, limit.comment,);
    }


    //endregion -------------------- Limit amount helper methods --------------------
    //region -------------------- Link helper methods --------------------

    private static __getGroupEntity(groupLink: PossibleGroupName,): object {
        return {name: groupLink,};
    }

    private static __getEntity(entity: SingleEntityName,): Entity {
        return this.entitiesMap.get(entity)!.entity!;
    }

    private __createLink(): EntityLimitLink {
        const link = this.template.link;
        const groupName = link.groupName;
        const entityName = link.entityName;

        return groupName == null && entityName == null
            ? EmptyEntityLimitLink.get
            : groupName == null
                ? new EntityLimitLinkContainer(null, EntityLimitBuilder.__getEntity(entityName!),)
                : new EntityLimitLinkContainer(EntityLimitBuilder.__getGroupEntity(groupName), null,);


    }

    //endregion -------------------- Link helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    public build(): EntityLimit {
        const type = this.template.type;

        if (type == null)
            return new AlternativeEntityLimitContainer(
                this.__createName(),
                this.template.acronym,
                () => EntityLimits.getValue(this.template.name.english.simple!)!.reference as EntityLimitWithPossibleAlternativeEntityLimit,
                this.__createLimitAmount(),
                this.__createLink(),
            );
        const alternative = this.template.references.alternative;
        return new EntityLimitContainer(
            this.__createName(),
            this.template.acronym,
            () => alternative == null ? EmptyEntityLimit.get : EntityLimitBuilder.references.get(alternative) as AlternativeEntityLimit,
            () => EntityLimitTypes.getValue(type),
            this.__createLimitAmount(),
            this.__createLink(),
        );
    }

}
