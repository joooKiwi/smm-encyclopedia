import type {NotApplicableProperty, UnknownProperty}                                                                                                                                      from 'core/_properties/PropertyWithEverything'
import type {AlternativeEntityLimit, EntityLimit}                                                                                                                                         from 'core/entityLimit/EntityLimit'
import type {PossibleAlternativeEnglishName, PossibleEnglishName}                                                                                                                         from 'core/entityLimit/EntityLimits.types'
import type {AlternativeLimitTemplate, EntityLimitTemplate, LimitAmountTemplate, PossibleLimitAmount_SMM1And3DS, PossibleLimitAmount_SMM2, PossibleLimitAmount_SMM2_UnknownAmount_Amount} from 'core/entityLimit/EntityLimit.template'
import type {PossibleEnglishName as PossibleEnglishName_EntityLimitType}                                                                                                                  from 'core/entityLimit/EntityLimitTypes.types'
import type {EntityLimitAmount}                                                                                                                                                           from 'core/entityLimit/properties/EntityLimitAmount'
import type {Name}                                                                                                                                                                        from 'lang/name/Name'
import type {ObjectHolder}                                                                                                                                                                from 'util/holder/ObjectHolder'
import type {Nullable}                                                                                                                                                                    from 'util/types/nullable'

import {PropertyProvider}                        from 'core/_properties/Property.provider'
import {PropertyContainer}                       from 'core/_properties/Property.container'
import {NumberPropertyThatCanBeUnknownContainer} from 'core/_properties/number/NumberPropertyThatCanBeUnknown.container'
import {TemplateWithNameCreator}                 from 'core/_template/TemplateWithName.creator'
import {AlternativeEntityLimitContainer}         from 'core/entityLimit/AlternativeEntityLimit.container'
import {EmptyEntityLimit}                        from 'core/entityLimit/EmptyEntityLimit'
import {EntityLimitContainer}                    from 'core/entityLimit/EntityLimit.container'
import {EntityLimitTypes}                        from 'core/entityLimit/EntityLimitTypes'
import {EmptyEntityLimitAmount}                  from 'core/entityLimit/properties/EmptyEntityLimitAmount'
import {EntityLimitAmountContainer}              from 'core/entityLimit/properties/EntityLimitAmount.container'
import {NOT_APPLICABLE, UNKNOWN_CHARACTER}       from 'util/commonVariables'
import {DelayedObjectHolderContainer}            from 'util/holder/DelayedObjectHolder.container'
import {Import}                                  from 'util/DynamicImporter'
import {ObjectHolderContainer}                   from 'util/holder/ObjectHolder.container'

export class EntityLimitCreator
    extends TemplateWithNameCreator<| EntityLimitTemplate | AlternativeLimitTemplate, EntityLimit> {

    //region -------------------- External object references --------------------

    public static references: Map<PossibleEnglishName | PossibleAlternativeEnglishName, EntityLimit>

    //endregion -------------------- External object references --------------------
    //region -------------------- Fields --------------------

    static readonly #NOT_APPLICABLE_CONTAINER: ObjectHolder<NotApplicableProperty> = new ObjectHolderContainer(PropertyContainer.NOT_APPLICABLE_CONTAINER)
    static readonly #UNKNOWN_CONTAINER: ObjectHolder<UnknownProperty> = new ObjectHolderContainer(PropertyContainer.UNKNOWN_CONTAINER)

    static readonly #EMPTY_ENTITY_LIMIT: ObjectHolder<EmptyEntityLimit> = new DelayedObjectHolderContainer(() => EmptyEntityLimit.get)
    static readonly #EMPTY_ENTITY_LIMIT_AMOUNT: ObjectHolder<EmptyEntityLimitAmount> = new DelayedObjectHolderContainer(() => EmptyEntityLimitAmount.get)

    //endregion -------------------- Fields --------------------

    public constructor(template: EntityLimitTemplate | AlternativeLimitTemplate,) {
        super(template, 2, false,)
    }

    //region -------------------- Build helper methods --------------------

    /**
     * Get the {@link EntityLimitTypes} based on the template name using the reference of the {@link EntityLimits}.
     *
     * @param template
     */
    #getEntityLimitTypeBy(template: AlternativeLimitTemplate,): ObjectHolder<EntityLimitTypes> {
        return new DelayedObjectHolderContainer(() => Import.EntityLimits.getValueByNameOrAcronym(template.name.english.simple).reference.type)
    }

    #getAlternativeEntityLimitBy(limit: Nullable<PossibleAlternativeEnglishName>,): ObjectHolder<AlternativeEntityLimit> {
        return limit == null
            ? EntityLimitCreator.#EMPTY_ENTITY_LIMIT
            : new DelayedObjectHolderContainer(() => EntityLimitCreator.references.get(limit) as AlternativeEntityLimit)
    }

    /**
     * Get a {@link EntityLimitTypes} based on the name received.
     *
     * @param name
     */
    #getTypeBy(name: PossibleEnglishName_EntityLimitType,): ObjectHolder<EntityLimitTypes> {
        return new DelayedObjectHolderContainer(() => EntityLimitTypes.getValueByName(name))
    }

    //region -------------------- Limit amount helper methods --------------------

    #createLimitTemplateInSMM1And3DS(amount: NonNullable<PossibleLimitAmount_SMM1And3DS>,) {
        return amount === NOT_APPLICABLE
            ? EntityLimitCreator.#NOT_APPLICABLE_CONTAINER
            : new DelayedObjectHolderContainer(() => PropertyProvider.newNumberContainer(amount, true,))
    }

    #createLimitTemplateInSMM2(amount: NonNullable<PossibleLimitAmount_SMM2>,) {
        return amount === UNKNOWN_CHARACTER
            ? EntityLimitCreator.#UNKNOWN_CONTAINER
            : new DelayedObjectHolderContainer(() =>
                typeof amount == 'number'
                    ? PropertyProvider.newNumberContainer(amount, true,)
                    : new NumberPropertyThatCanBeUnknownContainer(Number(amount.substring(0, amount.length - 1)) as PossibleLimitAmount_SMM2_UnknownAmount_Amount, true,))
    }

    /**
     * Create the {@link EntityLimitAmount} encapsulated in a {@link ObjectHolder} to return the proper amount
     *
     *
     * @param template the limit amount template
     * @canContainDuplicateObjects
     */
    #createLimitAmount({'1And3DS': amountInSMM1And3DS, 2: amountInSMM2, comment,}: LimitAmountTemplate,): ObjectHolder<EntityLimitAmount> {
        return amountInSMM1And3DS == null || amountInSMM2 == null
            ? EntityLimitCreator.#EMPTY_ENTITY_LIMIT_AMOUNT
            : new DelayedObjectHolderContainer(() => new EntityLimitAmountContainer(
                this.#createLimitTemplateInSMM1And3DS(amountInSMM1And3DS),
                this.#createLimitTemplateInSMM2(amountInSMM2),
                comment,
            ))

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
                this.#getAlternativeEntityLimitBy(template.references.alternative),
                this.#getTypeBy(template.type),
                this.#createLimitAmount(template.limit),
            )
    }

}