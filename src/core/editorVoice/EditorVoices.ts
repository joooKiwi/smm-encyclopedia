import type {ClassWithEditorVoiceSound}                                                                                                                                                                  from './ClassWithEditorVoiceSound';
import type {ClassWithEnglishName}                                                                                                                                                                       from '../ClassWithEnglishName';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './EditorVoices.types';
import type {Enumerable}                                                                                                                                                                                 from '../../util/enum/Enumerable';
import type {EntityReferenceHolder, PossibleEntityReferences_Received}                                                                                                                                   from './holder/EntityReferenceHolder';
import type {EditorVoiceSound, PossibleSoundReceivedOnFactory}                                                                                                                                           from './EditorVoiceSound';
import type {StaticReference}                                                                                                                                                                            from '../../util/enum/Enum.types';
import type {ObjectHolder}                                                                                                                                                                               from '../../util/holder/ObjectHolder';

import {DelayedObjectHolderContainer}                from '../../util/holder/DelayedObjectHolder.container';
import {EditorVoiceSoundFactory}                     from './EditorVoiceSound.factory';
import {EditorVoiceSoundHolderWithSingingPartBefore} from './holder/EditorVoiceSoundHolderWithSingingPartBefore';
import {EditorVoiceSoundHolderWithVoiceBefore}       from './holder/EditorVoiceSoundHolderWithVoiceBefore';
import type {Entities}                               from '../entity/Entities';
import {EntityReferenceHolderContainer}              from './holder/EntityReferenceHolder.container';
import {Enum}                                        from '../../util/enum/Enum';
import {Import}                                      from '../../util/DynamicImporter';
import {StringContainer}                             from '../../util/StringContainer';

/**
 * @todo change the english name to the enum name for the _createEntityReference
 * @recursiveReference {@link Entities}
 * @classWithDynamicImport {@link Entities}
 */
export class EditorVoices
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithEditorVoiceSound {

    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                   new EditorVoices('Ground',                   () => new EditorVoiceSoundHolderWithVoiceBefore('ground',),);
    public static readonly START_GROUND =             new EditorVoices('Start Ground',             () => new EditorVoiceSoundHolderWithVoiceBefore('startground',),);
    public static readonly GOAL_GROUND =              new EditorVoices('Goal Ground',              () => new EditorVoiceSoundHolderWithVoiceBefore('goalground',),);
    public static readonly STEEP_SLOPE =              new EditorVoices('Steep Slope',              () => new EditorVoiceSoundHolderWithSingingPartBefore('steepslope',),);
    public static readonly GENTLE_SLOPE =             new EditorVoices('Gentle Slope',             () => new EditorVoiceSoundHolderWithSingingPartBefore('gentleslope',),);

    public static readonly PIPE =                     new EditorVoices('Pipe',                     () => new EditorVoiceSoundHolderWithVoiceBefore('pipe',),);
    public static readonly CLEAR_PIPE =               new EditorVoices('Clear Pipe',               () => new EditorVoiceSoundHolderWithSingingPartBefore('ClearPipe',),);

    public static readonly SPIKE_TRAP =               new EditorVoices('Spike Trap',               () => new EditorVoiceSoundHolderWithVoiceBefore('spiketrap',),);
    public static readonly JELECTRO =                 new EditorVoices('Jelectro',                 () => new EditorVoiceSoundHolderWithVoiceBefore('jellelectro',),);
    public static readonly SEA_URCHIN =               new EditorVoices('Sea Urchin',               () => new EditorVoiceSoundHolderWithVoiceBefore('seaechinus',),);
    public static readonly SPIKE_BLOCK =              new EditorVoices('Spike Block',              () => new EditorVoiceSoundHolderWithSingingPartBefore('SpikeBlock',),);

    public static readonly MUSHROOM_PLATFORM =        new EditorVoices('Mushroom Platform',        () => new EditorVoiceSoundHolderWithVoiceBefore('mushroomplatform',),);
    public static readonly SEMISOLID_PLATFORM =       new EditorVoices('Semisolid Platform',       () => new EditorVoiceSoundHolderWithVoiceBefore('semisolidplatform',),);
    public static readonly BRIDGE =                   new EditorVoices('Bridge',                   () => new EditorVoiceSoundHolderWithVoiceBefore('bridge',),);

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BLOCK =                    new class EditorVoices_Block extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.BRICK_BLOCK, Import.Entities.CRISTAL_BLOCK, Import.Entities.ROTATING_BLOCK,];
        }

    }('Block', () => new EditorVoiceSoundHolderWithVoiceBefore('block',),);

    public static readonly HARD_BLOCK =               new class EditorVoices_HardBlock extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.HARD_BLOCK, Import.Entities.ROCK_BLOCK,];
        }

    }('Hard Block', () => new EditorVoiceSoundHolderWithVoiceBefore('hardblock',),);

    public static readonly QUESTION_MARK_BLOCK =      new EditorVoices('? Block',                  () => new EditorVoiceSoundHolderWithVoiceBefore('questionblock',),);
    public static readonly HIDDEN_BLOCK =             new EditorVoices('Hidden Block',             () => new EditorVoiceSoundHolderWithVoiceBefore('hiddenblock',),);

    public static readonly EXCLAMATION_MARK_BLOCK =   new EditorVoices('! Block',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('!Block',),);

    public static readonly NOTE_BLOCK =               new EditorVoices('Note Block',               () => new EditorVoiceSoundHolderWithVoiceBefore('noteblock',),);

    public static readonly DONUT_BLOCK =              new EditorVoices('Donut Block',              () => new EditorVoiceSoundHolderWithVoiceBefore('donutblock',),);

    public static readonly CLOUD_BLOCK =              new EditorVoices('Cloud Block',              () => new EditorVoiceSoundHolderWithVoiceBefore('cloudblock',),);

    public static readonly ON_OFF_SWITCH =            new EditorVoices('ON/OFF Switch',            () => new EditorVoiceSoundHolderWithSingingPartBefore('ONOFFswitch',),);
    public static readonly DOTTED_LINE_BLOCK =        new EditorVoices('Dotted-Line Block',        () => new EditorVoiceSoundHolderWithSingingPartBefore('Dotted-LineBlock_nr',),);

    public static readonly P_BLOCK =                  new EditorVoices('P Block',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('PBlock',),);

    public static readonly BLINKING_BLOCK =           new EditorVoices('Blinking Block',           () => new EditorVoiceSoundHolderWithSingingPartBefore('BlinkingBlock',),);

    public static readonly ICE_BLOCK =                new EditorVoices('Ice Block',                () => new EditorVoiceSoundHolderWithVoiceBefore('iceblock2',),);
    public static readonly ICICLE =                   new EditorVoices('Icicle',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('icicle',),);

    public static readonly COIN =                     new EditorVoices('Coin',                     () => new EditorVoiceSoundHolderWithVoiceBefore('coin',),);
    public static readonly FROZEN_COIN =              new EditorVoices('Frozen Coin',              () => new EditorVoiceSoundHolderWithSingingPartBefore('FrozenCoin',),);
    public static readonly TEN_COIN =                 new EditorVoices('10-Coin',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('10-coin',),);
    public static readonly THIRTY_COIN =              new EditorVoices('30-Coin',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('30-coin',),);
    public static readonly FIFTY_COIN =               new EditorVoices('50-Coin',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('50-coin',),);
    public static readonly PINK_COIN =                new EditorVoices('Pink Coin',                () => new EditorVoiceSoundHolderWithSingingPartBefore('pinkcoin',),);

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------

    public static readonly SUPER_MUSHROOM =           new EditorVoices('Super Mushroom',           () => new EditorVoiceSoundHolderWithVoiceBefore('supermushroom',),);
    public static readonly SUPER_MARIO =              new EditorVoices('Super Mario',              () => new EditorVoiceSoundHolderWithVoiceBefore('supermario',),);
    public static readonly SUPER_LUIGI =              new EditorVoices('Super Luigi',              () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperLuigi',),);
    public static readonly SUPER_TOAD =               new EditorVoices('Super Toad',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperToad',),);
    public static readonly SUPER_TOADETTE =           new EditorVoices('Super Toadette',           () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperToadette',),);

    public static readonly FIRE_FLOWER =              new EditorVoices('Fire Flower',              () => new EditorVoiceSoundHolderWithVoiceBefore('fireflower',),);
    public static readonly FIRE_MARIO =               new EditorVoices('Fire Mario',               () => new EditorVoiceSoundHolderWithVoiceBefore('firemario',),);
    public static readonly FIRE_LUIGI =               new EditorVoices('Fire Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('FireLuigi',),);
    public static readonly FIRE_TOAD =                new EditorVoices('Fire Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FireToad',),);
    public static readonly FIRE_TOADETTE =            new EditorVoices('Fire Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('FireToadette',),);

    public static readonly SUPERBALL_FLOWER =         new EditorVoices('Superball Flower',         () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballFlower',),);
    public static readonly SUPERBALL_MARIO =          new EditorVoices('Superball Mario',          () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballMario',),);
    public static readonly SUPERBALL_LUIGI =          new EditorVoices('Superball Luigi',          () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballLuigi',),);
    public static readonly SUPERBALL_TOAD =           new EditorVoices('Superball Toad',           () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballToad',),);
    public static readonly SUPERBALL_TOADETTE =       new EditorVoices('Superball Toadette',       () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballToadette',),);

    public static readonly MYSTERY_MUSHROOM =         new EditorVoices('Mystery Mushroom',         () => new EditorVoiceSoundHolderWithVoiceBefore('mysterymushroom',),);
    public static readonly COSTUME_MARIO =            new EditorVoices('Costume Mario',            () => new EditorVoiceSoundHolderWithVoiceBefore('costumemario',),);

    public static readonly WEIRD_MUSHROOM =           new EditorVoices('Weird Mushroom',           () => new EditorVoiceSoundHolderWithVoiceBefore('weiredmashroom',),);
    public static readonly WEIRD_MARIO =              new EditorVoices('Weird Mario',              () => new EditorVoiceSoundHolderWithVoiceBefore('weiredmario',),);

    public static readonly MASTER_SWORD =             new EditorVoices('Master Sword',             () => new EditorVoiceSoundHolderWithSingingPartBefore('MasterSword',),);
    public static readonly LINK =                     new EditorVoices('Link',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('Link',),);

    public static readonly BIG_MUSHROOM_SMM1 =        new class EditorVoices_BigMushroomSMM1 extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.BIG_MUSHROOM_CLASSIC, Import.Entities.BIG_MUSHROOM_MODERN,];
        }

    }('Big Mushroom (SMM1)', () => new EditorVoiceSoundHolderWithVoiceBefore('bigmashroom',),);
    public static readonly BIG_MUSHROOM_SMM2 =        new class EditorVoices_BigMushroomSMM2 extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.BIG_MUSHROOM,];
        }

    }('Big Mushroom (SMM2)', () => new EditorVoiceSoundHolderWithSingingPartBefore('BigMushroom',),);
    public static readonly BIG_MARIO =                new EditorVoices('Big Mario',                () => new EditorVoiceSoundHolderWithVoiceBefore('bigmario',),);
    public static readonly BIG_LUIGI =                new EditorVoices('Big Luigi',                () => new EditorVoiceSoundHolderWithSingingPartBefore('BigLuigi',),);
    public static readonly BIG_TOAD =                 new EditorVoices('Big Toad',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('BigToad',),);
    public static readonly BIG_TOADETTE =             new EditorVoices('Big Toadette',             () => new EditorVoiceSoundHolderWithSingingPartBefore('BigToadette',),);

    public static readonly SMB2_MUSHROOM =            new EditorVoices('SMB2 Mushroom',            () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Mushroom',),);
    public static readonly SMB2_MARIO =               new EditorVoices('SMB2 Mario',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Mario',),);
    public static readonly SMB2_LUIGI =               new EditorVoices('SMB2 Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Luigi',),);
    public static readonly SMB2_TOAD =                new EditorVoices('SMB2 Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Toad',),);
    public static readonly SMB2_TOADETTE =            new EditorVoices('SMB2 Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Toadette',),);

    public static readonly SUPER_LEAF =               new EditorVoices('Super Leaf',               () => new EditorVoiceSoundHolderWithVoiceBefore('superleaf',),);
    public static readonly RACCOON_MARIO =            new EditorVoices('Raccoon Mario',            () => new EditorVoiceSoundHolderWithVoiceBefore('lacoonmario',),);
    public static readonly RACCOON_LUIGI =            new EditorVoices('Raccoon Luigi',            () => new EditorVoiceSoundHolderWithSingingPartBefore('RaccoonLuigi',),);
    public static readonly RACCOON_TOAD =             new EditorVoices('Raccoon Toad',             () => new EditorVoiceSoundHolderWithSingingPartBefore('RaccoonToad',),);
    public static readonly RACCOON_TOADETTE =         new EditorVoices('Raccoon Toadette',         () => new EditorVoiceSoundHolderWithSingingPartBefore('RaccoonToadette',),);

    public static readonly FROG_SUIT =                new EditorVoices('Frog Suit',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogSuit',),);
    public static readonly FROG_MARIO =               new EditorVoices('Frog Mario',               () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogMario',),);
    public static readonly FROG_LUIGI =               new EditorVoices('Frog Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogLuigi',),);
    public static readonly FROG_TOAD =                new EditorVoices('Frog Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogToad',),);
    public static readonly FROG_TOADETTE =            new EditorVoices('Frog Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogToadette',),);

    public static readonly CAPE_FEATHER =             new EditorVoices('Cape Feather',             () => new EditorVoiceSoundHolderWithVoiceBefore('capefeather',),);
    public static readonly CAPE_MARIO =               new EditorVoices('Cape Mario',               () => new EditorVoiceSoundHolderWithVoiceBefore('capemario',),);
    public static readonly CAPE_LUIGI =               new EditorVoices('Cape Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('CapeLuigi',),);
    public static readonly CAPE_TOAD =                new EditorVoices('Cape Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('CapeToad',),);
    public static readonly CAPE_TOADETTE =            new EditorVoices('Cape Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('CapeToadette',),);

    public static readonly POWER_BALLOON =            new EditorVoices('Power Balloon',            () => new EditorVoiceSoundHolderWithSingingPartBefore('PowerBalloon',),);
    public static readonly BALLOON_MARIO =            new EditorVoices('Balloon Mario',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonMario',),);
    public static readonly BALLOON_LUIGI =            new EditorVoices('Balloon Luigi',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonLuigi',),);
    public static readonly BALLOON_TOAD =             new EditorVoices('Balloon Toad',             () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonToad',),);
    public static readonly BALLOON_TOADETTE =         new EditorVoices('Balloon Toadette',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonToadette',),);

    public static readonly PROPELLER_MUSHROOM =       new EditorVoices('Propeller Mushroom',       () => new EditorVoiceSoundHolderWithVoiceBefore('propellermushroom',),);
    public static readonly PROPELLER_MARIO =          new EditorVoices('Propeller Mario',          () => new EditorVoiceSoundHolderWithVoiceBefore('propellermario',),);
    public static readonly PROPELLER_LUIGI =          new EditorVoices('Propeller Luigi',          () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerLuigi',),);
    public static readonly PROPELLER_TOAD =           new EditorVoices('Propeller Toad',           () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerToad',),);
    public static readonly PROPELLER_TOADETTE =       new EditorVoices('Propeller Toadette',       () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerToadette',),);

    public static readonly SUPER_ACORN =              new EditorVoices('Super Acorn',              () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperAcorn',),);
    public static readonly FLYING_SQUIRREL_MARIO =    new EditorVoices('Flying Squirrel Mario',    () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelMario',),);
    public static readonly FLYING_SQUIRREL_LUIGI =    new EditorVoices('Flying Squirrel Luigi',    () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelLuigi',),);
    public static readonly FLYING_SQUIRREL_TOAD =     new EditorVoices('Flying Squirrel Toad',     () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelToad',),);
    public static readonly FLYING_SQUIRREL_TOADETTE = new EditorVoices('Flying Squirrel Toadette', () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelToadette',),);

    public static readonly SUPER_BELL =               new EditorVoices('Super Bell',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperBell',),);
    public static readonly CAT_MARIO =                new EditorVoices('Cat Mario',                () => new EditorVoiceSoundHolderWithSingingPartBefore('CatMario',),);
    public static readonly CAT_LUIGI =                new EditorVoices('Cat Luigi',                () => new EditorVoiceSoundHolderWithSingingPartBefore('CatLuigi',),);
    public static readonly CAT_TOAD =                 new EditorVoices('Cat Toad',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('CatToad',),);
    public static readonly CAT_TOADETTE =             new EditorVoices('Cat Toadette',             () => new EditorVoiceSoundHolderWithSingingPartBefore('CatToadette',),);

    public static readonly SUPER_HAMMER =             new EditorVoices('Super Hammer',             () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperHammer',),);
    public static readonly BUILDER_MARIO =            new EditorVoices('Builder Mario',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderMario',),);
    public static readonly BUILDER_LUIGI =            new EditorVoices('Builder Luigi',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderLuigi',),);
    public static readonly BUILDER_TOAD =             new EditorVoices('Builder Toad',             () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderToad',),);
    public static readonly BUILDER_TOADETTE =         new EditorVoices('Builder Toadette',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderToadette',),);

    public static readonly BOOMERANG_FLOWER =         new EditorVoices('Boomerang Flower',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangFlower',),);
    public static readonly BOOMERANG_MARIO =          new EditorVoices('Boomerang Mario',          () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangMario',),);
    public static readonly BOOMERANG_LUIGI =          new EditorVoices('Boomerang Luigi',          () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangLuigi',),);
    public static readonly BOOMERANG_TOAD =           new EditorVoices('Boomerang Toad',           () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangToad',),);
    public static readonly BOOMERANG_TOADETTE =       new EditorVoices('Boomerang Toadette',       () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangToadette',),);

    public static readonly CANNON_BOX =               new EditorVoices('Cannon Box',               () => new EditorVoiceSoundHolderWithSingingPartBefore('CannonBox',),);
    public static readonly PROPELLER_BOX =            new EditorVoices('Propeller Box',            () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerBox',),);
    public static readonly GOOMBA_MASK =              new EditorVoices('Goomba Mask',              () => new EditorVoiceSoundHolderWithSingingPartBefore('GoombaMask',),);
    public static readonly BULLET_BILL_MASK =         new EditorVoices('Bullet Bill Mask',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BulletBillMask',),);
    public static readonly RED_POW_BOX =              new EditorVoices('Red POW Box',              () => new EditorVoiceSoundHolderWithSingingPartBefore('RedPOWBox',),);

    public static readonly SUPER_STAR =               new EditorVoices('Super Star',               () => new EditorVoiceSoundHolderWithVoiceBefore('superstar',),);

    public static readonly ONE_UP_MUSHROOM =          new EditorVoices('1-Up Mushroom',            () => new EditorVoiceSoundHolderWithVoiceBefore('oneupmushroom',),);
    public static readonly ROTTEN_MUSHROOM =          new EditorVoices('Rotten Mushroom',          () => new EditorVoiceSoundHolderWithSingingPartBefore('RottenMushroom',),);

    public static readonly SHOE_GOOMBA =              new EditorVoices('Shoe Goomba',              () => new EditorVoiceSoundHolderWithVoiceBefore('shoegoomba',),);
    public static readonly STILETTO_GOOMBA =          new EditorVoices('Stiletto Goomba',          () => new EditorVoiceSoundHolderWithVoiceBefore('stilettogoomba',),);
    public static readonly YOSHI_EGG =                new EditorVoices('Yoshi\'s Egg',             () => new EditorVoiceSoundHolderWithVoiceBefore('yoshiegg',),);
    public static readonly RED_YOSHI_EGG =            new EditorVoices('Red Yoshi\'s Egg',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BigRedYoshisEgg',),);

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                   new EditorVoices('Goomba',                   () => new EditorVoiceSoundHolderWithVoiceBefore('goomba',),);
    public static readonly GALOOMBA =                 new EditorVoices('Galoomba',                 () => new EditorVoiceSoundHolderWithVoiceBefore('galoomba',),);
    public static readonly GOOMBRAT =                 new EditorVoices('Goombrat',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('Goombrat',),);
    public static readonly GOOMBUD =                  new EditorVoices('Goombud',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Goombud',),);

    public static readonly KOOPA_TROOPA =             new class EditorVoices_KoopaTroopa extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.GREEN_KOOPA_TROOPA, Import.Entities.RED_KOOPA_TROOPA,];
        }

    }('Koopa Troopa', () => new EditorVoiceSoundHolderWithVoiceBefore('koopatrooper',),);

    public static readonly DRY_BONES =                new class EditorVoices_DryBones extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.DRY_BONES, Import.Entities.PARABONES,];
        }

    }('Dry Bones', () => new EditorVoiceSoundHolderWithVoiceBefore('drybones',),);
    public static readonly DRY_BONES_SHELL =          new EditorVoices('Dry Bones Shell',          () => new EditorVoiceSoundHolderWithSingingPartBefore('DryBonesShell',),);

    public static readonly BUZZY_BEETLE =             new class EditorVoices_BuzzyBeetle extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.BUZZY_BEETLE, Import.Entities.PARA_BEETLE, Import.Entities.BUZZY_SHELL,];
        }

    }('Buzzy Beetle', () => new EditorVoiceSoundHolderWithVoiceBefore('buzzybeatle',),);

    public static readonly SPINY =                    new class EditorVoices_Spiny extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.SPINY, Import.Entities.WINGED_SPINY, Import.Entities.SPINY_EGG, Import.Entities.SPINY_SHELL,];
        }

    }('Spiny', () => new EditorVoiceSoundHolderWithVoiceBefore('spiny',),);

    public static readonly SPIKE_TOP =                new class EditorVoices_SpikeTop extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.SPIKE_TOP, Import.Entities.WINGED_SPIKE_TOP, Import.Entities.FAST_SPIKE_TOP, Import.Entities.FAST_WINGED_SPIKE_TOP,];
        }

    }('Spike Top', () => new EditorVoiceSoundHolderWithVoiceBefore('spiketop',),);

    public static readonly SKIPSQUEAK =               new EditorVoices('Skipsqueak',               () => new EditorVoiceSoundHolderWithSingingPartBefore('Skipsqueak',),);
    public static readonly SPINY_SKIPSQUEAK =         new EditorVoices('Spiny Skipsqueak',         () => new EditorVoiceSoundHolderWithSingingPartBefore('SpinySkipsqueak',),);

    public static readonly ANT_TROOPER =              new EditorVoices('Ant Trooper',              () => new EditorVoiceSoundHolderWithSingingPartBefore('AntTrooper',),);
    public static readonly HORNED_ANT_TROOPER =       new EditorVoices('Horned Ant Trooper',       () => new EditorVoiceSoundHolderWithSingingPartBefore('HornedAntTrooper',),);

    public static readonly STINGBY =                  new EditorVoices('Stingby',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Stingby',),);

    public static readonly CHEEP_CHEEP =              new class EditorVoices_CheepCheep extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.CHEEP_CHEEP, Import.Entities.BLURPS, Import.Entities.DEEP_CHEEP,];
        }

    }('Cheep Cheep', () => new EditorVoiceSoundHolderWithVoiceBefore('cheapcheap',),);
    public static readonly FISH_BONE =                new EditorVoices('Fish Bone',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FishBones',),);

    public static readonly BLOOPER =                  new EditorVoices('Blooper',                  () => new EditorVoiceSoundHolderWithVoiceBefore('blooper',),);
    public static readonly BLOOPER_NANNY =            new EditorVoices('Blooper Nanny',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BlooperNanny',),);

    public static readonly PORCUPUFFER =              new EditorVoices('Porcupuffer',              () => new EditorVoiceSoundHolderWithSingingPartBefore('Porcupuffer',),);

    public static readonly WIGGLER =                  new EditorVoices('Wiggler',                  () => new EditorVoiceSoundHolderWithVoiceBefore('wiggler',),);
    public static readonly ANGRY_WIGGLER =            new EditorVoices('Angry Wiggler',            () => new EditorVoiceSoundHolderWithSingingPartBefore('AngryWiggler',),);

    public static readonly PIRANHA_PLANT =            new EditorVoices('Piranha Plant',            () => new EditorVoiceSoundHolderWithVoiceBefore('piranhaplant',),);
    public static readonly JUMPING_PIRANHA_PLANT =    new EditorVoices('Jumping Piranha Plant',    () => new EditorVoiceSoundHolderWithVoiceBefore('jumpingpiranhaplant',),);
    public static readonly FIRE_PIRANHA_PLANT =       new EditorVoices('Fire Piranha Plant',       () => new EditorVoiceSoundHolderWithVoiceBefore('firepiranhaplant',),);
    public static readonly MUNCHER =                  new EditorVoices('Muncher',                  () => new EditorVoiceSoundHolderWithVoiceBefore('monchar',),);
    public static readonly PIRANHA_CREEPER =          new EditorVoices('Piranha Creeper',          () => new EditorVoiceSoundHolderWithSingingPartBefore('PiranhaCreeper',),);

    public static readonly CHAIN_CHOMP =              new EditorVoices('Chain Chomp',              () => new EditorVoiceSoundHolderWithVoiceBefore('chainchomp',),);
    public static readonly UNCHAINED_CHOMP =          new EditorVoices('Unchained Chomp',          () => new EditorVoiceSoundHolderWithSingingPartBefore('UnchainedChomp',),);

    public static readonly SPIKE =                    new EditorVoices('Spike',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Spike',),);
    public static readonly SPIKE_BALL =               new EditorVoices('Spike Ball',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SpikeBall',),);
    public static readonly SNOWBALL =                 new EditorVoices('Snowball',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('SnowBall',),);

    public static readonly LAKITU =                   new EditorVoices('Lakitu',                   () => new EditorVoiceSoundHolderWithVoiceBefore('lakitu',),);
    public static readonly LAKITU_CLOUD =             new EditorVoices('Lakitu\'s Cloud',          () => new EditorVoiceSoundHolderWithVoiceBefore('lakitucloud',),);

    public static readonly BOO =                      new EditorVoices('Boo',                      () => new EditorVoiceSoundHolderWithVoiceBefore('boo',),);
    public static readonly STRETCH =                  new EditorVoices('Stretch',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Stretch',),);
    public static readonly BOO_BUDDIES =              new EditorVoices('Boo Buddies',              () => new EditorVoiceSoundHolderWithVoiceBefore('boobuddies',),);
    public static readonly PEEPA =                    new EditorVoices('Peepa',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Peepa',),);

    public static readonly BOB_OMB =                  new EditorVoices('Bob-omb',                  () => new EditorVoiceSoundHolderWithVoiceBefore('bombomb',),);
    public static readonly LIT_BOB_OMB =              new EditorVoices('Lit Bob-omb',              () => new EditorVoiceSoundHolderWithSingingPartBefore('litBob-omb',),);

    public static readonly POKEY =                    new EditorVoices('Pokey',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Pokey',),);
    public static readonly SNOW_POKEY =               new EditorVoices('Snow Pokey',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SnowPokey',),);

    public static readonly THWOMP =                   new EditorVoices('Thwomp',                   () => new EditorVoiceSoundHolderWithVoiceBefore('thwomp',),);

    public static readonly MONTY_MOLE =               new EditorVoices('Monty Mole',               () => new EditorVoiceSoundHolderWithVoiceBefore('montymole',),);
    public static readonly ROCKY_WRENCH =             new EditorVoices('Rocky Wrench',             () => new EditorVoiceSoundHolderWithVoiceBefore('rockeyrench',),);

    public static readonly MAGIKOOPA =                new EditorVoices('Magikoopa',                () => [new EditorVoiceSoundHolderWithVoiceBefore('magikoopa',), new EditorVoiceSoundHolderWithVoiceBefore('kameck_EU',),],);

    public static readonly HAMMER_BRO =               new EditorVoices('Hammer Bro',               () => new EditorVoiceSoundHolderWithVoiceBefore('hammerbro',),);
    public static readonly SLEDGE_BRO =               new EditorVoices('Sledge Bro',               () => new EditorVoiceSoundHolderWithVoiceBefore('sledgebro',),);
    public static readonly FIRE_BRO =                 new EditorVoices('Fire Bro',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('FireBro',),);
    public static readonly HEAVY_FIRE_BRO =           new EditorVoices('Heavy Fire Bro',           () => new EditorVoiceSoundHolderWithSingingPartBefore('HeavyFireBro',),);

    public static readonly LAVA_BUBBLE =              new EditorVoices('Lava Bubble',              () => new EditorVoiceSoundHolderWithVoiceBefore('lavabubble',),);

    public static readonly MECHAKOOPA =               new EditorVoices('Mechakoopa',               () => new EditorVoiceSoundHolderWithSingingPartBefore('Mechakoopa',),);
    public static readonly BLASTA_MECHAKOOPA =        new EditorVoices('Blasta Mechakoopa',        () => new EditorVoiceSoundHolderWithSingingPartBefore('BlastaMechakoopa',),);
    public static readonly ZAPPA_MECHAKOOPA =         new EditorVoices('Zappa Mechakoopa',         () => new EditorVoiceSoundHolderWithSingingPartBefore('ZappaMechakoopa',),);

    public static readonly CHARVAARGH =               new EditorVoices('Charvaargh',               () => new EditorVoiceSoundHolderWithSingingPartBefore('Charvaargh',),);

    public static readonly BULLY =                    new EditorVoices('Bully',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Bully',),);

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =             new EditorVoices('Bill Blaster',             () => new EditorVoiceSoundHolderWithVoiceBefore('billblaster',),);
    public static readonly BULL_EYE_BLASTER =         new EditorVoices('Bull\'s-Eye Blaster',      () => new EditorVoiceSoundHolderWithSingingPartBefore('Bulls-EyeBlaster',),);

    public static readonly BANZAI_BILL =              new EditorVoices('Banzai Bill',              () => new EditorVoiceSoundHolderWithSingingPartBefore('BanzaiBill',),);
    public static readonly BULL_EYE_BANZAI =          new class EditorVoices_BullEyeBanzai extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.BULL_EYE_BANZAI, Import.Entities.CAT_BANZAI_BILL,];
        }

    }('Bull\'s-Eye Banzai', () => new EditorVoiceSoundHolderWithSingingPartBefore('Bulls-EyeBanzai',),);

    public static readonly CANNON =                   new EditorVoices('Cannon',                   () => new EditorVoiceSoundHolderWithVoiceBefore('cannon',),);
    public static readonly RED_CANNON =               new EditorVoices('Red Cannon',               () => new EditorVoiceSoundHolderWithSingingPartBefore('redcannon',),);

    public static readonly BURNER =                   new EditorVoices('Burner',                   () => new EditorVoiceSoundHolderWithVoiceBefore('burner',),);

    public static readonly FIRE_BAR =                 new EditorVoices('Fire Bar',                 () => new EditorVoiceSoundHolderWithVoiceBefore('firebar',),);

    public static readonly SKEWER =                   new EditorVoices('Skewer',                   () => [new EditorVoiceSoundHolderWithVoiceBefore('skewer'), new EditorVoiceSoundHolderWithVoiceBefore('spikepiller'),],);

    public static readonly KOOPA_CLOWN_CAR =          new EditorVoices('Koopa Clown Car',          () => new EditorVoiceSoundHolderWithVoiceBefore('koopaclowncar',),);
    public static readonly JUNIOR_CLOWN_CAR =         new EditorVoices('Junior Clown Car',         () => new EditorVoiceSoundHolderWithVoiceBefore('juniorclowncar',),);
    public static readonly FIRE_KOOPA_CLOWN_CAR =     new EditorVoices('Fire Koopa Clown Car',     () => new EditorVoiceSoundHolderWithVoiceBefore('firekoopaclowncar',),);
    public static readonly FIRE_JUNIOR_CLOWN_CAR =    new EditorVoices('Fire Junior Clown Car',    () => new EditorVoiceSoundHolderWithVoiceBefore('firejuniorclowncar',),);

    public static readonly KOOPA_TROOPA_CAR =         new EditorVoices('Koopa Troopa Car',         () => new EditorVoiceSoundHolderWithSingingPartBefore('KoopaTroopaCar',),);

    public static readonly GRINDER =                  new EditorVoices('Grinder',                  () => new EditorVoiceSoundHolderWithVoiceBefore('grinder',),);

    public static readonly SUN =                      new class EditorVoices_Sun extends EditorVoices {

        protected override get _createEntityReferences(): PossibleEntityReferences_Received {
            return [Import.Entities.ANGRY_SUN,];
        }

    }('Sun', () => new EditorVoiceSoundHolderWithSingingPartBefore('Sun',),);
    public static readonly MOON =                     new EditorVoices('Moon',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('Moon',),);

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                   new EditorVoices('Bowser',                   () => new EditorVoiceSoundHolderWithVoiceBefore('bowser',),);
    public static readonly MEOWSER =                  new EditorVoices('Meowser',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Meowser',),);

    public static readonly BOWSER_JR =                new EditorVoices('Bowser Jr.',               () => new EditorVoiceSoundHolderWithVoiceBefore('bowserjr',),);

    public static readonly BOOM_BOOM =                new EditorVoices('Boom Boom',                () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomBoom',),);
    public static readonly POM_POM =                  new EditorVoices('Pom Pom',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('PomPom',),);

    public static readonly LARRY =                    new EditorVoices('Larry',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Larry',),);
    public static readonly IGGY =                     new EditorVoices('Iggy',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('Iggy',),);
    public static readonly WENDY =                    new EditorVoices('Wendy',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Wendy',),);
    public static readonly LEMMY =                    new EditorVoices('Lemmy',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('Lemmy',),);
    public static readonly ROY =                      new EditorVoices('Roy',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('Roy',),);
    public static readonly MORTON =                   new EditorVoices('Morton',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('Morton',),);
    public static readonly LUDWIG =                   new EditorVoices('Ludwig',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('Ludwig',),);

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                   new EditorVoices('Bumper',                   () => new EditorVoiceSoundHolderWithVoiceBefore('bumper',),);

    public static readonly SWINGING_CLAW =            new EditorVoices('Swinging Claw',            () => new EditorVoiceSoundHolderWithSingingPartBefore('swingingclaw',),);

    public static readonly TWISTER =                  new EditorVoices('Twister',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('Twister',),);

    public static readonly ONE_WAY_WALL =             new EditorVoices('One-Way Wall',             () => new EditorVoiceSoundHolderWithVoiceBefore('onewaywall',),);

    public static readonly TRACK =                    new EditorVoices('Track',                    () => new EditorVoiceSoundHolderWithVoiceBefore('track',),);
    public static readonly TRACK_BLOCK =              new EditorVoices('Track Block',              () => new EditorVoiceSoundHolderWithSingingPartBefore('TrackBlock',),);

    public static readonly VINE =                     new EditorVoices('Vine',                     () => new EditorVoiceSoundHolderWithVoiceBefore('vine',),);
    public static readonly TREE =                     new EditorVoices('Tree',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('tree',),);

    public static readonly ARROW_SIGN =               new EditorVoices('Arrow Sign',               () => new EditorVoiceSoundHolderWithSingingPartBefore('arrowsign',),);

    public static readonly CHECKPOINT_FLAG =          new EditorVoices('Checkpoint Flag',          () => new EditorVoiceSoundHolderWithSingingPartBefore('CheckpointFlag',),);

    public static readonly DASH_BLOCK =               new EditorVoices('Dash Block',               () => new EditorVoiceSoundHolderWithSingingPartBefore('DashBlock',),);

    public static readonly SNAKE_BLOCK =              new EditorVoices('Snake Block',              () => new EditorVoiceSoundHolderWithSingingPartBefore('SnakeBlock',),);
    public static readonly FAST_SNAKE_BLOCK =         new EditorVoices('Fast Snake Block',         () => new EditorVoiceSoundHolderWithSingingPartBefore('FastSnakeBlock',),);

    public static readonly CONVEYOR_BELT =            new EditorVoices('Conveyor Belt',            () => new EditorVoiceSoundHolderWithVoiceBefore('conveyorbelt',),);
    public static readonly FAST_CONVEYOR_BELT =       new EditorVoices('Fast Conveyor Belt',       () => new EditorVoiceSoundHolderWithSingingPartBefore('fastconveyorbelt',),);

    public static readonly MUSHROOM_TRAMPOLINE =      new EditorVoices('Mushroom Trampoline',      () => new EditorVoiceSoundHolderWithSingingPartBefore('MushroomTrampoline',),);
    public static readonly ON_OFF_TRAMPOLINE =        new EditorVoices('ON/OFF Trampoline',        () => new EditorVoiceSoundHolderWithSingingPartBefore('ONOFFTrampoline',),);

    public static readonly LIFT =                     new EditorVoices('Lift',                     () => new EditorVoiceSoundHolderWithVoiceBefore('lift',),);
    public static readonly FLIMSY_LIFT =              new EditorVoices('Flimsy Lift',              () => new EditorVoiceSoundHolderWithVoiceBefore('flimsylift',),);
    public static readonly CLOUD_LIFT =               new EditorVoices('Cloud Lift',               () => new EditorVoiceSoundHolderWithSingingPartBefore('CloudLift',),);

    public static readonly SEESAW =                   new EditorVoices('Seesaw',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('seesaw',),);

    public static readonly LAVA_LIFT =                new EditorVoices('Lava Lift',                () => new EditorVoiceSoundHolderWithVoiceBefore('lavalift',),);
    public static readonly FAST_LAVA_LIFT =           new EditorVoices('Fast Lava Lift',           () => new EditorVoiceSoundHolderWithSingingPartBefore('FastLavaLift',),);

    public static readonly CRATE =                    new EditorVoices('Crate',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('crate',),);

    public static readonly KEY =                      new EditorVoices('Key',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('key',),);
    public static readonly CURSED_KEY =               new EditorVoices('Cursed Key',               () => new EditorVoiceSoundHolderWithSingingPartBefore('cursedkey',),);

    public static readonly TRAMPOLINE =               new EditorVoices('Trampoline',               () => new EditorVoiceSoundHolderWithVoiceBefore('trampline',),);
    public static readonly HOP_CHOPS =                new EditorVoices('Hop-Chops',                () => new EditorVoiceSoundHolderWithSingingPartBefore('Hop-Chops',),);

    public static readonly POW_BLOCK =                new EditorVoices('POW Block',                () => new EditorVoiceSoundHolderWithVoiceBefore('powblock',),);
    public static readonly RED_POW_BLOCK =            new EditorVoices('Red POW Block',            () => new EditorVoiceSoundHolderWithSingingPartBefore('redPOWBlock',),);

    public static readonly P_SWITCH =                 new EditorVoices('P Switch',                 () => new EditorVoiceSoundHolderWithVoiceBefore('pswitch',),);

    public static readonly WARP_DOOR =                new EditorVoices('Warp Door',                () => new EditorVoiceSoundHolderWithVoiceBefore('warpdoor',),);
    public static readonly P_WARP_DOOR =              new EditorVoices('P Warp Door',              () => new EditorVoiceSoundHolderWithVoiceBefore('pwarpdoor',),);
    public static readonly KEY_DOOR =                 new EditorVoices('Key Door',                 () => new EditorVoiceSoundHolderWithVoiceBefore('keydoor',),);

    public static readonly WARP_BOX =                 new EditorVoices('Warp Box',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('WarpBox',),);
    public static readonly WARP_BOX_WITH_KEY =        new EditorVoices('Warp Box (With Key)',      () => new EditorVoiceSoundHolderWithSingingPartBefore('WarpBox_withkey',),);

    public static readonly WING =                     new EditorVoices('Wing',                     () => new EditorVoiceSoundHolderWithVoiceBefore('wings',),);

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EditorVoices;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #englishNameContainer: StringContainer<PossibleEnglishName>;
    #entityReferences?: EntityReferenceHolder;
    readonly #editorVoiceSoundHolder: ObjectHolder<EditorVoiceSound>;

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName, editorVoiceSound: () => PossibleSoundReceivedOnFactory,) {
        super();
        this.#englishNameContainer = new StringContainer(englishName);
        this.#editorVoiceSoundHolder = new DelayedObjectHolderContainer(() => EditorVoiceSoundFactory.create(editorVoiceSound()));
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml;
    }


    public get editorVoiceSound(): EditorVoiceSound {
        return this.#editorVoiceSoundHolder.get;
    }

    //region -------------------- Entity references --------------------

    /**
     * Create a temporary array containing the references applicable
     * to create a {@link EntityReferenceHolder entity reference}
     *
     * @protected
     * @onlyCalledOnce
     */
    protected get _createEntityReferences(): PossibleEntityReferences_Received {
        return [this.englishName];
    }

    /**
     * <p>
     *  Get the {@link EntityReferenceHolder entity reference} applicable to a specific editor voice.
     * </p>
     *
     * <p>
     *  It can contain either the entity by the same name as {@link EditorVoices this instance},
     *  a single {@link Entities entity instance} similar to {@link EditorVoices this instance} or
     *  multiple {@link Entities entity instance} (from 2 to 4) associated to {@link EditorVoices this instance}.
     * </p>
     */
    public get entityReferences(): EntityReferenceHolder {
        return this.#entityReferences ??= new EntityReferenceHolderContainer(this._createEntityReferences);
    }

    //endregion -------------------- Entity references --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<EditorVoices> {
        return EditorVoices;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
    }

    protected static override _getValueByEnumerable(value: Enumerable,) {
        return value instanceof Import.Entities
            ? this.values.find(enumerable => (enumerable.entityReferences.references as readonly Entities[]).includes(value))
            ?? null
            : null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends EditorVoices = EditorVoices, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EditorVoices
    public static getValue(value: PossibleValue,): | EditorVoices | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn<EditorVoices>(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------
}
