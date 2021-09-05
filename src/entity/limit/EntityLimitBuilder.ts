import type {AlternativeEntityLimit, EntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit';
import type {AlternativeLimitTemplate, EntityLimitTemplate}                                      from './EntityLimit.template';
import type {Builder}                                                                            from '../../util/Builder';
import type {DebugEntityReferences}                                                              from '../simple/EntityLoader';
import type {Entity}                                                                             from '../simple/Entity';
import type {EntityLimitAmount}                                                                  from './properties/EntityLimitAmount';
import type {EntityLimitLink, EntityLimitLinkOfEntities}                                         from './properties/EntityLimitLink';
import type {PossibleAlternativeEntityLimits, PossibleEntityLimits}                              from './EntityLimits.types';
import type {SingleEntityName}                                                                   from '../entityTypes';

import {AlternativeEntityLimitContainer} from './AlternativeEntityLimitContainer';
import {EMPTY_ARRAY, EMPTY_OBJECT}       from '../../util/emptyVariables';
import {EntityLimitContainer}            from './EntityLimitContainer';
import {EntityLimitTypes}                from './EntityLimitTypes';
import {EntityLimits}                    from './EntityLimits';
import {EmptyEntityLimit}                from './EmptyEntityLimit';
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
        return new NameBuilder(this.template.name).build();
    }

    //region -------------------- Name methods --------------------

    //region -------------------- Limit amount helper methods --------------------

    private __createLimitAmount(): EntityLimitAmount {
        const limit = this.template.limit;
        if (limit == null)
            return EmptyEntityLimit.EMPTY_LIMIT_AMOUNT;//TODO change to limit amount object instead
        return {amount: limit.amount, isAmountUnknown: limit.isUnknown, amountComment: limit.comment,};//TODO change to limit amount object instead
    }


    //endregion -------------------- Limit amount helper methods --------------------
    //region -------------------- Link helper methods --------------------

    private static __getEntity(entity: SingleEntityName,): Entity {
        return this.entitiesMap.get(entity)!.entity!;
    }

    private __createLink(): EntityLimitLink {
        const link = this.template.link;
        const groupName = link.groupName;
        const entities = link.entitiesName;

        if (groupName == null && entities.length === 0)
            return EmptyEntityLimit.EMPTY_LINK_CONTAINER;//TODO change to limit link object instead

        if (groupName != null)
            return {
                groupName: {name: groupName},
                entities: EMPTY_ARRAY,
                entity1: undefined,
                entity2: undefined,
            };//TODO change to limit link object instead
        const [entity1, entity2,] = entities;

        const entityArray: EntityLimitLinkOfEntities = entity2 == null
            ? [EntityLimitBuilder.__getEntity(entity1!),]
            : [EntityLimitBuilder.__getEntity(entity1!), EntityLimitBuilder.__getEntity(entity2),];

        return {
            groupName: EMPTY_OBJECT,
            entities: entityArray,
            entity1: entityArray[0],
            entity2: entityArray[1],
        };//TODO change to limit link object instead
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
