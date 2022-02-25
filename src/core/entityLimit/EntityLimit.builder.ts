import type {AlternativeEntityLimit, EntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit';
import type {AlternativeLimitTemplate, EntityLimitTemplate}                                      from './EntityLimit.template';
import type {Builder}                                                                            from '../../util/builder/Builder';
import type {Entity}                                                                             from '../entity/Entity';
import type {EntityLimitAmount}                                                                  from './properties/EntityLimitAmount';
import type {EntityLimitLink}                                                                    from './properties/EntityLimitLink';
import type {PossibleAlternativeEnglishName, PossibleEnglishName}                                from './EntityLimits.types';
import type {PossibleEnglishName as PossibleEnglishName_Entity}                                  from '../entity/Entities.types';
import type {PossibleGroupName}                                                                  from '../entityTypes';

import {AlternativeEntityLimitContainer}                    from './AlternativeEntityLimitContainer';
import {DelayedObjectHolderContainer}                       from '../../util/holder/DelayedObjectHolder.container';
import {EmptyEntityLimit}                                   from './EmptyEntityLimit';
import {EmptyEntityLimitAmount}                             from './properties/EmptyEntityLimitAmount';
import {EmptyEntityLimitLink}                               from './properties/EmptyEntityLimitLink';
import {Entities}                                           from '../entity/Entities';
import {EntityLimitAmountContainer}                         from './properties/EntityLimitAmount.container';
import {EntityLimitContainer}                               from './EntityLimit.container';
import {EntityLimitLinkContainer}                           from './properties/EntityLimitLink.container';
import {EntityLimitTypes}                                   from './EntityLimitTypes';
import {EntityLimits}                                       from './EntityLimits';
import {Games}                                              from '../game/Games';
import {NameBuilder}                                        from '../../lang/name/Name.builder';
import {NumberPropertyThatCanBeUnknownWithCommentContainer} from '../_properties/number/NumberPropertyThatCanBeUnknownWithComment.container';
import {ObjectHolders}                                      from '../../util/holder/objectHolders';
import {TemplateBuilder}                                    from '../_template/Template.builder';

export class EntityLimitBuilder
    extends TemplateBuilder<| EntityLimitTemplate | AlternativeLimitTemplate, EntityLimit>
    implements Builder<EntityLimit> {

    //region -------------------- External object references --------------------

    public static references: Map<PossibleEnglishName | PossibleAlternativeEnglishName, EntityLimit>;

    //endregion -------------------- External object references --------------------

    public constructor(templateBuilder: Builder<| EntityLimitTemplate | AlternativeLimitTemplate>,) {
        super(templateBuilder);
    }

    //region -------------------- Build helper methods --------------------

    //region -------------------- Name methods --------------------

    private __createName() {
        return new NameBuilder(this.template.name, Games.SUPER_MARIO_MAKER_2, false,).build();
    }

    //endregion -------------------- Name methods --------------------

    //region -------------------- Limit amount helper methods --------------------

    private __createLimitAmount(): EntityLimitAmount {
        const limitTemplate = this.template.limit;

        return limitTemplate == null
            ? EmptyEntityLimitAmount.get
            : new EntityLimitAmountContainer(new NumberPropertyThatCanBeUnknownWithCommentContainer(limitTemplate.amount, limitTemplate.isUnknown, limitTemplate.comment,));
    }


    //endregion -------------------- Limit amount helper methods --------------------
    //region -------------------- Link helper methods --------------------

    private static __getGroupEntity(groupLink: PossibleGroupName,): object {
        return {name: groupLink,};
    }

    private static __getEntity(entity: PossibleEnglishName_Entity,): Entity {
        return Entities.getValue(entity).reference;
    }

    private __createLink(): EntityLimitLink {
        const linkTemplate = this.template.link;
        const groupName = linkTemplate.groupName;
        const entityName = linkTemplate.entityName;

        return groupName == null && entityName == null
            ? EmptyEntityLimitLink.get
            : groupName == null
                ? new EntityLimitLinkContainer(ObjectHolders.NULL, new DelayedObjectHolderContainer(() => EntityLimitBuilder.__getEntity(entityName!)),)
                : new EntityLimitLinkContainer(new DelayedObjectHolderContainer(() => EntityLimitBuilder.__getGroupEntity(groupName)), ObjectHolders.NULL,);


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
