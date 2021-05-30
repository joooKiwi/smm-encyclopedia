import {IsInProperty} from './IsInProperty';

/**
 * @nullObjectPattern
 */
export class EmptyIsInProperty
    implements IsInProperty {

    public static instance = new EmptyIsInProperty();

    private constructor() {
    }

    public readonly isInGameContainer = this;
    public readonly isInSuperMarioMaker1 = false;
    public readonly isInSuperMarioMaker2 = false;

    public readonly isInGameStyleContainer = this;
    public readonly isInSuperMarioBrosStyle = false;
    public readonly isInSuperMarioBros3Style = false;
    public readonly isInSuperMarioWorldStyle = false;
    public readonly isInNewSuperMarioBrosUStyle = false;
    public readonly isInSuperMario3DWorldStyle = null;

    public readonly isInThemeContainer = this;
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

    public readonly isInTimeContainer = this;
    public readonly isInDayTheme = false;
    public readonly isInNightTheme = null;


    public static get get() {
        return this.instance;
    }

    public toGameStyleMap(): never {
        throw new ReferenceError(`An ${this} cannot have a game style map.`);
    }

    public toCourseThemeMap(): never {
        throw new ReferenceError(`An ${this} cannot have a course theme map.`);
    }

    public toTimeMap(): never {
        throw new ReferenceError(`An ${this} cannot have a time map.`);
    }

    public toString(): 'Empty "is in property"' {
        return 'Empty "is in property"';
    }

}
