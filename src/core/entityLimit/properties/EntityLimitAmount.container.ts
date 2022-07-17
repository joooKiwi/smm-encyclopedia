import type {EntityLimitAmount}                                                                                   from './EntityLimitAmount';
import type {NotApplicableProperty, UnknownProperty}                                                              from '../../_properties/PropertyWithEverything';
import type {NumberPropertyThatCanBeUnknown}                                                                      from '../../_properties/PropertyThatCanBeUnknown';
import type {ObjectHolder}                                                                                        from '../../../util/holder/ObjectHolder';
import type {PossibleLimitAmount_Comment, PossibleLimitAmount_SMM1And3DS_Amount, PossibleLimitAmount_SMM2_Amount} from '../EntityLimit.template';

export class EntityLimitAmountContainer
    implements EntityLimitAmount {

    //region -------------------- Fields --------------------

    readonly #limitInSMM1AndSMM3DS;
    readonly #limitInSMM2;
    readonly #comment;

    //endregion -------------------- Fields --------------------

    public constructor(limitInSMM1AndSMM3DS: ObjectHolder<| NumberPropertyThatCanBeUnknown<PossibleLimitAmount_SMM1And3DS_Amount> | NotApplicableProperty | UnknownProperty>,
                       limitInSMM2: ObjectHolder<| NumberPropertyThatCanBeUnknown<PossibleLimitAmount_SMM2_Amount> | UnknownProperty>,
                       comment: PossibleLimitAmount_Comment,) {
        this.#limitInSMM1AndSMM3DS = limitInSMM1AndSMM3DS;
        this.#limitInSMM2 = limitInSMM2;
        this.#comment = comment;
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get limitContainerInSMM1AndSMM3DS() {
        return this.#limitInSMM1AndSMM3DS.get;
    }

    public get limitAmountInSMM1AndSMM3DS() {
        return this.limitContainerInSMM1AndSMM3DS.value;
    }

    public get isUnknownLimitInSMM1AndSMM3DS() {
        return this.limitContainerInSMM1AndSMM3DS.isUnknown;
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get limitContainerInSMM2() {
        return this.#limitInSMM2.get;
    }

    public get limitAmountInSMM2() {
        return this.limitContainerInSMM2.value;
    }

    public get isUnknownLimitInSMM2() {
        return this.limitContainerInSMM2.isUnknown;
    }

    //endregion -------------------- SMM2 limit --------------------

    public get comment() {
        return this.#comment;
    }

    //endregion -------------------- Getter methods --------------------

}