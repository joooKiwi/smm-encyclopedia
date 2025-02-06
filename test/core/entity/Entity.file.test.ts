import file from 'src/resources/compiled/Entity.json' with {type: 'json',}

import type {Array, NullOr}     from '@joookiwi/type'
import {describe, expect, test} from 'vitest'

import type {CanRespawnType}                                                                                                                                                                                                                                                                                                                                          from 'src/core/behaviour/loader.types'
import type {CanBeBrokenOrKilledByABobOmb, CanBeSpawnedByWingedMagikoopa, CanBeThrownByBowserInClownCar, CanBeThrownByBowserJr, CanBeThrownByBowserJrInClownCar, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, CanSurviveInTheLavaOrThePoison, HasAReferenceInMarioMaker, PossibleEntityType, PossibleFirstAppearanceInMarioMaker, PossibleLightSource, PossibleWeight} from 'src/core/entityTypes'
import type {LCL_Play, OnlySomeVariants}                                                                                                                                                                                                                                                                                                                              from 'src/core/entity/properties/loader.types'
import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment}                                                                                                                                                                                                                                                                                                           from 'src/core/entity/properties/instrument/loader.types'
import type {LimitAmountType, OffscreenSpawningAndDespawningReferencePoint, PossibleGeneralGlobalLimitComment, PossibleGeneralLimitComment, PossibleOtherLimitComment, PossibleProjectileLimitComment, PossibleRenderedObjectLimitTypeComment}                                                                                                                        from 'src/core/entity/properties/limit/loader.types'
import type {PossibleEnglishName as PossibleEnglishName_Category}                                                                                                                                                                                                                                                                                                     from 'src/core/entityCategory/EntityCategories.types'
import type {PossibleEnglishName as PossibleEnglishName_Limit}                                                                                                                                                                                                                                                                                                        from 'src/core/limit/Limits.types'
import type {PossibleName as PossibleName_Version}                                                                                                                                                                                                                                                                                                                    from 'src/core/version/Versions.types'
import type {PossibleExcludedLanguages}                                                                                                                                                                                                                                                                                                                               from 'test/helperMethods.types'

import {INFINITY, NOT_APPLICABLE, UNKNOWN_CHARACTER} from 'src/util/commonVariables'
import {EveryTypes}                                  from 'test/EveryTypes'
import {getEnglishName, testEnglish, testLanguages}  from 'test/helperMethods'
import {NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER}        from 'test/variables'
import {testEntityLink}                              from 'test/core/entity/testEntityLink'

describe('Entity (file test)', () => {
    const types = EveryTypes.get
    const everyNames = types.everyPossibleName_entity
    const possibleEntityType = ['(Entity)', 'Entity', 'Projectile', 'Unused projectile', 'Object',]                                                                      as const satisfies Array<PossibleEntityType>
    const possibleFirstAppearance = [1, 2,]                                                                                                                              as const satisfies Array<PossibleFirstAppearanceInMarioMaker>
    const everyVersion = [null, ...types.everyPossibleName_version,]                                                                                                     as const satisfies Array<NullOr<PossibleName_Version>>
    const everyPossibleCategory = [null, ...types.everyPossibleName_entityCategory,]                                                                                     as const satisfies Array<NullOr<PossibleEnglishName_Category>>
    // const everyEditorLimits = types.everyPossibleName_editorLimit
    const everyEditorLimitsWithNullAndNotApplicable = [null, NOT_APPLICABLE, ...types.everyPossibleName_editorLimit,]                                                    as const satisfies Array<NullOr<| NotApplicable | PossibleEnglishName_Limit>>
    // const everyPlayLimits = types.everyPossibleName_playLimit, everyPlayLimitsWithNull = [null, ...types.everyPossibleName_playLimit,]                                   as const
    const everyPlayLimitsWithNullAndUnknown = [null, UNKNOWN_CHARACTER, ...types.everyPossibleName_playLimit,]                                                           as const
    const everyPlayLimitsWithNull = [null, ...types.everyPossibleName_playLimit,]                                                                                        as const satisfies Array<NullOr<PossibleEnglishName_Limit>>
    const possibleBasicPropertyComment = [null, 'While playing → LCL',]                                                                                                  as const satisfies Array<NullOr<LCL_Play>>
    const possibleAffectedByOnOffStateComment = [null, 'Only some variants',]                                                                                            as const satisfies Array<NullOr<OnlySomeVariants>>
    const everyWeight = [null, UNKNOWN_CHARACTER, ...types.everyPossibleWeight_entity,]                                                                                  as const satisfies Array<PossibleWeight>
    const everyLightSources = [null, UNKNOWN_CHARACTER, ...types.everyPossibleLightSource_entity,]                                                                       as const satisfies Array<PossibleLightSource>
    const everySurviveConditionsInDeadlyLiquid = [true, false, UNKNOWN_CHARACTER, ...types.everyPossibleSurviveConditionInDeadlyLiquid_entity,]                          as const satisfies Array<CanSurviveInTheLavaOrThePoison>
    const possibleCanIgniteByBobOmb = [true, false, 'NSMBU', 'Castle',]                                                                                                  as const satisfies Array<CanIgniteABobOmb>
    const possibleCanBeBrokenOrKilledByBobOmb = [true, false, 'Koopa Troopa', 'Unchained Chomp', 'Standing on top of block that get destroyed',]                         as const satisfies Array<CanBeBrokenOrKilledByABobOmb>
    const possibleCanGoThroughWallsInSM3DW = [null, true, false, 'on down curve',]                                                                                       as const satisfies Array<CanGoThroughWallsInSM3DW>
    const everyInstruments = [null, ...types.everyPossibleName_instrument, ...types.everyPossibleMixedName_instrument,]                                                  as const
    const possibleCanMakeASoundOutOfMusicBlockComment = [null, 'Excluding the top 3 notes',]                                                                             as const satisfies Array<NullOr<PossibleCanMakeASoundOutOfAMusicBlock_Comment>>
    const possibleCanBeThrownByBowserInClownCar = [null, true, false, 'Bob-omb clear condition',]                                                                        as const satisfies Array<CanBeThrownByBowserInClownCar>
    const possibleCanBeThrownByBowserJr = [null, false, '3rd phase',]                                                                                                    as const satisfies Array<CanBeThrownByBowserJr>
    const possibleCanBeThrownByBowserJrInClownCar = [null, true, false, 'Koopa Troopa clear condition',]                                                                 as const satisfies Array<CanBeThrownByBowserJrInClownCar>
    const possibleCanBeSpawnedByWingedMagikoopa = [null, true, false, 'winged',]                                                                                         as const satisfies Array<CanBeSpawnedByWingedMagikoopa>
    const everyLimitAmountType = [null, UNKNOWN_CHARACTER, ...types.everyPossibleLimitAmountType_entity,]                                                                as const satisfies Array<LimitAmountType>
    const everyGELComment = [null, ...types.everyPossibleGELComment_entity,]                                                                                             as const satisfies Array<NullOr<PossibleGeneralLimitComment>>
    const everyGELGlobalComment = [null, ...types.everyPossibleGELGlobalComment_entity,]                                                                                 as const satisfies Array<NullOr<PossibleGeneralGlobalLimitComment>>
    const everyPJLComment = [null, ...types.everyPossiblePJLComment_entity,]                                                                                             as const satisfies Array<NullOr<PossibleProjectileLimitComment>>
    const everyObjectRenderedLimitComment = [null, ...types.everyPossibleObjectRenderedLimitComment_entity,]                                                             as const satisfies Array<NullOr<PossibleRenderedObjectLimitTypeComment>>
    const everyOtherLimitComment = [null, ...types.everyPossibleOtherLimitComment_entity,]                                                                               as const satisfies Array<NullOr<PossibleOtherLimitComment>>
    const possibleCanRespawn = [null, true, false, UNKNOWN_CHARACTER, 'With Vine', 'If not collected',]                                                                  as const satisfies Array<CanRespawnType>
    const possibleOffscreenReferencePoint = [null, UNKNOWN_CHARACTER, 'Center', 'Center\n(excluding path)', 'Edge', 'Anything', 'Anything\n(excluding path)', INFINITY,] as const satisfies Array<OffscreenSpawningAndDespawningReferencePoint>
    const possibleHasNameReferencedInMarioMaker = [null, true, false, UNKNOWN_CHARACTER, 'Only spoken (in english) in Editor',]                                          as const satisfies Array<HasAReferenceInMarioMaker>
    const excludedLanguages = ['german', 'spanish', 'italian', 'dutch', 'portuguese', 'russian', 'japanese', 'chinese', 'korean',]                                       as const satisfies Array<PossibleExcludedLanguages>

    file.forEach(it => {
    describe(getEnglishName(it,), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            test('Entity type', () => expect(it.entityType,).toBeOneOf(possibleEntityType,),)
            describe('1st appearance', () => {
                test('value', () => expect(it.firstAppearanceInMarioMaker,).toBeOneOf(possibleFirstAppearance,),)
                test('version', () => expect(it.firstAppearanceInMarioMaker_version,).toBeOneOf(everyVersion,),)
            },)
            describe('Is in …', () => {
                describe('Game', () => {
                    test('SMM', () => expect(it.isInSuperMarioMaker1,).toBeBoolean(),)
                    test('SMM3DS', () => expect(it.isInSuperMarioMakerFor3DS,).toBeBoolean(),)
                    test('SMM2', () => expect(it.isInSuperMarioMaker2,).toBeBoolean(),)
                },)
                describe('Game style', () => {
                    test('Super Mario Bros.', () => expect(it.isInSMBGameStyle,).toBeBoolean(),)
                    test('Super Mario Bros. 3', () => expect(it.isInSMB3GameStyle,).toBeBoolean(),)
                    test('Super Mario World', () => expect(it.isInSMWGameStyle,).toBeBoolean(),)
                    test('New Super Mario Bros. U', () => expect(it.isInNSMBUGameStyle,).toBeBoolean(),)
                    test('Super Mario 3D World', () => expect(it.isInSM3DWGameStyle,).toBeBoolean(),)
                },)
                describe('Theme', () => {
                    test('ground', () => expect(it.isInGroundTheme,).toBeBoolean(),)
                    test('underground', () => expect(it.isInUndergroundTheme,).toBeBoolean(),)
                    test('underwater', () => expect(it.isInUnderwaterTheme,).toBeBoolean(),)
                    test('desert', () => expect(it.isInDesertTheme,).toBeBoolean(),)
                    test('snow', () => expect(it.isInSnowTheme,).toBeBoolean(),)
                    test('sky', () => expect(it.isInSkyTheme,).toBeBoolean(),)
                    test('forest', () => expect(it.isInForestTheme,).toBeBoolean(),)
                    test('ghost house', () => expect(it.isInGhostHouseTheme,).toBeBoolean(),)
                    test('airship', () => expect(it.isInAirshipTheme,).toBeBoolean(),)
                    test('castle', () => expect(it.isInCastleTheme,).toBeBoolean(),)
                },)
                describe('Time', () => {
                    test('day', () => expect(it.isInDayTime,).toBeBoolean(),)
                    test('night', () => expect(it.isInNightTime,).toBeBoolean(),)
                },)
            },)
            describe('Basic properties', () => {
                test('Category in the editor', () => expect(it.categoryInTheEditor,).toBeOneOf(everyPossibleCategory,),)

                test('Has a mushroom variant', () => expect(it.hasAMushroomVariant,).toBeBoolean(),)
                describe('Can be in a parachute', () => {
                    test('value', () => expect(it.canBeInAParachute,).toBeBoolean(),)
                    test('comment', () => expect(it.canBeInAParachute_comment,).toBeOneOf(possibleBasicPropertyComment,),)
                    test('coherence', () => expect(it.canBeInAParachute_comment,).toBeCoherentWith(it.canBeInAParachute,),)
                },)
                describe('Can have wings', () => {
                    test('value', () => expect(it.canHaveWings,).toBeBoolean(),)
                    test('comment', () => expect(it.canHaveWings_comment,).toBeOneOf(possibleBasicPropertyComment,),)
                    test('coherence', () => expect(it.canHaveWings_comment,).toBeCoherentWith(it.canHaveWings,),)
                },)
            },)
            describe('Specific properties', () => {
                test('Can contain / spawn a key', () => expect(it.canContainOrSpawnAKey,).toBeBoolean(),)
                describe('Is directly affected by an ON/OFF state', () => {
                    test('value', () => expect(it.isAffectedDirectlyByAnOnOrOffState,).toBeBoolean(),)
                    test('comment', () => expect(it.isAffectedDirectlyByAnOnOrOffState_comment,).toBeOneOf(possibleAffectedByOnOffStateComment,),)
                    test('coherence', () => expect(it.isAffectedDirectlyByAnOnOrOffState_comment,).toBeCoherentWith(it.isAffectedDirectlyByAnOnOrOffState,),)
                },)
                describe('Can be put on a Track', () => {
                    test('value', () => expect(it.canBePutOnATrack,).toBeBooleanOrNullOrNotApplicableOrUnknown(),)
                    test('editor limit', () => expect(it.editorLimit_canBePutOnATrack,).toBeOneOf(everyEditorLimitsWithNullAndNotApplicable,),)
                    test('play limit', () => expect(it.whilePlaying_canBePutOnATrack,).toBeOneOf(everyPlayLimitsWithNullAndUnknown,),)
                    //TODO add coherence test
                },)
                test('Can spawn out of a Pipe', () => expect(it.canSpawnOutOfAPipe,).toBeBoolean(),)
                test('Can be put in a Swinging Claw', () => expect(it.canBePutInASwingingClaw,).toBeBoolean(),)
                test('Can be thrown by a Lakitu', () => expect(it.canBeThrownByALakitu,).toBeBooleanOrUnknown(),)
                test('Can be put in a Lakitu’s Cloud', () => expect(it.canBePutInALakituCloud,).toBeBooleanOrUnknown(),)
                test('Can be put in a Clown Car', () => expect(it.canBePutInAClownCar,).toBeBoolean(),)
                test('Can be thrown by a Bullet Launcher', () => expect(it.canBeFiredOutOfABulletLauncher,).toBeBoolean(),)
                test('Can come out of a Block', () => expect(it.canComeOutOfABlock,).toBeBoolean(),)
                test('Can be put in a Tree', () => expect(it.canBePutInATree,).toBeBoolean(),)

                test('Weight', () => expect(it.weight,).toBeOneOf(everyWeight,),)
                describe('Light source emitted', () => {
                    test('value', () => expect(it.lightSourceEmitted,).toBeOneOf(everyLightSources,),)
                    test('Is in SMB', () => expect(it.lightSourceEmitted_isInSMB,).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER,),)
                },)
                test('Can survive in the Lava / Poison', () => expect(it.canSurviveInTheLavaOrThePoison,).toBeOneOf(everySurviveConditionsInDeadlyLiquid,),)
                describe('Bob-omb', () => {
                    test('Can ignite', () => expect(it.canIgniteABobOmb,).toBeOneOf(possibleCanIgniteByBobOmb,),)
                    test('Can be broken / killed', () => expect(it.canBeBrokenOrKilledByABobOmb,).toBeOneOf(possibleCanBeBrokenOrKilledByBobOmb,),)
                },)
                describe('Can be affected by a Twister', () => {
                    test('value',           () => expect(it.canBeAffectedByATwister,).toBeBoolean(),)
                    test('in a parachute',  () => expect(it.canBeAffectedByATwister_parachute,).toBeBoolean(),)
                    test('falling state',   () => expect(it.canBeAffectedByATwister_falling,).toBeBoolean(),)
                },)
                describe('Can go through a wall', () => {
                    test('value', () => expect(it.canGoThroughWalls,).toBeBoolean(),)
                    test('in SM3DW', () => expect(it.canGoThroughWalls_SM3DW,).toBeOneOf(possibleCanGoThroughWallsInSM3DW,),)
                    //TODO add coherence test
                },)
                test('Can be stacked', () => expect(it.canBeStacked,).toBeBoolean(),)
                describe('Is a global ground or global', () => {
                    test('value', () => expect(it.isGlobalGroundOrGlobal,).toBeBoolean(),)
                    test('in SM3DW', () => expect(it.isGlobalGroundOrGlobal_SM3DW,).toBeBoolean(),)
                },)

                test('Instrument', () => expect(it.instrument,).toBeOneOf(everyInstruments,),)
                describe('Can make a sound out of a Music Block', () => {
                    test('value', () => expect(it.canMakeASoundOutOfAMusicBlock,).toBeBoolean(),)
                    test('comment', () => expect(it.canMakeASoundOutOfAMusicBlock_comment,).toBeOneOf(possibleCanMakeASoundOutOfMusicBlockComment,),)
                    test('coherence', () => expect(it.canMakeASoundOutOfAMusicBlock_comment,).toBeCoherentWith(it.canMakeASoundOutOfAMusicBlock,),)
                },)
            },)
            describe('Bowser / Bowser Jr. / Magikoopa properties', () => {
                test('Can be thrown by a Bowser in a Clown Car', () => expect(it.canBeThrownByBowserInClownCar,).toBeOneOf(possibleCanBeThrownByBowserInClownCar,),)
                test('Can be thrown by a Bowser Jr.', () => expect(it.canBeThrownByBowserJr,).toBeOneOf(possibleCanBeThrownByBowserJr,),)
                test('Can be thrown by a Bowser Jr. in a Clown Car', () => expect(it.canBeThrownByBowserJrInClownCar,).toBeOneOf(possibleCanBeThrownByBowserJrInClownCar,),)

                test('Can be transformed by Magikoopa', () => expect(it.canBeTransformedByMagikoopa,).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER,),)
                test('Can be spawned by Magikoopa', () => expect(it.canBeSpawnedByMagikoopa,).toBeBooleanOrNull(),)
                test('Can be spawned by Winged Magikoopa', () => expect(it.canBeSpawnedByWingedMagikoopa,).toBeOneOf(possibleCanBeSpawnedByWingedMagikoopa,),)
            },)
            describe('Limit properties', () => {
                test('Amount', () => expect(it.limitAmount,).toBeOneOf(everyLimitAmountType,),)
                describe('Editor', () => {
                    test('SMM & SMM3DW', () => expect(it.editorLimit_SMM1And3DS,).toBeOneOf(everyEditorLimitsWithNullAndNotApplicable,),)
                    test('SMM2', () => expect(it.editorLimit_SMM2,).toBeOneOf(everyEditorLimitsWithNullAndNotApplicable,),)
                    test('SMM2 (is unknown)', () => expect(it.editorLimit_SMM2_isUnknown,).toBeBoolean(),)
                    //TODO add coherence test
                })
                describe('Play', () => {
                    describe('General Entity (GEL)', () => {
                        test('value', () => expect(it.whilePlaying_isInGEL,).toBeBoolean(),)
                        test('comment', () => expect(it.whilePlaying_isInGEL_comment,).toBeOneOf(everyGELComment,),)
                        test('coherence', () => expect(it.whilePlaying_isInGEL_comment,).toBeCoherentWith(it.whilePlaying_isInGEL,),)
                    },)
                    describe('Global General Entity (GEL)', () => {
                        test('value', () => expect(it.whilePlaying_isInGEL_isSuperGlobal,).toBeBoolean(),)
                        test('comment', () => expect(it.whilePlaying_isInGEL_isSuperGlobal_comment,).toBeOneOf(everyGELGlobalComment,),)
                        test('coherence', () => expect(it.whilePlaying_isInGEL_isSuperGlobal_comment,).toBeCoherentWith(it.whilePlaying_isInGEL_isSuperGlobal,),)
                    },)
                    test('Power-up (PL)', () => expect(it.whilePlaying_isInPL,).toBeBoolean(),)
                    describe('Projectile (PJL)', () => {
                        test('value', () => expect(it.whilePlaying_isInPJL,).toBeBoolean(),)
                        test('comment', () => expect(it.whilePlaying_isInPJL_comment,).toBeOneOf(everyPJLComment,),)
                        test('coherence', () => expect(it.whilePlaying_isInPJL_comment,).toBeCoherentWith(it.whilePlaying_isInPJL,),)
                    },)
                    describe('Object rendered', () => {
                        test('value', () => expect(it.whilePlaying_isInObjectRenderedLimit,).toBeBoolean(),)
                        test('comment', () => expect(it.whilePlaying_isInObjectRenderedLimit_comment,).toBeOneOf(everyObjectRenderedLimitComment,),)
                        test('coherence', () => expect(it.whilePlaying_isInObjectRenderedLimit_comment,).toBeCoherentWith(it.whilePlaying_isInObjectRenderedLimit,),)
                    },)
                    test('Collected Coin', () => expect(it.whilePlaying_isInCollectedCoinLimit,).toBeBoolean(),)
                    describe('Other', () => {
                        test('value', () => expect(it.whilePlaying_otherLimit,).toBeOneOf(everyPlayLimitsWithNull,),)
                        test('comment', () => expect(it.whilePlaying_otherLimit_comment,).toBeOneOf(everyOtherLimitComment,),)
                        test('is unknown', () => expect(it.whilePlaying_otherLimit_isUnknown,).toBeBoolean(),)
                        describe('coherence', () => {
                            test('with comment', () => expect(it.whilePlaying_otherLimit_comment,).toBeCoherentWith(it.whilePlaying_otherLimit,),)
                            //TODO add unknown coherence test
                        },)
                    },)
                })
            },)
            describe('Spawning / Despawning range properties', () => {
                describe('Can respawn', () => {
                    test('value', () => expect(it.canRespawn,).toBeOneOf(possibleCanRespawn,),)
                    test('online', () => expect(it.canRespawn_online,).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER,),)
                    test('online inside a Block', () => expect(it.canRespawn_online_inABlock,).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER,),)
                },)
                describe.skip('Behaviour', () => {//TODO add spawning & despawning behaviour validations
                    test('solo', () => expect(it.behaviour_solo,).toBeOneOf([],),)
                    test('local coop', () => expect(it.behaviour_localCoop,).toBeOneOf([],),)
                    test('online coop', () => expect(it.behaviour_onlineCoop,).toBeOneOf([],),)
                    test('online versus', () => expect(it.behaviour_onlineVS,).toBeOneOf([],),)
                },)
                test('Reference point', () => expect(it.offscreenSpawningAndDespawningReferencePoint,).toBeOneOf(possibleOffscreenReferencePoint,),)
                describe.skip('Range', () => {//TODO add the spawning & despawning range properties validations
                    test('Spawning horizontal', () => expect(it.offscreenSpawningHorizontalRange,).toBeOneOf([],),)
                    test('Despawning horizontal', () => expect(it.offscreenDespawningHorizontalRange,).toBeOneOf([],),)
                    test('Spawning ↑ vertical', () => expect(it.offscreenSpawningUpwardVerticalRange,).toBeOneOf([],),)
                    test('Despawning ↑ vertical', () => expect(it.offscreenDespawningUpwardVerticalRange,).toBeOneOf([],),)
                    test('Spawning ↓ vertical', () => expect(it.offscreenSpawningDownwardVerticalRange,).toBeOneOf([],),)
                    test('Despawning ↓ vertical', () => expect(it.offscreenDespawningDownwardVerticalRange,).toBeOneOf([],),)
                },)
            },)
            describe.skip('Dimension', () => {//TODO add dimension validations
                test('value', () => expect(it.dimension,).toBeOneOf([],),)
                test('maximum', () => expect(it.dimension_maximum,).toBeOneOf([],),)
                test('value (different in SM3DW)', () => expect(it.dimension_differentSM3DW,).toBeOneOf([],),)
                test('maximum (different in SM3DW)', () => expect(it.dimension_maximum_differentSM3DW,).toBeOneOf([],),)
            },)
            describe('Reference on specific condition properties', () => {
                describe('Game style', () => {
                    testEntityLink('Super Mario Bros.', it.inSMBGameStyle,)
                    testEntityLink('Super Mario Bros. 3', it.inSMB3GameStyle,)
                    testEntityLink('Super Mario World', it.inSMWGameStyle,)
                    testEntityLink('New Super Mario Bros. U', it.inNSMBUGameStyle,)
                    testEntityLink('Super Mario 3D World', it.inSM3DWGameStyle,)
                },)
                describe('Theme', () => {
                    testEntityLink('ground', it.inGroundTheme,)
                    testEntityLink('underground', it.inUndergroundTheme,)
                    testEntityLink('underwater', it.inUnderwaterTheme,)
                    testEntityLink('desert', it.inDesertTheme,)
                    testEntityLink('snow', it.inSnowTheme,)
                    testEntityLink('sky', it.inSkyTheme,)
                    testEntityLink('forest', it.inForestTheme,)
                    testEntityLink('ghost house', it.inGhostHouseTheme,)
                    testEntityLink('airship', it.inAirshipTheme,)
                    testEntityLink('castle', it.inCastleTheme,)
                },)
                describe('Time', () => {
                    testEntityLink('day', it.inDayTime,)
                    testEntityLink('night', it.inNightTime,)
                },)
            },)
            test('Has a name referenced directly in a Super Mario Maker game', () => expect(it.hasANameReferencedInMarioMaker,).toBeOneOf(possibleHasNameReferencedInMarioMaker,),)

            testEnglish(it, everyNames,)
        },)
    },)},)
},)
