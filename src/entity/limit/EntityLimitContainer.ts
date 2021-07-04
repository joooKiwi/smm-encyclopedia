import {EntityLimit}                from './EntityLimit';
import {EntityLimitFullName}        from './properties/EntityLimitFullName';
import {EntityLimitAlternativeName} from './properties/EntityLimitAlternativeName';
import {EntityLimitTypes}           from './EntityLimitTypes';
import {EntityLimitAmount}          from './properties/EntityLimitAmount';
import {CallbackCaller}             from '../../util/CallbackCaller';

export class EntityLimitContainer
    implements EntityLimit {

    //region -------------------- Attributes --------------------

    readonly #fullName;

    readonly #alternativeNameContainer;
    readonly #alternativeNameCallback: CallbackCaller<EntityLimitAlternativeName['name']>;
    readonly #alternativeAcronymCallback: CallbackCaller<EntityLimitAlternativeName['acronym']>;

    readonly #type;
    readonly #limit;

    //endregion -------------------- Attributes --------------------

    public constructor(fullName: EntityLimitFullName, alternativeName: EntityLimitAlternativeName | null, type: EntityLimitTypes, limit: EntityLimitAmount,) {
        this.#fullName = fullName;
        this.#alternativeNameContainer = alternativeName;
        if (alternativeName == null) {
            this.#alternativeNameCallback = new CallbackCaller(() => null);
            this.#alternativeAcronymCallback = new CallbackCaller(() => null);
        } else {
            this.#alternativeNameCallback = new CallbackCaller(() => alternativeName.name);
            this.#alternativeAcronymCallback = new CallbackCaller(() => alternativeName.acronym);
        }
        this.#type = type;
        this.#limit = limit;
    }

    //region -------------------- Name --------------------

    public get full() {
        return this.#fullName;
    }

    public get fullName() {
        return this.full.name;
    }

    public get acronym() {
        return this.full.acronym;
    }


    public get alternative() {
        return this.#alternativeNameContainer;
    }

    public get alternativeName() {
        return this.#alternativeNameCallback.get;
    }

    public get alternativeAcronym() {
        return this.#alternativeAcronymCallback.get;
    }

    //endregion -------------------- Name --------------------
    //region -------------------- Type --------------------

    public get type() {
        return this.#type;
    }

    //endregion -------------------- Type --------------------
    //region -------------------- Limit amount --------------------

    public get limit() {
        return this.#limit;
    }

    public get amount() {
        return this.limit.amount;
    }

    public get isAmountUnknown() {
        return this.limit.isUnknown;
    }

    //endregion -------------------- Limit amount --------------------

}