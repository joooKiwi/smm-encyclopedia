import type {Entity, PossibleOtherEntities} from '../Entity';
import type {EntityReferences}              from './EntityReferences';
import type {GameStyles}                    from '../../gameStyle/GameStyles';
import type {ObjectHolder}                  from '../../../util/holder/ObjectHolder';
import type {Themes}                        from '../../theme/Themes';
import type {Times}                         from '../../time/Times';

export class EntityReferencesContainer
    implements EntityReferences {

    //region -------------------- Fields --------------------

    readonly #referenceInSuperMarioBrosStyle;
    readonly #referenceInSuperMarioBros3Style;
    readonly #referenceInSuperMarioWorldStyle;
    readonly #referenceInNewSuperMarioBrosUStyle;
    readonly #referenceInSuperMario3DWorldStyle;

    readonly #referenceInGroundTheme;
    readonly #referenceInUndergroundTheme;
    readonly #referenceInUnderwaterTheme;
    readonly #referenceInDesertTheme;
    readonly #referenceInSnowTheme;
    readonly #referenceInSkyTheme;
    readonly #referenceInForestTheme;
    readonly #referenceInGhostHouseTheme;
    readonly #referenceInAirshipTheme;
    readonly #referenceInCastleTheme;

    readonly #referenceInDayTheme;
    readonly #referenceInNightTheme;

    readonly #everyGameStyleReferences;
    readonly #everyThemeReferences;
    readonly #everyTimeReferences;
    readonly #everyReferences;

    //endregion -------------------- Fields --------------------

    //TODO change the singular references to a GameStyle, Theme & Time structure based objects.
    public constructor(referenceInSuperMarioBrosStyle: ObjectHolder<PossibleOtherEntities>, referenceInSuperMarioBros3Style: ObjectHolder<PossibleOtherEntities>, referenceInSuperMarioWorldStyle: ObjectHolder<PossibleOtherEntities>, referenceInNewSuperMarioBrosUStyle: ObjectHolder<PossibleOtherEntities>, referenceInSuperMario3DWorldStyle: ObjectHolder<PossibleOtherEntities>,
                       referenceInGroundTheme: ObjectHolder<PossibleOtherEntities>, referenceInUndergroundTheme: ObjectHolder<PossibleOtherEntities>, referenceInUnderwaterTheme: ObjectHolder<PossibleOtherEntities>, referenceInDesertTheme: ObjectHolder<PossibleOtherEntities>, referenceInSnowTheme: ObjectHolder<PossibleOtherEntities>, referenceInSkyTheme: ObjectHolder<PossibleOtherEntities>, referenceInForestTheme: ObjectHolder<PossibleOtherEntities>, referenceInGhostHouseTheme: ObjectHolder<PossibleOtherEntities>, referenceInAirshipTheme: ObjectHolder<PossibleOtherEntities>, referenceInCastleTheme: ObjectHolder<PossibleOtherEntities>,
                       referenceInDayTheme: ObjectHolder<PossibleOtherEntities>, referenceInNightTheme: ObjectHolder<PossibleOtherEntities>,
                       everyGameStyleReferences: ObjectHolder<readonly Entity[]>, everyThemeReferences: ObjectHolder<readonly Entity[]>, everyTimeReferences: ObjectHolder<readonly Entity[]>, everyReferences: ObjectHolder<readonly Entity[]>,) {
        this.#referenceInSuperMarioBrosStyle = referenceInSuperMarioBrosStyle;
        this.#referenceInSuperMarioBros3Style = referenceInSuperMarioBros3Style;
        this.#referenceInSuperMarioWorldStyle = referenceInSuperMarioWorldStyle;
        this.#referenceInNewSuperMarioBrosUStyle = referenceInNewSuperMarioBrosUStyle;
        this.#referenceInSuperMario3DWorldStyle = referenceInSuperMario3DWorldStyle;

        this.#referenceInGroundTheme = referenceInGroundTheme;
        this.#referenceInUndergroundTheme = referenceInUndergroundTheme;
        this.#referenceInUnderwaterTheme = referenceInUnderwaterTheme;
        this.#referenceInDesertTheme = referenceInDesertTheme;
        this.#referenceInSnowTheme = referenceInSnowTheme;
        this.#referenceInSkyTheme = referenceInSkyTheme;
        this.#referenceInForestTheme = referenceInForestTheme;
        this.#referenceInGhostHouseTheme = referenceInGhostHouseTheme;
        this.#referenceInAirshipTheme = referenceInAirshipTheme;
        this.#referenceInCastleTheme = referenceInCastleTheme;

        this.#referenceInDayTheme = referenceInDayTheme;
        this.#referenceInNightTheme = referenceInNightTheme;

        this.#everyGameStyleReferences = everyGameStyleReferences;
        this.#everyThemeReferences = everyThemeReferences;
        this.#everyTimeReferences = everyTimeReferences;
        this.#everyReferences = everyReferences;
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
