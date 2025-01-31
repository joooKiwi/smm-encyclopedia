import type {Nullable, NullOr, StringOrNumeric} from '@joookiwi/type'
import type {CollectionHolder}                  from '@joookiwi/collection'
import {Enum}                                   from '@joookiwi/enumerable'

import type {ClassWithNullableAcronym}                                                                                          from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                              from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                from 'core/ClassWithReference'
import type {Limit}                                                                                                             from 'core/limit/Limit'
import type {Names, Ordinals, PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName} from 'core/limit/Limits.types'
import type {TranslationReplaceKeysMap}                                                                                         from 'lang/components/TranslationProperty'
import type {CompanionEnumByNameSingleton}                                                                                      from 'util/enumerable/Singleton.types'

import Image                 from 'app/tools/images/Image'
import {unfinishedText}      from 'app/tools/text/UnfinishedText'
import {Entities}            from 'core/entity/Entities'
import {OtherWordInTheGames} from 'core/otherWordInTheGame/OtherWordInTheGames'
import {LimitLoader}         from 'core/limit/Limit.loader'
import {Import}              from 'util/DynamicImporter'
import {Empty}               from 'util/emptyVariables'
import {StringContainer}     from 'util/StringContainer'
import {ArrayAsCollection}   from 'util/collection/ArrayAsCollection'
import {CompanionEnumByName} from 'util/enumerable/companion/CompanionEnumByName'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER
import EMPTY_OBJECT =            Empty.EMPTY_OBJECT
import EMPTY_STRING =            Empty.EMPTY_STRING

/**
 * @classWithDynamicImport<{@link Entities}>
 * @recursiveReference<{@link LimitLoader}>
 */
export class Limits
    extends Enum<Ordinals, Names>
    implements ClassWithReference<Limit>,
        ClassWithNullableAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Sub class --------------------

    private static readonly PlayLimits = class PlayLimits extends Limits {

        constructor(englishNameAndAcronym: readonly [PossibleEnglishName, PossibleAcronym?,], alternativeEnglishNameAndAcronym?: Nullable<readonly [PossibleAlternativeEnglishName, PossibleAlternativeAcronym?,]>) {
            super(false, englishNameAndAcronym, alternativeEnglishNameAndAcronym,)
        }

    }
    private static readonly EditorLimits = class EditorLimits extends Limits {

        constructor(englishNameAndAcronym: readonly [PossibleEnglishName, PossibleAcronym?,], alternativeEnglishNameAndAcronym?: Nullable<readonly [PossibleAlternativeEnglishName, PossibleAlternativeAcronym?,]>) {
            super(true, englishNameAndAcronym, alternativeEnglishNameAndAcronym,)
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly GENERAL_ENTITY_LIMIT =                           new Limits.PlayLimits(['General Entity Limit', 'GEL',], ['Entity Limit B', 'ELB',],)
    public static readonly POWER_UP_ENTITY_LIMIT =                          new Limits.PlayLimits(['Power-up Limit', 'PL',], ['Entity Limit C', 'ELC',],)

    public static readonly LOOSE_COIN_LIMIT =                               new class Limits_LooseCoinLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.COIN,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Loose Coin Limit', 'LCL',],)
    public static readonly SOUND_EFFECT_LIMIT =                             new Limits.EditorLimits(['Sound Effect Limit','SEL',],)
    public static readonly CORPSE_LIMIT =                                   new class Limits_CorpseLimit extends Limits.PlayLimits {

        protected override _createReferenceMapForNote() {
            return {
                multiplayerVs:   OtherWordInTheGames.MULTIPLAYER_VERSUS.singularLowerCaseNameOnReference,
                multiplayerCoop: OtherWordInTheGames.MULTIPLAYER_COOP.singularLowerCaseNameOnReference,
            } as const satisfies TranslationReplaceKeysMap<string>
        }

        protected override _createReferenceMapForDescription() {
            return {
                multiplayerVs:   OtherWordInTheGames.MULTIPLAYER_VERSUS.singularLowerCaseNameOnReference,
                multiplayerCoop: OtherWordInTheGames.MULTIPLAYER_COOP.singularLowerCaseNameOnReference,
            } as const satisfies TranslationReplaceKeysMap<string>
        }

    }(['Corpse Limit', 'CL',],)
    public static readonly PROJECTILE_LIMIT =                               new Limits.PlayLimits(['Projectile Limit', 'PJL',],)
    public static readonly LIGHT_SOURCE_LIMIT =                             new Limits.PlayLimits(['Light Source Limit', 'LSL',],)

    public static readonly GROUND_LIMIT =                                   new class Limits_GroundLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.GROUND,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Ground Limit',], ['Ground Limit 1',],)
    public static readonly BLOCK_LIMIT =                                    new Limits.EditorLimits(['Block Limit',], ['Ground Limit 2',],)
    public static readonly EXTENDABLE_TERRAIN_LIMIT =                       new class Limits_ExtentableTerrainLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([
                instance.MUSHROOM_PLATFORM, instance.SEMISOLID_PLATFORM, instance.BRIDGE,
                instance.STEEP_SLOPE, instance.GENTLE_SLOPE,
                instance.CONVEYOR_BELT, instance.FAST_CONVEYOR_BELT,
                instance.PIPE, instance.CLEAR_PIPE,
                instance.VINE,
            ],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Platform / Slope / Conveyor Belt / Pipe / Vine" group
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                mushroomPlatformImage:  <Image key="mushroomPlatformImage"  file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                semisolidPlatformImage: <Image key="semisolidPlatformImage" file={links.get(1,).image.getSmw().getFirst()} className="entity-image"/>,
                bridgeImage:            <Image key="bridgeImage"            file={links.get(2,).image.getSmw().getFirst()} className="entity-image"/>,
                slopeImage:             <Image key="slopeImage"             file={links.get(3,).image.getSmw().getFirst()} className="entity-image"/>,
                conveyorBeltImage:      <Image key="conveyorBeltImage"      file={links.get(5,).image.getSmw().getFirst()} className="entity-image"/>,
                pipeImage:              <Image key="pipeImage"              file={links.get(7,).image.getSmw().getFirst()} className="entity-image"/>,
                clearPipeImage:         <Image key="clearPipeImage"         file={links.get(8,).image.getSm3dw().getFirst()} className="entity-image"/>,
                vineImage:              <Image key="vineImage"              file={links.getLast().image.getSmw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['Extendable Terrain Limit', 'ETL',], ['Ground Limit 3',],)
    public static readonly CLEAR_PIPE_LIMIT =                               new class Limits_ClearPipeLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.CLEAR_PIPE,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslationInSm3dw()
        }

    }(['Clear Pipe Limit',],)

    public static readonly GROWN_VINE_LIMIT =                               new class Limits_GrownVineLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.VINE,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Grown Vine Limit', 'GVL',],)
    public static readonly CHECKPOINT_FLAG_LIMIT =                          new class Limits_CheckpointFlagLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.CHECKPOINT_FLAG,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Checkpoint Flag Limit',],)
    public static readonly TRACK_LIMIT =                                    new class Limits_TrackLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.TRACK,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Track Limit',],)
    public static readonly SNAKE_BLOCK_LIMIT =                              new class Limits_SnakeBlockLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.SNAKE_BLOCK,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Snake Block Limit',],)
    public static readonly EXCLAMATION_BLOCK_LIMIT =                        new class Limits_ExclamationBlockLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.EXCLAMATION_MARK_BLOCK,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslationInSm3dw()
        }

    }(['! Block Limit',],)
    public static readonly TRACK_BLOCK_LIMIT =                              new class Limits_TrackBlockLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.TRACK_BLOCK,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslationInSm3dw()
        }

    }(['Track Block Limit',],)
    public static readonly ICICLE_LIMIT =                                   new class Limits_IcicleLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.ICICLE,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Icicle Limit',],)
    public static readonly ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT = new class Limits_OneWayWallOrArrowSignOrDashBlockLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.ONE_WAY_WALL, instance.ARROW_SIGN, instance.DASH_BLOCK,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "One-Way Wall / Arrow Sign / Dash Block" group
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                oneWayWallImage: <Image key="oneWayWallImage" file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                arrowSignImage:  <Image key="arrowSignImage"  file={links.get(1,).image.getSmw().getFirst()} className="entity-image"/>,
                dashBlockImage:  <Image key="dashBlockImage"  file={links.getLast().image.getSm3dw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['One-Way Wall / Arrow Sign / Dash Block Limit',],)

    public static readonly ENTITY_HELD_BY_A_TWISTER_LIMIT =                 new class Limits_EntityHeldByATwisterLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.TWISTER,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Entity Held By A Twister Limit',],)
    public static readonly SNOWBALL_THROWN_BY_A_SPIKE_LIMIT =               new class Limits_SnowballThrownByASpikeLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.SNOWBALL, instance.SPIKE,],)
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                snowballImage: <Image key="snowballImage" file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                spikeImage:    <Image key="spikeImage"    file={links.getLast().image.getSmw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['Snowball Thrown By A Spike Limit',],)
    public static readonly CLEAR_CONDITION_ENTITY_AMOUNT_LIMIT =            new Limits.EditorLimits(['Clear Condition Entity Amount Limit',],)
    public static readonly DYNAMIC_RENDERED_OBJECT_LIMIT =                  new Limits.PlayLimits(['Dynamic Rendered Object Limit',], ['Dynamic Object Displayed Limit',],)

    public static readonly BIG_COIN_LIMIT =                                 new class Limits_BigCoinLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.TEN_COIN, instance.THIRTY_COIN, instance.FIFTY_COIN,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Big Coin" group
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                '10CoinImage': <Image key="10CoinImage" file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                '30CoinImage': <Image key="30CoinImage" file={links.get(1,).image.getSmw().getFirst()} className="entity-image"/>,
                '50CoinImage': <Image key="50CoinImage" file={links.getLast().image.getSmw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['Big Coin Limit',],)
    public static readonly PINK_COIN_LIMIT =                                new class Limits_PinkCoinLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.PINK_COIN,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Pink Coin Limit',],)
    public static readonly COLLECTED_LOOSE_COIN_LIMIT =                     new class Limits_CollectedLooseCoinLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.COIN,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslation()
        }

    }(['Collected Loose Coin Limit',],)
    public static readonly COLLECTED_KEY_LIMIT =                            new class Limits_CollectedKeyLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.KEY, instance.CURSED_KEY,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "(Cursed) Key" groups
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                keyImage:       <Image key="keyImage"       file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                cursedKeyImage: <Image key="cursedKeyImage" file={links.getLast().image.getSmb().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['Collected Key Limit', 'CKL',],)

    public static readonly POWER_UP_LIMIT_EDITOR =                          new Limits.EditorLimits(['Power-up Limit (Editor)', 'PL (E)',],)
    public static readonly PLAYER_FIREBALL =                                new class Limits_PlayerFireballLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.FIREBALL_THROWN_BY_A_PLAYER,],)
        }

        protected override _createReferenceMapForNote() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override _createReferenceMapForDescription() {
            return {
                entityLink: unfinishedText('Fireball',),
            } as const satisfies TranslationReplaceKeysMap<string>
        }

    }(['Player’s Fireball Limit',],)
    public static readonly PLAYER_SUPERBALL =                               new class Limits_PlayerSuperballLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.SUPERBALL_THROWN_BY_A_PLAYER,],)
        }

        protected override _createReferenceMapForNote() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslationInSmb()
        }

    }(['Player’s Superball Limit',],)
    public static readonly PLAYER_BOMB =                                    new class Limits_PlayerBombLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.BOMB_THROWN_BY_A_LINK,],)
        }

        protected override _createReferenceMapForNote() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslationInSmb()
        }

    }(['Player’s Bomb Limit',],)
    public static readonly PLAYER_BUILDER_BOX =                             new class Limits_PlayerBuilderBoxLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.BUILDER_BOX_THROWN_BY_A_PLAYER,],)
        }

        protected override _createReferenceMapForNote() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override _createReferenceMapForDescription() {
            return {
                entityLink: unfinishedText('Builder Box',),
            } as const satisfies TranslationReplaceKeysMap<string>
        }

    }(['Player’s Builder Box Limit',],)
    public static readonly PLAYER_BOOMERANG =                               new class Limits_PlayerBoomerangLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.BOOMERANG_THROWN_BY_A_PLAYER,],)
        }

        protected override _createReferenceMapForNote() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override _createReferenceMapForDescription() {
            return {
                entityLink: unfinishedText('Boomerang',),
            } as const satisfies TranslationReplaceKeysMap<string>
        }

    }(['Player’s Boomerang Limit',],)
    public static readonly PLAYER_CANNONBALL =                              new class Limits_PlayerCannonballLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.CANNONBALL_THROWN_BY_A_PLAYER,],)
        }

        protected override _createReferenceMapForNote() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override _createReferenceMapForDescription() {
            return {
                entityLink: unfinishedText('Cannonball',),
            } as const satisfies TranslationReplaceKeysMap<string>
        }

    }(['Player’s Cannonball Limit',],)
    public static readonly HATCHED_YOSHI_LIMIT =                            new class Limits_HatchedYoshiLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.YOSHI, instance.RED_YOSHI,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "(Red) Yoshi" group
        }

        protected override _createReferenceMapForNote() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override _createReferenceMapForDescription() {
            // const links = this.entityLink
            return {
                yoshiImage:    <Image key="yoshiImage" className="entity-image yoshi-image" variable="yoshi" isSquared/>,
                redYoshiImage: <Image key="red-yoshiImage" className="entity-image redYoshi-image" variable="red-yoshi" isSquared/>,
                // yoshiImage:    <Image key="yoshiImage"    file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                // redYoshiImage: <Image key="redYoshiImage" file={links.getLast().image.getSmw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['Hatched Yoshi Limit', 'HYL',],)

    public static readonly GENERAL_ENTITY_LIMIT_EDITOR =                    new Limits.EditorLimits(['General Entity Limit (Editor)', 'GEL (E)',], ['General Enemy Limit',],)
    public static readonly CHARVAARGH_LIMIT =                               new class Limits_CharvaarghLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.CHARVAARGH,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslationInSm3dw()
        }

    }(['Charvaargh Limit',],)
    public static readonly PIRANHA_CREEPER_LIMIT =                          new class Limits_PiranhaCreeperLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.PIRANHA_CREEPER,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslationInSm3dw()
        }

    }(['Piranha Creeper Limit',],)
    public static readonly BOWSER_AND_BOWSER_JR_LIMIT =                     new class Limits_BowserAndBowserJrLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.BOWSER, instance.BOWSER_JR,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Bowser (Jr.)" group
        }

        protected override _createReferenceMapForDescription(): TranslationReplaceKeysMap<ReactJSXElement> {
            const links = this.entityLink
            return {
                bowserImage: <Image key="bowserImage" file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                bowserJrImage: <Image key="bowserJrImage" file={links.getLast().image.getSmw().getFirst()} className="entity-image"/>,
            }
        }

    }(['Bowser (Jr.) Limit',],)
    public static readonly BOOM_BOOM_AND_POM_POM_LIMIT =                    new class Limits_BoomBoomAndPomPomLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.BOOM_BOOM, instance.POM_POM,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Boom Boom / Pom Pom" group
        }

        protected override _createReferenceMapForDescription(): TranslationReplaceKeysMap<ReactJSXElement> {
            const links = this.entityLink
            return {
                boomBoomImage: <Image key="boomBoomImage" file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                pomPomImage: <Image key="pomPomImage" file={links.getLast().image.getSm3dw().getFirst()} className="entity-image"/>,
            }
        }

    }(['Boom Boom / Pom Pom Limit',],)
    public static readonly KOOPALING_LIMIT =                                new class Limits_KoopalingLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.LARRY, instance.IGGY, instance.WENDY, instance.LEMMY, instance.ROY, instance.MORTON, instance.LUDWIG,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Koopalings" group
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                larryImage:  <Image key="larryImage"  file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                iggyImage:   <Image key="iggyImage"   file={links.get(1,).image.getSmw().getFirst()} className="entity-image"/>,
                wendyImage:  <Image key="wendyImage"  file={links.get(2,).image.getSmw().getFirst()} className="entity-image"/>,
                lemmyImage:  <Image key="lemmyImage"  file={links.get(3,).image.getSmw().getFirst()} className="entity-image"/>,
                royImage:    <Image key="royImage"    file={links.get(4,).image.getSmw().getFirst()} className="entity-image"/>,
                mortonImage: <Image key="mortonImage" file={links.get(5,).image.getSmw().getFirst()} className="entity-image"/>,
                ludwigImage: <Image key="ludwigImage" file={links.getLast().image.getSmw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['Koopaling Limit',],)
    public static readonly ANGRY_SUN_OR_MOON_LIMIT =                        new class Limits_AngrySunOrMoonLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.ANGRY_SUN, instance.MOON,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Angry Sun / Moon" group
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                angrySunImage: <Image key="angrySunImage" file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                moonImage:     <Image key="moonImage"     file={links.getLast().image.getSmw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['Angry Sun / Moon Limit',],)
    public static readonly PHANTO_LIMIT =                                   new class Limits_PhantoLimit extends Limits.PlayLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.PHANTO,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslationInSmb()
        }

    }(['Phanto Limit',],)
    public static readonly KOOPA_TROOPA_CAR_LIMIT =                         new class Limits_KoopaTroopaCarLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.KOOPA_TROOPA_CAR,],)
        }

        protected override _createReferenceMapForDescription() {
            return this._createEntityImageTranslationInSm3dw()
        }

    }(['Koopa Troopa Car Limit',],)

    public static readonly WARP_DOOR_LIMIT =                                new class Limits_WarpDoorLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.WARP_DOOR, instance.P_WARP_DOOR, instance.KEY_DOOR,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Warp Doors" group
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                warpDoorImage:  <Image key="warpDoorImage"  file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
                pWarpDoorImage: <Image key="pWarpDoorImage" file={links.get(1,).image.getSmw().getFirst()} className="entity-image"/>,
                keyDoorImage:   <Image key="keyDoorImage"   file={links.getLast().image.getSmw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['Warp Door Limit',],)
    public static readonly WARP_BOX_LIMIT =                                 new class Limits_WarpBoxLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.WARP_BOX, instance.WARP_BOX_WITH_KEY,],)
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Warp Boxes" group
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                warpBoxImage:        <Image key="warpBoxImage"        file={links.getFirst().image.getSm3dw().getFirst()} className="entity-image"/>,
                warpBoxWithKeyImage: <Image key="warpBoxWithKeyImage" file={links.getLast().image.getSm3dw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    }(['Warp Box Limit',],)
    public static readonly WARP_PIPE_LIMIT =                                new class Limits_WarpPipeLimit extends Limits.EditorLimits {

        protected override _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
            return new ArrayAsCollection([instance.PIPE,],)
        }

        protected override _createReferenceMapForDescription() {
            const links = this.entityLink
            return {
                entityImage: <Image key="entityImage" file={links.getFirst().image.getSmw().getFirst()} className="entity-image"/>,
            } as const satisfies TranslationReplaceKeysMap<NonNullReactElement>
        }

    } (['Warp Pipe Limit',],)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<Limits, typeof Limits> = class CompanionEnum_Limits
        extends CompanionEnumByName<Limits, typeof Limits> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Limits

        private constructor() {
            super(Limits,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Limits()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| Limits | string>,): Limits {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.findFirstOrNull(it =>
                it.englishName === value
                || it.englishName.replace(' Limit', EMPTY_STRING,) === value
                || it.englishName.replace(' Limit (Editor)', EMPTY_STRING,) === value
                || it.alternativeEnglishName === value
                || it.alternativeEnglishName?.replace(' Limit', EMPTY_STRING,) === value
                || it.alternativeEnglishName?.replace(' Limit (Editor)', EMPTY_STRING,) === value,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Limit>

    #reference?: Limit
    readonly #isEditorLimit
    #noteForTranslation?: TranslationReplaceKeysMap<StringOrNumeric>
    #descriptionForTranslation?: TranslationReplaceKeysMap<ReactElementOrString>
    readonly #acronym: NullOr<PossibleAcronym>
    readonly #englishName: StringContainer<PossibleEnglishName>
    readonly #alternativeEnglishName: NullOr<StringContainer<PossibleAlternativeEnglishName>>
    readonly #alternativeAcronym: NullOr<PossibleAlternativeAcronym>
    #entityLink?: CollectionHolder<Entities>
    #groupLink?: object

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(isEditorLimit: boolean, [englishName, acronym,]: readonly [PossibleEnglishName, PossibleAcronym?,], alternativeEnglishNameAndAcronym: Nullable<readonly [PossibleAlternativeEnglishName, PossibleAlternativeAcronym?,]> = null,) {
        super()
        this.#isEditorLimit = isEditorLimit
        this.#englishName = new StringContainer(englishName,)
        this.#acronym = acronym ?? null
        if (alternativeEnglishNameAndAcronym == null)
            this.#alternativeEnglishName = this.#alternativeAcronym = null
        else {
            const [alternativeEnglishName, alternativeAcronym = null,] = alternativeEnglishNameAndAcronym
            this.#alternativeEnglishName = new StringContainer(alternativeEnglishName,)
            this.#alternativeAcronym = alternativeAcronym
        }
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Reference --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, Limit> {
        return this.#REFERENCE_MAP ??= LimitLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): Limit {
        return this.#reference ??= Limits.REFERENCE_MAP.get(this.englishName,)!
    }

    //endregion -------------------- Reference --------------------

    /**
     * Tell whenever the {@link Limits} is an editor limit (<b>true</b>) a play limit (<b>false</b>)
     *
     * @backingField
     * @see Limit.type
     * @see LimitTypes
     */
    public get isEditorLimit(): boolean {
        return this.#isEditorLimit
    }

    //region -------------------- Acronym / english name --------------------

    public get acronym(): NullOr<PossibleAcronym> {
        return this.#acronym
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get alternativeAcronym(): NullOr<PossibleAlternativeAcronym> {
        return this.#alternativeAcronym
    }

    public get alternativeEnglishName(): NullOr<PossibleAlternativeEnglishName> {
        return this.#alternativeEnglishName?.get ?? null
    }

    public get alternativeEnglishNameInHtml(): string {
        return this.#alternativeEnglishName?.getInHtml ?? EMPTY_STRING
    }

    //endregion -------------------- Acronym / english name --------------------
    //region -------------------- Translation --------------------

    protected _createReferenceMapForNote(): TranslationReplaceKeysMap<StringOrNumeric> {
        return EMPTY_OBJECT
    }

    /**
     * Retrieve the {@link Limit.amountComment} translation map ready
     * as an {@link Object} of {@link StringOrNumeric}
     *
     * @lateInititialization
     */
    public get noteForTranslation(): TranslationReplaceKeysMap<StringOrNumeric> {
        return this.#noteForTranslation ??= this._createReferenceMapForNote()
    }


    protected _createReferenceMapForDescription(): TranslationReplaceKeysMap<ReactElementOrString> {
        return EMPTY_OBJECT
    }

    /**
     * Retrieve the {@link Limit.description} translation map ready
     * as an {@link Object} of {@link ReactElementOrString}
     *
     * @lateInititialization
     */
    public get descriptionForTranslation(): TranslationReplaceKeysMap<ReactElementOrString> {
        return this.#descriptionForTranslation ??= this._createReferenceMapForDescription()
    }

    //endregion -------------------- Translation --------------------
    //region -------------------- Group link --------------------

    protected get _groupLink(): NullOr<object> {
        return null
    }

    /**
     * The group reference being present on the current {@link Limits limit}
     *
     * @note This is currently always {@link EMPTY_OBJECT} since there is no group in the project
     */
    public get groupLink(): object {
        if (this.#groupLink != null)
            return this.#groupLink

        const link = this._groupLink
        return this.#groupLink = link == null
            ? EMPTY_OBJECT
            : link//.reference
    }

    //endregion -------------------- Group link --------------------
    //region -------------------- Entity link --------------------

    protected _entityLink(instance: typeof Entities,): CollectionHolder<Entities> {
        return EMPTY_COLLECTION_HOLDER
    }

    /** The {@link Entities entity references} being present on the current {@link Limits limit} */
    public get entityLink(): CollectionHolder<Entities> {
        return this.#entityLink ??= this._entityLink(Import.Entities,)
    }

    //endregion -------------------- Entity link --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected _createEntityImageTranslation(): TranslationReplaceKeysMap<ReactJSXElement> {
        return { entityImage: <Image key="entityImage" file={this.entityLink.getFirst().image.getSmw().getFirst()} className="entity-image"/>, }
    }

    protected _createEntityImageTranslationInSmb(): TranslationReplaceKeysMap<ReactJSXElement> {
        return { entityImage: <Image key="entityImage" file={this.entityLink.getFirst().image.getSmb().getFirst()} className="entity-image"/>, }
    }

    protected _createEntityImageTranslationInSm3dw(): TranslationReplaceKeysMap<ReactJSXElement> {
        return { entityImage: <Image key="entityImage" file={this.entityLink.getFirst().image.getSm3dw().getFirst()} className="entity-image"/>, }
    }

    //endregion -------------------- Methods --------------------

}

export namespace Limits {

    /** The companion instance of a {@link Limits} */
    export const Companion = Limits.CompanionEnum.get

    const values = Companion.values

    export const ALL = values.toArray()
    export const PLAY = values.filterNot(it => it.isEditorLimit,).toArray()
    export const EDITOR = values.filter(it => it.isEditorLimit,).toArray()

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).Limits = Limits

type PossibleGroupLinkInitialisation = NullOr<object>
