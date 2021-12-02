import type {ClassWithNullObjectPattern, EmptyEntityReferenceName} from '../../util/ClassWithNullObjectPattern';
import type {EntityReferences}                                     from './EntityReferences';

import {EMPTY_ARRAY} from '../../util/emptyVariables';
import {EmptyEntity} from '../entity/EmptyEntity';

/**
 * @singleton
 */
export class EmptyEntityReference
    implements EntityReferences, ClassWithNullObjectPattern<EmptyEntityReferenceName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntityReference;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- References methods --------------------

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


    public getReferenceFrom() {
        return EmptyEntity.get;
    }

    public readonly everyGameStyleReferences = EMPTY_ARRAY;
    public readonly everyThemeReferences = EMPTY_ARRAY;
    public readonly everyTimeReferences = EMPTY_ARRAY;

    public readonly everyReferences = EMPTY_ARRAY;

    //endregion -------------------- References methods --------------------

    public toString(): EmptyEntityReferenceName {
        return 'Empty entity reference';
    }

}
