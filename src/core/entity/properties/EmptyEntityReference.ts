import type {ClassWithNullObjectPattern, EmptyEntityReferenceName} from '../../../util/ClassWithNullObjectPattern';
import type {EntityReferences}                                     from './EntityReferences';

import {EMPTY_ARRAY} from '../../../util/emptyVariables';
import {EmptyEntity} from '../EmptyEntity';

/**
 * @singleton
 * @recursiveReference<{@link EmptyEntity}>
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
        return [EmptyEntity.get] as const;
    }

    public get referenceInSuperMarioBros3Style() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInSuperMarioWorldStyle() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInNewSuperMarioBrosUStyle() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInSuperMario3DWorldStyle() {
        return [EmptyEntity.get] as const;
    }


    public get referenceInGroundTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInUndergroundTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInUnderwaterTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInDesertTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInSnowTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInSkyTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInForestTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInGhostHouseTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInAirshipTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInCastleTheme() {
        return [EmptyEntity.get] as const;
    }


    public get referenceInDayTheme() {
        return [EmptyEntity.get] as const;
    }

    public get referenceInNightTheme() {
        return [EmptyEntity.get] as const;
    }


    public getReferenceFrom() {
        return [EmptyEntity.get] as const;
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
