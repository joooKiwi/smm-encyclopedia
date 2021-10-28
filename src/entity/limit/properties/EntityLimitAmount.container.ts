import type {EntityLimitAmount}                         from './EntityLimitAmount';
import type {NumberPropertyThatCanBeUnknownWithComment} from '../../_properties/PropertyThatCanBeUnknownWithComment';
import type {PossibleAmount}                            from '../../_properties/ClassWithAmount';
import type {PossibleComment}                           from '../../_properties/ClassWithComment';

export class EntityLimitAmountContainer<AMOUNT extends PossibleAmount = PossibleAmount,
    IS_UNKNOWN extends boolean = boolean,
    COMMENT extends PossibleComment = PossibleComment, >
    implements EntityLimitAmount<AMOUNT, IS_UNKNOWN, COMMENT> {

    //region -------------------- Attributes --------------------

    readonly #property;

    //endregion -------------------- Attributes --------------------

    public constructor(property: NumberPropertyThatCanBeUnknownWithComment<AMOUNT, IS_UNKNOWN, COMMENT>,) {
        this.#property = property;
    }

    //region -------------------- Getter methods --------------------

    public get value(): AMOUNT {
        return this.#property.value;
    }

    public get isUnknown(): IS_UNKNOWN {
        return this.#property.isUnknown;
    }

    public get comment(): COMMENT {
        return this.#property.comment;
    }

    //endregion -------------------- Getter methods --------------------

}