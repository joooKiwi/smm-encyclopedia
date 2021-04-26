import {EntityReferences} from "./EntityReferences";
import {EmptyEntity} from "../simple/EmptyEntity";

/**
 * @singleton
 */
export class EmptyEntityReference
    implements EntityReferences {

    private static readonly instance = new EmptyEntityReference();
    public static readonly EMPTY_ARRAY = [];

    private constructor() {
    }


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


    public get everyReferences() {
        return EmptyEntityReference.EMPTY_ARRAY;
    }


    public static get get() {
        return this.instance;
    }

    public toString() {
        return 'Empty entity reference';
    }
}