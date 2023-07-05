import type {Lazy} from '@joookiwi/lazy'

import type {Entity, PossibleOtherEntities} from 'core/entity/Entity'
import type {EntityReferences}              from 'core/entity/properties/EntityReferences'
import type {GameStyles}                    from 'core/gameStyle/GameStyles'
import type {Themes}                        from 'core/theme/Themes'
import type {Times}                         from 'core/time/Times'

export class EntityReferencesContainer
    implements EntityReferences {

    //region -------------------- Fields --------------------

    readonly #referenceInSuperMarioBrosStyle
    readonly #referenceInSuperMarioBros3Style
    readonly #referenceInSuperMarioWorldStyle
    readonly #referenceInNewSuperMarioBrosUStyle
    readonly #referenceInSuperMario3DWorldStyle

    readonly #referenceInGroundTheme
    readonly #referenceInUndergroundTheme
    readonly #referenceInUnderwaterTheme
    readonly #referenceInDesertTheme
    readonly #referenceInSnowTheme
    readonly #referenceInSkyTheme
    readonly #referenceInForestTheme
    readonly #referenceInGhostHouseTheme
    readonly #referenceInAirshipTheme
    readonly #referenceInCastleTheme

    readonly #referenceInDayTheme
    readonly #referenceInNightTheme

    readonly #everyGameStyleReferences
    readonly #everyThemeReferences
    readonly #everyTimeReferences
    readonly #everyReferences

    //endregion -------------------- Fields --------------------

    //TODO change the singular references to a GameStyle, Theme & Time structure based objects.
    public constructor(referenceInSuperMarioBrosStyle: Lazy<PossibleOtherEntities>,
                       referenceInSuperMarioBros3Style: Lazy<PossibleOtherEntities>,
                       referenceInSuperMarioWorldStyle: Lazy<PossibleOtherEntities>,
                       referenceInNewSuperMarioBrosUStyle: Lazy<PossibleOtherEntities>,
                       referenceInSuperMario3DWorldStyle: Lazy<PossibleOtherEntities>,

                       referenceInGroundTheme: Lazy<PossibleOtherEntities>,
                       referenceInUndergroundTheme: Lazy<PossibleOtherEntities>,
                       referenceInUnderwaterTheme: Lazy<PossibleOtherEntities>,
                       referenceInDesertTheme: Lazy<PossibleOtherEntities>,
                       referenceInSnowTheme: Lazy<PossibleOtherEntities>,
                       referenceInSkyTheme: Lazy<PossibleOtherEntities>,
                       referenceInForestTheme: Lazy<PossibleOtherEntities>,
                       referenceInGhostHouseTheme: Lazy<PossibleOtherEntities>,
                       referenceInAirshipTheme: Lazy<PossibleOtherEntities>,
                       referenceInCastleTheme: Lazy<PossibleOtherEntities>,

                       referenceInDayTheme: Lazy<PossibleOtherEntities>,
                       referenceInNightTheme: Lazy<PossibleOtherEntities>,

                       everyGameStyleReferences: Lazy<readonly Entity[]>,
                       everyThemeReferences: Lazy<readonly Entity[]>,
                       everyTimeReferences: Lazy<readonly Entity[]>,
                       everyReferences: Lazy<readonly Entity[]>,) {
        this.#referenceInSuperMarioBrosStyle = referenceInSuperMarioBrosStyle
        this.#referenceInSuperMarioBros3Style = referenceInSuperMarioBros3Style
        this.#referenceInSuperMarioWorldStyle = referenceInSuperMarioWorldStyle
        this.#referenceInNewSuperMarioBrosUStyle = referenceInNewSuperMarioBrosUStyle
        this.#referenceInSuperMario3DWorldStyle = referenceInSuperMario3DWorldStyle

        this.#referenceInGroundTheme = referenceInGroundTheme
        this.#referenceInUndergroundTheme = referenceInUndergroundTheme
        this.#referenceInUnderwaterTheme = referenceInUnderwaterTheme
        this.#referenceInDesertTheme = referenceInDesertTheme
        this.#referenceInSnowTheme = referenceInSnowTheme
        this.#referenceInSkyTheme = referenceInSkyTheme
        this.#referenceInForestTheme = referenceInForestTheme
        this.#referenceInGhostHouseTheme = referenceInGhostHouseTheme
        this.#referenceInAirshipTheme = referenceInAirshipTheme
        this.#referenceInCastleTheme = referenceInCastleTheme

        this.#referenceInDayTheme = referenceInDayTheme
        this.#referenceInNightTheme = referenceInNightTheme

        this.#everyGameStyleReferences = everyGameStyleReferences
        this.#everyThemeReferences = everyThemeReferences
        this.#everyTimeReferences = everyTimeReferences
        this.#everyReferences = everyReferences
    }


    //region -------------------- References methods --------------------

    //region -------------------- Game style references --------------------

    public get referenceInSuperMarioBrosStyle(): PossibleOtherEntities {
        return this.#referenceInSuperMarioBrosStyle.value
    }

    public get referenceInSuperMarioBros3Style(): PossibleOtherEntities {
        return this.#referenceInSuperMarioBros3Style.value
    }

    public get referenceInSuperMarioWorldStyle(): PossibleOtherEntities {
        return this.#referenceInSuperMarioWorldStyle.value
    }

    public get referenceInNewSuperMarioBrosUStyle(): PossibleOtherEntities {
        return this.#referenceInNewSuperMarioBrosUStyle.value
    }

    public get referenceInSuperMario3DWorldStyle(): PossibleOtherEntities {
        return this.#referenceInSuperMario3DWorldStyle.value
    }

    //endregion -------------------- Game style references --------------------
    //region -------------------- Theme references --------------------

    public get referenceInGroundTheme(): PossibleOtherEntities {
        return this.#referenceInGroundTheme.value
    }

    public get referenceInUndergroundTheme(): PossibleOtherEntities {
        return this.#referenceInUndergroundTheme.value
    }

    public get referenceInUnderwaterTheme(): PossibleOtherEntities {
        return this.#referenceInUnderwaterTheme.value
    }

    public get referenceInDesertTheme(): PossibleOtherEntities {
        return this.#referenceInDesertTheme.value
    }

    public get referenceInSnowTheme(): PossibleOtherEntities {
        return this.#referenceInSnowTheme.value
    }

    public get referenceInSkyTheme(): PossibleOtherEntities {
        return this.#referenceInSkyTheme.value
    }

    public get referenceInForestTheme(): PossibleOtherEntities {
        return this.#referenceInForestTheme.value
    }

    public get referenceInGhostHouseTheme(): PossibleOtherEntities {
        return this.#referenceInGhostHouseTheme.value
    }

    public get referenceInAirshipTheme(): PossibleOtherEntities {
        return this.#referenceInAirshipTheme.value
    }

    public get referenceInCastleTheme(): PossibleOtherEntities {
        return this.#referenceInCastleTheme.value
    }

    //endregion -------------------- Theme references --------------------
    //region -------------------- Time references --------------------

    public get referenceInDayTheme(): PossibleOtherEntities {
        return this.#referenceInDayTheme.value
    }

    public get referenceInNightTheme(): PossibleOtherEntities {
        return this.#referenceInNightTheme.value
    }

    //endregion -------------------- Time references --------------------

    public getReferenceFrom(theme: Themes,): PossibleOtherEntities
    public getReferenceFrom(time: Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities {
        return gameStyleOrThemeOrTime.getReference(this)
    }

    public get everyGameStyleReferences(): readonly Entity[] {
        return this.#everyGameStyleReferences.value
    }

    public get everyThemeReferences(): readonly Entity[] {
        return this.#everyThemeReferences.value
    }

    public get everyTimeReferences(): readonly Entity[] {
        return this.#everyTimeReferences.value
    }

    public get everyReferences(): readonly Entity[] {
        return this.#everyReferences.value
    }

    //endregion -------------------- References methods --------------------

}
