import type {EntityReferences}                                     from 'core/entity/properties/EntityReferences'
import type {ClassWithNullObjectPattern, EmptyEntityReferenceName} from 'util/ClassWithNullObjectPattern'

import {EMPTY_ARRAY} from 'util/emptyVariables'

/**
 * @singleton
 */
export class EmptyEntityReference
    implements EntityReferences, ClassWithNullObjectPattern<EmptyEntityReferenceName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntityReference

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- References methods --------------------

    public readonly referenceInSuperMarioBrosStyle = EMPTY_ARRAY
    public readonly referenceInSuperMarioBros3Style = EMPTY_ARRAY
    public readonly referenceInSuperMarioWorldStyle = EMPTY_ARRAY
    public readonly referenceInNewSuperMarioBrosUStyle = EMPTY_ARRAY
    public readonly referenceInSuperMario3DWorldStyle = EMPTY_ARRAY

    public readonly referenceInGroundTheme = EMPTY_ARRAY
    public readonly referenceInUndergroundTheme = EMPTY_ARRAY
    public readonly referenceInUnderwaterTheme = EMPTY_ARRAY
    public readonly referenceInDesertTheme = EMPTY_ARRAY
    public readonly referenceInSnowTheme = EMPTY_ARRAY
    public readonly referenceInSkyTheme = EMPTY_ARRAY
    public readonly referenceInForestTheme = EMPTY_ARRAY
    public readonly referenceInGhostHouseTheme = EMPTY_ARRAY
    public readonly referenceInAirshipTheme = EMPTY_ARRAY
    public readonly referenceInCastleTheme = EMPTY_ARRAY

    public readonly referenceInDayTheme = EMPTY_ARRAY
    public readonly referenceInNightTheme = EMPTY_ARRAY

    public getReferenceFrom(): EmptyArray {
        return EMPTY_ARRAY
    }

    public readonly everyGameStyleReferences = EMPTY_ARRAY
    public readonly everyThemeReferences = EMPTY_ARRAY
    public readonly everyTimeReferences = EMPTY_ARRAY

    public readonly everyReferences = EMPTY_ARRAY

    //endregion -------------------- References methods --------------------

    public toString(): EmptyEntityReferenceName {
        return 'Empty entity reference'
    }

}
