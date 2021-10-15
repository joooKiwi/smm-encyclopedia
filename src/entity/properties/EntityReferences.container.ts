import type {Entity}           from '../simple/Entity';
import type {EntityReferences} from './EntityReferences';
import type {GameStyles}       from '../gameStyle/GameStyles';
import type {ObjectHolder}     from '../../util/holder/ObjectHolder';
import type {Themes}           from '../theme/Themes';
import type {Times}            from '../time/Times';

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolderContainer';

export class EntityReferencesContainer
    implements EntityReferences {

    //region -------------------- Attributes --------------------

    readonly #referenceInSuperMarioBrosStyle: ObjectHolder<Entity>;
    readonly #referenceInSuperMarioBros3Style: ObjectHolder<Entity>;
    readonly #referenceInSuperMarioWorldStyle: ObjectHolder<Entity>;
    readonly #referenceInNewSuperMarioBrosUStyle: ObjectHolder<Entity>;
    readonly #referenceInSuperMario3DWorldStyle: ObjectHolder<Entity>;

    readonly #referenceInGroundTheme: ObjectHolder<Entity>;
    readonly #referenceInUndergroundTheme: ObjectHolder<Entity>;
    readonly #referenceInUnderwaterTheme: ObjectHolder<Entity>;
    readonly #referenceInDesertTheme: ObjectHolder<Entity>;
    readonly #referenceInSnowTheme: ObjectHolder<Entity>;
    readonly #referenceInSkyTheme: ObjectHolder<Entity>;
    readonly #referenceInForestTheme: ObjectHolder<Entity>;
    readonly #referenceInGhostHouseTheme: ObjectHolder<Entity>;
    readonly #referenceInAirshipTheme: ObjectHolder<Entity>;
    readonly #referenceInCastleTheme: ObjectHolder<Entity>;

    readonly #referenceInDayTheme: ObjectHolder<Entity>;
    readonly #referenceInNightTheme: ObjectHolder<Entity>;

    readonly #everyGameStyleReferences: ObjectHolder<readonly Entity[]>;
    readonly #everyThemeReferences: ObjectHolder<readonly Entity[]>;
    readonly #everyTimeReferences: ObjectHolder<readonly Entity[]>;
    readonly #everyReferences: ObjectHolder<readonly Entity[]>;

    //endregion -------------------- Attributes --------------------

    public constructor(referenceInSuperMarioBrosStyle: () => Entity, referenceInSuperMarioBros3Style: () => Entity, referenceInSuperMarioWorldStyle: () => Entity, referenceInNewSuperMarioBrosUStyle: () => Entity, referenceInSuperMario3DWorldStyle: () => Entity,
                       referenceInGroundTheme: () => Entity, referenceInUndergroundTheme: () => Entity, referenceInUnderwaterTheme: () => Entity, referenceInDesertTheme: () => Entity, referenceInSnowTheme: () => Entity, referenceInSkyTheme: () => Entity, referenceInForestTheme: () => Entity, referenceInGhostHouseTheme: () => Entity, referenceInAirshipTheme: () => Entity, referenceInCastleTheme: () => Entity,
                       referenceInDayTheme: () => Entity, referenceInNightTheme: () => Entity,
                       everyGameStyleReferences: () => readonly Entity[], everyThemeReferences: () => readonly Entity[], everyTimeReferences: () => readonly Entity[], everyReferences: () => readonly Entity[],) {
        this.#referenceInSuperMarioBrosStyle = new DelayedObjectHolderContainer(referenceInSuperMarioBrosStyle);
        this.#referenceInSuperMarioBros3Style = new DelayedObjectHolderContainer(referenceInSuperMarioBros3Style);
        this.#referenceInSuperMarioWorldStyle = new DelayedObjectHolderContainer(referenceInSuperMarioWorldStyle);
        this.#referenceInNewSuperMarioBrosUStyle = new DelayedObjectHolderContainer(referenceInNewSuperMarioBrosUStyle);
        this.#referenceInSuperMario3DWorldStyle = new DelayedObjectHolderContainer(referenceInSuperMario3DWorldStyle);

        this.#referenceInGroundTheme = new DelayedObjectHolderContainer(referenceInGroundTheme);
        this.#referenceInUndergroundTheme = new DelayedObjectHolderContainer(referenceInUndergroundTheme);
        this.#referenceInUnderwaterTheme = new DelayedObjectHolderContainer(referenceInUnderwaterTheme);
        this.#referenceInDesertTheme = new DelayedObjectHolderContainer(referenceInDesertTheme);
        this.#referenceInSnowTheme = new DelayedObjectHolderContainer(referenceInSnowTheme);
        this.#referenceInSkyTheme = new DelayedObjectHolderContainer(referenceInSkyTheme);
        this.#referenceInForestTheme = new DelayedObjectHolderContainer(referenceInForestTheme);
        this.#referenceInGhostHouseTheme = new DelayedObjectHolderContainer(referenceInGhostHouseTheme);
        this.#referenceInAirshipTheme = new DelayedObjectHolderContainer(referenceInAirshipTheme);
        this.#referenceInCastleTheme = new DelayedObjectHolderContainer(referenceInCastleTheme);

        this.#referenceInDayTheme = new DelayedObjectHolderContainer(referenceInDayTheme);
        this.#referenceInNightTheme = new DelayedObjectHolderContainer(referenceInNightTheme);

        this.#everyGameStyleReferences = new DelayedObjectHolderContainer(everyGameStyleReferences);
        this.#everyThemeReferences = new DelayedObjectHolderContainer(everyThemeReferences);
        this.#everyTimeReferences = new DelayedObjectHolderContainer(everyTimeReferences);
        this.#everyReferences = new DelayedObjectHolderContainer(everyReferences);
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
