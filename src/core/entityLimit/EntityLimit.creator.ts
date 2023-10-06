import type {Lazy}    from '@joookiwi/lazy'
import {lazy, lazyOf} from '@joookiwi/lazy'

import type {AlternativeEntityLimit, EntityLimit}                                                                                                                                         from 'core/entityLimit/EntityLimit'
import type {PossibleAlternativeEnglishName, PossibleEnglishName}                                                                                                                         from 'core/entityLimit/EntityLimits.types'
import type {AlternativeLimitTemplate, EntityLimitTemplate, LimitAmountTemplate, PossibleLimitAmount_SMM1And3DS, PossibleLimitAmount_SMM2, PossibleLimitAmount_SMM2_UnknownAmount_Amount} from 'core/entityLimit/EntityLimit.template'
import type {EntityLimitAmount}                                                                                                                                                           from 'core/entityLimit/properties/EntityLimitAmount'
import type {Name}                                                                                                                                                                        from 'lang/name/Name'

import {PropertyContainer}                 from 'core/_properties/Property.container'
import {TemplateWithNameCreator}           from 'core/_template/TemplateWithName.creator'
import {AlternativeEntityLimitContainer}   from 'core/entityLimit/AlternativeEntityLimit.container'
import {LAZY_EMPTY_ENTITY_LIMIT}           from 'core/entityLimit/EmptyEntityLimit.lazy'
import {EntityLimitContainer}              from 'core/entityLimit/EntityLimit.container'
import {EntityLimitTypes}                  from 'core/entityLimit/EntityLimitTypes'
import {LAZY_EMPTY_ENTITY_LIMIT_AMOUNT}    from 'core/entityLimit/properties/EmptyEntityLimitAmount.lazy'
import {EntityLimitAmountContainer}        from 'core/entityLimit/properties/EntityLimitAmount.container'
import {NOT_APPLICABLE, UNKNOWN_CHARACTER} from 'util/commonVariables'
import {Import}                            from 'util/DynamicImporter'

const NOT_APPLICABLE_CONTAINER = lazyOf(PropertyContainer.NOT_APPLICABLE_CONTAINER,)
const UNKNOWN_CONTAINER = lazyOf(PropertyContainer.UNKNOWN_CONTAINER,)

export class EntityLimitCreator
    extends TemplateWithNameCreator<| EntityLimitTemplate | AlternativeLimitTemplate, EntityLimit> {

    //region -------------------- External object references --------------------

    public static references: Map<PossibleEnglishName | PossibleAlternativeEnglishName, EntityLimit>

    //endregion -------------------- External object references --------------------
    //region -------------------- Constructor --------------------

    public constructor(template: EntityLimitTemplate | AlternativeLimitTemplate,) {
        super(template, 2, false,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Build helper methods --------------------

    #getAlternativeEntityLimitBy(limit: Nullable<PossibleAlternativeEnglishName>,): Lazy<AlternativeEntityLimit> {
        if (limit == null)
            return LAZY_EMPTY_ENTITY_LIMIT
        return lazy(() => EntityLimitCreator.references.get(limit,) as AlternativeEntityLimit,)
    }

    //region -------------------- Limit amount helper methods --------------------

    #createLimitTemplateInSMM1And3DS(amount: NonNullable<PossibleLimitAmount_SMM1And3DS>,) {
        if (amount === NOT_APPLICABLE)
            return NOT_APPLICABLE_CONTAINER
        if (amount === UNKNOWN_CHARACTER)
            return UNKNOWN_CONTAINER
        return lazy(() => new PropertyContainer(amount,),)
    }

    #createLimitTemplateInSMM2(amount: NonNullable<PossibleLimitAmount_SMM2>,) {
        if (amount === UNKNOWN_CHARACTER)
            return UNKNOWN_CONTAINER
        if (typeof amount == 'number')
            return lazy(() => new PropertyContainer(amount,),)
        return lazy(() => new PropertyContainer(Number(amount.substring(0, amount.length - 1),) as PossibleLimitAmount_SMM2_UnknownAmount_Amount, true,),)
    }

    /**
     * Create the {@link Lazy} {@link EntityLimitAmount} from the proper amount
     *
     *
     * @param template the limit amount template
     * @canContainDuplicateObjects
     */
    #createLimitAmount({'1And3DS': amountInSMM1And3DS, 2: amountInSMM2, comment,}: LimitAmountTemplate,): Lazy<EntityLimitAmount> {
        if (amountInSMM1And3DS == null || amountInSMM2 == null)
            return LAZY_EMPTY_ENTITY_LIMIT_AMOUNT
        return lazy(() => new EntityLimitAmountContainer(
            this.#createLimitTemplateInSMM1And3DS(amountInSMM1And3DS,),
            this.#createLimitTemplateInSMM2(amountInSMM2,),
            comment,
        ),)

    }

    //endregion -------------------- Limit amount helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    protected override _create(name: Name<string>,): EntityLimit {
        const template = this.template

        if (template.type == null)
            return new AlternativeEntityLimitContainer(
                name,
                template.acronym,
                lazy(() => Import.EntityLimits.CompanionEnum.get.getValueByName(template.name.english.simple,).reference.type,),
                this.#createLimitAmount(template.limit),
            )
        return new EntityLimitContainer(
            name,
            template.acronym,
            this.#getAlternativeEntityLimitBy(template.references.alternative,),
            lazy(() => EntityLimitTypes.CompanionEnum.get.getValueByName(template.type,),),
            this.#createLimitAmount(template.limit),
        )
    }

}
