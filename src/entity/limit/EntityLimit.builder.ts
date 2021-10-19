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
import {TemplateBuilder}                 from '../TemplateBuilder';

export class EntityLimitBuilder
    extends TemplateBuilder<| EntityLimitTemplate | AlternativeLimitTemplate,EntityLimit>
    implements Builder<EntityLimit> {

    //region -------------------- external object references --------------------

    public static references: Map<PossibleEntityLimits | PossibleAlternativeEntityLimits, EntityLimit>;

    public static entitiesMap: ReadonlyMap<string, DebugEntityReferences>;

    //endregion -------------------- external object references --------------------

    public constructor(templateBuilder: Builder<| EntityLimitTemplate | AlternativeLimitTemplate>,) {
        super(templateBuilder);
    }

    //region -------------------- Build helper methods --------------------

    //region -------------------- Name methods --------------------

    private __createName() {
        return new NameBuilder(this.template.name, false,).build();
    }

    //endregion -------------------- Name methods --------------------

    //region -------------------- Limit amount helper methods --------------------

    private __createLimitAmount(): EntityLimitAmount {
        const limitTemplate = this.template.limit;

        return limitTemplate == null
            ? EmptyEntityLimitAmount.get
            : new EntityLimitAmountContainer(limitTemplate.amount, limitTemplate.isUnknown, limitTemplate.comment,);
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
        const linkTemplate = this.template.link;
        const groupName = linkTemplate.groupName;
        const entityName = linkTemplate.entityName;

        return groupName == null && entityName == null
            ? EmptyEntityLimitLink.get
            : groupName == null
                ? new EntityLimitLinkContainer(null, EntityLimitBuilder.__getEntity(entityName!),)
                : new EntityLimitLinkContainer(EntityLimitBuilder.__getGroupEntity(groupName), null,);


    }

    //endregion -------------------- Link helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    public build(): EntityLimit {
        const template = this.template;
        const typeTemplate = template.type;

        if (typeTemplate == null)
            return new AlternativeEntityLimitContainer(
                this.__createName(),
                template.acronym,
                () => EntityLimits.getValue(template.name.english.simple!)!.reference as EntityLimitWithPossibleAlternativeEntityLimit,
                this.__createLimitAmount(),
                this.__createLink(),
            );
        const alternative = template.references.alternative;
        return new EntityLimitContainer(
            this.__createName(),
            template.acronym,
            () => alternative == null ? EmptyEntityLimit.get : EntityLimitBuilder.references.get(alternative) as AlternativeEntityLimit,
            () => EntityLimitTypes.getValue(typeTemplate),
            this.__createLimitAmount(),
            this.__createLink(),
        );
    }

}
