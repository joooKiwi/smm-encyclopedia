import type {Entity}           from '../simple/Entity';
import type {EntityReferences} from './EntityReferences';
import type {GameStyles}       from '../gameStyle/GameStyles';
import type {Themes}           from '../theme/Themes';
import type {Times}            from '../time/Times';

import {CallbackCaller} from '../../util/CallbackCaller';

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

    readonly #everyGameStyleReferences: CallbackCaller<readonly Entity[]>;
    readonly #everyThemeReferences: CallbackCaller<readonly Entity[]>;
    readonly #everyTimeReferences: CallbackCaller<readonly Entity[]>;
    readonly #everyReferences: CallbackCaller<readonly Entity[]>;

    //endregion -------------------- Attributes --------------------

    public constructor(referenceInSuperMarioBrosStyle: () => Entity, referenceInSuperMarioBros3Style: () => Entity, referenceInSuperMarioWorldStyle: () => Entity, referenceInNewSuperMarioBrosUStyle: () => Entity, referenceInSuperMario3DWorldStyle: () => Entity,
                       referenceInGroundTheme: () => Entity, referenceInUndergroundTheme: () => Entity, referenceInUnderwaterTheme: () => Entity, referenceInDesertTheme: () => Entity, referenceInSnowTheme: () => Entity, referenceInSkyTheme: () => Entity, referenceInForestTheme: () => Entity, referenceInGhostHouseTheme: () => Entity, referenceInAirshipTheme: () => Entity, referenceInCastleTheme: () => Entity,
                       referenceInDayTheme: () => Entity, referenceInNightTheme: () => Entity,
                       everyGameStyleReferences: () => readonly Entity[], everyThemeReferences: () => readonly Entity[], everyTimeReferences: () => readonly Entity[], everyReferences: () => readonly Entity[],) {
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

        this.#everyGameStyleReferences = new CallbackCaller(everyGameStyleReferences);
        this.#everyThemeReferences = new CallbackCaller(everyThemeReferences);
        this.#everyTimeReferences = new CallbackCaller(everyTimeReferences);
        this.#everyReferences = new CallbackCaller(everyReferences);
    }


    //region -------------------- References methods --------------------

    //region -------------------- Game style references --------------------

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

    //endregion -------------------- Game style references --------------------
    //region -------------------- Theme references --------------------

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

    //endregion -------------------- Theme references --------------------
    //region -------------------- Time references --------------------

    public get referenceInDayTheme() {
        return this.#referenceInDayTheme.get;
    }

    public get referenceInNightTheme() {
        return this.#referenceInNightTheme.get;
    }

    //endregion -------------------- Time references --------------------

    public getReferenceFrom(theme: Themes,): Entity
    public getReferenceFrom(time: Times,): Entity
    public getReferenceFrom(gameStyle: GameStyles,): Entity
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): Entity
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,) {
        return gameStyleOrThemeOrTime.getReference(this);
    }

    public get everyGameStyleReferences() {
        return this.#everyGameStyleReferences.get;
    }

    public get everyThemeReferences() {
        return this.#everyThemeReferences.get;
    }

    public get everyTimeReferences() {
        return this.#everyTimeReferences.get;
    }

    public get everyReferences() {
        return this.#everyReferences.get;
    }

    //endregion -------------------- References methods --------------------

}
