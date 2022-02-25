import type {AlternativeEntityLimit, EntityLimit}         from './EntityLimit';
import type {EntityLimitAmount}                           from './properties/EntityLimitAmount';
import type {EntityLimitLink}                             from './properties/EntityLimitLink';
import type {EntityLimitTypes}                            from './EntityLimitTypes';
import type {Name}                                        from '../../lang/name/Name';
import type {ObjectHolder}                                from '../../util/holder/ObjectHolder';
import type {PossibleAcronym, PossibleAlternativeAcronym} from './EntityLimits.types';

import {ClassContainingANameAndAnAlternative} from '../../lang/name/ClassContainingANameAndAnAlternative';
import {DelayedObjectHolderContainer}         from '../../util/holder/DelayedObjectHolder.container';

export abstract class AbstractEntityLimitContainer<ACRONYM extends PossibleAcronym | PossibleAlternativeAcronym | null = PossibleAcronym | PossibleAlternativeAcronym | null,
    TYPE extends EntityLimitTypes = EntityLimitTypes,
    LIMIT_AMOUNT extends EntityLimitAmount = EntityLimitAmount,
    LINK extends EntityLimitLink = EntityLimitLink, >
    extends ClassContainingANameAndAnAlternative<string, string, AlternativeEntityLimit>
    implements EntityLimit<ACRONYM, TYPE, LIMIT_AMOUNT, LINK> {

    //region -------------------- Attributes --------------------

    readonly #acronym;
    readonly #typeCaller: ObjectHolder<EntityLimitTypes>;
    readonly #limitContainer;
    readonly #linkContainer;

    //endregion -------------------- Attributes --------------------

    //TODO change to object holder directly instead of creating the object holder instance here.
    protected constructor(name: Name<string>, acronym: | PossibleAcronym | PossibleAlternativeAcronym | null, alternative: () => AlternativeEntityLimit, type: () => EntityLimitTypes, limitAmount: EntityLimitAmount, link: EntityLimitLink,) {
        super(name, alternative,);
        this.#acronym = acronym;
        this.#typeCaller = new DelayedObjectHolderContainer(type);
        this.#limitContainer = limitAmount;
        this.#linkContainer = link;
    }

    //region -------------------- Type --------------------

    public get type(): TYPE {
        return this.#typeCaller.get as TYPE;
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


    public get alternativeAmount(): this['alternativeLimitContainer']['value'] {
        return this.alternativeLimitContainer.value;
    }

    public get alternativeIsAmountUnknown(): this['alternativeLimitContainer']['isUnknown'] {
        return this.alternativeLimitContainer.isUnknown;
    }

    public get alternativeAmountComment(): this['alternativeLimitContainer']['comment'] {
        return this.alternativeLimitContainer.comment;
    }

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    public get alternativeLinkContainer(): this['alternativeContainer']['linkContainer'] {
        return this.alternativeContainer.linkContainer;
    }


    public get alternativeGroupLink(): this['alternativeLinkContainer']['group'] {
        return this.alternativeLinkContainer.group;
    }


    public get alternativeEntityLink(): this['alternativeLinkContainer']['entity'] {
        return this.alternativeLinkContainer.entity;
    }

    //endregion -------------------- Link --------------------

    //endregion -------------------- Alternative entity limit --------------------
    //region -------------------- Limit amount --------------------

    public get limitContainer(): LIMIT_AMOUNT {
        return this.#limitContainer as LIMIT_AMOUNT;
    }


    public get amount(): this['limitContainer']['value'] {
        return this.limitContainer.value;
    }

    public get isAmountUnknown(): this['limitContainer']['isUnknown'] {
        return this.limitContainer.isUnknown;
    }

    public get amountComment(): this['limitContainer']['comment'] {
        return this.limitContainer.comment;
    }

    //endregion -------------------- Limit amount --------------------
    //region -------------------- Link --------------------

    public get linkContainer(): LINK {
        return this.#linkContainer as LINK;
    }


    public get groupLink(): this['linkContainer']['group'] {
        return this.linkContainer.group;
    }


    public get entityLink(): this['linkContainer']['entity'] {
        return this.linkContainer.entity;
    }

    //endregion -------------------- Link --------------------

}
