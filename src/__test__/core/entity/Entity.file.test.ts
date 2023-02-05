import file from 'resources/compiled/Entity.json'

import type {PossibleExcludedLanguages}                                                                                                                                                                                                                                                  from '__test__/helperMethods.types'
import type {CanRespawnType}                                                                                                                                                                                                                                                             from 'core/behaviour/loader.types'
import type {CanMakeASoundOutOfAMusicBlock}                                                                                                                                                                                                                                              from 'core/entity/properties/instrument/loader.types'
import type {OffscreenSpawningAndDespawningReferencePoint}                                                                                                                                                                                                                               from 'core/entity/properties/limit/loader.types'
import type {CanBeAffectedByATwister, CanBeBrokenOrKilledByABobOmb, CanBeSpawnedByWingedMagikoopa, CanBeThrownByBowserInClownCar, CanBeThrownByBowserJr, CanBeThrownByBowserJrInClownCar, CanGoThroughWallsInSM3DW, CanIgniteABobOmb, HasAReferenceInMarioMaker, IsGlobalGroundOrGlobal} from 'core/entityTypes'

import {EveryTypes}                                 from '__test__/EveryTypes'
import {getEnglishName, testEnglish, testLanguages} from '__test__/helperMethods'
import {NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER}       from '__test__/variables'
import {testEntityLink}                             from '__test__/core/entity/testEntityLink'
import {INFINITY, UNKNOWN_CHARACTER}                from 'util/commonVariables'

describe('Entity (file test)', () => {
    const types = EveryTypes.get,
        everyNames = types.everyPossibleName_entity,
        possibleEntityType = ['(Entity)', 'Entity', 'Projectile', 'Object',] as const,
        possibleFirstAppearance = [1, 2,] as const,
        everyVersion = [null, ...types.everyPossibleName_version,],
        everyPossibleCategory = [null, ...types.everyPossibleName_entityCategory,],
        /*everyEditorLimits = types.everyPossibleName_editorLimit, */everyEditorLimitsWithNull = [null, ...types.everyPossibleName_editorLimit,], everyEditorLimitsWithNullAndUnknown = [null, UNKNOWN_CHARACTER, ...types.everyPossibleName_editorLimit,],
        /*everyPlayLimits = types.everyPossibleName_playLimit, everyPlayLimitsWithNull = [null, ...types.everyPossibleName_playLimit,], */everyPlayLimitsWithNullAndUnknown = [null, UNKNOWN_CHARACTER, ...types.everyPossibleName_playLimit,],
        possibleBasicProperty = [null, true, false, UNKNOWN_CHARACTER, 'While playing → LCL',] as const,
        possibleAffectedByOnOffState = [null, true, false, 'Only some variants',] as const,
        everyWeight = [null, UNKNOWN_CHARACTER, ...types.everyPossibleWeight_entity,],
        everyLightSources = [null, UNKNOWN_CHARACTER, ...types.everyPossibleLightSource_entity,],
        everySurviveConditionsInDeadlyLiquid = [null, true, false, UNKNOWN_CHARACTER, ...types.everyPossibleSurviveConditionInDeadlyLiquid_entity,],
        possibleCanIgniteByBobOmb: readonly CanIgniteABobOmb[] = [true, false, 'NSMBU', 'Castle',] as const,
        possibleCanBeBrokenOrKilledByBobOmb: readonly CanBeBrokenOrKilledByABobOmb[] = [true, false, 'Koopa Troopa', 'Unchained Chomp', 'Standing on top of block that get destroyed',] as const,
        possibleAffectedByTwister: readonly CanBeAffectedByATwister[] = [null, true, false, 'When falling', 'Parachute',] as const,
        possibleCanGoThroughWallsInSM3DW: readonly CanGoThroughWallsInSM3DW[] = [null, true, false, 'on down curve',] as const,
        possibleIsGlobalGroundOrGlobal: readonly IsGlobalGroundOrGlobal[] = [null, true, false, 'SM3DW',] as const,
        everyInstruments = [null, ...types.everyPossibleName_instrument, ...types.everyPossibleMixedName_instrument,],
        possibleCanMakeASoundOutOfMusicBlock: readonly CanMakeASoundOutOfAMusicBlock[] = [null, true, false, 'Excluding the top 3 notes',],
        possibleCanBeThrownByBowserInClownCar: readonly CanBeThrownByBowserInClownCar[] = [null, true, false, 'Bob-omb clear condition',] as const,
        possibleCanBeThrownByBowserJr: readonly CanBeThrownByBowserJr[] = [null, false, '3rd phase',] as const,
        possibleCanBeThrownByBowserJrInClownCar: readonly CanBeThrownByBowserJrInClownCar[] = [null, true, false, 'Koopa Troopa clear condition',] as const,
        possibleCanBeSpawnedByWingedMagikoopa: readonly CanBeSpawnedByWingedMagikoopa[] = [null, true, false, 'winged',] as const,
        everyLimitAmountType = [null, UNKNOWN_CHARACTER, ...types.everyPossibleLimitAmountType_entity,],
        everyGEL = [null, true, false, ...types.everyPossibleGEL_entity,],
        everyGELGlobal = [null, true, false, ...types.everyPossibleGELGlobal_entity,],
        everyPJL = [null, true, false, ...types.everyPossiblePJL_entity,],
        everyObjectRenderedLimit = [null, true, false, ...types.everyPossibleObjectRenderedLimit_entity,],
        everyOtherLimitComment = [null, ...types.everyPossibleOtherLimitComment_entity,],
        possibleCanRespawn: readonly CanRespawnType[] = [null, true, false, UNKNOWN_CHARACTER, 'With Vine', 'If not collected',] as const,
        possibleOffscreenReferencePoint: readonly OffscreenSpawningAndDespawningReferencePoint[] = [null, UNKNOWN_CHARACTER, 'Center', 'Center\n(excluding path)', 'Edge', 'Anything', 'Anything\n(excluding path)', INFINITY,] as const,
        possibleHasNameReferencedInMarioMaker: readonly HasAReferenceInMarioMaker[] = [null, true, false, UNKNOWN_CHARACTER, 'Only spoken (in english) in Editor',] as const,
        excludedLanguages: readonly PossibleExcludedLanguages[] = ['german', 'spanish', 'italian', 'dutch', 'portuguese', 'russian', 'japanese', 'chinese', 'korean',]

    file.forEach(it => describe(getEnglishName(it), () => {// eslint-disable-line jest/valid-title
        testLanguages(it, excludedLanguages,)

        describe('Type validation', () => {
            test('Entity type', () => expect(it.entityType).toBeOneOf(possibleEntityType))
            describe('1st appearance', () => {
                test('value', () => expect(it.firstAppearanceInMarioMaker).toBeOneOf(possibleFirstAppearance))
                test('version', () => expect(it.firstAppearanceInMarioMaker_version).toBeOneOf(everyVersion))
            },)
            describe('Is in …', () => {
                test('SMM', () => expect(it.isInSuperMarioMaker1).toBeBooleanOrNull())
                test('SMM3DS', () => expect(it.isInSuperMarioMakerFor3DS).toBeBooleanOrNull())
                test('SMM2', () => expect(it.isInSuperMarioMaker2).toBeBooleanOrNull())
            },)
            describe('Basic properties', () => {
                test('Category in the editor', () => expect(it.categoryInTheEditor).toBeOneOf(everyPossibleCategory))

                test('Has a mushroom variant', () => expect(it.hasAMushroomVariant).toBeBooleanOrNull())
                test('Can be in a parachute', () => expect(it.canBeInAParachute).toBeOneOf(possibleBasicProperty))
                test('Can have wings', () => expect(it.canHaveWings).toBeOneOf(possibleBasicProperty))
            },)
            describe('Specific properties', () => {
                test('Can contain / spawn a key', () => expect(it.canContainOrSpawnAKey).toBeBooleanOrNull())
                test('Is affected directly by an ON/OFF state', () => expect(it.isAffectedDirectlyByAnOnOrOffState).toBeOneOf(possibleAffectedByOnOffState))
                describe('Can be put on a Track', () => {
                    test('value', () => expect(it.canBePutOnATrack).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER))
                    test('editor limit', () => expect(it.editorLimit_canBePutOnATrack).toBeOneOf(everyEditorLimitsWithNull))
                    test('play limit', () => expect(it.whilePlaying_canBePutOnATrack).toBeOneOf(everyPlayLimitsWithNullAndUnknown))
                },)
                test('Can spawn out of a Pipe', () => expect(it.canSpawnOutOfAPipe).toBeBooleanOrNull())
                test('Can be put in a Swinging Claw', () => expect(it.canBePutInASwingingClaw).toBeBooleanOrNull())
                test('Can be thrown by a Lakitu', () => expect(it.canBeThrownByALakitu).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER))
                test('Can be put in a Lakitu\'s Cloud', () => expect(it.canBePutInALakituCloud).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER))
                test('Can be put in a Clown Car', () => expect(it.canBePutInAClownCar).toBeBooleanOrNull())
                test('Can be thrown by a Bullet Launcher', () => expect(it.canBeFiredOutOfABulletLauncher).toBeBooleanOrNull())
                test('Can be put in a Block', () => expect(it.canBePutInABlock).toBeBooleanOrNull())
                test('Can be put in a Tree', () => expect(it.canBePutInATree).toBeBooleanOrNull())

                test('Weight', () => expect(it.weight).toBeOneOf(everyWeight))
                describe('Light source emitted', () => {
                    test('value', () => expect(it.lightSourceEmitted).toBeOneOf(everyLightSources))
                    test('Is in SMB', () => expect(it.lightSourceEmitted_isInSMB).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER))
                },)
                test('Can survive in the Lava / Poison', () => expect(it.canSurviveInTheLavaOrThePoison).toBeOneOf(everySurviveConditionsInDeadlyLiquid))
                describe('Bob-omb', () => {
                    test('Can ignite', () => expect(it.canIgniteABobOmb).toBeOneOf(possibleCanIgniteByBobOmb))
                    test('Can be broken / killed', () => expect(it.canBeBrokenOrKilledByABobOmb).toBeOneOf(possibleCanBeBrokenOrKilledByBobOmb))
                },)
                test('Can be affected by a Twister', () => expect(it.canBeAffectedByATwister).toBeOneOf(possibleAffectedByTwister))
                describe('Can go through a wall', () => {
                    test('value', () => expect(it.canGoThroughWalls).toBeBooleanOrNull())
                    test('in SM3DW', () => expect(it.canGoThroughWalls_SM3DW).toBeOneOf(possibleCanGoThroughWallsInSM3DW))
                },)
                test('Can be stacked', () => expect(it.canBeStacked).toBeBooleanOrNull())
                test('Is a global ground or global', () => expect(it.canBeStacked).toBeOneOf(possibleIsGlobalGroundOrGlobal))

                test('Instrument', () => expect(it.instrument).toBeOneOf(everyInstruments))
                test('Can make a sound out of a Music Block', () => expect(it.canMakeASoundOutOfAMusicBlock).toBeOneOf(possibleCanMakeASoundOutOfMusicBlock))
            },)
            describe('Bowser / Bowser Jr. / Magikoopa properties', () => {
                test('Can be thrown by a Bowser in a Clown Car', () => expect(it.canBeThrownByBowserInClownCar).toBeOneOf(possibleCanBeThrownByBowserInClownCar))
                test('Can be thrown by a Bowser Jr.', () => expect(it.canBeThrownByBowserJr).toBeOneOf(possibleCanBeThrownByBowserJr))
                test('Can be thrown by a Bowser Jr. in a Clown Car', () => expect(it.canBeThrownByBowserJrInClownCar).toBeOneOf(possibleCanBeThrownByBowserJrInClownCar))

                test('Can be transformed by Magikoopa', () => expect(it.canBeTransformedByMagikoopa).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER))
                test('Can be spawned by Magikoopa', () => expect(it.canBeSpawnedByMagikoopa).toBeBooleanOrNull())
                test('Can be spawned by Winged Magikoopa', () => expect(it.canBeSpawnedByWingedMagikoopa).toBeOneOf(possibleCanBeSpawnedByWingedMagikoopa))
            },)
            describe('Entity limit properties', () => {
                test('Amount', () => expect(it.limitAmount).toBeOneOf(everyLimitAmountType))
                describe('Editor', () => {
                    test('SMM & SMM3DW', () => expect(it.editorLimit_SMM1And3DS).toBeOneOf(everyEditorLimitsWithNull))
                    test('SMM2', () => expect(it.editorLimit_SMM2).toBeOneOf(everyEditorLimitsWithNullAndUnknown))
                })
                describe('Play', () => {
                    describe('General Entity (GEL)', () => {
                        test('value', () => expect(it.whilePlaying_isInGEL).toBeOneOf(everyGEL))
                        test('Is super global', () => expect(it.whilePlaying_isInGEL_isSuperGlobal).toBeOneOf(everyGELGlobal))
                    },)
                    test('Power-up (PL)', () => expect(it.whilePlaying_isInPL).toBeBooleanOrNull())
                    test('Projectile (PJL)', () => expect(it.whilePlaying_isInPJL).toBeOneOf(everyPJL))
                    test('Object rendered', () => expect(it.whilePlaying_isInObjectRenderedLimit).toBeOneOf(everyObjectRenderedLimit))
                    test('Collected Coin', () => expect(it.whilePlaying_isInCollectedCoinLimit).toBeBooleanOrNull())
                    describe('Other', () => {
                        test('value', () => expect(it.whilePlaying_otherLimit).toBeOneOf(everyPlayLimitsWithNullAndUnknown))
                        test('comment', () => expect(it.whilePlaying_otherLimit_comment).toBeOneOf(everyOtherLimitComment))
                    },)
                })
            },)
            describe('Spawning / Despawning range properties', () => {
                describe('Can respawn', () => {
                    test('value', () => expect(it.canRespawn).toBeOneOf(possibleCanRespawn))
                    test('online', () => expect(it.canRespawn_online).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER))
                    test('online inside a Block', () => expect(it.canRespawn_online_inABlock).toBeOneOf(NULL_OR_BOOLEAN_OR_UNKNOWN_CHARACTER))
                },)
                describe.skip('Behaviour', () => {//TODO add spawning & despawning behaviour validations
                    test('solo', () => expect(it.behaviour_solo).toBeOneOf([]))
                    test('local coop', () => expect(it.behaviour_localCoop).toBeOneOf([]))
                    test('online coop', () => expect(it.behaviour_onlineCoop).toBeOneOf([]))
                    test('online versus', () => expect(it.behaviour_onlineVS).toBeOneOf([]))
                },)
                test('Reference point', () => expect(it.offscreenSpawningAndDespawningReferencePoint).toBeOneOf(possibleOffscreenReferencePoint))
                describe.skip('Range', () => {//TODO add the spawning & despawning range properties validations
                    test('Spawning horizontal', () => expect(it.offscreenSpawningHorizontalRange).toBeOneOf([]))
                    test('Despawning horizontal', () => expect(it.offscreenDespawningHorizontalRange).toBeOneOf([]))
                    test('Spawning ↑ vertical', () => expect(it.offscreenSpawningUpwardVerticalRange).toBeOneOf([]))
                    test('Despawning ↑ vertical', () => expect(it.offscreenDespawningUpwardVerticalRange).toBeOneOf([]))
                    test('Spawning ↓ vertical', () => expect(it.offscreenSpawningDownwardVerticalRange).toBeOneOf([]))
                    test('Despawning ↓ vertical', () => expect(it.offscreenDespawningDownwardVerticalRange).toBeOneOf([]))
                },)
            },)
            describe.skip('Dimension', () => {//TODO add dimension validations
                test('value', () => expect(it.dimension).toBeOneOf([]))
                test('maximum', () => expect(it.dimension_maximum).toBeOneOf([]))
                test('value (different in SM3DW)', () => expect(it.dimension_differentSM3DW).toBeOneOf([]))
                test('maximum (different in SM3DW)', () => expect(it.dimension_maximum_differentSM3DW).toBeOneOf([]))
            },)
            describe('Reference on specific condition properties', () => {
                describe('Time', () => {
                    testEntityLink('day', it.inDayTheme,)
                    testEntityLink('night', it.inNightTheme,)
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
                describe('Game style', () => {
                    testEntityLink('Super Mario Bros.', it.inSMBGameStyle,)
                    testEntityLink('Super Mario Bros. 3', it.inSMB3GameStyle,)
                    testEntityLink('Super Mario World', it.inSMWGameStyle,)
                    testEntityLink('New Super Mario Bros. U', it.inNSMBUGameStyle,)
                    testEntityLink('Super Mario 3D World', it.inSM3DWGameStyle,)
                },)
            },)
            test('Has a name referenced directly in a Super Mario Maker game', () => expect(it.hasANameReferencedInMarioMaker).toBeOneOf(possibleHasNameReferencedInMarioMaker))

            testEnglish(it, everyNames,)
        },)
    },))
},)
