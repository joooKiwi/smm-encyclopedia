import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {PropertyThatCanBeUnknown}                                                                            from 'core/_properties/PropertyThatCanBeUnknown'
import type {NotApplicableProperty, UnknownProperty}                                                              from 'core/_properties/PropertyWithEverything'
import type {AlternativeLimit, Limit}                                                                             from 'core/limit/Limit'
import type {PossibleAlternativeAcronym}                                                                          from 'core/limit/Limits.types'
import type {LimitTypes}                                                                                          from 'core/limit/LimitTypes'
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from 'core/limit/loader.types'
import type {LimitAmount}                                                                                         from 'core/limit/properties/LimitAmount'
import type {Name}                                                                                                from 'lang/name/Name'

import {ClassContainingANameAndAnAlternative} from 'lang/name/ClassContainingANameAndAnAlternative'
import {NOT_APPLICABLE}                       from 'util/commonVariables'
import {GameMap}                              from 'util/collection/GameMap'

export class AlternativeLimitContainer
    extends ClassContainingANameAndAnAlternative<string, string, AlternativeLimit>
    implements AlternativeLimit {

    //region -------------------- Fields --------------------

    readonly #acronym
    readonly #type
    readonly #limitAmount

    #isInSMM1OrSMM3DS?: boolean
    #gameMap?: GameMap<boolean, Limit>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       acronym: NullOr<PossibleAlternativeAcronym>,
                       regularLimit: Lazy<LimitTypes>,
                       limitAmount: LimitAmount,) {
        super(name, lazy(() => this,),)
        this.#acronym = acronym
        this.#type = regularLimit
        this.#limitAmount = limitAmount
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): LimitTypes {
        return this.#type.value
    }

    public get acronym(): NullOr<PossibleAlternativeAcronym> {
        return this.#acronym
    }

    //region -------------------- Alternative entity limit --------------------

    public override get alternativeContainer(): this {
        return this
    }


    public get alternativeAcronym(): this['acronym'] {
        return this.acronym
    }

    public get alternativeLimitContainer(): this['limitContainer'] {
        return this.limitContainer
    }

    public get alternativeAmountComment(): this['amountComment'] {
        return this.amountComment
    }

    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get alternativeLimitContainerInSMM1AndSMM3DS(): this['limitContainerInSMM1AndSMM3DS'] {
        return this.limitContainerInSMM1AndSMM3DS
    }

    public get alternativeLimitAmountInSMM1AndSMM3DS(): this['limitAmountInSMM1AndSMM3DS'] {
        return this.limitAmountInSMM1AndSMM3DS
    }

    public get isUnknownAlternativeLimitInSMM1AndSMM3DS(): this['isUnknownLimitInSMM1AndSMM3DS'] {
        return this.isUnknownLimitInSMM1AndSMM3DS
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get alternativeLimitContainerInSMM2(): this['limitContainerInSMM2'] {
        return this.limitContainerInSMM2
    }

    public get alternativeLimitAmountInSMM2(): this['limitAmountInSMM2'] {
        return this.limitAmountInSMM2
    }

    public get isUnknownAlternativeLimitInSMM2(): this['isUnknownLimitInSMM2'] {
        return this.isUnknownLimitInSMM2
    }

    //endregion -------------------- SMM2 limit --------------------

    //endregion -------------------- Alternative entity limit --------------------

    public get limitContainer(): LimitAmount {
        return this.#limitAmount
    }

    public get amountComment(): PossibleLimitAmount_Comment {
        return this.limitContainer.comment
    }

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

    public toGameMap(): GameMap<boolean, Limit> {
        return this.#gameMap ??= new GameMap(this,)
    }

    //endregion -------------------- Game properties --------------------

}
