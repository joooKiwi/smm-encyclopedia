import type {AlternativeEntityLimit, EntityLimit}         from './EntityLimit';
import type {EntityLimitAmount}                           from './properties/EntityLimitAmount';
import type {EntityLimitTypes}                            from './EntityLimitTypes';
import type {Name}                                        from '../../lang/name/Name';
import type {ObjectHolder, PossibleValueOnObjectHolder}   from '../../util/holder/ObjectHolder';
import type {PossibleAcronym, PossibleAlternativeAcronym} from './EntityLimits.types';

import {ClassContainingANameAndAnAlternative} from '../../lang/name/ClassContainingANameAndAnAlternative';
import {DelayedObjectHolderContainer}         from '../../util/holder/DelayedObjectHolder.container';

export abstract class AbstractEntityLimitContainer<ACRONYM extends PossibleAcronym | PossibleAlternativeAcronym | null = PossibleAcronym | PossibleAlternativeAcronym | null,
    TYPE extends EntityLimitTypes = EntityLimitTypes,
    LIMIT_AMOUNT extends EntityLimitAmount = EntityLimitAmount, >
    extends ClassContainingANameAndAnAlternative<string, string, AlternativeEntityLimit>
    implements EntityLimit<ACRONYM, TYPE, LIMIT_AMOUNT> {

    //region -------------------- Attributes --------------------

    readonly #acronym;
    readonly #typeContainer: ObjectHolder<EntityLimitTypes>;
    readonly #limitContainer;

    //endregion -------------------- Attributes --------------------

    protected constructor(name: Name<string>, acronym: | PossibleAcronym | PossibleAlternativeAcronym | null, alternative: PossibleValueOnObjectHolder<AlternativeEntityLimit>, type: PossibleValueOnObjectHolder<EntityLimitTypes>, limitAmount: EntityLimitAmount,) {
        super(name, alternative,);
        this.#acronym = acronym;
        this.#typeContainer = new DelayedObjectHolderContainer(type);
        this.#limitContainer = limitAmount;
    }

    //region -------------------- Type --------------------

    public get type(): TYPE {
        return this.#typeContainer.get as TYPE;
    }

    //endregion -------------------- Type --------------------
    //region -------------------- Acronym --------------------

    public get acronym(): ACRONYM {
        return this.#acronym as ACRONYM;
    }

    //endregion -------------------- Acronym --------------------
    //region -------------------- Alternative entity limit --------------------

    public get alternativeAcronym(): this['alternativeContainer']['acronym'] {
        return this.alternativeContainer.acronym;
    }

    //region -------------------- Limit amount --------------------

    public get alternativeLimitContainer(): this['alternativeContainer']['limitContainer'] {
        return this.alternativeContainer.limitContainer;
    }

    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get alternativeLimitContainerInSMM1AndSMM3DS(): this['alternativeLimitContainer']['limitContainerInSMM1AndSMM3DS'] {
        return this.alternativeLimitContainer.limitContainerInSMM1AndSMM3DS;
    }

    public get alternativeLimitAmountInSMM1AndSMM3DS(): this['alternativeLimitContainerInSMM1AndSMM3DS']['value'] {
        return this.alternativeLimitContainerInSMM1AndSMM3DS.value;
    }

    public get isUnknownAlternativeLimitInSMM1AndSMM3DS(): this['alternativeLimitContainerInSMM1AndSMM3DS']['isUnknown'] {
        return this.alternativeLimitContainerInSMM1AndSMM3DS.isUnknown;
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get alternativeLimitContainerInSMM2(): this['alternativeLimitContainer']['limitContainerInSMM2'] {
        return this.alternativeLimitContainer.limitContainerInSMM2;
    }

    public get alternativeLimitAmountInSMM2(): this['alternativeLimitContainerInSMM2']['value'] {
        return this.alternativeLimitContainerInSMM2.value;
    }

    public get isUnknownAlternativeLimitInSMM2(): this['alternativeLimitContainerInSMM2']['isUnknown'] {
        return this.alternativeLimitContainerInSMM2.isUnknown;
    }

    //endregion -------------------- SMM2 limit --------------------

    public get alternativeAmountComment(): this['alternativeLimitContainer']['comment'] {
        return this.alternativeLimitContainer.comment;
    }

    //endregion -------------------- Limit amount --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    public get limitContainer(): LIMIT_AMOUNT {
        return this.#limitContainer as LIMIT_AMOUNT;
    }

    //region -------------------- SMM1 & SMM3DS limit --------------------

    public get limitContainerInSMM1AndSMM3DS(): this['limitContainer']['limitContainerInSMM1AndSMM3DS'] {
        return this.limitContainer.limitContainerInSMM1AndSMM3DS;
    }

    public get limitAmountInSMM1AndSMM3DS(): this['limitContainerInSMM1AndSMM3DS']['value'] {
        return this.limitContainerInSMM1AndSMM3DS.value;
    }

    public get isUnknownLimitInSMM1AndSMM3DS(): this['limitContainerInSMM1AndSMM3DS']['isUnknown'] {
        return this.limitContainerInSMM1AndSMM3DS.isUnknown;
    }

    //endregion -------------------- SMM1 & SMM3DS limit --------------------
    //region -------------------- SMM2 limit --------------------

    public get limitContainerInSMM2(): this['limitContainer']['limitContainerInSMM2'] {
        return this.limitContainer.limitContainerInSMM2;
    }

    public get limitAmountInSMM2(): this['limitContainerInSMM2']['value'] {
        return this.limitContainerInSMM2.value;
    }

    public get isUnknownLimitInSMM2(): this['limitContainerInSMM2']['isUnknown'] {
        return this.limitContainerInSMM2.isUnknown;
    }

    //endregion -------------------- SMM2 limit --------------------

    public get amountComment(): this['limitContainer']['comment'] {
        return this.limitContainer.comment;
    }

    //endregion -------------------- Limit amount --------------------

}
