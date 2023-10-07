import {lazy} from '@joookiwi/lazy'

import type {AlternativeEntityLimit, EntityLimit}                                                                                                                                         from 'core/entityLimit/EntityLimit'
import type {PossibleAlternativeEnglishName, PossibleEnglishName}                                                                                                                         from 'core/entityLimit/EntityLimits.types'
import type {AlternativeLimitTemplate, EntityLimitTemplate, LimitAmountTemplate, PossibleLimitAmount_SMM1And3DS, PossibleLimitAmount_SMM2, PossibleLimitAmount_SMM2_UnknownAmount_Amount} from 'core/entityLimit/EntityLimit.template'
import type {EntityLimitAmount}                                                                                                                                                           from 'core/entityLimit/properties/EntityLimitAmount'

import {PropertyContainer}                 from 'core/_properties/Property.container'
import {AlternativeEntityLimitContainer}   from 'core/entityLimit/AlternativeEntityLimit.container'
import {EntityLimitContainer}              from 'core/entityLimit/EntityLimit.container'
import {EntityLimitTypes}                  from 'core/entityLimit/EntityLimitTypes'
import {EmptyEntityLimit}                  from 'core/entityLimit/EmptyEntityLimit'
import {EntityLimitAmountContainer}        from 'core/entityLimit/properties/EntityLimitAmount.container'
import {EmptyEntityLimitAmount}            from 'core/entityLimit/properties/EmptyEntityLimitAmount'
import {NameBuilderContainer}              from 'lang/name/Name.builder.container'
import {NOT_APPLICABLE, UNKNOWN_CHARACTER} from 'util/commonVariables'
import {Import}                            from 'util/DynamicImporter'

export function createReference(template: | EntityLimitTemplate | AlternativeLimitTemplate, references: ReadonlyMap<PossibleEnglishName | PossibleAlternativeEnglishName, EntityLimit>,): EntityLimit {
    if (template.type == null)
        return new AlternativeEntityLimitContainer(
            new NameBuilderContainer(template.name, 2, false,).build(),
            template.acronym,
            lazy(() => Import.EntityLimits.CompanionEnum.get.getValueByName(template.name.english.simple,).reference.type,),
            createLimitAmount(template.limit),
        )
    return new EntityLimitContainer(
        new NameBuilderContainer(template.name, 2, false,).build(),
        template.acronym,
        getAlternativeEntityLimitBy(template.references.alternative, references,),
        lazy(() => EntityLimitTypes.CompanionEnum.get.getValueByName(template.type,),),
        createLimitAmount(template.limit),
    )
}


function createLimitTemplateInSMM1And3DS(amount: NonNullable<PossibleLimitAmount_SMM1And3DS>,) {
    if (amount === NOT_APPLICABLE)
        return PropertyContainer.NOT_APPLICABLE_CONTAINER
    if (amount === UNKNOWN_CHARACTER)
        return PropertyContainer.UNKNOWN_CONTAINER
    return new PropertyContainer(amount,)
}

function createLimitTemplateInSMM2(amount: NonNullable<PossibleLimitAmount_SMM2>,) {
    if (amount === UNKNOWN_CHARACTER)
        return PropertyContainer.UNKNOWN_CONTAINER
    if (typeof amount == 'number')
        return new PropertyContainer(amount,)
    return new PropertyContainer(Number(amount.substring(0, amount.length - 1),) as PossibleLimitAmount_SMM2_UnknownAmount_Amount, true,)
}

function getAlternativeEntityLimitBy(value: Nullable<PossibleAlternativeEnglishName>, references: ReadonlyMap<PossibleEnglishName | PossibleAlternativeEnglishName, EntityLimit>): AlternativeEntityLimit {
    if (value == null)
        return EmptyEntityLimit.get
    return references.get(value,) as AlternativeEntityLimit
}


/**
 * Create the {@link EntityLimitAmount} from the proper amount
 *
 *
 * @param template the limit amount template
 * @canContainDuplicateObjects
 */
function createLimitAmount(template: LimitAmountTemplate,): EntityLimitAmount {
    const amountInSMM1And3DS = template['1And3DS']
    const amountInSMM2 = template['2']
    const comment = template.comment

    if (amountInSMM1And3DS == null || amountInSMM2 == null)
        return EmptyEntityLimitAmount.get
    return new EntityLimitAmountContainer(
        createLimitTemplateInSMM1And3DS(amountInSMM1And3DS,),
        createLimitTemplateInSMM2(amountInSMM2,),
        comment,
    )
}