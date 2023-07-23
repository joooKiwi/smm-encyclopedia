import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                   from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                     from 'core/ClassWithReference'
import type {ClassWithEditorVoiceSoundFileHolder}                                    from 'core/editorVoice/ClassWithEditorVoiceSoundFileHolder'
import type {Names, Ordinals, PossibleEnglishName, PossibleReference}                from 'core/editorVoice/EditorVoices.types'
import type {CharacterNameReferenceHolder, PossibleCharacterNameReferences_Received} from 'core/editorVoice/holder/CharacterNameReferenceHolder'
import type {EntityReferenceHolder, PossibleEntityReferences_Received}               from 'core/editorVoice/holder/EntityReferenceHolder'
import type {EditorVoiceSoundFileHolder}                                             from 'core/editorVoice/holder/sound/EditorVoiceSoundFileHolder'

import type {CharacterNames}                                                                     from 'core/characterName/CharacterNames'
import {CharacterNameReferenceHolderContainer}                                                   from 'core/editorVoice/holder/CharacterNameReferenceHolder.container'
import {EmptyReferenceHolder}                                                                    from 'core/editorVoice/holder/EmptyReferenceHolder'
import {EntityReferenceHolderContainer}                                                          from 'core/editorVoice/holder/EntityReferenceHolder.container'
import {SingleEditorVoiceSoundFileHolderWithVoiceBefore as SoundFileWithVoiceBefore}             from 'core/editorVoice/holder/sound/SingleEditorVoiceSoundFileHolderWithVoiceBefore'
import {SingleEditorVoiceSoundFileHolderWithSingingPartBefore as SoundFileWithSingingPartBefore} from 'core/editorVoice/holder/sound/SingleEditorVoiceSoundFileHolderWithSingingPartBefore'
import type {Entities}                                                                           from 'core/entity/Entities'
import {Import}                                                                                  from 'util/DynamicImporter'
import {StringContainer}                                                                         from 'util/StringContainer'
import {getValueByEnglishName}                                                                   from 'util/utilitiesMethods'

/**
 * @todo change the english name to the enum name for the _createEntityReference
 * @todo Change the reference used from the "Brick Block" to "Block"
 * @todo Change the reference used for the "Big Mushroom" as 2 different sounds
 * @todo Change the reference used from the "Green Koopa Troopa" to "Koopa Troopa"
 * @todo Change the reference used from the "Angry Sun" to "Sun"
 * @recursiveReference {@link Entities}, {@link CharacterNames}
 * @classWithDynamicImport {@link Entities}, {@link CharacterNames}
 */
export abstract class EditorVoices
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<PossibleReference>,
        ClassWithEditorVoiceSoundFileHolder {

    //region -------------------- Sub class --------------------

    /** A simple child class of an {@link EditorVoices}, but specialised for the {@link Entities} */
    private static readonly EntityEditorVoices = class EntityEditorVoices extends EditorVoices {

        protected override _retrieveReferences() {
            return this.entityReferences.references.map(it => it.reference)
        }

        protected override _retrieveReference() {
            return this.entityReferences.references[0].reference
        }

        public override get characterNameReference() {
            return EmptyReferenceHolder.get
        }

    }
    /** A simple child class of an {@link EditorVoices}, but specialised for the {@link CharacterNames} */
    private static readonly CharacterNameEditorVoices = class CharacterNameEditorVoices extends EditorVoices {

        protected override _retrieveReferences() {
            return this.characterNameReference.references.map(it => it.reference)
        }

        protected override _retrieveReference() {
            return this.characterNameReference.references[0].reference
        }

        public override get entityReferences() {
            return EmptyReferenceHolder.get
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                   new EditorVoices.EntityEditorVoices('Ground',                          new SoundFileWithVoiceBefore('ground',),)
    public static readonly START_GROUND =             new EditorVoices.EntityEditorVoices('Start Ground',                    new SoundFileWithVoiceBefore('startground',),)
    public static readonly GOAL_GROUND =              new EditorVoices.EntityEditorVoices('Goal Ground',                     new SoundFileWithVoiceBefore('goalground',),)
    public static readonly STEEP_SLOPE =              new EditorVoices.EntityEditorVoices('Steep Slope',                     new SoundFileWithSingingPartBefore('steepslope',),)
    public static readonly GENTLE_SLOPE =             new EditorVoices.EntityEditorVoices('Gentle Slope',                    new SoundFileWithSingingPartBefore('gentleslope',),)

    public static readonly PIPE =                     new EditorVoices.EntityEditorVoices('Pipe',                            new SoundFileWithVoiceBefore('pipe',),)
    public static readonly CLEAR_PIPE =               new EditorVoices.EntityEditorVoices('Clear Pipe',                      new SoundFileWithSingingPartBefore('ClearPipe',),)

    public static readonly SPIKE_TRAP =               new EditorVoices.EntityEditorVoices('Spike Trap',                      new SoundFileWithVoiceBefore('spiketrap',),)
    public static readonly JELECTRO =                 new EditorVoices.EntityEditorVoices('Jelectro',                        new SoundFileWithVoiceBefore('jellelectro',),)
    public static readonly SEA_URCHIN =               new EditorVoices.EntityEditorVoices('Sea Urchin',                      new SoundFileWithVoiceBefore('seaechinus',),)
    public static readonly SPIKE_BLOCK =              new EditorVoices.EntityEditorVoices('Spike Block',                     new SoundFileWithSingingPartBefore('SpikeBlock',),)

    public static readonly MUSHROOM_PLATFORM =        new EditorVoices.EntityEditorVoices('Mushroom Platform',               new SoundFileWithVoiceBefore('mushroomplatform',),)
    public static readonly SEMISOLID_PLATFORM =       new EditorVoices.EntityEditorVoices('Semisolid Platform',              new SoundFileWithVoiceBefore('semisolidplatform',),)
    public static readonly BRIDGE =                   new EditorVoices.EntityEditorVoices('Bridge',                          new SoundFileWithVoiceBefore('bridge',),)

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BLOCK =                    new class EditorVoices_Block extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BRICK_BLOCK, Import.Entities.CRISTAL_BLOCK, Import.Entities.ROTATING_BLOCK,]
        }

    }('Block', new SoundFileWithVoiceBefore('block',),)

    public static readonly HARD_BLOCK =               new class EditorVoices_HardBlock extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.HARD_BLOCK, Import.Entities.ROCK_BLOCK,]
        }

    }('Hard Block', new SoundFileWithVoiceBefore('hardblock',),)

    public static readonly QUESTION_MARK_BLOCK =      new EditorVoices.EntityEditorVoices('? Block',                         new SoundFileWithVoiceBefore('questionblock',),)
    public static readonly HIDDEN_BLOCK =             new EditorVoices.EntityEditorVoices('Hidden Block',                    new SoundFileWithVoiceBefore('hiddenblock',),)

    public static readonly EXCLAMATION_MARK_BLOCK =   new EditorVoices.EntityEditorVoices('! Block',                         new SoundFileWithSingingPartBefore('!Block',),)

    public static readonly NOTE_BLOCK =               new EditorVoices.EntityEditorVoices('Note Block',                      new SoundFileWithVoiceBefore('noteblock',),)

    public static readonly DONUT_BLOCK =              new EditorVoices.EntityEditorVoices('Donut Block',                     new SoundFileWithVoiceBefore('donutblock',),)

    public static readonly CLOUD_BLOCK =              new EditorVoices.EntityEditorVoices('Cloud Block',                     new SoundFileWithVoiceBefore('cloudblock',),)

    public static readonly ON_OFF_SWITCH =            new EditorVoices.EntityEditorVoices('ON/OFF Switch',                   new SoundFileWithSingingPartBefore('ONOFFswitch',),)
    public static readonly DOTTED_LINE_BLOCK =        new EditorVoices.EntityEditorVoices('Dotted-Line Block',               new SoundFileWithSingingPartBefore('Dotted-LineBlock_nr',),)

    public static readonly P_BLOCK =                  new EditorVoices.EntityEditorVoices('P Block',                         new SoundFileWithSingingPartBefore('PBlock',),)

    public static readonly BLINKING_BLOCK =           new EditorVoices.EntityEditorVoices('Blinking Block',                  new SoundFileWithSingingPartBefore('BlinkingBlock',),)

    public static readonly ICE_BLOCK =                new EditorVoices.EntityEditorVoices('Ice Block',                       new SoundFileWithVoiceBefore('iceblock2',),)
    public static readonly ICICLE =                   new EditorVoices.EntityEditorVoices('Icicle',                          new SoundFileWithSingingPartBefore('icicle',),)

    public static readonly COIN =                     new EditorVoices.EntityEditorVoices('Coin',                            new SoundFileWithVoiceBefore('coin',),)
    public static readonly FROZEN_COIN =              new EditorVoices.EntityEditorVoices('Frozen Coin',                     new SoundFileWithSingingPartBefore('FrozenCoin',),)
    public static readonly TEN_COIN =                 new EditorVoices.EntityEditorVoices('10-Coin',                         new SoundFileWithSingingPartBefore('10-coin',),)
    public static readonly THIRTY_COIN =              new EditorVoices.EntityEditorVoices('30-Coin',                         new SoundFileWithSingingPartBefore('30-coin',),)
    public static readonly FIFTY_COIN =               new EditorVoices.EntityEditorVoices('50-Coin',                         new SoundFileWithSingingPartBefore('50-coin',),)
    public static readonly PINK_COIN =                new EditorVoices.EntityEditorVoices('Pink Coin',                       new SoundFileWithSingingPartBefore('pinkcoin',),)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------

    public static readonly SUPER_MUSHROOM =           new EditorVoices.EntityEditorVoices('Super Mushroom',                  new SoundFileWithVoiceBefore('supermushroom',),)
    public static readonly SUPER_MARIO =              new EditorVoices.CharacterNameEditorVoices('Super Mario',              new SoundFileWithVoiceBefore('supermario',),)
    public static readonly SUPER_LUIGI =              new EditorVoices.CharacterNameEditorVoices('Super Luigi',              new SoundFileWithSingingPartBefore('SuperLuigi',),)
    public static readonly SUPER_TOAD =               new EditorVoices.CharacterNameEditorVoices('Super Toad',               new SoundFileWithSingingPartBefore('SuperToad',),)
    public static readonly SUPER_TOADETTE =           new EditorVoices.CharacterNameEditorVoices('Super Toadette',           new SoundFileWithSingingPartBefore('SuperToadette',),)

    public static readonly FIRE_FLOWER =              new EditorVoices.EntityEditorVoices('Fire Flower',                     new SoundFileWithVoiceBefore('fireflower',),)
    public static readonly FIRE_MARIO =               new EditorVoices.CharacterNameEditorVoices('Fire Mario',               new SoundFileWithVoiceBefore('firemario',),)
    public static readonly FIRE_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Fire Luigi',               new SoundFileWithSingingPartBefore('FireLuigi',),)
    public static readonly FIRE_TOAD =                new EditorVoices.CharacterNameEditorVoices('Fire Toad',                new SoundFileWithSingingPartBefore('FireToad',),)
    public static readonly FIRE_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Fire Toadette',            new SoundFileWithSingingPartBefore('FireToadette',),)

    public static readonly SUPERBALL_FLOWER =         new EditorVoices.EntityEditorVoices('Superball Flower',                new SoundFileWithSingingPartBefore('SuperballFlower',),)
    public static readonly SUPERBALL_MARIO =          new EditorVoices.CharacterNameEditorVoices('Superball Mario',          new SoundFileWithSingingPartBefore('SuperballMario',),)
    public static readonly SUPERBALL_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Superball Luigi',          new SoundFileWithSingingPartBefore('SuperballLuigi',),)
    public static readonly SUPERBALL_TOAD =           new EditorVoices.CharacterNameEditorVoices('Superball Toad',           new SoundFileWithSingingPartBefore('SuperballToad',),)
    public static readonly SUPERBALL_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Superball Toadette',       new SoundFileWithSingingPartBefore('SuperballToadette',),)

    public static readonly MYSTERY_MUSHROOM =         new EditorVoices.EntityEditorVoices('Mystery Mushroom',                new SoundFileWithVoiceBefore('mysterymushroom',),)
    public static readonly COSTUME_MARIO =            new EditorVoices.CharacterNameEditorVoices('Costume Mario',            new SoundFileWithVoiceBefore('costumemario',),)

    public static readonly WEIRD_MUSHROOM =           new EditorVoices.EntityEditorVoices('Weird Mushroom',                  new SoundFileWithVoiceBefore('weiredmashroom',),)
    public static readonly WEIRD_MARIO =              new EditorVoices.CharacterNameEditorVoices('Weird Mario',              new SoundFileWithVoiceBefore('weiredmario',),)

    public static readonly MASTER_SWORD =             new EditorVoices.EntityEditorVoices('Master Sword',                    new SoundFileWithSingingPartBefore('MasterSword',),)
    public static readonly LINK =                     new EditorVoices.CharacterNameEditorVoices('Link',                     new SoundFileWithSingingPartBefore('Link',),)

    public static readonly BIG_MUSHROOM_SMM1 =        new class EditorVoices_BigMushroomSMM1 extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BIG_MUSHROOM_CLASSIC, Import.Entities.BIG_MUSHROOM_MODERN,]
        }

    }('Big Mushroom (SMM)', new SoundFileWithVoiceBefore('bigmashroom',),)
    public static readonly BIG_MUSHROOM_SMM2 =        new class EditorVoices_BigMushroomSMM2 extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BIG_MUSHROOM,]
        }

    }('Big Mushroom (SMM2)', new SoundFileWithSingingPartBefore('BigMushroom',),)
    public static readonly GIANT_MARIO =              new EditorVoices.CharacterNameEditorVoices('Giant Mario',              new SoundFileWithVoiceBefore('bigmario',),)
    public static readonly GIANT_LUIGI =              new EditorVoices.CharacterNameEditorVoices('Giant Luigi',              new SoundFileWithSingingPartBefore('BigLuigi',),)
    public static readonly GIANT_TOAD =               new EditorVoices.CharacterNameEditorVoices('Giant Toad',               new SoundFileWithSingingPartBefore('BigToad',),)
    public static readonly GIANT_TOADETTE =           new EditorVoices.CharacterNameEditorVoices('Giant Toadette',           new SoundFileWithSingingPartBefore('BigToadette',),)

    public static readonly SMB2_MUSHROOM =            new EditorVoices.EntityEditorVoices('SMB2 Mushroom',                   new SoundFileWithSingingPartBefore('SMB2Mushroom',),)
    public static readonly SMB2_MARIO =               new EditorVoices.CharacterNameEditorVoices('SMB2 Mario',               new SoundFileWithSingingPartBefore('SMB2Mario',),)
    public static readonly SMB2_LUIGI =               new EditorVoices.CharacterNameEditorVoices('SMB2 Luigi',               new SoundFileWithSingingPartBefore('SMB2Luigi',),)
    public static readonly SMB2_TOAD =                new EditorVoices.CharacterNameEditorVoices('SMB2 Toad',                new SoundFileWithSingingPartBefore('SMB2Toad',),)
    public static readonly SMB2_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('SMB2 Toadette',            new SoundFileWithSingingPartBefore('SMB2Toadette',),)

    public static readonly SUPER_LEAF =               new EditorVoices.EntityEditorVoices('Super Leaf',                      new SoundFileWithVoiceBefore('superleaf',),)
    public static readonly RACCOON_MARIO =            new EditorVoices.CharacterNameEditorVoices('Raccoon Mario',            new SoundFileWithVoiceBefore('lacoonmario',),)
    public static readonly RACCOON_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Raccoon Luigi',            new SoundFileWithSingingPartBefore('RacoonLuigi',),)
    public static readonly RACCOON_TOAD =             new EditorVoices.CharacterNameEditorVoices('Raccoon Toad',             new SoundFileWithSingingPartBefore('RacoonToad',),)
    public static readonly RACCOON_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Raccoon Toadette',         new SoundFileWithSingingPartBefore('RacoonToadette',),)

    public static readonly FROG_SUIT =                new EditorVoices.EntityEditorVoices('Frog Suit',                       new SoundFileWithSingingPartBefore('FrogSuit',),)
    public static readonly FROG_MARIO =               new EditorVoices.CharacterNameEditorVoices('Frog Mario',               new SoundFileWithSingingPartBefore('FrogMario',),)
    public static readonly FROG_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Frog Luigi',               new SoundFileWithSingingPartBefore('FrogLuigi',),)
    public static readonly FROG_TOAD =                new EditorVoices.CharacterNameEditorVoices('Frog Toad',                new SoundFileWithSingingPartBefore('FrogToad',),)
    public static readonly FROG_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Frog Toadette',            new SoundFileWithSingingPartBefore('FrogToadette',),)

    public static readonly CAPE_FEATHER =             new EditorVoices.EntityEditorVoices('Cape Feather',                    new SoundFileWithVoiceBefore('capefeather',),)
    public static readonly CAPE_MARIO =               new EditorVoices.CharacterNameEditorVoices('Cape Mario',               new SoundFileWithVoiceBefore('capemario',),)
    public static readonly CAPE_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Cape Luigi',               new SoundFileWithSingingPartBefore('CapeLuigi',),)
    public static readonly CAPE_TOAD =                new EditorVoices.CharacterNameEditorVoices('Cape Toad',                new SoundFileWithSingingPartBefore('CapeToad',),)
    public static readonly CAPE_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Cape Toadette',            new SoundFileWithSingingPartBefore('CapeToadette',),)

    public static readonly POWER_BALLOON =            new EditorVoices.EntityEditorVoices('Power Balloon',                   new SoundFileWithSingingPartBefore('PowerBalloon',),)
    public static readonly BALLOON_MARIO =            new EditorVoices.CharacterNameEditorVoices('Balloon Mario',            new SoundFileWithSingingPartBefore('BalloonMario',),)
    public static readonly BALLOON_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Balloon Luigi',            new SoundFileWithSingingPartBefore('BalloonLuigi',),)
    public static readonly BALLOON_TOAD =             new EditorVoices.CharacterNameEditorVoices('Balloon Toad',             new SoundFileWithSingingPartBefore('BalloonToad',),)
    public static readonly BALLOON_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Balloon Toadette',         new SoundFileWithSingingPartBefore('BalloonToadette',),)

    public static readonly PROPELLER_MUSHROOM =       new EditorVoices.EntityEditorVoices('Propeller Mushroom',              new SoundFileWithVoiceBefore('propellermushroom',),)
    public static readonly PROPELLER_MARIO =          new EditorVoices.CharacterNameEditorVoices('Propeller Mario',          new SoundFileWithVoiceBefore('propellermario',),)
    public static readonly PROPELLER_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Propeller Luigi',          new SoundFileWithSingingPartBefore('PropellerLuigi',),)
    public static readonly PROPELLER_TOAD =           new EditorVoices.CharacterNameEditorVoices('Propeller Toad',           new SoundFileWithSingingPartBefore('PropellerToad',),)
    public static readonly PROPELLER_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Propeller Toadette',       new SoundFileWithSingingPartBefore('PropellerToadette',),)

    public static readonly SUPER_ACORN =              new EditorVoices.EntityEditorVoices('Super Acorn',                     new SoundFileWithSingingPartBefore('SuperAcorn',),)
    public static readonly FLYING_SQUIRREL_MARIO =    new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Mario',    new SoundFileWithSingingPartBefore('FlyingSquirrelMario',),)
    public static readonly FLYING_SQUIRREL_LUIGI =    new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Luigi',    new SoundFileWithSingingPartBefore('FlyingSquirrelLuigi',),)
    public static readonly FLYING_SQUIRREL_TOAD =     new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Toad',     new SoundFileWithSingingPartBefore('FlyingSquirrelToad',),)
    public static readonly FLYING_SQUIRREL_TOADETTE = new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Toadette', new SoundFileWithSingingPartBefore('FlyingSquirrelToadette',),)

    public static readonly SUPER_BELL =               new EditorVoices.EntityEditorVoices('Super Bell',                      new SoundFileWithSingingPartBefore('SuperBell',),)
    public static readonly CAT_MARIO =                new EditorVoices.CharacterNameEditorVoices('Cat Mario',                new SoundFileWithSingingPartBefore('CatMario',),)
    public static readonly CAT_LUIGI =                new EditorVoices.CharacterNameEditorVoices('Cat Luigi',                new SoundFileWithSingingPartBefore('CatLuigi',),)
    public static readonly CAT_TOAD =                 new EditorVoices.CharacterNameEditorVoices('Cat Toad',                 new SoundFileWithSingingPartBefore('CatToad',),)
    public static readonly CAT_TOADETTE =             new EditorVoices.CharacterNameEditorVoices('Cat Toadette',             new SoundFileWithSingingPartBefore('CatToadette',),)

    public static readonly SUPER_HAMMER =             new EditorVoices.EntityEditorVoices('Super Hammer',                    new SoundFileWithSingingPartBefore('SuperHammer',),)
    public static readonly BUILDER_MARIO =            new EditorVoices.CharacterNameEditorVoices('Builder Mario',            new SoundFileWithSingingPartBefore('BuilderMario',),)
    public static readonly BUILDER_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Builder Luigi',            new SoundFileWithSingingPartBefore('BuilderLuigi',),)
    public static readonly BUILDER_TOAD =             new EditorVoices.CharacterNameEditorVoices('Builder Toad',             new SoundFileWithSingingPartBefore('BuilderToad',),)
    public static readonly BUILDER_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Builder Toadette',         new SoundFileWithSingingPartBefore('BuilderToadette',),)

    public static readonly BOOMERANG_FLOWER =         new EditorVoices.EntityEditorVoices('Boomerang Flower',                new SoundFileWithSingingPartBefore('BoomerangFlower',),)
    public static readonly BOOMERANG_MARIO =          new EditorVoices.CharacterNameEditorVoices('Boomerang Mario',          new SoundFileWithSingingPartBefore('BoomerangMario',),)
    public static readonly BOOMERANG_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Boomerang Luigi',          new SoundFileWithSingingPartBefore('BoomerangLuigi',),)
    public static readonly BOOMERANG_TOAD =           new EditorVoices.CharacterNameEditorVoices('Boomerang Toad',           new SoundFileWithSingingPartBefore('BoomerangToad',),)
    public static readonly BOOMERANG_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Boomerang Toadette',       new SoundFileWithSingingPartBefore('BoomerangToadette',),)

    public static readonly CANNON_BOX =               new EditorVoices.EntityEditorVoices('Cannon Box',                      new SoundFileWithSingingPartBefore('CannonBox',),)
    public static readonly PROPELLER_BOX =            new EditorVoices.EntityEditorVoices('Propeller Box',                   new SoundFileWithSingingPartBefore('PropellerBox',),)
    public static readonly GOOMBA_MASK =              new EditorVoices.EntityEditorVoices('Goomba Mask',                     new SoundFileWithSingingPartBefore('GoombaMask',),)
    public static readonly BULLET_BILL_MASK =         new EditorVoices.EntityEditorVoices('Bullet Bill Mask',                new SoundFileWithSingingPartBefore('BulletBillMask',),)
    public static readonly RED_POW_BOX =              new EditorVoices.EntityEditorVoices('Red POW Box',                     new SoundFileWithSingingPartBefore('RedPOWBox',),)

    public static readonly SUPER_STAR =               new EditorVoices.EntityEditorVoices('Super Star',                      new SoundFileWithVoiceBefore('superstar',),)

    public static readonly ONE_UP_MUSHROOM =          new EditorVoices.EntityEditorVoices('1-Up Mushroom',                   new SoundFileWithVoiceBefore('oneupmushroom',),)
    public static readonly ROTTEN_MUSHROOM =          new EditorVoices.EntityEditorVoices('Rotten Mushroom',                 new SoundFileWithSingingPartBefore('RottenMushroom',),)

    public static readonly SHOE_GOOMBA =              new EditorVoices.EntityEditorVoices('Shoe Goomba',                     new SoundFileWithVoiceBefore('shoegoomba',),)
    public static readonly STILETTO_GOOMBA =          new EditorVoices.EntityEditorVoices('Stiletto Goomba',                 new SoundFileWithVoiceBefore('stilettogoomba',),)
    public static readonly YOSHI_EGG =                new EditorVoices.EntityEditorVoices('Yoshi\'s Egg',                    new SoundFileWithVoiceBefore('yoshiegg',),)
    public static readonly RED_YOSHI_EGG =            new EditorVoices.EntityEditorVoices('Red Yoshi\'s Egg',                new SoundFileWithSingingPartBefore('BigRedYoshisEgg',),)

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                   new EditorVoices.EntityEditorVoices('Goomba',                          new SoundFileWithVoiceBefore('goomba',),)
    public static readonly GALOOMBA =                 new EditorVoices.EntityEditorVoices('Galoomba',                        new SoundFileWithVoiceBefore('galoomba',),)
    public static readonly GOOMBRAT =                 new EditorVoices.EntityEditorVoices('Goombrat',                        new SoundFileWithSingingPartBefore('Goombrat',),)
    public static readonly GOOMBUD =                  new EditorVoices.EntityEditorVoices('Goombud',                         new SoundFileWithSingingPartBefore('Goombud',),)

    public static readonly KOOPA_TROOPA =             new class EditorVoices_KoopaTroopa extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.GREEN_KOOPA_TROOPA, Import.Entities.RED_KOOPA_TROOPA,]
        }

    }('Koopa Troopa', new SoundFileWithVoiceBefore('koopatrooper',),)

    public static readonly DRY_BONES =                new class EditorVoices_DryBones extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.DRY_BONES, Import.Entities.PARABONES,]
        }

    }('Dry Bones', new SoundFileWithVoiceBefore('drybones',),)
    public static readonly DRY_BONES_SHELL =          new EditorVoices.EntityEditorVoices('Dry Bones Shell',                 new SoundFileWithSingingPartBefore('DryBonesShell',),)

    public static readonly BUZZY_BEETLE =             new class EditorVoices_BuzzyBeetle extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BUZZY_BEETLE, Import.Entities.PARA_BEETLE, Import.Entities.BUZZY_SHELL,]
        }

    }('Buzzy Beetle', new SoundFileWithVoiceBefore('buzzybeatle',),)

    public static readonly SPINY =                    new class EditorVoices_Spiny extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.SPINY, Import.Entities.WINGED_SPINY, Import.Entities.SPINY_EGG, Import.Entities.SPINY_SHELL,]
        }

    }('Spiny', new SoundFileWithVoiceBefore('spiny',),)

    public static readonly SPIKE_TOP =                new class EditorVoices_SpikeTop extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.SPIKE_TOP, Import.Entities.WINGED_SPIKE_TOP, Import.Entities.FAST_SPIKE_TOP, Import.Entities.FAST_WINGED_SPIKE_TOP,]
        }

    }('Spike Top', new SoundFileWithVoiceBefore('spiketop',),)

    public static readonly SKIPSQUEAK =               new EditorVoices.EntityEditorVoices('Skipsqueak',                      new SoundFileWithSingingPartBefore('Skipsqueak',),)
    public static readonly SPINY_SKIPSQUEAK =         new EditorVoices.EntityEditorVoices('Spiny Skipsqueak',                new SoundFileWithSingingPartBefore('SpinySkipsqueak',),)

    public static readonly ANT_TROOPER =              new EditorVoices.EntityEditorVoices('Ant Trooper',                     new SoundFileWithSingingPartBefore('AntTrooper',),)
    public static readonly HORNED_ANT_TROOPER =       new EditorVoices.EntityEditorVoices('Horned Ant Trooper',              new SoundFileWithSingingPartBefore('HornedAntTrooper',),)

    public static readonly STINGBY =                  new EditorVoices.EntityEditorVoices('Stingby',                         new SoundFileWithSingingPartBefore('Stingby',),)

    public static readonly CHEEP_CHEEP =              new class EditorVoices_CheepCheep extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.CHEEP_CHEEP, Import.Entities.BLURPS, Import.Entities.DEEP_CHEEP,]
        }

    }('Cheep Cheep', new SoundFileWithVoiceBefore('cheapcheap',),)
    public static readonly FISH_BONE =                new EditorVoices.EntityEditorVoices('Fish Bone',                       new SoundFileWithSingingPartBefore('FishBones',),)

    public static readonly BLOOPER =                  new EditorVoices.EntityEditorVoices('Blooper',                         new SoundFileWithVoiceBefore('blooper',),)
    public static readonly BLOOPER_NANNY =            new EditorVoices.EntityEditorVoices('Blooper Nanny',                   new SoundFileWithSingingPartBefore('BlooperNanny',),)

    public static readonly PORCUPUFFER =              new EditorVoices.EntityEditorVoices('Porcupuffer',                     new SoundFileWithSingingPartBefore('Porcupuffer',),)

    public static readonly WIGGLER =                  new EditorVoices.EntityEditorVoices('Wiggler',                         new SoundFileWithVoiceBefore('wiggler',),)
    public static readonly ANGRY_WIGGLER =            new EditorVoices.EntityEditorVoices('Angry Wiggler',                   new SoundFileWithSingingPartBefore('AngryWiggler',),)

    public static readonly PIRANHA_PLANT =            new EditorVoices.EntityEditorVoices('Piranha Plant',                   new SoundFileWithVoiceBefore('piranhaplant',),)
    public static readonly JUMPING_PIRANHA_PLANT =    new EditorVoices.EntityEditorVoices('Jumping Piranha Plant',           new SoundFileWithVoiceBefore('jumpingpiranhaplant',),)
    public static readonly FIRE_PIRANHA_PLANT =       new EditorVoices.EntityEditorVoices('Fire Piranha Plant',              new SoundFileWithVoiceBefore('firepiranhaplant',),)
    public static readonly MUNCHER =                  new EditorVoices.EntityEditorVoices('Muncher',                         new SoundFileWithVoiceBefore('monchar',),)
    public static readonly PIRANHA_CREEPER =          new EditorVoices.EntityEditorVoices('Piranha Creeper',                 new SoundFileWithSingingPartBefore('PiranhaCreeper',),)

    public static readonly CHAIN_CHOMP =              new EditorVoices.EntityEditorVoices('Chain Chomp',                     new SoundFileWithVoiceBefore('chainchomp',),)
    public static readonly UNCHAINED_CHOMP =          new EditorVoices.EntityEditorVoices('Unchained Chomp',                 new SoundFileWithSingingPartBefore('UnchainedChomp',),)

    public static readonly SPIKE =                    new EditorVoices.EntityEditorVoices('Spike',                           new SoundFileWithSingingPartBefore('Spike',),)
    public static readonly SPIKE_BALL =               new EditorVoices.EntityEditorVoices('Spike Ball',                      new SoundFileWithSingingPartBefore('SpikeBall',),)
    public static readonly SNOWBALL =                 new EditorVoices.EntityEditorVoices('Snowball',                        new SoundFileWithSingingPartBefore('SnowBall',),)

    public static readonly LAKITU =                   new EditorVoices.EntityEditorVoices('Lakitu',                          new SoundFileWithVoiceBefore('lakitu',),)
    public static readonly LAKITU_CLOUD =             new EditorVoices.EntityEditorVoices('Lakitu\'s Cloud',                 new SoundFileWithVoiceBefore('lakitucloud',),)

    public static readonly BOO =                      new EditorVoices.EntityEditorVoices('Boo',                             new SoundFileWithVoiceBefore('boo',),)
    public static readonly STRETCH =                  new EditorVoices.EntityEditorVoices('Stretch',                         new SoundFileWithSingingPartBefore('Stretch',),)
    public static readonly BOO_BUDDIES =              new EditorVoices.EntityEditorVoices('Boo Buddies',                     new SoundFileWithVoiceBefore('boobuddies',),)
    public static readonly PEEPA =                    new EditorVoices.EntityEditorVoices('Peepa',                           new SoundFileWithSingingPartBefore('Peepa',),)

    public static readonly BOB_OMB =                  new EditorVoices.EntityEditorVoices('Bob-omb',                         new SoundFileWithVoiceBefore('bombomb',),)
    public static readonly LIT_BOB_OMB =              new EditorVoices.EntityEditorVoices('Lit Bob-omb',                     new SoundFileWithSingingPartBefore('litBob-omb',),)

    public static readonly POKEY =                    new EditorVoices.EntityEditorVoices('Pokey',                           new SoundFileWithSingingPartBefore('Pokey',),)
    public static readonly SNOW_POKEY =               new EditorVoices.EntityEditorVoices('Snow Pokey',                      new SoundFileWithSingingPartBefore('SnowPokey',),)

    public static readonly THWOMP =                   new EditorVoices.EntityEditorVoices('Thwomp',                          new SoundFileWithVoiceBefore('thwomp',),)

    public static readonly MONTY_MOLE =               new EditorVoices.EntityEditorVoices('Monty Mole',                      new SoundFileWithVoiceBefore('montymole',),)
    public static readonly ROCKY_WRENCH =             new EditorVoices.EntityEditorVoices('Rocky Wrench',                    new SoundFileWithVoiceBefore('rockeyrench',),)

    public static readonly MAGIKOOPA =                new EditorVoices.EntityEditorVoices('Magikoopa',                       new SoundFileWithVoiceBefore('magikoopa', 'kameck_EU',),)

    public static readonly HAMMER_BRO =               new EditorVoices.EntityEditorVoices('Hammer Bro',                      new SoundFileWithVoiceBefore('hammerbro',),)
    public static readonly SLEDGE_BRO =               new EditorVoices.EntityEditorVoices('Sledge Bro',                      new SoundFileWithVoiceBefore('sledgebro',),)
    public static readonly FIRE_BRO =                 new EditorVoices.EntityEditorVoices('Fire Bro',                        new SoundFileWithSingingPartBefore('FireBro',),)
    public static readonly HEAVY_FIRE_BRO =           new EditorVoices.EntityEditorVoices('Heavy Fire Bro',                  new SoundFileWithSingingPartBefore('HeavyFireBro',),)

    public static readonly LAVA_BUBBLE =              new EditorVoices.EntityEditorVoices('Lava Bubble',                     new SoundFileWithVoiceBefore('lavabubble',),)

    public static readonly MECHAKOOPA =               new EditorVoices.EntityEditorVoices('Mechakoopa',                      new SoundFileWithSingingPartBefore('Mechakoopa',),)
    public static readonly BLASTA_MECHAKOOPA =        new EditorVoices.EntityEditorVoices('Blasta Mechakoopa',               new SoundFileWithSingingPartBefore('BlastaMechakoopa',),)
    public static readonly ZAPPA_MECHAKOOPA =         new EditorVoices.EntityEditorVoices('Zappa Mechakoopa',                new SoundFileWithSingingPartBefore('ZappaMechakoopa',),)

    public static readonly CHARVAARGH =               new EditorVoices.EntityEditorVoices('Charvaargh',                      new SoundFileWithSingingPartBefore('Charvaargh',),)

    public static readonly BULLY =                    new EditorVoices.EntityEditorVoices('Bully',                           new SoundFileWithSingingPartBefore('Bully',),)

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =             new EditorVoices.EntityEditorVoices('Bill Blaster',                    new SoundFileWithVoiceBefore('billblaster',),)
    public static readonly BULL_EYE_BLASTER =         new EditorVoices.EntityEditorVoices('Bull\'s-Eye Blaster',             new SoundFileWithSingingPartBefore('Bulls-EyeBlaster',),)

    public static readonly BANZAI_BILL =              new EditorVoices.EntityEditorVoices('Banzai Bill',                     new SoundFileWithSingingPartBefore('BanzaiBill',),)
    public static readonly BULL_EYE_BANZAI =          new class EditorVoices_BullEyeBanzai extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BULL_EYE_BANZAI, Import.Entities.CAT_BANZAI_BILL,]
        }

    }('Bull\'s-Eye Banzai', new SoundFileWithSingingPartBefore('Bulls-EyeBanzai',),)

    public static readonly CANNON =                   new EditorVoices.EntityEditorVoices('Cannon',                          new SoundFileWithVoiceBefore('cannon',),)
    public static readonly RED_CANNON =               new EditorVoices.EntityEditorVoices('Red Cannon',                      new SoundFileWithSingingPartBefore('redcannon',),)

    public static readonly BURNER =                   new EditorVoices.EntityEditorVoices('Burner',                          new SoundFileWithVoiceBefore('burner',),)

    public static readonly FIRE_BAR =                 new EditorVoices.EntityEditorVoices('Fire Bar',                        new SoundFileWithVoiceBefore('firebar',),)

    public static readonly SKEWER =                   new EditorVoices.EntityEditorVoices('Skewer',                          new SoundFileWithVoiceBefore('skewer', 'spikepiller'),)

    public static readonly KOOPA_CLOWN_CAR =          new EditorVoices.EntityEditorVoices('Koopa Clown Car',                 new SoundFileWithVoiceBefore('koopaclowncar',),)
    public static readonly JUNIOR_CLOWN_CAR =         new EditorVoices.EntityEditorVoices('Junior Clown Car',                new SoundFileWithVoiceBefore('juniorclowncar',),)
    public static readonly FIRE_KOOPA_CLOWN_CAR =     new EditorVoices.EntityEditorVoices('Fire Koopa Clown Car',            new SoundFileWithVoiceBefore('firekoopaclowncar',),)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =    new EditorVoices.EntityEditorVoices('Fire Junior Clown Car',           new SoundFileWithVoiceBefore('firejuniorclowncar',),)

    public static readonly KOOPA_TROOPA_CAR =         new EditorVoices.EntityEditorVoices('Koopa Troopa Car',                new SoundFileWithSingingPartBefore('KoopaTroopaCar',),)

    public static readonly GRINDER =                  new EditorVoices.EntityEditorVoices('Grinder',                         new SoundFileWithVoiceBefore('grinder',),)

    public static readonly SUN =                      new class EditorVoices_Sun extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.ANGRY_SUN,]
        }

    }('Sun', new SoundFileWithSingingPartBefore('Sun',),)
    public static readonly MOON =                     new EditorVoices.EntityEditorVoices('Moon',                            new SoundFileWithSingingPartBefore('Moon',),)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                   new EditorVoices.EntityEditorVoices('Bowser',                          new SoundFileWithVoiceBefore('bowser',),)
    public static readonly MEOWSER =                  new EditorVoices.EntityEditorVoices('Meowser',                         new SoundFileWithSingingPartBefore('Meowser',),)

    public static readonly BOWSER_JR =                new EditorVoices.EntityEditorVoices('Bowser Jr.',                      new SoundFileWithVoiceBefore('bowserjr',),)

    public static readonly BOOM_BOOM =                new EditorVoices.EntityEditorVoices('Boom Boom',                       new SoundFileWithSingingPartBefore('BoomBoom',),)
    public static readonly POM_POM =                  new EditorVoices.EntityEditorVoices('Pom Pom',                         new SoundFileWithSingingPartBefore('PomPom',),)

    public static readonly LARRY =                    new EditorVoices.EntityEditorVoices('Larry',                           new SoundFileWithSingingPartBefore('Larry',),)
    public static readonly IGGY =                     new EditorVoices.EntityEditorVoices('Iggy',                            new SoundFileWithSingingPartBefore('Iggy',),)
    public static readonly WENDY =                    new EditorVoices.EntityEditorVoices('Wendy',                           new SoundFileWithSingingPartBefore('Wendy',),)
    public static readonly LEMMY =                    new EditorVoices.EntityEditorVoices('Lemmy',                           new SoundFileWithSingingPartBefore('Lemmy',),)
    public static readonly ROY =                      new EditorVoices.EntityEditorVoices('Roy',                             new SoundFileWithSingingPartBefore('Roy',),)
    public static readonly MORTON =                   new EditorVoices.EntityEditorVoices('Morton',                          new SoundFileWithSingingPartBefore('Morton',),)
    public static readonly LUDWIG =                   new EditorVoices.EntityEditorVoices('Ludwig',                          new SoundFileWithSingingPartBefore('Ludwig',),)

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                   new EditorVoices.EntityEditorVoices('Bumper',                          new SoundFileWithVoiceBefore('bumper',),)

    public static readonly SWINGING_CLAW =            new EditorVoices.EntityEditorVoices('Swinging Claw',                   new SoundFileWithSingingPartBefore('swingingclaw',),)

    public static readonly TWISTER =                  new EditorVoices.EntityEditorVoices('Twister',                         new SoundFileWithSingingPartBefore('Twister',),)

    public static readonly ONE_WAY_WALL =             new EditorVoices.EntityEditorVoices('One-Way Wall',                    new SoundFileWithVoiceBefore('onewaywall',),)

    public static readonly TRACK =                    new EditorVoices.EntityEditorVoices('Track',                           new SoundFileWithVoiceBefore('track',),)
    public static readonly TRACK_BLOCK =              new EditorVoices.EntityEditorVoices('Track Block',                     new SoundFileWithSingingPartBefore('TrackBlock',),)

    public static readonly VINE =                     new EditorVoices.EntityEditorVoices('Vine',                            new SoundFileWithVoiceBefore('vine',),)
    public static readonly TREE =                     new EditorVoices.EntityEditorVoices('Tree',                            new SoundFileWithSingingPartBefore('tree',),)

    public static readonly ARROW_SIGN =               new EditorVoices.EntityEditorVoices('Arrow Sign',                      new SoundFileWithSingingPartBefore('arrowsign',),)

    public static readonly CHECKPOINT_FLAG =          new EditorVoices.EntityEditorVoices('Checkpoint Flag',                 new SoundFileWithSingingPartBefore('CheckpointFlag',),)

    public static readonly DASH_BLOCK =               new EditorVoices.EntityEditorVoices('Dash Block',                      new SoundFileWithSingingPartBefore('DashBlock',),)

    public static readonly SNAKE_BLOCK =              new EditorVoices.EntityEditorVoices('Snake Block',                     new SoundFileWithSingingPartBefore('SnakeBlock',),)
    public static readonly FAST_SNAKE_BLOCK =         new EditorVoices.EntityEditorVoices('Fast Snake Block',                new SoundFileWithSingingPartBefore('FastSnakeBlock',),)

    public static readonly CONVEYOR_BELT =            new EditorVoices.EntityEditorVoices('Conveyor Belt',                   new SoundFileWithVoiceBefore('conveyorbelt',),)
    public static readonly FAST_CONVEYOR_BELT =       new EditorVoices.EntityEditorVoices('Fast Conveyor Belt',              new SoundFileWithSingingPartBefore('fastconveyorbelt',),)

    public static readonly MUSHROOM_TRAMPOLINE =      new EditorVoices.EntityEditorVoices('Mushroom Trampoline',             new SoundFileWithSingingPartBefore('MushroomTrampoline',),)
    public static readonly ON_OFF_TRAMPOLINE =        new EditorVoices.EntityEditorVoices('ON/OFF Trampoline',               new SoundFileWithSingingPartBefore('ONOFFTrampoline',),)

    public static readonly LIFT =                     new EditorVoices.EntityEditorVoices('Lift',                            new SoundFileWithVoiceBefore('lift',),)
    public static readonly FLIMSY_LIFT =              new EditorVoices.EntityEditorVoices('Flimsy Lift',                     new SoundFileWithVoiceBefore('flimsylift',),)
    public static readonly CLOUD_LIFT =               new EditorVoices.EntityEditorVoices('Cloud Lift',                      new SoundFileWithSingingPartBefore('CloudLift',),)

    public static readonly SEESAW =                   new EditorVoices.EntityEditorVoices('Seesaw',                          new SoundFileWithSingingPartBefore('seesaw',),)

    public static readonly LAVA_LIFT =                new EditorVoices.EntityEditorVoices('Lava Lift',                       new SoundFileWithVoiceBefore('lavalift',),)
    public static readonly FAST_LAVA_LIFT =           new EditorVoices.EntityEditorVoices('Fast Lava Lift',                  new SoundFileWithSingingPartBefore('FastLavaLift',),)

    public static readonly CRATE =                    new EditorVoices.EntityEditorVoices('Crate',                           new SoundFileWithSingingPartBefore('crate',),)

    public static readonly KEY =                      new EditorVoices.EntityEditorVoices('Key',                             new SoundFileWithSingingPartBefore('key',),)
    public static readonly CURSED_KEY =               new EditorVoices.EntityEditorVoices('Cursed Key',                      new SoundFileWithSingingPartBefore('cursedkey',),)

    public static readonly TRAMPOLINE =               new EditorVoices.EntityEditorVoices('Trampoline',                      new SoundFileWithVoiceBefore('trampline',),)
    public static readonly HOP_CHOPS =                new EditorVoices.EntityEditorVoices('Hop-Chops',                       new SoundFileWithSingingPartBefore('Hop-Chops',),)

    public static readonly POW_BLOCK =                new EditorVoices.EntityEditorVoices('POW Block',                       new SoundFileWithVoiceBefore('powblock',),)
    public static readonly RED_POW_BLOCK =            new EditorVoices.EntityEditorVoices('Red POW Block',                   new SoundFileWithSingingPartBefore('redPOWBlock',),)

    public static readonly P_SWITCH =                 new EditorVoices.EntityEditorVoices('P Switch',                        new SoundFileWithVoiceBefore('pswitch',),)

    public static readonly WARP_DOOR =                new EditorVoices.EntityEditorVoices('Warp Door',                       new SoundFileWithVoiceBefore('warpdoor',),)
    public static readonly P_WARP_DOOR =              new EditorVoices.EntityEditorVoices('P Warp Door',                     new SoundFileWithVoiceBefore('pwarpdoor',),)
    public static readonly KEY_DOOR =                 new EditorVoices.EntityEditorVoices('Key Door',                        new SoundFileWithVoiceBefore('keydoor',),)

    public static readonly WARP_BOX =                 new EditorVoices.EntityEditorVoices('Warp Box',                        new SoundFileWithSingingPartBefore('WarpBox',),)
    public static readonly WARP_BOX_WITH_KEY =        new EditorVoices.EntityEditorVoices('Warp Box (With Key)',             new SoundFileWithSingingPartBefore('WarpBox_withkey',),)

    public static readonly WING =                     new EditorVoices.EntityEditorVoices('Wing',                            new SoundFileWithVoiceBefore('wings',),)

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<EditorVoices, typeof EditorVoices> = class CompanionEnum_EditorVoices
        extends CompanionEnum<EditorVoices, typeof EditorVoices> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EditorVoices

        private constructor() {
            super(EditorVoices,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EditorVoices()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishNameContainer: StringContainer<PossibleEnglishName>
    #references?: readonly PossibleReference[]
    #reference?: PossibleReference
    #characterNameReference?: CharacterNameReferenceHolder
    #entityReferences?: EntityReferenceHolder
    readonly #editorVoiceSoundHolder

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(englishName: PossibleEnglishName, editorVoiceSoundFile: EditorVoiceSoundFileHolder,) {
        super()
        this.#englishNameContainer = new StringContainer(englishName)
        this.#editorVoiceSoundHolder = editorVoiceSoundFile
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }


    public get editorVoiceSoundFileHolder(): EditorVoiceSoundFileHolder {
        return this.#editorVoiceSoundHolder
    }

    //region -------------------- References --------------------

    public get reference(): PossibleReference {
        return this.#reference ??= this._retrieveReference()
    }

    protected abstract _retrieveReference(): PossibleReference


    public get references(): readonly PossibleReference[] {
        return this.#references ??= this._retrieveReferences()
    }

    protected abstract _retrieveReferences(): readonly PossibleReference[]

    //region -------------------- Character name references --------------------

    protected _createCharacterNameReference(): PossibleCharacterNameReferences_Received {
        return this.englishName
    }

    public get characterNameReference(): CharacterNameReferenceHolder {
        return this.#characterNameReference ??= new CharacterNameReferenceHolderContainer(this._createCharacterNameReference())
    }

    //endregion -------------------- Character name references --------------------
    //region -------------------- Entity references --------------------

    /**
     * Create a temporary array containing the references applicable
     * to create a {@link EntityReferenceHolder entity reference}
     *
     * @protected
     * @onlyCalledOnce
     */
    protected _createEntityReferences(): PossibleEntityReferences_Received {
        return this.englishName
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
        return this.#entityReferences ??= new EntityReferenceHolderContainer(this._createEntityReferences())
    }

    //endregion -------------------- Entity references --------------------

    //endregion -------------------- References --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByName(value: Nullable<| EditorVoices | string>,): EditorVoices {
        return getValueByEnglishName(value, this,)
    }

    public static getValueByCharacterName(value: PossibleEnumerableValueBy<| EditorVoices | CharacterNames>,): EditorVoices {
        if (value instanceof this)
            return value
        const characterNameValue = value instanceof Import.CharacterNames ? value : Import.CharacterNames.getValue(value),
            valueFound = this.#findByCharacterName(characterNameValue)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by "${Import.CharacterNames.name}.${characterNameValue}".`)
        return valueFound
    }

    public static getValueByEntity(value: PossibleEnumerableValueBy<| EditorVoices | Entities>,): EditorVoices {
        if (value instanceof this)
            return value
        const entityValue = value instanceof Import.Entities ? value : Import.Entities.getValue(value),
            valueFound = this.#findByEntity(entityValue)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by "${Import.Entities.name}.${entityValue}".`)
        return valueFound
    }

    public static hasReference(value: | Entities | CharacterNames,): boolean {
        return value instanceof Import.Entities
            ? this.#findByEntity(value) != null
            : this.#findByCharacterName(value) != null
    }

    static #findByEntity(value: Entities,): NullOr<EditorVoices> {
        return this.values.find(it => it.entityReferences.references.includes(value as never))
    }

    static #findByCharacterName(value: CharacterNames,): NullOr<EditorVoices> {
        return this.values.find(it => it.characterNameReference.references.includes(value as never))
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<EditorVoices>,): EditorVoices {
        return EditorVoices.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<EditorVoices> {
        return EditorVoices.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<EditorVoices> {
        yield* EditorVoices.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
