import type {AlternativeEntityLimit, EntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from './EntityLimit';
import type {AlternativeLimitTemplate, EntityLimitTemplate}                                      from './EntityLimit.template';
import type {Builder}                                                                            from '../../util/builder/Builder';
import type {EntityLimitAmount}                                                                  from './properties/EntityLimitAmount';
import type {Name}                                                                               from '../../lang/name/Name';
import type {PossibleAlternativeEnglishName, PossibleEnglishName}                                from './EntityLimits.types';

import {AlternativeEntityLimitContainer}         from './AlternativeEntityLimitContainer';
import {DelayedObjectHolderContainer}            from '../../util/holder/DelayedObjectHolder.container';
import {EmptyEntityLimit}                        from './EmptyEntityLimit';
import {EmptyEntityLimitAmount}                  from './properties/EmptyEntityLimitAmount';
import {EntityLimitAmountContainer}              from './properties/EntityLimitAmount.container';
import {EntityLimitContainer}                    from './EntityLimit.container';
import {EntityLimitTypes}                        from './EntityLimitTypes';
import {EntityLimits}                            from './EntityLimits';
import {Games}                                   from '../game/Games';
import {NumberPropertyThatCanBeUnknownContainer} from '../_properties/number/NumberPropertyThatCanBeUnknown.container';
import {PropertyProvider}                        from '../_properties/PropertyProvider';
import {PropertyContainer}                       from '../_properties/Property.container';
import {TemplateWithNameBuilder}                 from '../_template/TemplateWithName.builder';

export class EntityLimitBuilder
    extends TemplateWithNameBuilder<| EntityLimitTemplate | AlternativeLimitTemplate, EntityLimit>
    implements Builder<EntityLimit> {

    //region -------------------- External object references --------------------

    public static references: Map<PossibleEnglishName | PossibleAlternativeEnglishName, EntityLimit>;

    //endregion -------------------- External object references --------------------

    public constructor(templateBuilder: Builder<| EntityLimitTemplate | AlternativeLimitTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, false,);
    }

    //region -------------------- Build helper methods --------------------

    protected get _static() {
        return EntityLimitBuilder;
    }

    //region -------------------- Limit amount helper methods --------------------

    private __createLimitAmount(): EntityLimitAmount {
        const {1: limitTemplate1, 2: limitTemplate2, comment,} = this.template.limit;

        if (limitTemplate1 == null || limitTemplate2 == null)
            return EmptyEntityLimitAmount.get;
        return new EntityLimitAmountContainer(
            new DelayedObjectHolderContainer(() => {
                return limitTemplate1 === 'N/A'
                    ? PropertyContainer.NOT_APPLICABLE_CONTAINER
                    : PropertyProvider.newNumberContainer(limitTemplate1, true,);
            }),
            new DelayedObjectHolderContainer(() => limitTemplate2 === '10?'
                ? new NumberPropertyThatCanBeUnknownContainer(10, true,)
                : PropertyProvider.newNumberContainer(limitTemplate2, true,)),
            comment,);

    }

    //endregion -------------------- Limit amount helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    public _build(name: Name<string>,): EntityLimit {
        const template = this.template;
        const typeTemplate = template.type;

        if (typeTemplate == null)
            return new AlternativeEntityLimitContainer(
                name,
                template.acronym,
                () => EntityLimits.getValue(template.name.english.simple!)!.reference as EntityLimitWithPossibleAlternativeEntityLimit,
                this.__createLimitAmount(),
            );
        const alternative = template.references.alternative;
        return new EntityLimitContainer(
            name,
            template.acronym,
            new DelayedObjectHolderContainer(() => alternative == null ? EmptyEntityLimit.get : EntityLimitBuilder.references.get(alternative) as AlternativeEntityLimit),
            new DelayedObjectHolderContainer(() => EntityLimitTypes.getValue(typeTemplate)),
            this.__createLimitAmount(),
        );
    }

}
