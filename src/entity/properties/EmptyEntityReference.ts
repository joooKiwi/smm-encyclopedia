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

    public readonly referenceInSuperMarioBrosStyle = EmptyEntity.get;
    public readonly referenceInSuperMarioBros3Style = EmptyEntity.get;
    public readonly referenceInSuperMarioWorldStyle = EmptyEntity.get;
    public readonly referenceInNewSuperMarioBrosUStyle = EmptyEntity.get;
    public readonly referenceInSuperMario3DWorldStyle = EmptyEntity.get;

    public readonly referenceInGroundTheme = EmptyEntity.get;
    public readonly referenceInUndergroundTheme = EmptyEntity.get;
    public readonly referenceInUnderwaterTheme = EmptyEntity.get;
    public readonly referenceInDesertTheme = EmptyEntity.get;
    public readonly referenceInSnowTheme = EmptyEntity.get;
    public readonly referenceInSkyTheme = EmptyEntity.get;
    public readonly referenceInForestTheme = EmptyEntity.get;
    public readonly referenceInGhostHouseTheme = EmptyEntity.get;
    public readonly referenceInAirshipTheme = EmptyEntity.get;
    public readonly referenceInCastleTheme = EmptyEntity.get;

    public readonly referenceInDayTheme = EmptyEntity.get;
    public readonly referenceInNightTheme = EmptyEntity.get;

    public readonly everyReferences = EMPTY_ARRAY;

    //endregion -------------------- References methods --------------------

    public toString(): 'Empty entity reference' {
        return 'Empty entity reference';
    }

}
