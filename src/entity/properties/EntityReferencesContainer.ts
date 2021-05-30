import {EntityReferences} from './EntityReferences';
import {Entity}           from '../simple/Entity';
import {CallbackCaller}   from '../../util/CallbackCaller';

export class EntityReferencesContainer
    implements EntityReferences {

    //region -------------------- Attributes --------------------

    readonly #referenceInSuperMarioBrosStyle: CallbackCaller<Entity>;
    readonly #referenceInSuperMarioBros3Style: CallbackCaller<Entity>;
    readonly #referenceInSuperMarioWorldStyle: CallbackCaller<Entity>;
    readonly #referenceInNewSuperMarioBrosUStyle: CallbackCaller<Entity>;
    readonly #referenceInSuperMario3DWorldStyle: CallbackCaller<Entity>;

    readonly #referenceInGroundTheme: CallbackCaller<Entity>;
    readonly #referenceInUndergroundTheme: CallbackCaller<Entity>;
    readonly #referenceInUnderwaterTheme: CallbackCaller<Entity>;
    readonly #referenceInDesertTheme: CallbackCaller<Entity>;
    readonly #referenceInSnowTheme: CallbackCaller<Entity>;
    readonly #referenceInSkyTheme: CallbackCaller<Entity>;
    readonly #referenceInForestTheme: CallbackCaller<Entity>;
    readonly #referenceInGhostHouseTheme: CallbackCaller<Entity>;
    readonly #referenceInAirshipTheme: CallbackCaller<Entity>;
    readonly #referenceInCastleTheme: CallbackCaller<Entity>;

    readonly #referenceInDayTheme: CallbackCaller<Entity>;
    readonly #referenceInNightTheme: CallbackCaller<Entity>;

    readonly #everyReferences: CallbackCaller<readonly Entity[]>;

    //endregion -------------------- Attributes --------------------

    public constructor(referenceInSuperMarioBrosStyle: () => Entity, referenceInSuperMarioBros3Style: () => Entity, referenceInSuperMarioWorldStyle: () => Entity, referenceInNewSuperMarioBrosUStyle: () => Entity, referenceInSuperMario3DWorldStyle: () => Entity,
                       referenceInGroundTheme: () => Entity, referenceInUndergroundTheme: () => Entity, referenceInUnderwaterTheme: () => Entity, referenceInDesertTheme: () => Entity, referenceInSnowTheme: () => Entity, referenceInSkyTheme: () => Entity, referenceInForestTheme: () => Entity, referenceInGhostHouseTheme: () => Entity, referenceInAirshipTheme: () => Entity, referenceInCastleTheme: () => Entity,
                       referenceInDayTheme: () => Entity, referenceInNightTheme: () => Entity,
                       referenceAll: () => Entity[],) {
        this.#referenceInSuperMarioBrosStyle = new CallbackCaller(referenceInSuperMarioBrosStyle);
        this.#referenceInSuperMarioBros3Style = new CallbackCaller(referenceInSuperMarioBros3Style);
        this.#referenceInSuperMarioWorldStyle = new CallbackCaller(referenceInSuperMarioWorldStyle);
        this.#referenceInNewSuperMarioBrosUStyle = new CallbackCaller(referenceInNewSuperMarioBrosUStyle);
        this.#referenceInSuperMario3DWorldStyle = new CallbackCaller(referenceInSuperMario3DWorldStyle);

        this.#referenceInGroundTheme = new CallbackCaller(referenceInGroundTheme);
        this.#referenceInUndergroundTheme = new CallbackCaller(referenceInUndergroundTheme);
        this.#referenceInUnderwaterTheme = new CallbackCaller(referenceInUnderwaterTheme);
        this.#referenceInDesertTheme = new CallbackCaller(referenceInDesertTheme);
        this.#referenceInSnowTheme = new CallbackCaller(referenceInSnowTheme);
        this.#referenceInSkyTheme = new CallbackCaller(referenceInSkyTheme);
        this.#referenceInForestTheme = new CallbackCaller(referenceInForestTheme);
        this.#referenceInGhostHouseTheme = new CallbackCaller(referenceInGhostHouseTheme);
        this.#referenceInAirshipTheme = new CallbackCaller(referenceInAirshipTheme);
        this.#referenceInCastleTheme = new CallbackCaller(referenceInCastleTheme);

        this.#referenceInDayTheme = new CallbackCaller(referenceInDayTheme);
        this.#referenceInNightTheme = new CallbackCaller(referenceInNightTheme);

        this.#everyReferences = new CallbackCaller(referenceAll);
    }


    //region -------------------- References methods --------------------

    public get referenceInSuperMarioBrosStyle() {
        return this.#referenceInSuperMarioBrosStyle.get;
    }

    public get referenceInSuperMarioBros3Style() {
        return this.#referenceInSuperMarioBros3Style.get;
    }

    public get referenceInSuperMarioWorldStyle() {
        return this.#referenceInSuperMarioWorldStyle.get;
    }

    public get referenceInNewSuperMarioBrosUStyle() {
        return this.#referenceInNewSuperMarioBrosUStyle.get;
    }

    public get referenceInSuperMario3DWorldStyle() {
        return this.#referenceInSuperMario3DWorldStyle.get;
    }


    public get referenceInGroundTheme() {
        return this.#referenceInGroundTheme.get;
    }

    public get referenceInUndergroundTheme() {
        return this.#referenceInUndergroundTheme.get;
    }

    public get referenceInUnderwaterTheme() {
        return this.#referenceInUnderwaterTheme.get;
    }

    public get referenceInDesertTheme() {
        return this.#referenceInDesertTheme.get;
    }

    public get referenceInSnowTheme() {
        return this.#referenceInSnowTheme.get;
    }

    public get referenceInSkyTheme() {
        return this.#referenceInSkyTheme.get;
    }

    public get referenceInForestTheme() {
        return this.#referenceInForestTheme.get;
    }

    public get referenceInGhostHouseTheme() {
        return this.#referenceInGhostHouseTheme.get;
    }

    public get referenceInAirshipTheme() {
        return this.#referenceInAirshipTheme.get;
    }

    public get referenceInCastleTheme() {
        return this.#referenceInCastleTheme.get;
    }


    public get referenceInDayTheme() {
        return this.#referenceInDayTheme.get;
    }

    public get referenceInNightTheme() {
        return this.#referenceInNightTheme.get;
    }


    public get everyReferences() {
        return this.#everyReferences.get;
    }

    //endregion -------------------- References methods --------------------

}
