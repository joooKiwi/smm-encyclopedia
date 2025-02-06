import type {CollectionHolder}                     from '@joookiwi/collection'
import type {PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable'
import type {NullOr}                               from '@joookiwi/type'
import {Enum}                                      from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                    from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                      from 'core/ClassWithReference'
import type {Names as Names_CharacterNames}                           from 'core/characterName/CharacterNames.types'
import type {Names, Ordinals, PossibleEnglishName, PossibleReference} from 'core/editorVoice/EditorVoices.types'
import type {CompanionEnumDeclaration_EditorVoices}                   from 'core/editorVoice/EditorVoice.companionEnumDeclaration'
import type {EditorVoiceSoundFile}                                    from 'core/editorVoice/file/EditorVoiceSoundFile'
import type {Names as Names_Entities}                                 from 'core/entity/Entities.types'

import type {CharacterNames}            from 'core/characterName/CharacterNames'
import {editorVoiceSound}               from 'core/editorVoice/file/fileCreator'
import type {Entities}                  from 'core/entity/Entities'
import {Import}                         from 'util/DynamicImporter'
import {Empty}                          from 'util/emptyVariables'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'
import {ArrayAsCollection}              from 'util/collection/ArrayAsCollection'

import EMPTY_COLLECTION_HOLDER = Empty.EMPTY_COLLECTION_HOLDER

/**
 * @todo change the english name to the enum name for the _createEntityReference
 * @todo Change the reference used from the "Brick Block" to "Block"
 * @todo Change the reference used for the "Big Mushroom" as 2 different sounds
 * @todo Change the reference used from the "Green Koopa Troopa" to "Koopa Troopa"
 * @todo Change the reference used from the "Angry Sun" to "Sun"
 * @recursiveReference<{@link Entities}, {@link CharacterNames}>
 * @classWithDynamicImport<{@link Entities}, {@link CharacterNames}>
 */
export abstract class EditorVoices<const FILE_NAME extends string = string, >
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<PossibleReference> {

    //region -------------------- Sub class --------------------

    /** A child class of an {@link EditorVoices}, but specialized for the {@link Entities} */
    private static readonly EntityEditorVoices = class EntityEditorVoices<const FILE_NAME extends string, >
        extends EditorVoices<FILE_NAME> {

        protected override _retrieveReference() {
            return this.entityReferences.getFirst().reference
        }

        public override get characterNameReferences() {
            return EMPTY_COLLECTION_HOLDER
        }

    }

    /** A child class of an {@link EditorVoices}, but specialized for the {@link CharacterNames} */
    private static readonly CharacterNameEditorVoices = class CharacterNameEditorVoices<const FILE_NAME extends string, >
        extends EditorVoices<FILE_NAME> {

        protected override _retrieveReference() {
            return this.characterNameReferences.getFirst().reference
        }

        public override get entityReferences() {
            return EMPTY_COLLECTION_HOLDER
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                   new EditorVoices.EntityEditorVoices('Ground',                          'voice_ground',)
    public static readonly START_GROUND =             new EditorVoices.EntityEditorVoices('Start Ground',                    'voice_startground',)
    public static readonly GOAL_GROUND =              new EditorVoices.EntityEditorVoices('Goal Ground',                     'voice_goalground',)
    public static readonly STEEP_SLOPE =              new EditorVoices.EntityEditorVoices('Steep Slope',                     'se_ui_singingparts_steepslope',)
    public static readonly GENTLE_SLOPE =             new EditorVoices.EntityEditorVoices('Gentle Slope',                    'se_ui_singingparts_gentleslope',)

    public static readonly PIPE =                     new EditorVoices.EntityEditorVoices('Pipe',                            'voice_pipe',)
    public static readonly CLEAR_PIPE =               new EditorVoices.EntityEditorVoices('Clear Pipe',                      'se_ui_singingparts_ClearPipe',)

    public static readonly SPIKE_TRAP =               new EditorVoices.EntityEditorVoices('Spike Trap',                      'voice_spiketrap',)
    public static readonly JELECTRO =                 new EditorVoices.EntityEditorVoices('Jelectro',                        'voice_jellelectro',)
    public static readonly SEA_URCHIN =               new EditorVoices.EntityEditorVoices('Sea Urchin',                      'voice_seaechinus',)
    public static readonly SPIKE_BLOCK =              new EditorVoices.EntityEditorVoices('Spike Block',                     'se_ui_singingparts_SpikeBlock',)

    public static readonly MUSHROOM_PLATFORM =        new EditorVoices.EntityEditorVoices('Mushroom Platform',               'voice_mushroomplatform',)
    public static readonly SEMISOLID_PLATFORM =       new EditorVoices.EntityEditorVoices('Semisolid Platform',              'voice_semisolidplatform',)
    public static readonly BRIDGE =                   new EditorVoices.EntityEditorVoices('Bridge',                          'voice_bridge',)

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BLOCK =                    new class EditorVoices_Block extends EditorVoices.EntityEditorVoices<'voice_block'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.BRICK_BLOCK, instance.CRISTAL_BLOCK, instance.ROTATING_BLOCK,],)
        }

    }('Block', 'voice_block',)

    public static readonly HARD_BLOCK =               new class EditorVoices_HardBlock extends EditorVoices.EntityEditorVoices<'voice_hardblock'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.HARD_BLOCK, instance.ROCK_BLOCK,],)
        }

    }('Hard Block', 'voice_hardblock',)

    public static readonly QUESTION_MARK_BLOCK =      new EditorVoices.EntityEditorVoices('? Block',                         'voice_questionblock',)
    public static readonly HIDDEN_BLOCK =             new EditorVoices.EntityEditorVoices('Hidden Block',                    'voice_hiddenblock',)

    public static readonly EXCLAMATION_MARK_BLOCK =   new EditorVoices.EntityEditorVoices('! Block',                         'se_ui_singingparts_!Block',)

    public static readonly NOTE_BLOCK =               new EditorVoices.EntityEditorVoices('Note Block',                      'voice_noteblock',)

    public static readonly DONUT_BLOCK =              new EditorVoices.EntityEditorVoices('Donut Block',                     'voice_donutblock',)

    public static readonly CLOUD_BLOCK =              new EditorVoices.EntityEditorVoices('Cloud Block',                     'voice_cloudblock',)

    public static readonly ON_OFF_SWITCH =            new EditorVoices.EntityEditorVoices('ON/OFF Switch',                   'se_ui_singingparts_ONOFFswitch',)
    public static readonly DOTTED_LINE_BLOCK =        new EditorVoices.EntityEditorVoices('Dotted-Line Block',               'se_ui_singingparts_Dotted-LineBlock_nr',)

    public static readonly P_BLOCK =                  new EditorVoices.EntityEditorVoices('P Block',                         'se_ui_singingparts_PBlock',)

    public static readonly BLINKING_BLOCK =           new EditorVoices.EntityEditorVoices('Blinking Block',                  'se_ui_singingparts_BlinkingBlock',)

    public static readonly ICE_BLOCK =                new EditorVoices.EntityEditorVoices('Ice Block',                       'voice_iceblock2',)
    public static readonly ICICLE =                   new EditorVoices.EntityEditorVoices('Icicle',                          'se_ui_singingparts_icicle',)

    public static readonly COIN =                     new EditorVoices.EntityEditorVoices('Coin',                            'voice_coin',)
    public static readonly FROZEN_COIN =              new EditorVoices.EntityEditorVoices('Frozen Coin',                     'se_ui_singingparts_FrozenCoin',)
    public static readonly TEN_COIN =                 new EditorVoices.EntityEditorVoices('10-Coin',                         'se_ui_singingparts_10-coin',)
    public static readonly THIRTY_COIN =              new EditorVoices.EntityEditorVoices('30-Coin',                         'se_ui_singingparts_30-coin',)
    public static readonly FIFTY_COIN =               new EditorVoices.EntityEditorVoices('50-Coin',                         'se_ui_singingparts_50-coin',)
    public static readonly PINK_COIN =                new EditorVoices.EntityEditorVoices('Pink Coin',                       'se_ui_singingparts_pinkcoin',)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------

    public static readonly SUPER_MUSHROOM =           new EditorVoices.EntityEditorVoices('Super Mushroom',                  'voice_supermushroom',)
    public static readonly SUPER_MARIO =              new EditorVoices.CharacterNameEditorVoices('Super Mario',              'voice_supermario',)
    public static readonly SUPER_LUIGI =              new EditorVoices.CharacterNameEditorVoices('Super Luigi',              'se_ui_singingparts_SuperLuigi',)
    public static readonly SUPER_TOAD =               new EditorVoices.CharacterNameEditorVoices('Super Toad',               'se_ui_singingparts_SuperToad',)
    public static readonly SUPER_TOADETTE =           new EditorVoices.CharacterNameEditorVoices('Super Toadette',           'se_ui_singingparts_SuperToadette',)

    public static readonly FIRE_FLOWER =              new EditorVoices.EntityEditorVoices('Fire Flower',                     'voice_fireflower',)
    public static readonly FIRE_MARIO =               new EditorVoices.CharacterNameEditorVoices('Fire Mario',               'voice_firemario',)
    public static readonly FIRE_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Fire Luigi',               'se_ui_singingparts_FireLuigi',)
    public static readonly FIRE_TOAD =                new EditorVoices.CharacterNameEditorVoices('Fire Toad',                'se_ui_singingparts_FireToad',)
    public static readonly FIRE_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Fire Toadette',            'se_ui_singingparts_FireToadette',)

    public static readonly SUPERBALL_FLOWER =         new EditorVoices.EntityEditorVoices('Superball Flower',                'se_ui_singingparts_SuperballFlower',)
    public static readonly SUPERBALL_MARIO =          new EditorVoices.CharacterNameEditorVoices('Superball Mario',          'se_ui_singingparts_SuperballMario',)
    public static readonly SUPERBALL_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Superball Luigi',          'se_ui_singingparts_SuperballLuigi',)
    public static readonly SUPERBALL_TOAD =           new EditorVoices.CharacterNameEditorVoices('Superball Toad',           'se_ui_singingparts_SuperballToad',)
    public static readonly SUPERBALL_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Superball Toadette',       'se_ui_singingparts_SuperballToadette',)

    public static readonly MYSTERY_MUSHROOM =         new EditorVoices.EntityEditorVoices('Mystery Mushroom',                'voice_mysterymushroom',)
    public static readonly COSTUME_MARIO =            new EditorVoices.CharacterNameEditorVoices('Costume Mario',            'voice_costumemario',)

    public static readonly WEIRD_MUSHROOM =           new EditorVoices.EntityEditorVoices('Weird Mushroom',                  'voice_weiredmashroom',)
    public static readonly WEIRD_MARIO =              new EditorVoices.CharacterNameEditorVoices('Weird Mario',              'voice_weiredmario',)

    public static readonly MASTER_SWORD =             new EditorVoices.EntityEditorVoices('Master Sword',                    'se_ui_singingparts_MasterSword',)
    public static readonly LINK =                     new EditorVoices.CharacterNameEditorVoices('Link',                     'se_ui_singingparts_Link',)

    public static readonly BIG_MUSHROOM_SMM1 =        new class EditorVoices_BigMushroomSMM1 extends EditorVoices.EntityEditorVoices<'voice_bigmashroom'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.BIG_MUSHROOM_CLASSIC, instance.BIG_MUSHROOM_MODERN,],)
        }

    }('Big Mushroom (SMM)', 'voice_bigmashroom',)
    public static readonly BIG_MUSHROOM_SMM2 =        new class EditorVoices_BigMushroomSMM2 extends EditorVoices.EntityEditorVoices<'voice_BigMushroom'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.BIG_MUSHROOM,],)
        }

    }('Big Mushroom (SMM2)', 'voice_BigMushroom',)
    public static readonly GIANT_MARIO =              new EditorVoices.CharacterNameEditorVoices('Giant Mario',              'voice_bigmario',)
    public static readonly GIANT_LUIGI =              new EditorVoices.CharacterNameEditorVoices('Giant Luigi',              'se_ui_singingparts_BigLuigi',)
    public static readonly GIANT_TOAD =               new EditorVoices.CharacterNameEditorVoices('Giant Toad',               'se_ui_singingparts_BigToad',)
    public static readonly GIANT_TOADETTE =           new EditorVoices.CharacterNameEditorVoices('Giant Toadette',           'se_ui_singingparts_BigToadette',)

    public static readonly SMB2_MUSHROOM =            new EditorVoices.EntityEditorVoices('SMB2 Mushroom',                   'se_ui_singingparts_SMB2Mushroom',)
    public static readonly SMB2_MARIO =               new EditorVoices.CharacterNameEditorVoices('SMB2 Mario',               'se_ui_singingparts_SMB2Mario',)
    public static readonly SMB2_LUIGI =               new EditorVoices.CharacterNameEditorVoices('SMB2 Luigi',               'se_ui_singingparts_SMB2Luigi',)
    public static readonly SMB2_TOAD =                new EditorVoices.CharacterNameEditorVoices('SMB2 Toad',                'se_ui_singingparts_SMB2Toad',)
    public static readonly SMB2_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('SMB2 Toadette',            'se_ui_singingparts_SMB2Toadette',)

    public static readonly SUPER_LEAF =               new EditorVoices.EntityEditorVoices('Super Leaf',                      'voice_superleaf',)
    public static readonly RACCOON_MARIO =            new EditorVoices.CharacterNameEditorVoices('Raccoon Mario',            'voice_lacoonmario',)
    public static readonly RACCOON_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Raccoon Luigi',            'se_ui_singingparts_RacoonLuigi',)
    public static readonly RACCOON_TOAD =             new EditorVoices.CharacterNameEditorVoices('Raccoon Toad',             'se_ui_singingparts_RacoonToad',)
    public static readonly RACCOON_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Raccoon Toadette',         'se_ui_singingparts_RacoonToadette',)

    public static readonly FROG_SUIT =                new EditorVoices.EntityEditorVoices('Frog Suit',                       'se_ui_singingparts_FrogSuit',)
    public static readonly FROG_MARIO =               new EditorVoices.CharacterNameEditorVoices('Frog Mario',               'se_ui_singingparts_FrogMario',)
    public static readonly FROG_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Frog Luigi',               'se_ui_singingparts_FrogLuigi',)
    public static readonly FROG_TOAD =                new EditorVoices.CharacterNameEditorVoices('Frog Toad',                'se_ui_singingparts_FrogToad',)
    public static readonly FROG_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Frog Toadette',            'se_ui_singingparts_FrogToadette',)

    public static readonly CAPE_FEATHER =             new EditorVoices.EntityEditorVoices('Cape Feather',                    'voice_capefeather',)
    public static readonly CAPE_MARIO =               new EditorVoices.CharacterNameEditorVoices('Cape Mario',               'voice_capemario',)
    public static readonly CAPE_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Cape Luigi',               'se_ui_singingparts_CapeLuigi',)
    public static readonly CAPE_TOAD =                new EditorVoices.CharacterNameEditorVoices('Cape Toad',                'se_ui_singingparts_CapeToad',)
    public static readonly CAPE_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Cape Toadette',            'se_ui_singingparts_CapeToadette',)

    public static readonly POWER_BALLOON =            new EditorVoices.EntityEditorVoices('Power Balloon',                   'se_ui_singingparts_PowerBalloon',)
    public static readonly BALLOON_MARIO =            new EditorVoices.CharacterNameEditorVoices('Balloon Mario',            'se_ui_singingparts_BalloonMario',)
    public static readonly BALLOON_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Balloon Luigi',            'se_ui_singingparts_BalloonLuigi',)
    public static readonly BALLOON_TOAD =             new EditorVoices.CharacterNameEditorVoices('Balloon Toad',             'se_ui_singingparts_BalloonToad',)
    public static readonly BALLOON_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Balloon Toadette',         'se_ui_singingparts_BalloonToadette',)

    public static readonly PROPELLER_MUSHROOM =       new EditorVoices.EntityEditorVoices('Propeller Mushroom',              'voice_propellermushroom',)
    public static readonly PROPELLER_MARIO =          new EditorVoices.CharacterNameEditorVoices('Propeller Mario',          'voice_propellermario',)
    public static readonly PROPELLER_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Propeller Luigi',          'se_ui_singingparts_PropellerLuigi',)
    public static readonly PROPELLER_TOAD =           new EditorVoices.CharacterNameEditorVoices('Propeller Toad',           'se_ui_singingparts_PropellerToad',)
    public static readonly PROPELLER_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Propeller Toadette',       'se_ui_singingparts_PropellerToadette',)

    public static readonly SUPER_ACORN =              new EditorVoices.EntityEditorVoices('Super Acorn',                     'se_ui_singingparts_SuperAcorn',)
    public static readonly FLYING_SQUIRREL_MARIO =    new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Mario',    'se_ui_singingparts_FlyingSquirrelMario',)
    public static readonly FLYING_SQUIRREL_LUIGI =    new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Luigi',    'se_ui_singingparts_FlyingSquirrelLuigi',)
    public static readonly FLYING_SQUIRREL_TOAD =     new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Toad',     'se_ui_singingparts_FlyingSquirrelToad',)
    public static readonly FLYING_SQUIRREL_TOADETTE = new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Toadette', 'se_ui_singingparts_FlyingSquirrelToadette',)

    public static readonly SUPER_BELL =               new EditorVoices.EntityEditorVoices('Super Bell',                      'se_ui_singingparts_SuperBell',)
    public static readonly CAT_MARIO =                new EditorVoices.CharacterNameEditorVoices('Cat Mario',                'se_ui_singingparts_CatMario',)
    public static readonly CAT_LUIGI =                new EditorVoices.CharacterNameEditorVoices('Cat Luigi',                'se_ui_singingparts_CatLuigi',)
    public static readonly CAT_TOAD =                 new EditorVoices.CharacterNameEditorVoices('Cat Toad',                 'se_ui_singingparts_CatToad',)
    public static readonly CAT_TOADETTE =             new EditorVoices.CharacterNameEditorVoices('Cat Toadette',             'se_ui_singingparts_CatToadette',)

    public static readonly SUPER_HAMMER =             new EditorVoices.EntityEditorVoices('Super Hammer',                    'se_ui_singingparts_SuperHammer',)
    public static readonly BUILDER_MARIO =            new EditorVoices.CharacterNameEditorVoices('Builder Mario',            'se_ui_singingparts_BuilderMario',)
    public static readonly BUILDER_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Builder Luigi',            'se_ui_singingparts_BuilderLuigi',)
    public static readonly BUILDER_TOAD =             new EditorVoices.CharacterNameEditorVoices('Builder Toad',             'se_ui_singingparts_BuilderToad',)
    public static readonly BUILDER_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Builder Toadette',         'se_ui_singingparts_BuilderToadette',)

    public static readonly BOOMERANG_FLOWER =         new EditorVoices.EntityEditorVoices('Boomerang Flower',                'se_ui_singingparts_BoomerangFlower',)
    public static readonly BOOMERANG_MARIO =          new EditorVoices.CharacterNameEditorVoices('Boomerang Mario',          'se_ui_singingparts_BoomerangMario',)
    public static readonly BOOMERANG_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Boomerang Luigi',          'se_ui_singingparts_BoomerangLuigi',)
    public static readonly BOOMERANG_TOAD =           new EditorVoices.CharacterNameEditorVoices('Boomerang Toad',           'se_ui_singingparts_BoomerangToad',)
    public static readonly BOOMERANG_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Boomerang Toadette',       'se_ui_singingparts_BoomerangToadette',)

    public static readonly CANNON_BOX =               new EditorVoices.EntityEditorVoices('Cannon Box',                      'se_ui_singingparts_CannonBox',)
    public static readonly PROPELLER_BOX =            new EditorVoices.EntityEditorVoices('Propeller Box',                   'se_ui_singingparts_PropellerBox',)
    public static readonly GOOMBA_MASK =              new EditorVoices.EntityEditorVoices('Goomba Mask',                     'se_ui_singingparts_GoombaMask',)
    public static readonly BULLET_BILL_MASK =         new EditorVoices.EntityEditorVoices('Bullet Bill Mask',                'se_ui_singingparts_BulletBillMask',)
    public static readonly RED_POW_BOX =              new EditorVoices.EntityEditorVoices('Red POW Box',                     'se_ui_singingparts_RedPOWBox',)

    public static readonly SUPER_STAR =               new EditorVoices.EntityEditorVoices('Super Star',                      'voice_superstar',)

    public static readonly ONE_UP_MUSHROOM =          new EditorVoices.EntityEditorVoices('1-Up Mushroom',                   'voice_oneupmushroom',)
    public static readonly ROTTEN_MUSHROOM =          new EditorVoices.EntityEditorVoices('Rotten Mushroom',                 'se_ui_singingparts_RottenMushroom',)

    public static readonly SHOE_GOOMBA =              new EditorVoices.EntityEditorVoices('Shoe Goomba',                     'voice_shoegoomba',)
    public static readonly STILETTO_GOOMBA =          new EditorVoices.EntityEditorVoices('Stiletto Goomba',                 'voice_stilettogoomba',)
    public static readonly YOSHI_EGG =                new EditorVoices.EntityEditorVoices('Yoshi’s Egg',                     'voice_yoshiegg',)
    public static readonly RED_YOSHI_EGG =            new EditorVoices.EntityEditorVoices('Red Yoshi’s Egg',                 'se_ui_singingparts_BigRedYoshisEgg',)

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                   new EditorVoices.EntityEditorVoices('Goomba',                          'voice_goomba',)
    public static readonly GALOOMBA =                 new EditorVoices.EntityEditorVoices('Galoomba',                        'voice_galoomba',)
    public static readonly GOOMBRAT =                 new EditorVoices.EntityEditorVoices('Goombrat',                        'se_ui_singingparts_Goombrat',)
    public static readonly GOOMBUD =                  new EditorVoices.EntityEditorVoices('Goombud',                         'se_ui_singingparts_Goombud',)

    public static readonly KOOPA_TROOPA =             new class EditorVoices_KoopaTroopa extends EditorVoices.EntityEditorVoices<'voice_koopatrooper'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.GREEN_KOOPA_TROOPA, instance.RED_KOOPA_TROOPA,],)
        }

    }('Koopa Troopa', 'voice_koopatrooper',)

    public static readonly DRY_BONES =                new class EditorVoices_DryBones extends EditorVoices.EntityEditorVoices<'voice_drybones'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.DRY_BONES, instance.PARABONES,],)
        }

    }('Dry Bones', 'voice_drybones',)
    public static readonly DRY_BONES_SHELL =          new EditorVoices.EntityEditorVoices('Dry Bones Shell',                 'se_ui_singingparts_DryBonesShell',)

    public static readonly BUZZY_BEETLE =             new class EditorVoices_BuzzyBeetle extends EditorVoices.EntityEditorVoices<'voice_buzzybeatle'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.BUZZY_BEETLE, instance.PARA_BEETLE, instance.BUZZY_SHELL,],)
        }

    }('Buzzy Beetle', 'voice_buzzybeatle',)

    public static readonly SPINY =                    new class EditorVoices_Spiny extends EditorVoices.EntityEditorVoices<'voice_spiny'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.SPINY, instance.WINGED_SPINY, instance.SPINY_EGG, instance.SPINY_SHELL,],)
        }

    }('Spiny', 'voice_spiny',)

    public static readonly SPIKE_TOP =                new class EditorVoices_SpikeTop extends EditorVoices.EntityEditorVoices<'voice_spiketop'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.SPIKE_TOP, instance.WINGED_SPIKE_TOP, instance.FAST_SPIKE_TOP, instance.FAST_WINGED_SPIKE_TOP,],)
        }

    }('Spike Top', 'voice_spiketop',)

    public static readonly SKIPSQUEAK =               new EditorVoices.EntityEditorVoices('Skipsqueak',                      'se_ui_singingparts_Skipsqueak',)
    public static readonly SPINY_SKIPSQUEAK =         new EditorVoices.EntityEditorVoices('Spiny Skipsqueak',                'se_ui_singingparts_SpinySkipsqueak',)

    public static readonly ANT_TROOPER =              new EditorVoices.EntityEditorVoices('Ant Trooper',                     'se_ui_singingparts_AntTrooper',)
    public static readonly HORNED_ANT_TROOPER =       new EditorVoices.EntityEditorVoices('Horned Ant Trooper',              'se_ui_singingparts_HornedAntTrooper',)

    public static readonly STINGBY =                  new EditorVoices.EntityEditorVoices('Stingby',                         'se_ui_singingparts_Stingby',)

    public static readonly CHEEP_CHEEP =              new class EditorVoices_CheepCheep extends EditorVoices.EntityEditorVoices<'voice_cheapcheap'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.GREEN_CHEEP_CHEEP, instance.BLURPS, instance.DEEP_CHEEP, instance.RED_CHEEP_CHEEP,],)
        }

    }('Cheep Cheep', 'voice_cheapcheap',)
    public static readonly FISH_BONE =                new EditorVoices.EntityEditorVoices('Fish Bone',                       'se_ui_singingparts_FishBones',)

    public static readonly BLOOPER =                  new EditorVoices.EntityEditorVoices('Blooper',                         'voice_blooper',)
    public static readonly BLOOPER_NANNY =            new EditorVoices.EntityEditorVoices('Blooper Nanny',                   'se_ui_singingparts_BlooperNanny',)

    public static readonly PORCUPUFFER =              new EditorVoices.EntityEditorVoices('Porcupuffer',                     'se_ui_singingparts_Porcupuffer',)

    public static readonly WIGGLER =                  new EditorVoices.EntityEditorVoices('Wiggler',                         'voice_wiggler',)
    public static readonly ANGRY_WIGGLER =            new EditorVoices.EntityEditorVoices('Angry Wiggler',                   'se_ui_singingparts_AngryWiggler',)

    public static readonly PIRANHA_PLANT =            new EditorVoices.EntityEditorVoices('Piranha Plant',                   'voice_piranhaplant',)
    public static readonly JUMPING_PIRANHA_PLANT =    new EditorVoices.EntityEditorVoices('Jumping Piranha Plant',           'voice_jumpingpiranhaplant',)
    public static readonly FIRE_PIRANHA_PLANT =       new EditorVoices.EntityEditorVoices('Fire Piranha Plant',              'voice_firepiranhaplant',)
    public static readonly MUNCHER =                  new EditorVoices.EntityEditorVoices('Muncher',                         'voice_monchar',)
    public static readonly PIRANHA_CREEPER =          new EditorVoices.EntityEditorVoices('Piranha Creeper',                 'se_ui_singingparts_PiranhaCreeper',)

    public static readonly CHAIN_CHOMP =              new EditorVoices.EntityEditorVoices('Chain Chomp',                     'voice_chainchomp',)
    public static readonly UNCHAINED_CHOMP =          new EditorVoices.EntityEditorVoices('Unchained Chomp',                 'se_ui_singingparts_UnchainedChomp',)

    public static readonly SPIKE =                    new EditorVoices.EntityEditorVoices('Spike',                           'se_ui_singingparts_Spike',)
    public static readonly SPIKE_BALL =               new EditorVoices.EntityEditorVoices('Spike Ball',                      'se_ui_singingparts_SpikeBall',)
    public static readonly SNOWBALL =                 new EditorVoices.EntityEditorVoices('Snowball',                        'se_ui_singingparts_SnowBall',)

    public static readonly LAKITU =                   new EditorVoices.EntityEditorVoices('Lakitu',                          'voice_lakitu',)
    public static readonly LAKITU_CLOUD =             new EditorVoices.EntityEditorVoices('Lakitu’s Cloud',                  'voice_lakitucloud',)

    public static readonly BOO =                      new EditorVoices.EntityEditorVoices('Boo',                             'voice_boo',)
    public static readonly STRETCH =                  new EditorVoices.EntityEditorVoices('Stretch',                         'se_ui_singingparts_Stretch',)
    public static readonly BOO_BUDDIES =              new EditorVoices.EntityEditorVoices('Boo Buddies',                     'voice_boobuddies',)
    public static readonly PEEPA =                    new EditorVoices.EntityEditorVoices('Peepa',                           'se_ui_singingparts_Peepa',)

    public static readonly BOB_OMB =                  new EditorVoices.EntityEditorVoices('Bob-omb',                         'voice_bombomb',)
    public static readonly LIT_BOB_OMB =              new EditorVoices.EntityEditorVoices('Lit Bob-omb',                     'se_ui_singingparts_litBob-omb',)

    public static readonly POKEY =                    new EditorVoices.EntityEditorVoices('Pokey',                           'se_ui_singingparts_Pokey',)
    public static readonly SNOW_POKEY =               new EditorVoices.EntityEditorVoices('Snow Pokey',                      'se_ui_singingparts_SnowPokey',)

    public static readonly THWOMP =                   new class EditorVoices_Thwomp extends EditorVoices.EntityEditorVoices<'voice_thwomp'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.THWOMP, instance.SIDEWAYS_THWOMP,],)
        }

    }('Thwomp',                          'voice_thwomp',)

    public static readonly MONTY_MOLE =               new EditorVoices.EntityEditorVoices('Monty Mole',                      'voice_montymole',)
    public static readonly ROCKY_WRENCH =             new EditorVoices.EntityEditorVoices('Rocky Wrench',                    'voice_rockeyrench',)

    public static readonly MAGIKOOPA =                new EditorVoices.EntityEditorVoices('Magikoopa',                       'voice_magikoopa', 'voice_kameck_EU',)

    public static readonly HAMMER_BRO =               new EditorVoices.EntityEditorVoices('Hammer Bro',                      'voice_hammerbro',)
    public static readonly SLEDGE_BRO =               new EditorVoices.EntityEditorVoices('Sledge Bro',                      'voice_sledgebro',)
    public static readonly FIRE_BRO =                 new EditorVoices.EntityEditorVoices('Fire Bro',                        'se_ui_singingparts_FireBro',)
    public static readonly HEAVY_FIRE_BRO =           new EditorVoices.EntityEditorVoices('Heavy Fire Bro',                  'se_ui_singingparts_HeavyFireBro',)

    public static readonly LAVA_BUBBLE =              new EditorVoices.EntityEditorVoices('Lava Bubble',                     'voice_lavabubble',)

    public static readonly MECHAKOOPA =               new EditorVoices.EntityEditorVoices('Mechakoopa',                      'se_ui_singingparts_Mechakoopa',)
    public static readonly BLASTA_MECHAKOOPA =        new EditorVoices.EntityEditorVoices('Blasta Mechakoopa',               'se_ui_singingparts_BlastaMechakoopa',)
    public static readonly ZAPPA_MECHAKOOPA =         new EditorVoices.EntityEditorVoices('Zappa Mechakoopa',                'se_ui_singingparts_ZappaMechakoopa',)

    public static readonly CHARVAARGH =               new EditorVoices.EntityEditorVoices('Charvaargh',                      'se_ui_singingparts_Charvaargh',)

    public static readonly BULLY =                    new EditorVoices.EntityEditorVoices('Bully',                           'se_ui_singingparts_Bully',)

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =             new EditorVoices.EntityEditorVoices('Bill Blaster',                    'voice_billblaster',)
    public static readonly BULL_EYE_BLASTER =         new EditorVoices.EntityEditorVoices('Bull’s-Eye Blaster',              'se_ui_singingparts_Bulls-EyeBlaster',)

    public static readonly BANZAI_BILL =              new EditorVoices.EntityEditorVoices('Banzai Bill',                     'se_ui_singingparts_BanzaiBill',)
    public static readonly BULL_EYE_BANZAI =          new class EditorVoices_BullEyeBanzai extends EditorVoices.EntityEditorVoices<'se_ui_singingparts_Bulls-EyeBanzai'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.BULL_EYE_BANZAI, instance.CAT_BANZAI_BILL,],)
        }

    }('Bull’s-Eye Banzai',  'se_ui_singingparts_Bulls-EyeBanzai',)

    public static readonly CANNON =                   new EditorVoices.EntityEditorVoices('Cannon',                          'voice_cannon',)
    public static readonly RED_CANNON =               new EditorVoices.EntityEditorVoices('Red Cannon',                      'se_ui_singingparts_redcannon',)

    public static readonly BURNER =                   new EditorVoices.EntityEditorVoices('Burner',                          'voice_burner',)

    public static readonly FIRE_BAR =                 new EditorVoices.EntityEditorVoices('Fire Bar',                        'voice_firebar',)

    public static readonly SKEWER =                   new EditorVoices.EntityEditorVoices('Skewer',                          'voice_skewer', 'voice_spikepiller')

    public static readonly KOOPA_CLOWN_CAR =          new EditorVoices.EntityEditorVoices('Koopa Clown Car',                 'voice_koopaclowncar',)
    public static readonly JUNIOR_CLOWN_CAR =         new EditorVoices.EntityEditorVoices('Junior Clown Car',                'voice_juniorclowncar',)
    public static readonly FIRE_KOOPA_CLOWN_CAR =     new EditorVoices.EntityEditorVoices('Fire Koopa Clown Car',            'voice_firekoopaclowncar',)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =    new EditorVoices.EntityEditorVoices('Fire Junior Clown Car',           'voice_firejuniorclowncar',)

    public static readonly KOOPA_TROOPA_CAR =         new EditorVoices.EntityEditorVoices('Koopa Troopa Car',                'se_ui_singingparts_KoopaTroopaCar',)

    public static readonly GRINDER =                  new EditorVoices.EntityEditorVoices('Grinder',                         'voice_grinder',)

    public static readonly SUN =                      new class EditorVoices_Sun extends EditorVoices.EntityEditorVoices<'se_ui_singingparts_Sun'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.ANGRY_SUN,],)
        }

    }('Sun', 'se_ui_singingparts_Sun',)
    public static readonly MOON =                     new EditorVoices.EntityEditorVoices('Moon',                            'se_ui_singingparts_Moon',)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                   new EditorVoices.EntityEditorVoices('Bowser',                          'voice_bowser',)
    public static readonly MEOWSER =                  new EditorVoices.EntityEditorVoices('Meowser',                         'se_ui_singingparts_Meowser',)

    public static readonly BOWSER_JR =                new EditorVoices.EntityEditorVoices('Bowser Jr.',                      'voice_bowserjr',)

    public static readonly BOOM_BOOM =                new EditorVoices.EntityEditorVoices('Boom Boom',                       'se_ui_singingparts_BoomBoom',)
    public static readonly POM_POM =                  new EditorVoices.EntityEditorVoices('Pom Pom',                         'se_ui_singingparts_PomPom',)

    public static readonly LARRY =                    new EditorVoices.EntityEditorVoices('Larry',                           'se_ui_singingparts_Larry',)
    public static readonly IGGY =                     new EditorVoices.EntityEditorVoices('Iggy',                            'se_ui_singingparts_Iggy',)
    public static readonly WENDY =                    new EditorVoices.EntityEditorVoices('Wendy',                           'se_ui_singingparts_Wendy',)
    public static readonly LEMMY =                    new EditorVoices.EntityEditorVoices('Lemmy',                           'se_ui_singingparts_Lemmy',)
    public static readonly ROY =                      new EditorVoices.EntityEditorVoices('Roy',                             'se_ui_singingparts_Roy',)
    public static readonly MORTON =                   new EditorVoices.EntityEditorVoices('Morton',                          'se_ui_singingparts_Morton',)
    public static readonly LUDWIG =                   new EditorVoices.EntityEditorVoices('Ludwig',                          'se_ui_singingparts_Ludwig',)

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                   new EditorVoices.EntityEditorVoices('Bumper',                          'voice_bumper',)

    public static readonly SWINGING_CLAW =            new EditorVoices.EntityEditorVoices('Swinging Claw',                   'se_ui_singingparts_swingingclaw',)

    public static readonly TWISTER =                  new EditorVoices.EntityEditorVoices('Twister',                         'se_ui_singingparts_Twister',)

    public static readonly ONE_WAY_WALL =             new EditorVoices.EntityEditorVoices('One-Way Wall',                    'voice_onewaywall',)

    public static readonly TRACK =                    new EditorVoices.EntityEditorVoices('Track',                           'voice_track',)
    public static readonly TRACK_BLOCK =              new EditorVoices.EntityEditorVoices('Track Block',                     'se_ui_singingparts_TrackBlock',)

    public static readonly VINE =                     new EditorVoices.EntityEditorVoices('Vine',                            'voice_vine',)
    public static readonly TREE =                     new EditorVoices.EntityEditorVoices('Tree',                            'se_ui_singingparts_tree',)

    public static readonly ARROW_SIGN =               new EditorVoices.EntityEditorVoices('Arrow Sign',                      'se_ui_singingparts_arrowsign',)

    public static readonly CHECKPOINT_FLAG =          new EditorVoices.EntityEditorVoices('Checkpoint Flag',                 'se_ui_singingparts_CheckpointFlag',)

    public static readonly DASH_BLOCK =               new EditorVoices.EntityEditorVoices('Dash Block',                      'se_ui_singingparts_DashBlock',)

    public static readonly SNAKE_BLOCK =              new EditorVoices.EntityEditorVoices('Snake Block',                     'se_ui_singingparts_SnakeBlock',)
    public static readonly FAST_SNAKE_BLOCK =         new EditorVoices.EntityEditorVoices('Fast Snake Block',                'se_ui_singingparts_FastSnakeBlock',)

    public static readonly CONVEYOR_BELT =            new EditorVoices.EntityEditorVoices('Conveyor Belt',                   'voice_conveyorbelt',)
    public static readonly FAST_CONVEYOR_BELT =       new EditorVoices.EntityEditorVoices('Fast Conveyor Belt',              'se_ui_singingparts_fastconveyorbelt',)

    public static readonly MUSHROOM_TRAMPOLINE =      new EditorVoices.EntityEditorVoices('Mushroom Trampoline',             'se_ui_singingparts_MushroomTrampoline',)
    public static readonly ON_OFF_TRAMPOLINE =        new EditorVoices.EntityEditorVoices('ON/OFF Trampoline',               'se_ui_singingparts_ONOFFTrampoline',)

    public static readonly LIFT =                     new EditorVoices.EntityEditorVoices('Lift',                            'voice_lift',)
    public static readonly FLIMSY_LIFT =              new EditorVoices.EntityEditorVoices('Flimsy Lift',                     'voice_flimsylift',)
    public static readonly CLOUD_LIFT =               new EditorVoices.EntityEditorVoices('Cloud Lift',                      'se_ui_singingparts_CloudLift',)

    public static readonly SEESAW =                   new EditorVoices.EntityEditorVoices('Seesaw',                          'se_ui_singingparts_seesaw',)

    public static readonly LAVA_LIFT =                new EditorVoices.EntityEditorVoices('Lava Lift',                       'voice_lavalift',)
    public static readonly FAST_LAVA_LIFT =           new EditorVoices.EntityEditorVoices('Fast Lava Lift',                  'se_ui_singingparts_FastLavaLift',)

    public static readonly CRATE =                    new EditorVoices.EntityEditorVoices('Crate',                           'se_ui_singingparts_crate',)

    public static readonly KEY =                      new EditorVoices.EntityEditorVoices('Key',                             'se_ui_singingparts_key',)
    public static readonly CURSED_KEY =               new EditorVoices.EntityEditorVoices('Cursed Key',                      'se_ui_singingparts_cursedkey',)

    public static readonly TRAMPOLINE =               new class EditorVoices_Trampoline extends EditorVoices.EntityEditorVoices<'voice_trampline'> {

        protected override _createEntityReferences(instance: typeof Entities,) {
            return new ArrayAsCollection([instance.TRAMPOLINE, instance.SIDEWAYS_TRAMPOLINE,],)
        }

    }('Trampoline',                      'voice_trampline',)
    public static readonly HOP_CHOPS =                new EditorVoices.EntityEditorVoices('Hop-Chops',                       'se_ui_singingparts_Hop-Chops',)

    public static readonly POW_BLOCK =                new EditorVoices.EntityEditorVoices('POW Block',                       'voice_powblock',)
    public static readonly RED_POW_BLOCK =            new EditorVoices.EntityEditorVoices('Red POW Block',                   'se_ui_singingparts_redPOWBlock',)

    public static readonly P_SWITCH =                 new EditorVoices.EntityEditorVoices('P Switch',                        'voice_pswitch',)

    public static readonly WARP_DOOR =                new EditorVoices.EntityEditorVoices('Warp Door',                       'voice_warpdoor',)
    public static readonly P_WARP_DOOR =              new EditorVoices.EntityEditorVoices('P Warp Door',                     'voice_pwarpdoor',)
    public static readonly KEY_DOOR =                 new EditorVoices.EntityEditorVoices('Key Door',                        'voice_keydoor',)

    public static readonly WARP_BOX =                 new EditorVoices.EntityEditorVoices('Warp Box',                        'se_ui_singingparts_WarpBox',)
    public static readonly WARP_BOX_WITH_KEY =        new EditorVoices.EntityEditorVoices('Warp Box (With Key)',             'se_ui_singingparts_WarpBox_withkey',)

    public static readonly WING =                     new EditorVoices.EntityEditorVoices('Wing',                            'voice_wings',)

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_EditorVoices> = class CompanionEnum_EditorVoices
        extends CompanionEnumByEnglishNameOnly<EditorVoices, typeof EditorVoices>
        implements CompanionEnumDeclaration_EditorVoices {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EditorVoices

        private constructor() {
            super(EditorVoices,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EditorVoices()
        }

        //endregion -------------------- Singleton usage --------------------

        public getValueByCharacterName(value: PossibleEnumerableValueBy<| EditorVoices | CharacterNames>,): EditorVoices {
            if (value instanceof this.instance)
                return value
            const characterNameValue = value instanceof Import.CharacterNames ? value : Import.CharacterNames.Companion.getValue(value,)
            const valueFound = this.#findByCharacterName(characterNameValue,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by "${Import.CharacterNames.name}.${characterNameValue}".`,)
            return valueFound
        }

        public getValueByEntity(value: PossibleEnumerableValueBy<| EditorVoices | Entities>,): EditorVoices {
            if (value instanceof this.instance)
                return value

            const Entities = Import.Entities
            const entityValue = value instanceof Entities ? value : Entities.Companion.getValue(value,)
            const valueFound = this.#findByEntity(entityValue,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by "${Entities.name}.${entityValue}".`,)
            return valueFound
        }

        public hasReference(value: | Entities | CharacterNames,): boolean {
            if (value instanceof Import.Entities)
                return this.#findByEntity(value,) != null
            return this.#findByCharacterName(value,) != null
        }

        #findByEntity(value: Entities,): NullOr<EditorVoices> {
            return this.values.findFirstOrNull(it => it.entityReferences.has(value,),)
        }

        #findByCharacterName(value: CharacterNames,): NullOr<EditorVoices> {
            return this.values.findFirstOrNull(it => it.characterNameReferences.has(value,),)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishNameContainer
    readonly #regularFile
    readonly #europeanFile
    #reference?: PossibleReference
    #characterNameReference?: CollectionHolder<CharacterNames>
    #entityReferences?: CollectionHolder<Entities>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(englishName: PossibleEnglishName, regularFileName: FILE_NAME, europeanFileName: NullOr<FILE_NAME> = null,) {
        super()
        this.#englishNameContainer = new StringContainer(englishName,)
        this.#regularFile = editorVoiceSound(regularFileName,)
        this.#europeanFile = europeanFileName == null ? null : editorVoiceSound(europeanFileName,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }


    public get regularFile(): EditorVoiceSoundFile<FILE_NAME> {
        return this.#regularFile
    }

    public get europeanFile(): NullOr<EditorVoiceSoundFile<FILE_NAME>> {
        return this.#europeanFile
    }

    //region -------------------- References --------------------

    public get reference(): PossibleReference {
        return this.#reference ??= this._retrieveReference()
    }

    protected abstract _retrieveReference(): PossibleReference

    //region -------------------- Character name references --------------------

    protected _createCharacterNameReference(instance: typeof CharacterNames,): CollectionHolder<CharacterNames> {
        const name = this.name
        if (name in instance)
            return new ArrayAsCollection([instance[name as Names_CharacterNames],],)
        return EMPTY_COLLECTION_HOLDER
    }

    public get characterNameReferences(): CollectionHolder<CharacterNames> {
        return this.#characterNameReference ??= this._createCharacterNameReference(Import.CharacterNames,)
    }

    //endregion -------------------- Character name references --------------------
    //region -------------------- Entity references --------------------

    /**
     * Create a temporary collection containing the references applicable
     * to create a {@link EntityReferenceHolder entity reference}
     *
     * @param instance The {@link Entities} instance
     * @protected
     * @onlyCalledOnce
     */
    protected _createEntityReferences(instance: typeof Entities,): CollectionHolder<Entities> {
        const name = this.name
        if (name in instance)
            return new ArrayAsCollection([instance[name as Names_Entities],],)
        return EMPTY_COLLECTION_HOLDER
    }

    /**
     *  Get the {@link EntityReferenceHolder entity reference} applicable to a specific editor voice.
     *
     *  It can contain either the entity by the same name as {@link EditorVoices this instance},
     *  a single {@link Entities entity instance} similar to {@link EditorVoices this instance} or
     *  multiple {@link Entities entity instance} (from 2 to 4) associated to {@link EditorVoices this instance}.
     */
    public get entityReferences(): CollectionHolder<Entities> {
        return this.#entityReferences ??= this._createEntityReferences(Import.Entities,)
    }

    //endregion -------------------- Entity references --------------------

    //endregion -------------------- References --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace EditorVoices {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link EditorVoices} */
    export const Companion = EditorVoices.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}

//TODO remove this test variable when the application will be complete
(window.test ??= {}).EditorVoices = EditorVoices
