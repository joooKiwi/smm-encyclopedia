import type {Lazy}    from '@joookiwi/lazy'
import {lazy, lazyOf} from '@joookiwi/lazy'

import type {AlternativeEntityLimit, EntityLimit}                                                                                                                                         from 'core/entityLimit/EntityLimit'
import type {PossibleAlternativeEnglishName, PossibleEnglishName}                                                                                                                         from 'core/entityLimit/EntityLimits.types'
import type {AlternativeLimitTemplate, EntityLimitTemplate, LimitAmountTemplate, PossibleLimitAmount_SMM1And3DS, PossibleLimitAmount_SMM2, PossibleLimitAmount_SMM2_UnknownAmount_Amount} from 'core/entityLimit/EntityLimit.template'
import type {PossibleEnglishName as PossibleEnglishName_EntityLimitType}                                                                                                                  from 'core/entityLimit/EntityLimitTypes.types'
import type {EntityLimitAmount}                                                                                                                                                           from 'core/entityLimit/properties/EntityLimitAmount'
import type {Name}                                                                                                                                                                        from 'lang/name/Name'

import {PropertyContainer}                       from 'core/_properties/Property.container'
import {TemplateWithNameCreator}                 from 'core/_template/TemplateWithName.creator'
import {AlternativeEntityLimitContainer}         from 'core/entityLimit/AlternativeEntityLimit.container'
import {EmptyEntityLimit}                        from 'core/entityLimit/EmptyEntityLimit'
import {EntityLimitContainer}                    from 'core/entityLimit/EntityLimit.container'
import {EntityLimitTypes}                        from 'core/entityLimit/EntityLimitTypes'
import {EmptyEntityLimitAmount}                  from 'core/entityLimit/properties/EmptyEntityLimitAmount'
import {EntityLimitAmountContainer}              from 'core/entityLimit/properties/EntityLimitAmount.container'
import {NOT_APPLICABLE, UNKNOWN_CHARACTER}       from 'util/commonVariables'
import {Import}                                  from 'util/DynamicImporter'

export class EntityLimitCreator
    extends TemplateWithNameCreator<| EntityLimitTemplate | AlternativeLimitTemplate, EntityLimit> {

    //region -------------------- External object references --------------------

    public static references: Map<PossibleEnglishName | PossibleAlternativeEnglishName, EntityLimit>

    //endregion -------------------- External object references --------------------
    //region -------------------- Fields --------------------

    static readonly #NOT_APPLICABLE_CONTAINER = lazyOf(PropertyContainer.NOT_APPLICABLE_CONTAINER,)
    static readonly #UNKNOWN_CONTAINER = lazyOf(PropertyContainer.UNKNOWN_CONTAINER,)

    static readonly #EMPTY_ENTITY_LIMIT = lazy(() => EmptyEntityLimit.get,)
    static readonly #EMPTY_ENTITY_LIMIT_AMOUNT = lazy(() => EmptyEntityLimitAmount.get,)

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(template: EntityLimitTemplate | AlternativeLimitTemplate,) {
        super(template, 2, false,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Build helper methods --------------------

    /**
     * Get the {@link EntityLimitTypes} based on the template name using the reference of the {@link EntityLimits}.
     *
     * @param template
     */
    #getEntityLimitTypeBy(template: AlternativeLimitTemplate,): Lazy<EntityLimitTypes> {
        return lazy(() => Import.EntityLimits.getValueByNameOrAcronym(template.name.english.simple).reference.type,)
    }

    #getAlternativeEntityLimitBy(limit: Nullable<PossibleAlternativeEnglishName>,): Lazy<AlternativeEntityLimit> {
        return limit == null
            ? EntityLimitCreator.#EMPTY_ENTITY_LIMIT
            : lazy(() => EntityLimitCreator.references.get(limit) as AlternativeEntityLimit,)
    }

    /**
     * Get a {@link EntityLimitTypes} based on the name received.
     *
     * @param name
     */
    #getTypeBy(name: PossibleEnglishName_EntityLimitType,): Lazy<EntityLimitTypes> {
        return lazy(() => EntityLimitTypes.getValueByName(name,),)
    }

    //region -------------------- Limit amount helper methods --------------------

    #createLimitTemplateInSMM1And3DS(amount: NonNullable<PossibleLimitAmount_SMM1And3DS>,) {
        return amount === NOT_APPLICABLE
            ? EntityLimitCreator.#NOT_APPLICABLE_CONTAINER
            : amount === UNKNOWN_CHARACTER
                ? EntityLimitCreator.#UNKNOWN_CONTAINER
                : lazy(() => new PropertyContainer(amount,),)
    }

    #createLimitTemplateInSMM2(amount: NonNullable<PossibleLimitAmount_SMM2>,) {
        return amount === UNKNOWN_CHARACTER
            ? EntityLimitCreator.#UNKNOWN_CONTAINER
            : lazy(() =>
                typeof amount == 'number'
                    ? new PropertyContainer(amount,)
                    : new PropertyContainer(Number(amount.substring(0, amount.length - 1),) as PossibleLimitAmount_SMM2_UnknownAmount_Amount, true,),)
    }

    /**
     * Create the {@link Lazy} {@link EntityLimitAmount} from the proper amount
     *
     *
     * @param template the limit amount template
     * @canContainDuplicateObjects
     */
    #createLimitAmount({'1And3DS': amountInSMM1And3DS, 2: amountInSMM2, comment,}: LimitAmountTemplate,): Lazy<EntityLimitAmount> {
        return amountInSMM1And3DS == null || amountInSMM2 == null
            ? EntityLimitCreator.#EMPTY_ENTITY_LIMIT_AMOUNT
            : lazy(() => new EntityLimitAmountContainer(
                this.#createLimitTemplateInSMM1And3DS(amountInSMM1And3DS,),
                this.#createLimitTemplateInSMM2(amountInSMM2,),
                comment,
            ),)

    }

    //endregion -------------------- Limit amount helper methods --------------------

    //endregion -------------------- Build helper methods --------------------

    public override _create(name: Name<string>,): EntityLimit {
        const template = this.template

        return template.type == null
            ? new AlternativeEntityLimitContainer(
                name,
                template.acronym,
                this.#getEntityLimitTypeBy(template),
                this.#createLimitAmount(template.limit),
            )
            : new EntityLimitContainer(
                name,
                template.acronym,
                () => this.#getAlternativeEntityLimitBy(template.references.alternative,).value,//FIXME replace with a Lazy instance
                this.#getTypeBy(template.type),
                this.#createLimitAmount(template.limit),
            )
    }

}
