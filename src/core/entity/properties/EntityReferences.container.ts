import type {Entity, PossibleOtherEntities} from '../Entity';
import type {EntityReferences}              from './EntityReferences';
import type {GameStyles}                    from '../../gameStyle/GameStyles';
import type {ObjectHolder}                  from '../../../util/holder/ObjectHolder';
import type {Themes}                        from '../../theme/Themes';
import type {Times}                         from '../../time/Times';

import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolderContainer';

export class EntityReferencesContainer
    implements EntityReferences {

    //region -------------------- Attributes --------------------

    readonly #referenceInSuperMarioBrosStyle: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInSuperMarioBros3Style: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInSuperMarioWorldStyle: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInNewSuperMarioBrosUStyle: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInSuperMario3DWorldStyle: ObjectHolder<PossibleOtherEntities>;

    readonly #referenceInGroundTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInUndergroundTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInUnderwaterTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInDesertTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInSnowTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInSkyTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInForestTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInGhostHouseTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInAirshipTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInCastleTheme: ObjectHolder<PossibleOtherEntities>;

    readonly #referenceInDayTheme: ObjectHolder<PossibleOtherEntities>;
    readonly #referenceInNightTheme: ObjectHolder<PossibleOtherEntities>;

    readonly #everyGameStyleReferences: ObjectHolder<readonly Entity[]>;
    readonly #everyThemeReferences: ObjectHolder<readonly Entity[]>;
    readonly #everyTimeReferences: ObjectHolder<readonly Entity[]>;
    readonly #everyReferences: ObjectHolder<readonly Entity[]>;

    //endregion -------------------- Attributes --------------------

    public constructor(referenceInSuperMarioBrosStyle: CallbackReceivedOnOtherEntities, referenceInSuperMarioBros3Style: CallbackReceivedOnOtherEntities, referenceInSuperMarioWorldStyle: CallbackReceivedOnOtherEntities, referenceInNewSuperMarioBrosUStyle: CallbackReceivedOnOtherEntities, referenceInSuperMario3DWorldStyle: CallbackReceivedOnOtherEntities,
                       referenceInGroundTheme: CallbackReceivedOnOtherEntities, referenceInUndergroundTheme: CallbackReceivedOnOtherEntities, referenceInUnderwaterTheme: CallbackReceivedOnOtherEntities, referenceInDesertTheme: CallbackReceivedOnOtherEntities, referenceInSnowTheme: CallbackReceivedOnOtherEntities, referenceInSkyTheme: CallbackReceivedOnOtherEntities, referenceInForestTheme: CallbackReceivedOnOtherEntities, referenceInGhostHouseTheme: CallbackReceivedOnOtherEntities, referenceInAirshipTheme: CallbackReceivedOnOtherEntities, referenceInCastleTheme: CallbackReceivedOnOtherEntities,
                       referenceInDayTheme: CallbackReceivedOnOtherEntities, referenceInNightTheme: CallbackReceivedOnOtherEntities,
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

    public getReferenceFrom(theme: Themes,): PossibleOtherEntities
    public getReferenceFrom(time: Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities
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

type CallbackReceivedOnOtherEntities = () => PossibleOtherEntities;