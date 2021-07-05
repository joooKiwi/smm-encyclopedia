import {EMPTY_ARRAY}      from '../../util/emptyVariables';
import {EmptyEntity}      from '../simple/EmptyEntity';
import {EntityReferences} from './EntityReferences';

/**
 * @nullObjectPattern
 * @singleton
 */
export class EmptyEntityReference
    implements EntityReferences {

    static readonly #instance = new EmptyEntityReference();

    private constructor() {
    }

    public static get get() {
        return this.#instance;
    }


    //region -------------------- References methods --------------------

    public get referenceInSuperMarioBrosStyle() {
        return EmptyEntity.get;
    }

    public get referenceInSuperMarioBros3Style() {
        return EmptyEntity.get;
    }

    public get referenceInSuperMarioWorldStyle() {
        return EmptyEntity.get;
    }

    public get referenceInNewSuperMarioBrosUStyle() {
        return EmptyEntity.get;
    }

    public get referenceInSuperMario3DWorldStyle() {
        return EmptyEntity.get;
    }


    public get referenceInGroundTheme() {
        return EmptyEntity.get;
    }

    public get referenceInUndergroundTheme() {
        return EmptyEntity.get;
    }

    public get referenceInUnderwaterTheme() {
        return EmptyEntity.get;
    }

    public get referenceInDesertTheme() {
        return EmptyEntity.get;
    }

    public get referenceInSnowTheme() {
        return EmptyEntity.get;
    }

    public get referenceInSkyTheme() {
        return EmptyEntity.get;
    }

    public get referenceInForestTheme() {
        return EmptyEntity.get;
    }

    public get referenceInGhostHouseTheme() {
        return EmptyEntity.get;
    }

    public get referenceInAirshipTheme() {
        return EmptyEntity.get;
    }

    public get referenceInCastleTheme() {
        return EmptyEntity.get;
    }


    public get referenceInDayTheme() {
        return EmptyEntity.get;
    }

    public get referenceInNightTheme() {
        return EmptyEntity.get;
    }


    public readonly everyReferences = EMPTY_ARRAY;

    //endregion -------------------- References methods --------------------

    public toString(): 'Empty entity reference' {
        return 'Empty entity reference';
    }

}
