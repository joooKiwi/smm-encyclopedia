import {lazyOf} from '@joookiwi/lazy'

import type {PropertyThatCanBeUnknown}                                                           from 'core/_properties/PropertyThatCanBeUnknown'
import type {NotApplicableProperty, UnknownProperty}                                             from 'core/_properties/PropertyWithEverything'
import type {AlternativeEntityLimit, EntityLimit, EntityLimitWithPossibleAlternativeEntityLimit} from 'core/entityLimit/EntityLimit'
import type {PossibleAcronym}                                                                    from 'core/entityLimit/EntityLimits.types'
import type {EntityLimitTypes}                                                                   from 'core/entityLimit/EntityLimitTypes'
import type {PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount}             from 'core/entityLimit/loader.types'
import type {EntityLimitAmount}                                                                  from 'core/entityLimit/properties/EntityLimitAmount'
import type {Name}                                                                               from 'lang/name/Name'

import {NOT_APPLICABLE}                       from 'util/commonVariables'
import {GameMap}                              from 'util/collection/GameMap'
import {ClassContainingANameAndAnAlternative} from 'lang/name/ClassContainingANameAndAnAlternative'

export class EntityLimitContainer
    extends ClassContainingANameAndAnAlternative<string, string, AlternativeEntityLimit>
    implements EntityLimitWithPossibleAlternativeEntityLimit {

    //region -------------------- Fields --------------------

    readonly #acronym
    readonly #type
    readonly #limitAmount

    #isInSMM1OrSMM3DS?: boolean
    #gameMap?: GameMap<boolean, EntityLimit>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       acronym: NullOr<PossibleAcronym>,
                       alternative: AlternativeEntityLimit,
                       type: EntityLimitTypes,
                       limitAmount: EntityLimitAmount,) {
        super(name, lazyOf(alternative,),)
        this.#acronym = acronym
        this.#type = type
        this.#limitAmount = limitAmount
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): EntityLimitTypes {
        return this.#type
    }

    public get acronym(): NullOr<PossibleAcronym> {
        return this.#acronym
    }

    public get limitContainer(): EntityLimitAmount {
        return this.#limitAmount
    }

    public get amountComment(): this['limitContainer']['comment'] {
        return this.limitContainer.comment
    }

    //region -------------------- Alternative entity limit --------------------

    public get alternativeAcronym(): this['alternativeContainer']['acronym'] {
        return this.alternativeContainer.acronym
    }

    public get alternativeLimitContainer(): this['alternativeContainer']['limitContainer'] {
        return this.alternativeContainer.limitContainer
    }

    public get alternativeAmountComment(): this['alternativeContainer']['amountComment'] {
        return this.alternativeContainer.amountComment
    }

    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get alternativeLimitContainerInSMM1AndSMM3DS(): this['alternativeContainer']['limitContainerInSMM1AndSMM3DS'] {
        return this.alternativeContainer.limitContainerInSMM1AndSMM3DS
    }

    public get alternativeLimitAmountInSMM1AndSMM3DS(): this['alternativeContainer']['limitAmountInSMM1AndSMM3DS'] {
        return this.alternativeContainer.limitAmountInSMM1AndSMM3DS
    }

    public get isUnknownAlternativeLimitInSMM1AndSMM3DS(): this['alternativeContainer']['isUnknownLimitInSMM1AndSMM3DS'] {
        return this.alternativeContainer.isUnknownLimitInSMM1AndSMM3DS
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get alternativeLimitContainerInSMM2(): this['alternativeContainer']['limitContainerInSMM2'] {
        return this.alternativeContainer.limitContainerInSMM2
    }

    public get alternativeLimitAmountInSMM2(): this['alternativeContainer']['limitAmountInSMM2'] {
        return this.alternativeContainer.limitAmountInSMM2
    }

    public get isUnknownAlternativeLimitInSMM2(): this['alternativeContainer']['isUnknownLimitInSMM2'] {
        return this.alternativeContainer.isUnknownLimitInSMM2
    }

    //endregion -------------------- SMM2 limit --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get limitContainerInSMM1AndSMM3DS(): | PropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM1And3DS_Amount>> | NotApplicableProperty | UnknownProperty {
        return this.limitContainer.limitContainerInSMM1AndSMM3DS
    }

    public get limitAmountInSMM1AndSMM3DS(): | NullOr<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicable {
        return this.limitContainer.limitAmountInSMM1AndSMM3DS
    }

    public get isUnknownLimitInSMM1AndSMM3DS(): boolean {
        return this.limitContainer.isUnknownLimitInSMM1AndSMM3DS
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get limitContainerInSMM2(): | PropertyThatCanBeUnknown<NullOr<PossibleLimitAmount_SMM2_Amount>> | UnknownProperty {
        return this.limitContainer.limitContainerInSMM2
    }

    public get limitAmountInSMM2(): NullOr<PossibleLimitAmount_SMM2_Amount> {
        return this.limitContainer.limitAmountInSMM2
    }

    public get isUnknownLimitInSMM2(): boolean {
        return this.limitContainer.isUnknownLimitInSMM2
    }

    //endregion -------------------- SMM2 limit --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Game properties --------------------

    public get isInSuperMarioMaker1Or3DS() {
        return this.#isInSMM1OrSMM3DS ??= this.limitContainer.limitAmountInSMM1AndSMM3DS !== NOT_APPLICABLE
    }

    public get isInSuperMarioMaker1(): boolean {
        return this.isInSuperMarioMaker1Or3DS
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.isInSuperMarioMaker1Or3DS
    }

    public get isInSuperMarioMaker2(): true {
        return true
    }

    public toGameMap(): GameMap<boolean, EntityLimit> {
        return this.#gameMap ??= new GameMap(this,)
    }

    //endregion -------------------- Game properties --------------------

}
