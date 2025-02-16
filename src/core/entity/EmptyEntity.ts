import type {EmptyCollectionHolder} from '@joookiwi/collection'
import type {EmptyMap}              from '@joookiwi/type'

import type {Entity}                                      from 'core/entity/Entity'
import type {EmptyEntityCategory}                         from 'core/entityCategory/EmptyEntityCategory'
import type {ClassWithNullObjectPattern, EmptyEntityName} from 'util/ClassWithNullObjectPattern'

import {LAZY_EMPTY_ENTITY_CATEGORY}       from 'core/entityCategory/EmptyEntityCategory.lazy'
import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'
import {EmptyStringName}                  from 'lang/name/EmptyStringName'
import {NOT_APPLICABLE}                   from 'util/commonVariables'
import {Empty}                            from 'util/emptyVariables'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER
import EMPTY_MAP =               Empty.EMPTY_MAP

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
    public readonly canBeFiredOutOfABillBlaster = false
    public readonly canComeOutOfABlock = false
    public readonly canBePutInATree = false

    //endregion -------------------- Directly affected --------------------
    //region -------------------- Indirect --------------------

    public readonly canBeAffectedByATwister = false
    public readonly canBeAffectedByATwisterWhenItIsWithAParachute = false
    public readonly canBeAffectedByATwisterWhenInAFallingState = false

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
    public readonly isInSuperMario3DWorldStyle = false

    //endregion -------------------- Game style --------------------
    //region -------------------- Theme --------------------

    public readonly isInGroundTheme = false
    public readonly isInUndergroundTheme = false
    public readonly isInUnderwaterTheme = false
    public readonly isInDesertTheme = false
    public readonly isInSnowTheme = false
    public readonly isInSkyTheme = false
    public readonly isInForestTheme = false
    public readonly isInGhostHouseTheme = false
    public readonly isInAirshipTheme = false
    public readonly isInCastleTheme = false

    //endregion -------------------- Theme --------------------
    //region -------------------- Time --------------------

    public readonly isInDayTheme = false
    public readonly isInNightTheme = false

    //endregion -------------------- Time --------------------
    //region -------------------- Limit --------------------

    public readonly editorLimit_smm1And3ds = null
    public readonly editorLimit_smm2 = NOT_APPLICABLE
    public readonly isUnknown_editorLimit_smm2 = false

    public readonly isInGeneralLimit = false
    public readonly isInGeneralLimitComment = null

    public readonly isInGlobalGeneralLimit = false
    public readonly isInGlobalGeneralLimitComment = null

    public readonly isInPowerUpLimit = false

    public readonly isInProjectileLimit = false
    public readonly isInProjectileLimitComment = null

    public readonly isInDynamicRenderedObjectLimit = false
    public readonly isInDynamicRenderedObjectLimitComment = null

    public readonly isInCollectedLooseCoinLimit = false

    public readonly otherLimit = null
    public readonly otherLimitComment = null
    public readonly isUnknown_otherLimit = false

    //endregion -------------------- Limit --------------------
    //region -------------------- Instrument --------------------

    public readonly instruments = EMPTY_COLLECTION_HOLDER
    public readonly canMakeASoundOutOfAMusicBlock = false
    public readonly canMakeASoundOutOfAMusicBlockComment = null

    //endregion -------------------- Instrument --------------------
    //region -------------------- References --------------------

    public readonly referencesInSuperMarioBrosStyle = EMPTY_COLLECTION_HOLDER
    public readonly referencesInSuperMarioBros3Style = EMPTY_COLLECTION_HOLDER
    public readonly referencesInSuperMarioWorldStyle = EMPTY_COLLECTION_HOLDER
    public readonly referencesInNewSuperMarioBrosUStyle = EMPTY_COLLECTION_HOLDER
    public readonly referencesInSuperMario3DWorldStyle = EMPTY_COLLECTION_HOLDER

    public readonly referencesInGroundTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInUndergroundTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInUnderwaterTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInDesertTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInSnowTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInSkyTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInForestTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInGhostHouseTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInAirshipTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInCastleTheme = EMPTY_COLLECTION_HOLDER


    public readonly referencesInDayTheme = EMPTY_COLLECTION_HOLDER
    public readonly referencesInNightTheme = EMPTY_COLLECTION_HOLDER

    public getReferencesFrom(): EmptyCollectionHolder {
        return EMPTY_COLLECTION_HOLDER
    }

    public readonly everyGameStyleReferences = EMPTY_COLLECTION_HOLDER
    public readonly everyThemeReferences = EMPTY_COLLECTION_HOLDER
    public readonly everyTimeReferences = EMPTY_COLLECTION_HOLDER
    public readonly everyReferences = EMPTY_COLLECTION_HOLDER

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
