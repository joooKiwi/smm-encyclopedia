import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                   from 'core/ClassWithEnglishName'
import type {ClassWithEditorVoiceSound}                                              from 'core/editorVoice/ClassWithEditorVoiceSound'
import type {EditorVoiceSound, PossibleSoundReceivedOnFactory}                       from 'core/editorVoice/EditorVoiceSound'
import type {Names, Ordinals, PossibleEnglishName}                                   from 'core/editorVoice/EditorVoices.types'
import type {CharacterNameReferenceHolder, PossibleCharacterNameReferences_Received} from 'core/editorVoice/holder/CharacterNameReferenceHolder'
import type {EntityReferenceHolder, PossibleEntityReferences_Received}               from 'core/editorVoice/holder/EntityReferenceHolder'
import type {ObjectHolder}                                                           from 'util/holder/ObjectHolder'
import type {Nullable, NullOr}                                                       from 'util/types/nullable'

import type {CharacterNames}                         from 'core/characterName/CharacterNames'
import {EditorVoiceSoundFactory}                     from 'core/editorVoice/EditorVoiceSound.factory'
import {CharacterNameReferenceHolderContainer}       from 'core/editorVoice/holder/CharacterNameReferenceHolder.container'
import {EditorVoiceSoundHolderWithSingingPartBefore} from 'core/editorVoice/holder/EditorVoiceSoundHolderWithSingingPartBefore'
import {EditorVoiceSoundHolderWithVoiceBefore}       from 'core/editorVoice/holder/EditorVoiceSoundHolderWithVoiceBefore'
import {EmptyReferenceHolder}                        from 'core/editorVoice/holder/EmptyReferenceHolder'
import {EntityReferenceHolderContainer}              from 'core/editorVoice/holder/EntityReferenceHolder.container'
import type {Entities}                               from 'core/entity/Entities'
import {Import}                                      from 'util/DynamicImporter'
import {StringContainer}                             from 'util/StringContainer'
import {getValueByEnglishName}                       from 'util/utilitiesMethods'
import {DelayedObjectHolderContainer}                from 'util/holder/DelayedObjectHolder.container'

/**
 * @todo change the english name to the enum name for the _createEntityReference
 * @recursiveReference {@link Entities}, {@link CharacterNames}
 * @classWithDynamicImport {@link Entities}, {@link CharacterNames}
 */
export class EditorVoices
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithEditorVoiceSound {

    //region -------------------- Sub class --------------------

    private static readonly EntityEditorVoices = class EntityEditorVoices extends EditorVoices {

        constructor(englishName: PossibleEnglishName, editorVoiceSound: () => PossibleSoundReceivedOnFactory,) {
            super(true, englishName, editorVoiceSound,)
        }

        public override get characterNameReference() {
            return EmptyReferenceHolder.get
        }

    }
    private static readonly CharacterNameEditorVoices = class CharacterNameEditorVoices extends EditorVoices {

        constructor(englishName: PossibleEnglishName, editorVoiceSound: () => PossibleSoundReceivedOnFactory,) {
            super(false, englishName, editorVoiceSound,)
        }

        public override get entityReferences() {
            return EmptyReferenceHolder.get
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                   new EditorVoices.EntityEditorVoices('Ground',                          () => new EditorVoiceSoundHolderWithVoiceBefore('ground',),)
    public static readonly START_GROUND =             new EditorVoices.EntityEditorVoices('Start Ground',                    () => new EditorVoiceSoundHolderWithVoiceBefore('startground',),)
    public static readonly GOAL_GROUND =              new EditorVoices.EntityEditorVoices('Goal Ground',                     () => new EditorVoiceSoundHolderWithVoiceBefore('goalground',),)
    public static readonly STEEP_SLOPE =              new EditorVoices.EntityEditorVoices('Steep Slope',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('steepslope',),)
    public static readonly GENTLE_SLOPE =             new EditorVoices.EntityEditorVoices('Gentle Slope',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('gentleslope',),)

    public static readonly PIPE =                     new EditorVoices.EntityEditorVoices('Pipe',                            () => new EditorVoiceSoundHolderWithVoiceBefore('pipe',),)
    public static readonly CLEAR_PIPE =               new EditorVoices.EntityEditorVoices('Clear Pipe',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('ClearPipe',),)

    public static readonly SPIKE_TRAP =               new EditorVoices.EntityEditorVoices('Spike Trap',                      () => new EditorVoiceSoundHolderWithVoiceBefore('spiketrap',),)
    public static readonly JELECTRO =                 new EditorVoices.EntityEditorVoices('Jelectro',                        () => new EditorVoiceSoundHolderWithVoiceBefore('jellelectro',),)
    public static readonly SEA_URCHIN =               new EditorVoices.EntityEditorVoices('Sea Urchin',                      () => new EditorVoiceSoundHolderWithVoiceBefore('seaechinus',),)
    public static readonly SPIKE_BLOCK =              new EditorVoices.EntityEditorVoices('Spike Block',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('SpikeBlock',),)

    public static readonly MUSHROOM_PLATFORM =        new EditorVoices.EntityEditorVoices('Mushroom Platform',               () => new EditorVoiceSoundHolderWithVoiceBefore('mushroomplatform',),)
    public static readonly SEMISOLID_PLATFORM =       new EditorVoices.EntityEditorVoices('Semisolid Platform',              () => new EditorVoiceSoundHolderWithVoiceBefore('semisolidplatform',),)
    public static readonly BRIDGE =                   new EditorVoices.EntityEditorVoices('Bridge',                          () => new EditorVoiceSoundHolderWithVoiceBefore('bridge',),)

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BLOCK =                    new class EditorVoices_Block extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BRICK_BLOCK, Import.Entities.CRISTAL_BLOCK, Import.Entities.ROTATING_BLOCK,]
        }

    }('Block', () => new EditorVoiceSoundHolderWithVoiceBefore('block',),)

    public static readonly HARD_BLOCK =               new class EditorVoices_HardBlock extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.HARD_BLOCK, Import.Entities.ROCK_BLOCK,]
        }

    }('Hard Block', () => new EditorVoiceSoundHolderWithVoiceBefore('hardblock',),)

    public static readonly QUESTION_MARK_BLOCK =      new EditorVoices.EntityEditorVoices('? Block',                         () => new EditorVoiceSoundHolderWithVoiceBefore('questionblock',),)
    public static readonly HIDDEN_BLOCK =             new EditorVoices.EntityEditorVoices('Hidden Block',                    () => new EditorVoiceSoundHolderWithVoiceBefore('hiddenblock',),)

    public static readonly EXCLAMATION_MARK_BLOCK =   new EditorVoices.EntityEditorVoices('! Block',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('!Block',),)

    public static readonly NOTE_BLOCK =               new EditorVoices.EntityEditorVoices('Note Block',                      () => new EditorVoiceSoundHolderWithVoiceBefore('noteblock',),)

    public static readonly DONUT_BLOCK =              new EditorVoices.EntityEditorVoices('Donut Block',                     () => new EditorVoiceSoundHolderWithVoiceBefore('donutblock',),)

    public static readonly CLOUD_BLOCK =              new EditorVoices.EntityEditorVoices('Cloud Block',                     () => new EditorVoiceSoundHolderWithVoiceBefore('cloudblock',),)

    public static readonly ON_OFF_SWITCH =            new EditorVoices.EntityEditorVoices('ON/OFF Switch',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('ONOFFswitch',),)
    public static readonly DOTTED_LINE_BLOCK =        new EditorVoices.EntityEditorVoices('Dotted-Line Block',               () => new EditorVoiceSoundHolderWithSingingPartBefore('Dotted-LineBlock_nr',),)

    public static readonly P_BLOCK =                  new EditorVoices.EntityEditorVoices('P Block',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('PBlock',),)

    public static readonly BLINKING_BLOCK =           new EditorVoices.EntityEditorVoices('Blinking Block',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('BlinkingBlock',),)

    public static readonly ICE_BLOCK =                new EditorVoices.EntityEditorVoices('Ice Block',                       () => new EditorVoiceSoundHolderWithVoiceBefore('iceblock2',),)
    public static readonly ICICLE =                   new EditorVoices.EntityEditorVoices('Icicle',                          () => new EditorVoiceSoundHolderWithSingingPartBefore('icicle',),)

    public static readonly COIN =                     new EditorVoices.EntityEditorVoices('Coin',                            () => new EditorVoiceSoundHolderWithVoiceBefore('coin',),)
    public static readonly FROZEN_COIN =              new EditorVoices.EntityEditorVoices('Frozen Coin',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('FrozenCoin',),)
    public static readonly TEN_COIN =                 new EditorVoices.EntityEditorVoices('10-Coin',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('10-coin',),)
    public static readonly THIRTY_COIN =              new EditorVoices.EntityEditorVoices('30-Coin',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('30-coin',),)
    public static readonly FIFTY_COIN =               new EditorVoices.EntityEditorVoices('50-Coin',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('50-coin',),)
    public static readonly PINK_COIN =                new EditorVoices.EntityEditorVoices('Pink Coin',                       () => new EditorVoiceSoundHolderWithSingingPartBefore('pinkcoin',),)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------

    public static readonly SUPER_MUSHROOM =           new EditorVoices.EntityEditorVoices('Super Mushroom',                  () => new EditorVoiceSoundHolderWithVoiceBefore('supermushroom',),)
    public static readonly SUPER_MARIO =              new EditorVoices.CharacterNameEditorVoices('Super Mario',              () => new EditorVoiceSoundHolderWithVoiceBefore('supermario',),)
    public static readonly SUPER_LUIGI =              new EditorVoices.CharacterNameEditorVoices('Super Luigi',              () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperLuigi',),)
    public static readonly SUPER_TOAD =               new EditorVoices.CharacterNameEditorVoices('Super Toad',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperToad',),)
    public static readonly SUPER_TOADETTE =           new EditorVoices.CharacterNameEditorVoices('Super Toadette',           () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperToadette',),)

    public static readonly FIRE_FLOWER =              new EditorVoices.EntityEditorVoices('Fire Flower',                     () => new EditorVoiceSoundHolderWithVoiceBefore('fireflower',),)
    public static readonly FIRE_MARIO =               new EditorVoices.CharacterNameEditorVoices('Fire Mario',               () => new EditorVoiceSoundHolderWithVoiceBefore('firemario',),)
    public static readonly FIRE_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Fire Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('FireLuigi',),)
    public static readonly FIRE_TOAD =                new EditorVoices.CharacterNameEditorVoices('Fire Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FireToad',),)
    public static readonly FIRE_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Fire Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('FireToadette',),)

    public static readonly SUPERBALL_FLOWER =         new EditorVoices.EntityEditorVoices('Superball Flower',                () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballFlower',),)
    public static readonly SUPERBALL_MARIO =          new EditorVoices.CharacterNameEditorVoices('Superball Mario',          () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballMario',),)
    public static readonly SUPERBALL_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Superball Luigi',          () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballLuigi',),)
    public static readonly SUPERBALL_TOAD =           new EditorVoices.CharacterNameEditorVoices('Superball Toad',           () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballToad',),)
    public static readonly SUPERBALL_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Superball Toadette',       () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperballToadette',),)

    public static readonly MYSTERY_MUSHROOM =         new EditorVoices.EntityEditorVoices('Mystery Mushroom',                () => new EditorVoiceSoundHolderWithVoiceBefore('mysterymushroom',),)
    public static readonly COSTUME_MARIO =            new EditorVoices.CharacterNameEditorVoices('Costume Mario',            () => new EditorVoiceSoundHolderWithVoiceBefore('costumemario',),)

    public static readonly WEIRD_MUSHROOM =           new EditorVoices.EntityEditorVoices('Weird Mushroom',                  () => new EditorVoiceSoundHolderWithVoiceBefore('weiredmashroom',),)
    public static readonly WEIRD_MARIO =              new EditorVoices.CharacterNameEditorVoices('Weird Mario',              () => new EditorVoiceSoundHolderWithVoiceBefore('weiredmario',),)

    public static readonly MASTER_SWORD =             new EditorVoices.EntityEditorVoices('Master Sword',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('MasterSword',),)
    public static readonly LINK =                     new EditorVoices.CharacterNameEditorVoices('Link',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('Link',),)

    public static readonly BIG_MUSHROOM_SMM1 =        new class EditorVoices_BigMushroomSMM1 extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BIG_MUSHROOM_CLASSIC, Import.Entities.BIG_MUSHROOM_MODERN,]
        }

    }('Big Mushroom (SMM)', () => new EditorVoiceSoundHolderWithVoiceBefore('bigmashroom',),)
    public static readonly BIG_MUSHROOM_SMM2 =        new class EditorVoices_BigMushroomSMM2 extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BIG_MUSHROOM,]
        }

    }('Big Mushroom (SMM2)', () => new EditorVoiceSoundHolderWithSingingPartBefore('BigMushroom',),)
    public static readonly GIANT_MARIO =              new EditorVoices.CharacterNameEditorVoices('Giant Mario',              () => new EditorVoiceSoundHolderWithVoiceBefore('bigmario',),)
    public static readonly GIANT_LUIGI =              new EditorVoices.CharacterNameEditorVoices('Giant Luigi',              () => new EditorVoiceSoundHolderWithSingingPartBefore('BigLuigi',),)
    public static readonly GIANT_TOAD =               new EditorVoices.CharacterNameEditorVoices('Giant Toad',               () => new EditorVoiceSoundHolderWithSingingPartBefore('BigToad',),)
    public static readonly GIANT_TOADETTE =           new EditorVoices.CharacterNameEditorVoices('Giant Toadette',           () => new EditorVoiceSoundHolderWithSingingPartBefore('BigToadette',),)

    public static readonly SMB2_MUSHROOM =            new EditorVoices.EntityEditorVoices('SMB2 Mushroom',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Mushroom',),)
    public static readonly SMB2_MARIO =               new EditorVoices.CharacterNameEditorVoices('SMB2 Mario',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Mario',),)
    public static readonly SMB2_LUIGI =               new EditorVoices.CharacterNameEditorVoices('SMB2 Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Luigi',),)
    public static readonly SMB2_TOAD =                new EditorVoices.CharacterNameEditorVoices('SMB2 Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Toad',),)
    public static readonly SMB2_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('SMB2 Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('SMB2Toadette',),)

    public static readonly SUPER_LEAF =               new EditorVoices.EntityEditorVoices('Super Leaf',                      () => new EditorVoiceSoundHolderWithVoiceBefore('superleaf',),)
    public static readonly RACCOON_MARIO =            new EditorVoices.CharacterNameEditorVoices('Raccoon Mario',            () => new EditorVoiceSoundHolderWithVoiceBefore('lacoonmario',),)
    public static readonly RACCOON_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Raccoon Luigi',            () => new EditorVoiceSoundHolderWithSingingPartBefore('RacoonLuigi',),)
    public static readonly RACCOON_TOAD =             new EditorVoices.CharacterNameEditorVoices('Raccoon Toad',             () => new EditorVoiceSoundHolderWithSingingPartBefore('RacoonToad',),)
    public static readonly RACCOON_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Raccoon Toadette',         () => new EditorVoiceSoundHolderWithSingingPartBefore('RacoonToadette',),)

    public static readonly FROG_SUIT =                new EditorVoices.EntityEditorVoices('Frog Suit',                       () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogSuit',),)
    public static readonly FROG_MARIO =               new EditorVoices.CharacterNameEditorVoices('Frog Mario',               () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogMario',),)
    public static readonly FROG_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Frog Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogLuigi',),)
    public static readonly FROG_TOAD =                new EditorVoices.CharacterNameEditorVoices('Frog Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogToad',),)
    public static readonly FROG_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Frog Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('FrogToadette',),)

    public static readonly CAPE_FEATHER =             new EditorVoices.EntityEditorVoices('Cape Feather',                    () => new EditorVoiceSoundHolderWithVoiceBefore('capefeather',),)
    public static readonly CAPE_MARIO =               new EditorVoices.CharacterNameEditorVoices('Cape Mario',               () => new EditorVoiceSoundHolderWithVoiceBefore('capemario',),)
    public static readonly CAPE_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Cape Luigi',               () => new EditorVoiceSoundHolderWithSingingPartBefore('CapeLuigi',),)
    public static readonly CAPE_TOAD =                new EditorVoices.CharacterNameEditorVoices('Cape Toad',                () => new EditorVoiceSoundHolderWithSingingPartBefore('CapeToad',),)
    public static readonly CAPE_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Cape Toadette',            () => new EditorVoiceSoundHolderWithSingingPartBefore('CapeToadette',),)

    public static readonly POWER_BALLOON =            new EditorVoices.EntityEditorVoices('Power Balloon',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('PowerBalloon',),)
    public static readonly BALLOON_MARIO =            new EditorVoices.CharacterNameEditorVoices('Balloon Mario',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonMario',),)
    public static readonly BALLOON_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Balloon Luigi',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonLuigi',),)
    public static readonly BALLOON_TOAD =             new EditorVoices.CharacterNameEditorVoices('Balloon Toad',             () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonToad',),)
    public static readonly BALLOON_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Balloon Toadette',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BalloonToadette',),)

    public static readonly PROPELLER_MUSHROOM =       new EditorVoices.EntityEditorVoices('Propeller Mushroom',              () => new EditorVoiceSoundHolderWithVoiceBefore('propellermushroom',),)
    public static readonly PROPELLER_MARIO =          new EditorVoices.CharacterNameEditorVoices('Propeller Mario',          () => new EditorVoiceSoundHolderWithVoiceBefore('propellermario',),)
    public static readonly PROPELLER_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Propeller Luigi',          () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerLuigi',),)
    public static readonly PROPELLER_TOAD =           new EditorVoices.CharacterNameEditorVoices('Propeller Toad',           () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerToad',),)
    public static readonly PROPELLER_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Propeller Toadette',       () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerToadette',),)

    public static readonly SUPER_ACORN =              new EditorVoices.EntityEditorVoices('Super Acorn',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperAcorn',),)
    public static readonly FLYING_SQUIRREL_MARIO =    new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Mario',    () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelMario',),)
    public static readonly FLYING_SQUIRREL_LUIGI =    new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Luigi',    () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelLuigi',),)
    public static readonly FLYING_SQUIRREL_TOAD =     new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Toad',     () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelToad',),)
    public static readonly FLYING_SQUIRREL_TOADETTE = new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Toadette', () => new EditorVoiceSoundHolderWithSingingPartBefore('FlyingSquirrelToadette',),)

    public static readonly SUPER_BELL =               new EditorVoices.EntityEditorVoices('Super Bell',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperBell',),)
    public static readonly CAT_MARIO =                new EditorVoices.CharacterNameEditorVoices('Cat Mario',                () => new EditorVoiceSoundHolderWithSingingPartBefore('CatMario',),)
    public static readonly CAT_LUIGI =                new EditorVoices.CharacterNameEditorVoices('Cat Luigi',                () => new EditorVoiceSoundHolderWithSingingPartBefore('CatLuigi',),)
    public static readonly CAT_TOAD =                 new EditorVoices.CharacterNameEditorVoices('Cat Toad',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('CatToad',),)
    public static readonly CAT_TOADETTE =             new EditorVoices.CharacterNameEditorVoices('Cat Toadette',             () => new EditorVoiceSoundHolderWithSingingPartBefore('CatToadette',),)

    public static readonly SUPER_HAMMER =             new EditorVoices.EntityEditorVoices('Super Hammer',                    () => new EditorVoiceSoundHolderWithSingingPartBefore('SuperHammer',),)
    public static readonly BUILDER_MARIO =            new EditorVoices.CharacterNameEditorVoices('Builder Mario',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderMario',),)
    public static readonly BUILDER_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Builder Luigi',            () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderLuigi',),)
    public static readonly BUILDER_TOAD =             new EditorVoices.CharacterNameEditorVoices('Builder Toad',             () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderToad',),)
    public static readonly BUILDER_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Builder Toadette',         () => new EditorVoiceSoundHolderWithSingingPartBefore('BuilderToadette',),)

    public static readonly BOOMERANG_FLOWER =         new EditorVoices.EntityEditorVoices('Boomerang Flower',                () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangFlower',),)
    public static readonly BOOMERANG_MARIO =          new EditorVoices.CharacterNameEditorVoices('Boomerang Mario',          () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangMario',),)
    public static readonly BOOMERANG_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Boomerang Luigi',          () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangLuigi',),)
    public static readonly BOOMERANG_TOAD =           new EditorVoices.CharacterNameEditorVoices('Boomerang Toad',           () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangToad',),)
    public static readonly BOOMERANG_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Boomerang Toadette',       () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomerangToadette',),)

    public static readonly CANNON_BOX =               new EditorVoices.EntityEditorVoices('Cannon Box',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('CannonBox',),)
    public static readonly PROPELLER_BOX =            new EditorVoices.EntityEditorVoices('Propeller Box',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('PropellerBox',),)
    public static readonly GOOMBA_MASK =              new EditorVoices.EntityEditorVoices('Goomba Mask',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('GoombaMask',),)
    public static readonly BULLET_BILL_MASK =         new EditorVoices.EntityEditorVoices('Bullet Bill Mask',                () => new EditorVoiceSoundHolderWithSingingPartBefore('BulletBillMask',),)
    public static readonly RED_POW_BOX =              new EditorVoices.EntityEditorVoices('Red POW Box',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('RedPOWBox',),)

    public static readonly SUPER_STAR =               new EditorVoices.EntityEditorVoices('Super Star',                      () => new EditorVoiceSoundHolderWithVoiceBefore('superstar',),)

    public static readonly ONE_UP_MUSHROOM =          new EditorVoices.EntityEditorVoices('1-Up Mushroom',                   () => new EditorVoiceSoundHolderWithVoiceBefore('oneupmushroom',),)
    public static readonly ROTTEN_MUSHROOM =          new EditorVoices.EntityEditorVoices('Rotten Mushroom',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('RottenMushroom',),)

    public static readonly SHOE_GOOMBA =              new EditorVoices.EntityEditorVoices('Shoe Goomba',                     () => new EditorVoiceSoundHolderWithVoiceBefore('shoegoomba',),)
    public static readonly STILETTO_GOOMBA =          new EditorVoices.EntityEditorVoices('Stiletto Goomba',                 () => new EditorVoiceSoundHolderWithVoiceBefore('stilettogoomba',),)
    public static readonly YOSHI_EGG =                new EditorVoices.EntityEditorVoices('Yoshi\'s Egg',                    () => new EditorVoiceSoundHolderWithVoiceBefore('yoshiegg',),)
    public static readonly RED_YOSHI_EGG =            new EditorVoices.EntityEditorVoices('Red Yoshi\'s Egg',                () => new EditorVoiceSoundHolderWithSingingPartBefore('BigRedYoshisEgg',),)

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                   new EditorVoices.EntityEditorVoices('Goomba',                          () => new EditorVoiceSoundHolderWithVoiceBefore('goomba',),)
    public static readonly GALOOMBA =                 new EditorVoices.EntityEditorVoices('Galoomba',                        () => new EditorVoiceSoundHolderWithVoiceBefore('galoomba',),)
    public static readonly GOOMBRAT =                 new EditorVoices.EntityEditorVoices('Goombrat',                        () => new EditorVoiceSoundHolderWithSingingPartBefore('Goombrat',),)
    public static readonly GOOMBUD =                  new EditorVoices.EntityEditorVoices('Goombud',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('Goombud',),)

    public static readonly KOOPA_TROOPA =             new class EditorVoices_KoopaTroopa extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.GREEN_KOOPA_TROOPA, Import.Entities.RED_KOOPA_TROOPA,]
        }

    }('Koopa Troopa', () => new EditorVoiceSoundHolderWithVoiceBefore('koopatrooper',),)

    public static readonly DRY_BONES =                new class EditorVoices_DryBones extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.DRY_BONES, Import.Entities.PARABONES,]
        }

    }('Dry Bones', () => new EditorVoiceSoundHolderWithVoiceBefore('drybones',),)
    public static readonly DRY_BONES_SHELL =          new EditorVoices.EntityEditorVoices('Dry Bones Shell',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('DryBonesShell',),)

    public static readonly BUZZY_BEETLE =             new class EditorVoices_BuzzyBeetle extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BUZZY_BEETLE, Import.Entities.PARA_BEETLE, Import.Entities.BUZZY_SHELL,]
        }

    }('Buzzy Beetle', () => new EditorVoiceSoundHolderWithVoiceBefore('buzzybeatle',),)

    public static readonly SPINY =                    new class EditorVoices_Spiny extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.SPINY, Import.Entities.WINGED_SPINY, Import.Entities.SPINY_EGG, Import.Entities.SPINY_SHELL,]
        }

    }('Spiny', () => new EditorVoiceSoundHolderWithVoiceBefore('spiny',),)

    public static readonly SPIKE_TOP =                new class EditorVoices_SpikeTop extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.SPIKE_TOP, Import.Entities.WINGED_SPIKE_TOP, Import.Entities.FAST_SPIKE_TOP, Import.Entities.FAST_WINGED_SPIKE_TOP,]
        }

    }('Spike Top', () => new EditorVoiceSoundHolderWithVoiceBefore('spiketop',),)

    public static readonly SKIPSQUEAK =               new EditorVoices.EntityEditorVoices('Skipsqueak',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('Skipsqueak',),)
    public static readonly SPINY_SKIPSQUEAK =         new EditorVoices.EntityEditorVoices('Spiny Skipsqueak',                () => new EditorVoiceSoundHolderWithSingingPartBefore('SpinySkipsqueak',),)

    public static readonly ANT_TROOPER =              new EditorVoices.EntityEditorVoices('Ant Trooper',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('AntTrooper',),)
    public static readonly HORNED_ANT_TROOPER =       new EditorVoices.EntityEditorVoices('Horned Ant Trooper',              () => new EditorVoiceSoundHolderWithSingingPartBefore('HornedAntTrooper',),)

    public static readonly STINGBY =                  new EditorVoices.EntityEditorVoices('Stingby',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('Stingby',),)

    public static readonly CHEEP_CHEEP =              new class EditorVoices_CheepCheep extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.CHEEP_CHEEP, Import.Entities.BLURPS, Import.Entities.DEEP_CHEEP,]
        }

    }('Cheep Cheep', () => new EditorVoiceSoundHolderWithVoiceBefore('cheapcheap',),)
    public static readonly FISH_BONE =                new EditorVoices.EntityEditorVoices('Fish Bone',                       () => new EditorVoiceSoundHolderWithSingingPartBefore('FishBones',),)

    public static readonly BLOOPER =                  new EditorVoices.EntityEditorVoices('Blooper',                         () => new EditorVoiceSoundHolderWithVoiceBefore('blooper',),)
    public static readonly BLOOPER_NANNY =            new EditorVoices.EntityEditorVoices('Blooper Nanny',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('BlooperNanny',),)

    public static readonly PORCUPUFFER =              new EditorVoices.EntityEditorVoices('Porcupuffer',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('Porcupuffer',),)

    public static readonly WIGGLER =                  new EditorVoices.EntityEditorVoices('Wiggler',                         () => new EditorVoiceSoundHolderWithVoiceBefore('wiggler',),)
    public static readonly ANGRY_WIGGLER =            new EditorVoices.EntityEditorVoices('Angry Wiggler',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('AngryWiggler',),)

    public static readonly PIRANHA_PLANT =            new EditorVoices.EntityEditorVoices('Piranha Plant',                   () => new EditorVoiceSoundHolderWithVoiceBefore('piranhaplant',),)
    public static readonly JUMPING_PIRANHA_PLANT =    new EditorVoices.EntityEditorVoices('Jumping Piranha Plant',           () => new EditorVoiceSoundHolderWithVoiceBefore('jumpingpiranhaplant',),)
    public static readonly FIRE_PIRANHA_PLANT =       new EditorVoices.EntityEditorVoices('Fire Piranha Plant',              () => new EditorVoiceSoundHolderWithVoiceBefore('firepiranhaplant',),)
    public static readonly MUNCHER =                  new EditorVoices.EntityEditorVoices('Muncher',                         () => new EditorVoiceSoundHolderWithVoiceBefore('monchar',),)
    public static readonly PIRANHA_CREEPER =          new EditorVoices.EntityEditorVoices('Piranha Creeper',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('PiranhaCreeper',),)

    public static readonly CHAIN_CHOMP =              new EditorVoices.EntityEditorVoices('Chain Chomp',                     () => new EditorVoiceSoundHolderWithVoiceBefore('chainchomp',),)
    public static readonly UNCHAINED_CHOMP =          new EditorVoices.EntityEditorVoices('Unchained Chomp',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('UnchainedChomp',),)

    public static readonly SPIKE =                    new EditorVoices.EntityEditorVoices('Spike',                           () => new EditorVoiceSoundHolderWithSingingPartBefore('Spike',),)
    public static readonly SPIKE_BALL =               new EditorVoices.EntityEditorVoices('Spike Ball',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('SpikeBall',),)
    public static readonly SNOWBALL =                 new EditorVoices.EntityEditorVoices('Snowball',                        () => new EditorVoiceSoundHolderWithSingingPartBefore('SnowBall',),)

    public static readonly LAKITU =                   new EditorVoices.EntityEditorVoices('Lakitu',                          () => new EditorVoiceSoundHolderWithVoiceBefore('lakitu',),)
    public static readonly LAKITU_CLOUD =             new EditorVoices.EntityEditorVoices('Lakitu\'s Cloud',                 () => new EditorVoiceSoundHolderWithVoiceBefore('lakitucloud',),)

    public static readonly BOO =                      new EditorVoices.EntityEditorVoices('Boo',                             () => new EditorVoiceSoundHolderWithVoiceBefore('boo',),)
    public static readonly STRETCH =                  new EditorVoices.EntityEditorVoices('Stretch',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('Stretch',),)
    public static readonly BOO_BUDDIES =              new EditorVoices.EntityEditorVoices('Boo Buddies',                     () => new EditorVoiceSoundHolderWithVoiceBefore('boobuddies',),)
    public static readonly PEEPA =                    new EditorVoices.EntityEditorVoices('Peepa',                           () => new EditorVoiceSoundHolderWithSingingPartBefore('Peepa',),)

    public static readonly BOB_OMB =                  new EditorVoices.EntityEditorVoices('Bob-omb',                         () => new EditorVoiceSoundHolderWithVoiceBefore('bombomb',),)
    public static readonly LIT_BOB_OMB =              new EditorVoices.EntityEditorVoices('Lit Bob-omb',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('litBob-omb',),)

    public static readonly POKEY =                    new EditorVoices.EntityEditorVoices('Pokey',                           () => new EditorVoiceSoundHolderWithSingingPartBefore('Pokey',),)
    public static readonly SNOW_POKEY =               new EditorVoices.EntityEditorVoices('Snow Pokey',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('SnowPokey',),)

    public static readonly THWOMP =                   new EditorVoices.EntityEditorVoices('Thwomp',                          () => new EditorVoiceSoundHolderWithVoiceBefore('thwomp',),)

    public static readonly MONTY_MOLE =               new EditorVoices.EntityEditorVoices('Monty Mole',                      () => new EditorVoiceSoundHolderWithVoiceBefore('montymole',),)
    public static readonly ROCKY_WRENCH =             new EditorVoices.EntityEditorVoices('Rocky Wrench',                    () => new EditorVoiceSoundHolderWithVoiceBefore('rockeyrench',),)

    public static readonly MAGIKOOPA =                new EditorVoices.EntityEditorVoices('Magikoopa',                       () => [new EditorVoiceSoundHolderWithVoiceBefore('magikoopa',), new EditorVoiceSoundHolderWithVoiceBefore('kameck_EU',),],)

    public static readonly HAMMER_BRO =               new EditorVoices.EntityEditorVoices('Hammer Bro',                      () => new EditorVoiceSoundHolderWithVoiceBefore('hammerbro',),)
    public static readonly SLEDGE_BRO =               new EditorVoices.EntityEditorVoices('Sledge Bro',                      () => new EditorVoiceSoundHolderWithVoiceBefore('sledgebro',),)
    public static readonly FIRE_BRO =                 new EditorVoices.EntityEditorVoices('Fire Bro',                        () => new EditorVoiceSoundHolderWithSingingPartBefore('FireBro',),)
    public static readonly HEAVY_FIRE_BRO =           new EditorVoices.EntityEditorVoices('Heavy Fire Bro',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('HeavyFireBro',),)

    public static readonly LAVA_BUBBLE =              new EditorVoices.EntityEditorVoices('Lava Bubble',                     () => new EditorVoiceSoundHolderWithVoiceBefore('lavabubble',),)

    public static readonly MECHAKOOPA =               new EditorVoices.EntityEditorVoices('Mechakoopa',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('Mechakoopa',),)
    public static readonly BLASTA_MECHAKOOPA =        new EditorVoices.EntityEditorVoices('Blasta Mechakoopa',               () => new EditorVoiceSoundHolderWithSingingPartBefore('BlastaMechakoopa',),)
    public static readonly ZAPPA_MECHAKOOPA =         new EditorVoices.EntityEditorVoices('Zappa Mechakoopa',                () => new EditorVoiceSoundHolderWithSingingPartBefore('ZappaMechakoopa',),)

    public static readonly CHARVAARGH =               new EditorVoices.EntityEditorVoices('Charvaargh',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('Charvaargh',),)

    public static readonly BULLY =                    new EditorVoices.EntityEditorVoices('Bully',                           () => new EditorVoiceSoundHolderWithSingingPartBefore('Bully',),)

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =             new EditorVoices.EntityEditorVoices('Bill Blaster',                    () => new EditorVoiceSoundHolderWithVoiceBefore('billblaster',),)
    public static readonly BULL_EYE_BLASTER =         new EditorVoices.EntityEditorVoices('Bull\'s-Eye Blaster',             () => new EditorVoiceSoundHolderWithSingingPartBefore('Bulls-EyeBlaster',),)

    public static readonly BANZAI_BILL =              new EditorVoices.EntityEditorVoices('Banzai Bill',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('BanzaiBill',),)
    public static readonly BULL_EYE_BANZAI =          new class EditorVoices_BullEyeBanzai extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BULL_EYE_BANZAI, Import.Entities.CAT_BANZAI_BILL,]
        }

    }('Bull\'s-Eye Banzai', () => new EditorVoiceSoundHolderWithSingingPartBefore('Bulls-EyeBanzai',),)

    public static readonly CANNON =                   new EditorVoices.EntityEditorVoices('Cannon',                          () => new EditorVoiceSoundHolderWithVoiceBefore('cannon',),)
    public static readonly RED_CANNON =               new EditorVoices.EntityEditorVoices('Red Cannon',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('redcannon',),)

    public static readonly BURNER =                   new EditorVoices.EntityEditorVoices('Burner',                          () => new EditorVoiceSoundHolderWithVoiceBefore('burner',),)

    public static readonly FIRE_BAR =                 new EditorVoices.EntityEditorVoices('Fire Bar',                        () => new EditorVoiceSoundHolderWithVoiceBefore('firebar',),)

    public static readonly SKEWER =                   new EditorVoices.EntityEditorVoices('Skewer',                          () => [new EditorVoiceSoundHolderWithVoiceBefore('skewer'), new EditorVoiceSoundHolderWithVoiceBefore('spikepiller'),],)

    public static readonly KOOPA_CLOWN_CAR =          new EditorVoices.EntityEditorVoices('Koopa Clown Car',                 () => new EditorVoiceSoundHolderWithVoiceBefore('koopaclowncar',),)
    public static readonly JUNIOR_CLOWN_CAR =         new EditorVoices.EntityEditorVoices('Junior Clown Car',                () => new EditorVoiceSoundHolderWithVoiceBefore('juniorclowncar',),)
    public static readonly FIRE_KOOPA_CLOWN_CAR =     new EditorVoices.EntityEditorVoices('Fire Koopa Clown Car',            () => new EditorVoiceSoundHolderWithVoiceBefore('firekoopaclowncar',),)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =    new EditorVoices.EntityEditorVoices('Fire Junior Clown Car',           () => new EditorVoiceSoundHolderWithVoiceBefore('firejuniorclowncar',),)

    public static readonly KOOPA_TROOPA_CAR =         new EditorVoices.EntityEditorVoices('Koopa Troopa Car',                () => new EditorVoiceSoundHolderWithSingingPartBefore('KoopaTroopaCar',),)

    public static readonly GRINDER =                  new EditorVoices.EntityEditorVoices('Grinder',                         () => new EditorVoiceSoundHolderWithVoiceBefore('grinder',),)

    public static readonly SUN =                      new class EditorVoices_Sun extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.ANGRY_SUN,]
        }

    }('Sun', () => new EditorVoiceSoundHolderWithSingingPartBefore('Sun',),)
    public static readonly MOON =                     new EditorVoices.EntityEditorVoices('Moon',                            () => new EditorVoiceSoundHolderWithSingingPartBefore('Moon',),)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                   new EditorVoices.EntityEditorVoices('Bowser',                          () => new EditorVoiceSoundHolderWithVoiceBefore('bowser',),)
    public static readonly MEOWSER =                  new EditorVoices.EntityEditorVoices('Meowser',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('Meowser',),)

    public static readonly BOWSER_JR =                new EditorVoices.EntityEditorVoices('Bowser Jr.',                      () => new EditorVoiceSoundHolderWithVoiceBefore('bowserjr',),)

    public static readonly BOOM_BOOM =                new EditorVoices.EntityEditorVoices('Boom Boom',                       () => new EditorVoiceSoundHolderWithSingingPartBefore('BoomBoom',),)
    public static readonly POM_POM =                  new EditorVoices.EntityEditorVoices('Pom Pom',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('PomPom',),)

    public static readonly LARRY =                    new EditorVoices.EntityEditorVoices('Larry',                           () => new EditorVoiceSoundHolderWithSingingPartBefore('Larry',),)
    public static readonly IGGY =                     new EditorVoices.EntityEditorVoices('Iggy',                            () => new EditorVoiceSoundHolderWithSingingPartBefore('Iggy',),)
    public static readonly WENDY =                    new EditorVoices.EntityEditorVoices('Wendy',                           () => new EditorVoiceSoundHolderWithSingingPartBefore('Wendy',),)
    public static readonly LEMMY =                    new EditorVoices.EntityEditorVoices('Lemmy',                           () => new EditorVoiceSoundHolderWithSingingPartBefore('Lemmy',),)
    public static readonly ROY =                      new EditorVoices.EntityEditorVoices('Roy',                             () => new EditorVoiceSoundHolderWithSingingPartBefore('Roy',),)
    public static readonly MORTON =                   new EditorVoices.EntityEditorVoices('Morton',                          () => new EditorVoiceSoundHolderWithSingingPartBefore('Morton',),)
    public static readonly LUDWIG =                   new EditorVoices.EntityEditorVoices('Ludwig',                          () => new EditorVoiceSoundHolderWithSingingPartBefore('Ludwig',),)

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                   new EditorVoices.EntityEditorVoices('Bumper',                          () => new EditorVoiceSoundHolderWithVoiceBefore('bumper',),)

    public static readonly SWINGING_CLAW =            new EditorVoices.EntityEditorVoices('Swinging Claw',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('swingingclaw',),)

    public static readonly TWISTER =                  new EditorVoices.EntityEditorVoices('Twister',                         () => new EditorVoiceSoundHolderWithSingingPartBefore('Twister',),)

    public static readonly ONE_WAY_WALL =             new EditorVoices.EntityEditorVoices('One-Way Wall',                    () => new EditorVoiceSoundHolderWithVoiceBefore('onewaywall',),)

    public static readonly TRACK =                    new EditorVoices.EntityEditorVoices('Track',                           () => new EditorVoiceSoundHolderWithVoiceBefore('track',),)
    public static readonly TRACK_BLOCK =              new EditorVoices.EntityEditorVoices('Track Block',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('TrackBlock',),)

    public static readonly VINE =                     new EditorVoices.EntityEditorVoices('Vine',                            () => new EditorVoiceSoundHolderWithVoiceBefore('vine',),)
    public static readonly TREE =                     new EditorVoices.EntityEditorVoices('Tree',                            () => new EditorVoiceSoundHolderWithSingingPartBefore('tree',),)

    public static readonly ARROW_SIGN =               new EditorVoices.EntityEditorVoices('Arrow Sign',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('arrowsign',),)

    public static readonly CHECKPOINT_FLAG =          new EditorVoices.EntityEditorVoices('Checkpoint Flag',                 () => new EditorVoiceSoundHolderWithSingingPartBefore('CheckpointFlag',),)

    public static readonly DASH_BLOCK =               new EditorVoices.EntityEditorVoices('Dash Block',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('DashBlock',),)

    public static readonly SNAKE_BLOCK =              new EditorVoices.EntityEditorVoices('Snake Block',                     () => new EditorVoiceSoundHolderWithSingingPartBefore('SnakeBlock',),)
    public static readonly FAST_SNAKE_BLOCK =         new EditorVoices.EntityEditorVoices('Fast Snake Block',                () => new EditorVoiceSoundHolderWithSingingPartBefore('FastSnakeBlock',),)

    public static readonly CONVEYOR_BELT =            new EditorVoices.EntityEditorVoices('Conveyor Belt',                   () => new EditorVoiceSoundHolderWithVoiceBefore('conveyorbelt',),)
    public static readonly FAST_CONVEYOR_BELT =       new EditorVoices.EntityEditorVoices('Fast Conveyor Belt',              () => new EditorVoiceSoundHolderWithSingingPartBefore('fastconveyorbelt',),)

    public static readonly MUSHROOM_TRAMPOLINE =      new EditorVoices.EntityEditorVoices('Mushroom Trampoline',             () => new EditorVoiceSoundHolderWithSingingPartBefore('MushroomTrampoline',),)
    public static readonly ON_OFF_TRAMPOLINE =        new EditorVoices.EntityEditorVoices('ON/OFF Trampoline',               () => new EditorVoiceSoundHolderWithSingingPartBefore('ONOFFTrampoline',),)

    public static readonly LIFT =                     new EditorVoices.EntityEditorVoices('Lift',                            () => new EditorVoiceSoundHolderWithVoiceBefore('lift',),)
    public static readonly FLIMSY_LIFT =              new EditorVoices.EntityEditorVoices('Flimsy Lift',                     () => new EditorVoiceSoundHolderWithVoiceBefore('flimsylift',),)
    public static readonly CLOUD_LIFT =               new EditorVoices.EntityEditorVoices('Cloud Lift',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('CloudLift',),)

    public static readonly SEESAW =                   new EditorVoices.EntityEditorVoices('Seesaw',                          () => new EditorVoiceSoundHolderWithSingingPartBefore('seesaw',),)

    public static readonly LAVA_LIFT =                new EditorVoices.EntityEditorVoices('Lava Lift',                       () => new EditorVoiceSoundHolderWithVoiceBefore('lavalift',),)
    public static readonly FAST_LAVA_LIFT =           new EditorVoices.EntityEditorVoices('Fast Lava Lift',                  () => new EditorVoiceSoundHolderWithSingingPartBefore('FastLavaLift',),)

    public static readonly CRATE =                    new EditorVoices.EntityEditorVoices('Crate',                           () => new EditorVoiceSoundHolderWithSingingPartBefore('crate',),)

    public static readonly KEY =                      new EditorVoices.EntityEditorVoices('Key',                             () => new EditorVoiceSoundHolderWithSingingPartBefore('key',),)
    public static readonly CURSED_KEY =               new EditorVoices.EntityEditorVoices('Cursed Key',                      () => new EditorVoiceSoundHolderWithSingingPartBefore('cursedkey',),)

    public static readonly TRAMPOLINE =               new EditorVoices.EntityEditorVoices('Trampoline',                      () => new EditorVoiceSoundHolderWithVoiceBefore('trampline',),)
    public static readonly HOP_CHOPS =                new EditorVoices.EntityEditorVoices('Hop-Chops',                       () => new EditorVoiceSoundHolderWithSingingPartBefore('Hop-Chops',),)

    public static readonly POW_BLOCK =                new EditorVoices.EntityEditorVoices('POW Block',                       () => new EditorVoiceSoundHolderWithVoiceBefore('powblock',),)
    public static readonly RED_POW_BLOCK =            new EditorVoices.EntityEditorVoices('Red POW Block',                   () => new EditorVoiceSoundHolderWithSingingPartBefore('redPOWBlock',),)

    public static readonly P_SWITCH =                 new EditorVoices.EntityEditorVoices('P Switch',                        () => new EditorVoiceSoundHolderWithVoiceBefore('pswitch',),)

    public static readonly WARP_DOOR =                new EditorVoices.EntityEditorVoices('Warp Door',                       () => new EditorVoiceSoundHolderWithVoiceBefore('warpdoor',),)
    public static readonly P_WARP_DOOR =              new EditorVoices.EntityEditorVoices('P Warp Door',                     () => new EditorVoiceSoundHolderWithVoiceBefore('pwarpdoor',),)
    public static readonly KEY_DOOR =                 new EditorVoices.EntityEditorVoices('Key Door',                        () => new EditorVoiceSoundHolderWithVoiceBefore('keydoor',),)

    public static readonly WARP_BOX =                 new EditorVoices.EntityEditorVoices('Warp Box',                        () => new EditorVoiceSoundHolderWithSingingPartBefore('WarpBox',),)
    public static readonly WARP_BOX_WITH_KEY =        new EditorVoices.EntityEditorVoices('Warp Box (With Key)',             () => new EditorVoiceSoundHolderWithSingingPartBefore('WarpBox_withkey',),)

    public static readonly WING =                     new EditorVoices.EntityEditorVoices('Wing',                            () => new EditorVoiceSoundHolderWithVoiceBefore('wings',),)

    //endregion -------------------- Passive gizmo / Key / Warp / Other --------------------

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EditorVoices

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #isEntity
    readonly #englishNameContainer: StringContainer<PossibleEnglishName>
    #characterNameReference?: CharacterNameReferenceHolder
    #entityReferences?: EntityReferenceHolder
    readonly #editorVoiceSoundHolder: ObjectHolder<EditorVoiceSound>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(isEntity: boolean, englishName: PossibleEnglishName, editorVoiceSound: () => PossibleSoundReceivedOnFactory,) {
        super()
        this.#isEntity = isEntity
        this.#englishNameContainer = new StringContainer(englishName)
        this.#editorVoiceSoundHolder = new DelayedObjectHolderContainer(() => EditorVoiceSoundFactory.create(editorVoiceSound()))
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get isEntity(): boolean {
        return this.#isEntity
    }

    public get isCharacterName(): boolean {
        return !this.isEntity
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }


    public get editorVoiceSound(): EditorVoiceSound {
        return this.#editorVoiceSoundHolder.get
    }

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

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByName(value: Nullable<| EditorVoices | string>,): EditorVoices {
        return getValueByEnglishName(value, this,)
    }

    public static getValueByCharacterName(value: PossibleValueByEnumerable<| EditorVoices | CharacterNames>,): EditorVoices {
        if (value instanceof EditorVoices)
            return value
        const characterNameValue = value instanceof Import.CharacterNames ? value : Import.CharacterNames.getValue(value),
            valueFound = this.#findByCharacterName(characterNameValue)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by "${Import.CharacterNames.name}.${characterNameValue}".`)
        return valueFound
    }

    public static getValueByEntity(value: PossibleValueByEnumerable<| EditorVoices | Entities>,): EditorVoices {
        if (value instanceof EditorVoices)
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

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return EditorVoices
    }

    public static getValue(value: PossibleValueByEnumerable<EditorVoices>,): EditorVoices {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EditorVoices> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<EditorVoices> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------
}
