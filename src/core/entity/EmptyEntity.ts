import type {EmptyArray, EmptyMap} from '@joookiwi/type'

import type {Entity}                                      from 'core/entity/Entity'
import type {EmptyEntityCategory}                         from 'core/entityCategory/EmptyEntityCategory'
import type {ClassWithNullObjectPattern, EmptyEntityName} from 'util/ClassWithNullObjectPattern'

import {LAZY_EMPTY_ENTITY_CATEGORY}       from 'core/entityCategory/EmptyEntityCategory.lazy'
import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'
import {EmptyStringName}                  from 'lang/name/EmptyStringName'
import {NOT_APPLICABLE}                   from 'util/commonVariables'
import {Empty}                            from 'util/emptyVariables'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY
import EMPTY_MAP =   Empty.EMPTY_MAP

/**
 * An empty entity with the default values of nothing
 *
 * @note A value that is equivalent to nothing can be false, null and itself
 * @singleton
 */
export class EmptyEntity
    extends ClassContainingANameAndACategory<string, string, EmptyEntityCategory>
    implements Entity, ClassWithNullObjectPattern<EmptyEntityName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntity

    private constructor() {
        super(EmptyStringName.get, LAZY_EMPTY_ENTITY_CATEGORY,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Basic --------------------

    public readonly hasAMushroomVariant = false
    public readonly canBeInAParachute = false
    public readonly canBeInAParachuteComment = null
    public readonly canHaveWings = false
    public readonly canHaveWingsComment = null

    //endregion -------------------- Basic --------------------
    //region -------------------- Directly affected --------------------

    public readonly canContainOrSpawnAKey = false

    public readonly isAffectDirectlyByAnOnOffState = false
    public readonly isAffectDirectlyByAnOnOffStateComment = null

    public readonly canSpawnOutOfAPipe = false
    public readonly canBePutOnASwingingClaw = false
    public readonly canBeThrownByALakitu = false
    public readonly canBePutInALakituCloud = false
    public readonly canBePutInAClownCar = false
    public readonly canBeFiredOutOfABulletLauncher = false
    public readonly canComeOutOfABlock = false
    public readonly canBePutInATree = false

    //endregion -------------------- Directly affected --------------------
    //region -------------------- Indirect --------------------

    public readonly canBeStacked = false

    public readonly isGlobalGroundOrGlobal = false
    public readonly isGlobalGroundOrGlobalInSm3dw = false

    //endregion -------------------- Indirect --------------------
    //region -------------------- Game --------------------

    public readonly isInSuperMarioMaker1 = false
    public readonly isInSuperMarioMakerFor3DS = false
    public readonly isInSuperMarioMaker2 = false

    //endregion -------------------- Game --------------------
    //region -------------------- Game style --------------------

    public readonly isInSuperMarioBrosStyle = false
    public readonly isInSuperMarioBros3Style = false
    public readonly isInSuperMarioWorldStyle = false
    public readonly isInNewSuperMarioBrosUStyle = false
    public readonly isInSuperMario3DWorldStyle = NOT_APPLICABLE

    //endregion -------------------- Game style --------------------
    //region -------------------- Theme --------------------

    public readonly isInGroundTheme = false
    public readonly isInUndergroundTheme = false
    public readonly isInUnderwaterTheme = false
    public readonly isInDesertTheme = NOT_APPLICABLE
    public readonly isInSnowTheme = NOT_APPLICABLE
    public readonly isInSkyTheme = NOT_APPLICABLE
    public readonly isInForestTheme = NOT_APPLICABLE
    public readonly isInGhostHouseTheme = false
    public readonly isInAirshipTheme = false
    public readonly isInCastleTheme = false

    //endregion -------------------- Theme --------------------
    //region -------------------- Time --------------------

    public readonly isInDayTheme = false
    public readonly isInNightTheme = NOT_APPLICABLE

    //endregion -------------------- Time --------------------
    //region -------------------- Limit --------------------

    public readonly editorLimit_smm1And3ds = null
    public readonly editorLimit_smm2 = NOT_APPLICABLE
    public readonly isUnknown_editorLimit_smm2 = false

    public readonly isInGeneralLimit = NOT_APPLICABLE
    public readonly isInGeneralLimitComment = null

    public readonly isInGlobalGeneralLimit = NOT_APPLICABLE
    public readonly isInGlobalGeneralLimitComment = null

    public readonly isInPowerUpLimit = NOT_APPLICABLE

    public readonly isInProjectileLimit = NOT_APPLICABLE
    public readonly isInProjectileLimitComment = null

    public readonly isInRenderedObjectLimit = NOT_APPLICABLE
    public readonly isInRenderedObjectLimitComment = null

    public readonly isInCollectedCoinLimit = NOT_APPLICABLE

    public readonly otherLimit = NOT_APPLICABLE
    public readonly otherLimitComment = null
    public readonly isUnknown_otherLimit = false

    //endregion -------------------- Limit --------------------
    //region -------------------- Instrument --------------------

    public readonly instruments = EMPTY_ARRAY
    public readonly canMakeASoundOutOfAMusicBlock = false
    public readonly canMakeASoundOutOfAMusicBlockComment = null

    //endregion -------------------- Instrument --------------------
    //region -------------------- References --------------------

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

    //endregion -------------------- References --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

    public toGameStyleMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

    public toCourseThemeMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

    public toTimeMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

    public toLimitMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

    public toEditorLimitMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

    public toPlayLimitMap(): EmptyMap<never> {
        return EMPTY_MAP
    }

    //endregion -------------------- Convertor methods --------------------

    public override toString(): EmptyEntityName {
        return 'Empty entity'
    }

}
