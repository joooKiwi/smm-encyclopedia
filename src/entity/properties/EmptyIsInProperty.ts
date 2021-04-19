import {IsInProperty} from "./IsInProperty";

export class EmptyIsInProperty
    implements IsInProperty {

    public static instance = new EmptyIsInProperty();

    private constructor() {
    }

    public readonly isInSuperMarioMaker1 = false;
    public readonly isInSuperMarioMaker2 = false;

    public readonly isInSuperMarioBrosStyle = false;
    public readonly isInSuperMarioBros3Style = false;
    public readonly isInSuperMarioWorldStyle = false;
    public readonly isInNewSuperMarioBrosUStyle = false;
    public readonly isInSuperMario3DWorldStyle = null;


    public readonly isInGroundTheme = false;
    public readonly isInUndergroundTheme = false;
    public readonly isInUnderwaterTheme = false;
    public readonly isInDesertTheme = null;
    public readonly isInSnowTheme = null;
    public readonly isInSkyTheme = null;
    public readonly isInForestTheme = null;
    public readonly isInGhostHouseTheme = false;
    public readonly isInAirshipTheme = false;
    public readonly isInCastleTheme = false;

    public readonly isInDayTheme = false;
    public readonly isInNightTheme = null;


    public static get get() {
        return this.instance;
    }

    public toString() {
        return 'Empty is in property';
    }

}
