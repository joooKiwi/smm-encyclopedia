import type {PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable'
import type {Array, NullOr}                        from '@joookiwi/type'
import {getFirstByArray, hasByArray, isArray}      from '@joookiwi/collection'
import {Enum}                                      from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                    from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                      from 'core/ClassWithReference'
import type {ClassWithEditorVoiceSoundFileHolder}                     from 'core/editorVoice/ClassWithEditorVoiceSoundFileHolder'
import type {Names, Ordinals, PossibleEnglishName, PossibleReference} from 'core/editorVoice/EditorVoices.types'
import type {EditorVoiceSound}                                        from 'core/editorVoice/sound/EditorVoiceSound'
import type {CompanionEnumDeclaration_EditorVoices}                   from 'core/editorVoice/EditorVoice.companionEnumDeclaration'

import type {CharacterNames}            from 'core/characterName/CharacterNames'
import * as SoundCreator                from 'core/editorVoice/sound/soundCreator'
import type {Entities}                  from 'core/entity/Entities'
import {Import}                         from 'util/DynamicImporter'
import {Empty}                          from 'util/emptyVariables'
import {StringContainer}                from 'util/StringContainer'
import {CompanionEnumByEnglishNameOnly} from 'util/enumerable/companion/CompanionEnumByEnglishNameOnly'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

/**
 * @todo change the english name to the enum name for the _createEntityReference
 * @todo Change the reference used from the "Brick Block" to "Block"
 * @todo Change the reference used for the "Big Mushroom" as 2 different sounds
 * @todo Change the reference used from the "Green Koopa Troopa" to "Koopa Troopa"
 * @todo Change the reference used from the "Angry Sun" to "Sun"
 * @recursiveReference<{@link Entities}, {@link CharacterNames}>
 * @classWithDynamicImport<{@link Entities}, {@link CharacterNames}>
 */
export abstract class EditorVoices
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithReference<PossibleReference>,
        ClassWithEditorVoiceSoundFileHolder {

    //region -------------------- Sub class --------------------

    /** A child class of an {@link EditorVoices}, but specialized for the {@link Entities} */
    private static readonly EntityEditorVoices = class EntityEditorVoices extends EditorVoices {

        protected override _retrieveReferences() {
            return this.entityReferences.map(it => it.reference,)
        }

        protected override _retrieveReference() {
            return getFirstByArray(this.entityReferences,).reference
        }

        public override get characterNameReferences() {
            return EMPTY_ARRAY
        }

    }
    /** A child class of an {@link EditorVoices}, but specialized for the {@link CharacterNames} */
    private static readonly CharacterNameEditorVoices = class CharacterNameEditorVoices extends EditorVoices {

        protected override _retrieveReferences() {
            return this.characterNameReferences.map(it => it.reference,)
        }

        protected override _retrieveReference() {
            return getFirstByArray(this.characterNameReferences,).reference
        }

        public override get entityReferences() {
            return EMPTY_ARRAY
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    //region -------------------- Ground / Pipe / Spike / Platform --------------------

    public static readonly GROUND =                   new EditorVoices.EntityEditorVoices('Ground',                          SoundCreator.singleEditorVoiceWithVoice('ground',),)
    public static readonly START_GROUND =             new EditorVoices.EntityEditorVoices('Start Ground',                    SoundCreator.singleEditorVoiceWithVoice('startground',),)
    public static readonly GOAL_GROUND =              new EditorVoices.EntityEditorVoices('Goal Ground',                     SoundCreator.singleEditorVoiceWithVoice('goalground',),)
    public static readonly STEEP_SLOPE =              new EditorVoices.EntityEditorVoices('Steep Slope',                     SoundCreator.singleEditorVoiceWithSigningPart('steepslope',),)
    public static readonly GENTLE_SLOPE =             new EditorVoices.EntityEditorVoices('Gentle Slope',                    SoundCreator.singleEditorVoiceWithSigningPart('gentleslope',),)

    public static readonly PIPE =                     new EditorVoices.EntityEditorVoices('Pipe',                            SoundCreator.singleEditorVoiceWithVoice('pipe',),)
    public static readonly CLEAR_PIPE =               new EditorVoices.EntityEditorVoices('Clear Pipe',                      SoundCreator.singleEditorVoiceWithSigningPart('ClearPipe',),)

    public static readonly SPIKE_TRAP =               new EditorVoices.EntityEditorVoices('Spike Trap',                      SoundCreator.singleEditorVoiceWithVoice('spiketrap',),)
    public static readonly JELECTRO =                 new EditorVoices.EntityEditorVoices('Jelectro',                        SoundCreator.singleEditorVoiceWithVoice('jellelectro',),)
    public static readonly SEA_URCHIN =               new EditorVoices.EntityEditorVoices('Sea Urchin',                      SoundCreator.singleEditorVoiceWithVoice('seaechinus',),)
    public static readonly SPIKE_BLOCK =              new EditorVoices.EntityEditorVoices('Spike Block',                     SoundCreator.singleEditorVoiceWithSigningPart('SpikeBlock',),)

    public static readonly MUSHROOM_PLATFORM =        new EditorVoices.EntityEditorVoices('Mushroom Platform',               SoundCreator.singleEditorVoiceWithVoice('mushroomplatform',),)
    public static readonly SEMISOLID_PLATFORM =       new EditorVoices.EntityEditorVoices('Semisolid Platform',              SoundCreator.singleEditorVoiceWithVoice('semisolidplatform',),)
    public static readonly BRIDGE =                   new EditorVoices.EntityEditorVoices('Bridge',                          SoundCreator.singleEditorVoiceWithVoice('bridge',),)

    //endregion -------------------- Ground / Pipe / Spike / Platform --------------------
    //region -------------------- Block / Coin --------------------

    public static readonly BLOCK =                    new class EditorVoices_Block extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BRICK_BLOCK, Import.Entities.CRISTAL_BLOCK, Import.Entities.ROTATING_BLOCK,]
        }

    }('Block', SoundCreator.singleEditorVoiceWithVoice('block',),)

    public static readonly HARD_BLOCK =               new class EditorVoices_HardBlock extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.HARD_BLOCK, Import.Entities.ROCK_BLOCK,]
        }

    }('Hard Block', SoundCreator.singleEditorVoiceWithVoice('hardblock',),)

    public static readonly QUESTION_MARK_BLOCK =      new EditorVoices.EntityEditorVoices('? Block',                         SoundCreator.singleEditorVoiceWithVoice('questionblock',),)
    public static readonly HIDDEN_BLOCK =             new EditorVoices.EntityEditorVoices('Hidden Block',                    SoundCreator.singleEditorVoiceWithVoice('hiddenblock',),)

    public static readonly EXCLAMATION_MARK_BLOCK =   new EditorVoices.EntityEditorVoices('! Block',                         SoundCreator.singleEditorVoiceWithSigningPart('!Block',),)

    public static readonly NOTE_BLOCK =               new EditorVoices.EntityEditorVoices('Note Block',                      SoundCreator.singleEditorVoiceWithVoice('noteblock',),)

    public static readonly DONUT_BLOCK =              new EditorVoices.EntityEditorVoices('Donut Block',                     SoundCreator.singleEditorVoiceWithVoice('donutblock',),)

    public static readonly CLOUD_BLOCK =              new EditorVoices.EntityEditorVoices('Cloud Block',                     SoundCreator.singleEditorVoiceWithVoice('cloudblock',),)

    public static readonly ON_OFF_SWITCH =            new EditorVoices.EntityEditorVoices('ON/OFF Switch',                   SoundCreator.singleEditorVoiceWithSigningPart('ONOFFswitch',),)
    public static readonly DOTTED_LINE_BLOCK =        new EditorVoices.EntityEditorVoices('Dotted-Line Block',               SoundCreator.singleEditorVoiceWithSigningPart('Dotted-LineBlock_nr',),)

    public static readonly P_BLOCK =                  new EditorVoices.EntityEditorVoices('P Block',                         SoundCreator.singleEditorVoiceWithSigningPart('PBlock',),)

    public static readonly BLINKING_BLOCK =           new EditorVoices.EntityEditorVoices('Blinking Block',                  SoundCreator.singleEditorVoiceWithSigningPart('BlinkingBlock',),)

    public static readonly ICE_BLOCK =                new EditorVoices.EntityEditorVoices('Ice Block',                       SoundCreator.singleEditorVoiceWithVoice('iceblock2',),)
    public static readonly ICICLE =                   new EditorVoices.EntityEditorVoices('Icicle',                          SoundCreator.singleEditorVoiceWithSigningPart('icicle',),)

    public static readonly COIN =                     new EditorVoices.EntityEditorVoices('Coin',                            SoundCreator.singleEditorVoiceWithVoice('coin',),)
    public static readonly FROZEN_COIN =              new EditorVoices.EntityEditorVoices('Frozen Coin',                     SoundCreator.singleEditorVoiceWithSigningPart('FrozenCoin',),)
    public static readonly TEN_COIN =                 new EditorVoices.EntityEditorVoices('10-Coin',                         SoundCreator.singleEditorVoiceWithSigningPart('10-coin',),)
    public static readonly THIRTY_COIN =              new EditorVoices.EntityEditorVoices('30-Coin',                         SoundCreator.singleEditorVoiceWithSigningPart('30-coin',),)
    public static readonly FIFTY_COIN =               new EditorVoices.EntityEditorVoices('50-Coin',                         SoundCreator.singleEditorVoiceWithSigningPart('50-coin',),)
    public static readonly PINK_COIN =                new EditorVoices.EntityEditorVoices('Pink Coin',                       SoundCreator.singleEditorVoiceWithSigningPart('pinkcoin',),)

    //endregion -------------------- Block / Coin --------------------
    //region -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------

    public static readonly SUPER_MUSHROOM =           new EditorVoices.EntityEditorVoices('Super Mushroom',                  SoundCreator.singleEditorVoiceWithVoice('supermushroom',),)
    public static readonly SUPER_MARIO =              new EditorVoices.CharacterNameEditorVoices('Super Mario',              SoundCreator.singleEditorVoiceWithVoice('supermario',),)
    public static readonly SUPER_LUIGI =              new EditorVoices.CharacterNameEditorVoices('Super Luigi',              SoundCreator.singleEditorVoiceWithSigningPart('SuperLuigi',),)
    public static readonly SUPER_TOAD =               new EditorVoices.CharacterNameEditorVoices('Super Toad',               SoundCreator.singleEditorVoiceWithSigningPart('SuperToad',),)
    public static readonly SUPER_TOADETTE =           new EditorVoices.CharacterNameEditorVoices('Super Toadette',           SoundCreator.singleEditorVoiceWithSigningPart('SuperToadette',),)

    public static readonly FIRE_FLOWER =              new EditorVoices.EntityEditorVoices('Fire Flower',                     SoundCreator.singleEditorVoiceWithVoice('fireflower',),)
    public static readonly FIRE_MARIO =               new EditorVoices.CharacterNameEditorVoices('Fire Mario',               SoundCreator.singleEditorVoiceWithVoice('firemario',),)
    public static readonly FIRE_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Fire Luigi',               SoundCreator.singleEditorVoiceWithSigningPart('FireLuigi',),)
    public static readonly FIRE_TOAD =                new EditorVoices.CharacterNameEditorVoices('Fire Toad',                SoundCreator.singleEditorVoiceWithSigningPart('FireToad',),)
    public static readonly FIRE_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Fire Toadette',            SoundCreator.singleEditorVoiceWithSigningPart('FireToadette',),)

    public static readonly SUPERBALL_FLOWER =         new EditorVoices.EntityEditorVoices('Superball Flower',                SoundCreator.singleEditorVoiceWithSigningPart('SuperballFlower',),)
    public static readonly SUPERBALL_MARIO =          new EditorVoices.CharacterNameEditorVoices('Superball Mario',          SoundCreator.singleEditorVoiceWithSigningPart('SuperballMario',),)
    public static readonly SUPERBALL_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Superball Luigi',          SoundCreator.singleEditorVoiceWithSigningPart('SuperballLuigi',),)
    public static readonly SUPERBALL_TOAD =           new EditorVoices.CharacterNameEditorVoices('Superball Toad',           SoundCreator.singleEditorVoiceWithSigningPart('SuperballToad',),)
    public static readonly SUPERBALL_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Superball Toadette',       SoundCreator.singleEditorVoiceWithSigningPart('SuperballToadette',),)

    public static readonly MYSTERY_MUSHROOM =         new EditorVoices.EntityEditorVoices('Mystery Mushroom',                SoundCreator.singleEditorVoiceWithVoice('mysterymushroom',),)
    public static readonly COSTUME_MARIO =            new EditorVoices.CharacterNameEditorVoices('Costume Mario',            SoundCreator.singleEditorVoiceWithVoice('costumemario',),)

    public static readonly WEIRD_MUSHROOM =           new EditorVoices.EntityEditorVoices('Weird Mushroom',                  SoundCreator.singleEditorVoiceWithVoice('weiredmashroom',),)
    public static readonly WEIRD_MARIO =              new EditorVoices.CharacterNameEditorVoices('Weird Mario',              SoundCreator.singleEditorVoiceWithVoice('weiredmario',),)

    public static readonly MASTER_SWORD =             new EditorVoices.EntityEditorVoices('Master Sword',                    SoundCreator.singleEditorVoiceWithSigningPart('MasterSword',),)
    public static readonly LINK =                     new EditorVoices.CharacterNameEditorVoices('Link',                     SoundCreator.singleEditorVoiceWithSigningPart('Link',),)

    public static readonly BIG_MUSHROOM_SMM1 =        new class EditorVoices_BigMushroomSMM1 extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BIG_MUSHROOM_CLASSIC, Import.Entities.BIG_MUSHROOM_MODERN,]
        }

    }('Big Mushroom (SMM)', SoundCreator.singleEditorVoiceWithVoice('bigmashroom',),)
    public static readonly BIG_MUSHROOM_SMM2 =        new class EditorVoices_BigMushroomSMM2 extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BIG_MUSHROOM,]
        }

    }('Big Mushroom (SMM2)', SoundCreator.singleEditorVoiceWithSigningPart('BigMushroom',),)
    public static readonly GIANT_MARIO =              new EditorVoices.CharacterNameEditorVoices('Giant Mario',              SoundCreator.singleEditorVoiceWithVoice('bigmario',),)
    public static readonly GIANT_LUIGI =              new EditorVoices.CharacterNameEditorVoices('Giant Luigi',              SoundCreator.singleEditorVoiceWithSigningPart('BigLuigi',),)
    public static readonly GIANT_TOAD =               new EditorVoices.CharacterNameEditorVoices('Giant Toad',               SoundCreator.singleEditorVoiceWithSigningPart('BigToad',),)
    public static readonly GIANT_TOADETTE =           new EditorVoices.CharacterNameEditorVoices('Giant Toadette',           SoundCreator.singleEditorVoiceWithSigningPart('BigToadette',),)

    public static readonly SMB2_MUSHROOM =            new EditorVoices.EntityEditorVoices('SMB2 Mushroom',                   SoundCreator.singleEditorVoiceWithSigningPart('SMB2Mushroom',),)
    public static readonly SMB2_MARIO =               new EditorVoices.CharacterNameEditorVoices('SMB2 Mario',               SoundCreator.singleEditorVoiceWithSigningPart('SMB2Mario',),)
    public static readonly SMB2_LUIGI =               new EditorVoices.CharacterNameEditorVoices('SMB2 Luigi',               SoundCreator.singleEditorVoiceWithSigningPart('SMB2Luigi',),)
    public static readonly SMB2_TOAD =                new EditorVoices.CharacterNameEditorVoices('SMB2 Toad',                SoundCreator.singleEditorVoiceWithSigningPart('SMB2Toad',),)
    public static readonly SMB2_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('SMB2 Toadette',            SoundCreator.singleEditorVoiceWithSigningPart('SMB2Toadette',),)

    public static readonly SUPER_LEAF =               new EditorVoices.EntityEditorVoices('Super Leaf',                      SoundCreator.singleEditorVoiceWithVoice('superleaf',),)
    public static readonly RACCOON_MARIO =            new EditorVoices.CharacterNameEditorVoices('Raccoon Mario',            SoundCreator.singleEditorVoiceWithVoice('lacoonmario',),)
    public static readonly RACCOON_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Raccoon Luigi',            SoundCreator.singleEditorVoiceWithSigningPart('RacoonLuigi',),)
    public static readonly RACCOON_TOAD =             new EditorVoices.CharacterNameEditorVoices('Raccoon Toad',             SoundCreator.singleEditorVoiceWithSigningPart('RacoonToad',),)
    public static readonly RACCOON_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Raccoon Toadette',         SoundCreator.singleEditorVoiceWithSigningPart('RacoonToadette',),)

    public static readonly FROG_SUIT =                new EditorVoices.EntityEditorVoices('Frog Suit',                       SoundCreator.singleEditorVoiceWithSigningPart('FrogSuit',),)
    public static readonly FROG_MARIO =               new EditorVoices.CharacterNameEditorVoices('Frog Mario',               SoundCreator.singleEditorVoiceWithSigningPart('FrogMario',),)
    public static readonly FROG_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Frog Luigi',               SoundCreator.singleEditorVoiceWithSigningPart('FrogLuigi',),)
    public static readonly FROG_TOAD =                new EditorVoices.CharacterNameEditorVoices('Frog Toad',                SoundCreator.singleEditorVoiceWithSigningPart('FrogToad',),)
    public static readonly FROG_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Frog Toadette',            SoundCreator.singleEditorVoiceWithSigningPart('FrogToadette',),)

    public static readonly CAPE_FEATHER =             new EditorVoices.EntityEditorVoices('Cape Feather',                    SoundCreator.singleEditorVoiceWithVoice('capefeather',),)
    public static readonly CAPE_MARIO =               new EditorVoices.CharacterNameEditorVoices('Cape Mario',               SoundCreator.singleEditorVoiceWithVoice('capemario',),)
    public static readonly CAPE_LUIGI =               new EditorVoices.CharacterNameEditorVoices('Cape Luigi',               SoundCreator.singleEditorVoiceWithSigningPart('CapeLuigi',),)
    public static readonly CAPE_TOAD =                new EditorVoices.CharacterNameEditorVoices('Cape Toad',                SoundCreator.singleEditorVoiceWithSigningPart('CapeToad',),)
    public static readonly CAPE_TOADETTE =            new EditorVoices.CharacterNameEditorVoices('Cape Toadette',            SoundCreator.singleEditorVoiceWithSigningPart('CapeToadette',),)

    public static readonly POWER_BALLOON =            new EditorVoices.EntityEditorVoices('Power Balloon',                   SoundCreator.singleEditorVoiceWithSigningPart('PowerBalloon',),)
    public static readonly BALLOON_MARIO =            new EditorVoices.CharacterNameEditorVoices('Balloon Mario',            SoundCreator.singleEditorVoiceWithSigningPart('BalloonMario',),)
    public static readonly BALLOON_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Balloon Luigi',            SoundCreator.singleEditorVoiceWithSigningPart('BalloonLuigi',),)
    public static readonly BALLOON_TOAD =             new EditorVoices.CharacterNameEditorVoices('Balloon Toad',             SoundCreator.singleEditorVoiceWithSigningPart('BalloonToad',),)
    public static readonly BALLOON_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Balloon Toadette',         SoundCreator.singleEditorVoiceWithSigningPart('BalloonToadette',),)

    public static readonly PROPELLER_MUSHROOM =       new EditorVoices.EntityEditorVoices('Propeller Mushroom',              SoundCreator.singleEditorVoiceWithVoice('propellermushroom',),)
    public static readonly PROPELLER_MARIO =          new EditorVoices.CharacterNameEditorVoices('Propeller Mario',          SoundCreator.singleEditorVoiceWithVoice('propellermario',),)
    public static readonly PROPELLER_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Propeller Luigi',          SoundCreator.singleEditorVoiceWithSigningPart('PropellerLuigi',),)
    public static readonly PROPELLER_TOAD =           new EditorVoices.CharacterNameEditorVoices('Propeller Toad',           SoundCreator.singleEditorVoiceWithSigningPart('PropellerToad',),)
    public static readonly PROPELLER_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Propeller Toadette',       SoundCreator.singleEditorVoiceWithSigningPart('PropellerToadette',),)

    public static readonly SUPER_ACORN =              new EditorVoices.EntityEditorVoices('Super Acorn',                     SoundCreator.singleEditorVoiceWithSigningPart('SuperAcorn',),)
    public static readonly FLYING_SQUIRREL_MARIO =    new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Mario',    SoundCreator.singleEditorVoiceWithSigningPart('FlyingSquirrelMario',),)
    public static readonly FLYING_SQUIRREL_LUIGI =    new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Luigi',    SoundCreator.singleEditorVoiceWithSigningPart('FlyingSquirrelLuigi',),)
    public static readonly FLYING_SQUIRREL_TOAD =     new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Toad',     SoundCreator.singleEditorVoiceWithSigningPart('FlyingSquirrelToad',),)
    public static readonly FLYING_SQUIRREL_TOADETTE = new EditorVoices.CharacterNameEditorVoices('Flying Squirrel Toadette', SoundCreator.singleEditorVoiceWithSigningPart('FlyingSquirrelToadette',),)

    public static readonly SUPER_BELL =               new EditorVoices.EntityEditorVoices('Super Bell',                      SoundCreator.singleEditorVoiceWithSigningPart('SuperBell',),)
    public static readonly CAT_MARIO =                new EditorVoices.CharacterNameEditorVoices('Cat Mario',                SoundCreator.singleEditorVoiceWithSigningPart('CatMario',),)
    public static readonly CAT_LUIGI =                new EditorVoices.CharacterNameEditorVoices('Cat Luigi',                SoundCreator.singleEditorVoiceWithSigningPart('CatLuigi',),)
    public static readonly CAT_TOAD =                 new EditorVoices.CharacterNameEditorVoices('Cat Toad',                 SoundCreator.singleEditorVoiceWithSigningPart('CatToad',),)
    public static readonly CAT_TOADETTE =             new EditorVoices.CharacterNameEditorVoices('Cat Toadette',             SoundCreator.singleEditorVoiceWithSigningPart('CatToadette',),)

    public static readonly SUPER_HAMMER =             new EditorVoices.EntityEditorVoices('Super Hammer',                    SoundCreator.singleEditorVoiceWithSigningPart('SuperHammer',),)
    public static readonly BUILDER_MARIO =            new EditorVoices.CharacterNameEditorVoices('Builder Mario',            SoundCreator.singleEditorVoiceWithSigningPart('BuilderMario',),)
    public static readonly BUILDER_LUIGI =            new EditorVoices.CharacterNameEditorVoices('Builder Luigi',            SoundCreator.singleEditorVoiceWithSigningPart('BuilderLuigi',),)
    public static readonly BUILDER_TOAD =             new EditorVoices.CharacterNameEditorVoices('Builder Toad',             SoundCreator.singleEditorVoiceWithSigningPart('BuilderToad',),)
    public static readonly BUILDER_TOADETTE =         new EditorVoices.CharacterNameEditorVoices('Builder Toadette',         SoundCreator.singleEditorVoiceWithSigningPart('BuilderToadette',),)

    public static readonly BOOMERANG_FLOWER =         new EditorVoices.EntityEditorVoices('Boomerang Flower',                SoundCreator.singleEditorVoiceWithSigningPart('BoomerangFlower',),)
    public static readonly BOOMERANG_MARIO =          new EditorVoices.CharacterNameEditorVoices('Boomerang Mario',          SoundCreator.singleEditorVoiceWithSigningPart('BoomerangMario',),)
    public static readonly BOOMERANG_LUIGI =          new EditorVoices.CharacterNameEditorVoices('Boomerang Luigi',          SoundCreator.singleEditorVoiceWithSigningPart('BoomerangLuigi',),)
    public static readonly BOOMERANG_TOAD =           new EditorVoices.CharacterNameEditorVoices('Boomerang Toad',           SoundCreator.singleEditorVoiceWithSigningPart('BoomerangToad',),)
    public static readonly BOOMERANG_TOADETTE =       new EditorVoices.CharacterNameEditorVoices('Boomerang Toadette',       SoundCreator.singleEditorVoiceWithSigningPart('BoomerangToadette',),)

    public static readonly CANNON_BOX =               new EditorVoices.EntityEditorVoices('Cannon Box',                      SoundCreator.singleEditorVoiceWithSigningPart('CannonBox',),)
    public static readonly PROPELLER_BOX =            new EditorVoices.EntityEditorVoices('Propeller Box',                   SoundCreator.singleEditorVoiceWithSigningPart('PropellerBox',),)
    public static readonly GOOMBA_MASK =              new EditorVoices.EntityEditorVoices('Goomba Mask',                     SoundCreator.singleEditorVoiceWithSigningPart('GoombaMask',),)
    public static readonly BULLET_BILL_MASK =         new EditorVoices.EntityEditorVoices('Bullet Bill Mask',                SoundCreator.singleEditorVoiceWithSigningPart('BulletBillMask',),)
    public static readonly RED_POW_BOX =              new EditorVoices.EntityEditorVoices('Red POW Box',                     SoundCreator.singleEditorVoiceWithSigningPart('RedPOWBox',),)

    public static readonly SUPER_STAR =               new EditorVoices.EntityEditorVoices('Super Star',                      SoundCreator.singleEditorVoiceWithVoice('superstar',),)

    public static readonly ONE_UP_MUSHROOM =          new EditorVoices.EntityEditorVoices('1-Up Mushroom',                   SoundCreator.singleEditorVoiceWithVoice('oneupmushroom',),)
    public static readonly ROTTEN_MUSHROOM =          new EditorVoices.EntityEditorVoices('Rotten Mushroom',                 SoundCreator.singleEditorVoiceWithSigningPart('RottenMushroom',),)

    public static readonly SHOE_GOOMBA =              new EditorVoices.EntityEditorVoices('Shoe Goomba',                     SoundCreator.singleEditorVoiceWithVoice('shoegoomba',),)
    public static readonly STILETTO_GOOMBA =          new EditorVoices.EntityEditorVoices('Stiletto Goomba',                 SoundCreator.singleEditorVoiceWithVoice('stilettogoomba',),)
    public static readonly YOSHI_EGG =                new EditorVoices.EntityEditorVoices('Yoshi’s Egg',                     SoundCreator.singleEditorVoiceWithVoice('yoshiegg',),)
    public static readonly RED_YOSHI_EGG =            new EditorVoices.EntityEditorVoices('Red Yoshi’s Egg',                 SoundCreator.singleEditorVoiceWithSigningPart('BigRedYoshisEgg',),)

    //endregion -------------------- Power-up / Yoshi / Shoe + projectiles & player --------------------
    //region -------------------- General enemies --------------------

    public static readonly GOOMBA =                   new EditorVoices.EntityEditorVoices('Goomba',                          SoundCreator.singleEditorVoiceWithVoice('goomba',),)
    public static readonly GALOOMBA =                 new EditorVoices.EntityEditorVoices('Galoomba',                        SoundCreator.singleEditorVoiceWithVoice('galoomba',),)
    public static readonly GOOMBRAT =                 new EditorVoices.EntityEditorVoices('Goombrat',                        SoundCreator.singleEditorVoiceWithSigningPart('Goombrat',),)
    public static readonly GOOMBUD =                  new EditorVoices.EntityEditorVoices('Goombud',                         SoundCreator.singleEditorVoiceWithSigningPart('Goombud',),)

    public static readonly KOOPA_TROOPA =             new class EditorVoices_KoopaTroopa extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.GREEN_KOOPA_TROOPA, Import.Entities.RED_KOOPA_TROOPA,]
        }

    }('Koopa Troopa', SoundCreator.singleEditorVoiceWithVoice('koopatrooper',),)

    public static readonly DRY_BONES =                new class EditorVoices_DryBones extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.DRY_BONES, Import.Entities.PARABONES,]
        }

    }('Dry Bones', SoundCreator.singleEditorVoiceWithVoice('drybones',),)
    public static readonly DRY_BONES_SHELL =          new EditorVoices.EntityEditorVoices('Dry Bones Shell',                 SoundCreator.singleEditorVoiceWithSigningPart('DryBonesShell',),)

    public static readonly BUZZY_BEETLE =             new class EditorVoices_BuzzyBeetle extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BUZZY_BEETLE, Import.Entities.PARA_BEETLE, Import.Entities.BUZZY_SHELL,]
        }

    }('Buzzy Beetle', SoundCreator.singleEditorVoiceWithVoice('buzzybeatle',),)

    public static readonly SPINY =                    new class EditorVoices_Spiny extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.SPINY, Import.Entities.WINGED_SPINY, Import.Entities.SPINY_EGG, Import.Entities.SPINY_SHELL,]
        }

    }('Spiny', SoundCreator.singleEditorVoiceWithVoice('spiny',),)

    public static readonly SPIKE_TOP =                new class EditorVoices_SpikeTop extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.SPIKE_TOP, Import.Entities.WINGED_SPIKE_TOP, Import.Entities.FAST_SPIKE_TOP, Import.Entities.FAST_WINGED_SPIKE_TOP,]
        }

    }('Spike Top', SoundCreator.singleEditorVoiceWithVoice('spiketop',),)

    public static readonly SKIPSQUEAK =               new EditorVoices.EntityEditorVoices('Skipsqueak',                      SoundCreator.singleEditorVoiceWithSigningPart('Skipsqueak',),)
    public static readonly SPINY_SKIPSQUEAK =         new EditorVoices.EntityEditorVoices('Spiny Skipsqueak',                SoundCreator.singleEditorVoiceWithSigningPart('SpinySkipsqueak',),)

    public static readonly ANT_TROOPER =              new EditorVoices.EntityEditorVoices('Ant Trooper',                     SoundCreator.singleEditorVoiceWithSigningPart('AntTrooper',),)
    public static readonly HORNED_ANT_TROOPER =       new EditorVoices.EntityEditorVoices('Horned Ant Trooper',              SoundCreator.singleEditorVoiceWithSigningPart('HornedAntTrooper',),)

    public static readonly STINGBY =                  new EditorVoices.EntityEditorVoices('Stingby',                         SoundCreator.singleEditorVoiceWithSigningPart('Stingby',),)

    public static readonly CHEEP_CHEEP =              new class EditorVoices_CheepCheep extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.CHEEP_CHEEP, Import.Entities.BLURPS, Import.Entities.DEEP_CHEEP,]
        }

    }('Cheep Cheep', SoundCreator.singleEditorVoiceWithVoice('cheapcheap',),)
    public static readonly FISH_BONE =                new EditorVoices.EntityEditorVoices('Fish Bone',                       SoundCreator.singleEditorVoiceWithSigningPart('FishBones',),)

    public static readonly BLOOPER =                  new EditorVoices.EntityEditorVoices('Blooper',                         SoundCreator.singleEditorVoiceWithVoice('blooper',),)
    public static readonly BLOOPER_NANNY =            new EditorVoices.EntityEditorVoices('Blooper Nanny',                   SoundCreator.singleEditorVoiceWithSigningPart('BlooperNanny',),)

    public static readonly PORCUPUFFER =              new EditorVoices.EntityEditorVoices('Porcupuffer',                     SoundCreator.singleEditorVoiceWithSigningPart('Porcupuffer',),)

    public static readonly WIGGLER =                  new EditorVoices.EntityEditorVoices('Wiggler',                         SoundCreator.singleEditorVoiceWithVoice('wiggler',),)
    public static readonly ANGRY_WIGGLER =            new EditorVoices.EntityEditorVoices('Angry Wiggler',                   SoundCreator.singleEditorVoiceWithSigningPart('AngryWiggler',),)

    public static readonly PIRANHA_PLANT =            new EditorVoices.EntityEditorVoices('Piranha Plant',                   SoundCreator.singleEditorVoiceWithVoice('piranhaplant',),)
    public static readonly JUMPING_PIRANHA_PLANT =    new EditorVoices.EntityEditorVoices('Jumping Piranha Plant',           SoundCreator.singleEditorVoiceWithVoice('jumpingpiranhaplant',),)
    public static readonly FIRE_PIRANHA_PLANT =       new EditorVoices.EntityEditorVoices('Fire Piranha Plant',              SoundCreator.singleEditorVoiceWithVoice('firepiranhaplant',),)
    public static readonly MUNCHER =                  new EditorVoices.EntityEditorVoices('Muncher',                         SoundCreator.singleEditorVoiceWithVoice('monchar',),)
    public static readonly PIRANHA_CREEPER =          new EditorVoices.EntityEditorVoices('Piranha Creeper',                 SoundCreator.singleEditorVoiceWithSigningPart('PiranhaCreeper',),)

    public static readonly CHAIN_CHOMP =              new EditorVoices.EntityEditorVoices('Chain Chomp',                     SoundCreator.singleEditorVoiceWithVoice('chainchomp',),)
    public static readonly UNCHAINED_CHOMP =          new EditorVoices.EntityEditorVoices('Unchained Chomp',                 SoundCreator.singleEditorVoiceWithSigningPart('UnchainedChomp',),)

    public static readonly SPIKE =                    new EditorVoices.EntityEditorVoices('Spike',                           SoundCreator.singleEditorVoiceWithSigningPart('Spike',),)
    public static readonly SPIKE_BALL =               new EditorVoices.EntityEditorVoices('Spike Ball',                      SoundCreator.singleEditorVoiceWithSigningPart('SpikeBall',),)
    public static readonly SNOWBALL =                 new EditorVoices.EntityEditorVoices('Snowball',                        SoundCreator.singleEditorVoiceWithSigningPart('SnowBall',),)

    public static readonly LAKITU =                   new EditorVoices.EntityEditorVoices('Lakitu',                          SoundCreator.singleEditorVoiceWithVoice('lakitu',),)
    public static readonly LAKITU_CLOUD =             new EditorVoices.EntityEditorVoices('Lakitu’s Cloud',                  SoundCreator.singleEditorVoiceWithVoice('lakitucloud',),)

    public static readonly BOO =                      new EditorVoices.EntityEditorVoices('Boo',                             SoundCreator.singleEditorVoiceWithVoice('boo',),)
    public static readonly STRETCH =                  new EditorVoices.EntityEditorVoices('Stretch',                         SoundCreator.singleEditorVoiceWithSigningPart('Stretch',),)
    public static readonly BOO_BUDDIES =              new EditorVoices.EntityEditorVoices('Boo Buddies',                     SoundCreator.singleEditorVoiceWithVoice('boobuddies',),)
    public static readonly PEEPA =                    new EditorVoices.EntityEditorVoices('Peepa',                           SoundCreator.singleEditorVoiceWithSigningPart('Peepa',),)

    public static readonly BOB_OMB =                  new EditorVoices.EntityEditorVoices('Bob-omb',                         SoundCreator.singleEditorVoiceWithVoice('bombomb',),)
    public static readonly LIT_BOB_OMB =              new EditorVoices.EntityEditorVoices('Lit Bob-omb',                     SoundCreator.singleEditorVoiceWithSigningPart('litBob-omb',),)

    public static readonly POKEY =                    new EditorVoices.EntityEditorVoices('Pokey',                           SoundCreator.singleEditorVoiceWithSigningPart('Pokey',),)
    public static readonly SNOW_POKEY =               new EditorVoices.EntityEditorVoices('Snow Pokey',                      SoundCreator.singleEditorVoiceWithSigningPart('SnowPokey',),)

    public static readonly THWOMP =                   new EditorVoices.EntityEditorVoices('Thwomp',                          SoundCreator.singleEditorVoiceWithVoice('thwomp',),)

    public static readonly MONTY_MOLE =               new EditorVoices.EntityEditorVoices('Monty Mole',                      SoundCreator.singleEditorVoiceWithVoice('montymole',),)
    public static readonly ROCKY_WRENCH =             new EditorVoices.EntityEditorVoices('Rocky Wrench',                    SoundCreator.singleEditorVoiceWithVoice('rockeyrench',),)

    public static readonly MAGIKOOPA =                new EditorVoices.EntityEditorVoices('Magikoopa',                       SoundCreator.doubleEditorVoiceWithVoice('magikoopa', 'kameck_EU',),)

    public static readonly HAMMER_BRO =               new EditorVoices.EntityEditorVoices('Hammer Bro',                      SoundCreator.singleEditorVoiceWithVoice('hammerbro',),)
    public static readonly SLEDGE_BRO =               new EditorVoices.EntityEditorVoices('Sledge Bro',                      SoundCreator.singleEditorVoiceWithVoice('sledgebro',),)
    public static readonly FIRE_BRO =                 new EditorVoices.EntityEditorVoices('Fire Bro',                        SoundCreator.singleEditorVoiceWithSigningPart('FireBro',),)
    public static readonly HEAVY_FIRE_BRO =           new EditorVoices.EntityEditorVoices('Heavy Fire Bro',                  SoundCreator.singleEditorVoiceWithSigningPart('HeavyFireBro',),)

    public static readonly LAVA_BUBBLE =              new EditorVoices.EntityEditorVoices('Lava Bubble',                     SoundCreator.singleEditorVoiceWithVoice('lavabubble',),)

    public static readonly MECHAKOOPA =               new EditorVoices.EntityEditorVoices('Mechakoopa',                      SoundCreator.singleEditorVoiceWithSigningPart('Mechakoopa',),)
    public static readonly BLASTA_MECHAKOOPA =        new EditorVoices.EntityEditorVoices('Blasta Mechakoopa',               SoundCreator.singleEditorVoiceWithSigningPart('BlastaMechakoopa',),)
    public static readonly ZAPPA_MECHAKOOPA =         new EditorVoices.EntityEditorVoices('Zappa Mechakoopa',                SoundCreator.singleEditorVoiceWithSigningPart('ZappaMechakoopa',),)

    public static readonly CHARVAARGH =               new EditorVoices.EntityEditorVoices('Charvaargh',                      SoundCreator.singleEditorVoiceWithSigningPart('Charvaargh',),)

    public static readonly BULLY =                    new EditorVoices.EntityEditorVoices('Bully',                           SoundCreator.singleEditorVoiceWithSigningPart('Bully',),)

    //endregion -------------------- General enemies --------------------
    //region -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------

    public static readonly BILL_BLASTER =             new EditorVoices.EntityEditorVoices('Bill Blaster',                    SoundCreator.singleEditorVoiceWithVoice('billblaster',),)
    public static readonly BULL_EYE_BLASTER =         new EditorVoices.EntityEditorVoices('Bull’s-Eye Blaster',              SoundCreator.singleEditorVoiceWithSigningPart('Bulls-EyeBlaster',),)

    public static readonly BANZAI_BILL =              new EditorVoices.EntityEditorVoices('Banzai Bill',                     SoundCreator.singleEditorVoiceWithSigningPart('BanzaiBill',),)
    public static readonly BULL_EYE_BANZAI =          new class EditorVoices_BullEyeBanzai extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.BULL_EYE_BANZAI, Import.Entities.CAT_BANZAI_BILL,]
        }

    }('Bull’s-Eye Banzai',  SoundCreator.singleEditorVoiceWithSigningPart('Bulls-EyeBanzai',),)

    public static readonly CANNON =                   new EditorVoices.EntityEditorVoices('Cannon',                          SoundCreator.singleEditorVoiceWithVoice('cannon',),)
    public static readonly RED_CANNON =               new EditorVoices.EntityEditorVoices('Red Cannon',                      SoundCreator.singleEditorVoiceWithSigningPart('redcannon',),)

    public static readonly BURNER =                   new EditorVoices.EntityEditorVoices('Burner',                          SoundCreator.singleEditorVoiceWithVoice('burner',),)

    public static readonly FIRE_BAR =                 new EditorVoices.EntityEditorVoices('Fire Bar',                        SoundCreator.singleEditorVoiceWithVoice('firebar',),)

    public static readonly SKEWER =                   new EditorVoices.EntityEditorVoices('Skewer',                          SoundCreator.doubleEditorVoiceWithVoice('skewer', 'spikepiller'),)

    public static readonly KOOPA_CLOWN_CAR =          new EditorVoices.EntityEditorVoices('Koopa Clown Car',                 SoundCreator.singleEditorVoiceWithVoice('koopaclowncar',),)
    public static readonly JUNIOR_CLOWN_CAR =         new EditorVoices.EntityEditorVoices('Junior Clown Car',                SoundCreator.singleEditorVoiceWithVoice('juniorclowncar',),)
    public static readonly FIRE_KOOPA_CLOWN_CAR =     new EditorVoices.EntityEditorVoices('Fire Koopa Clown Car',            SoundCreator.singleEditorVoiceWithVoice('firekoopaclowncar',),)
    public static readonly FIRE_JUNIOR_CLOWN_CAR =    new EditorVoices.EntityEditorVoices('Fire Junior Clown Car',           SoundCreator.singleEditorVoiceWithVoice('firejuniorclowncar',),)

    public static readonly KOOPA_TROOPA_CAR =         new EditorVoices.EntityEditorVoices('Koopa Troopa Car',                SoundCreator.singleEditorVoiceWithSigningPart('KoopaTroopaCar',),)

    public static readonly GRINDER =                  new EditorVoices.EntityEditorVoices('Grinder',                         SoundCreator.singleEditorVoiceWithVoice('grinder',),)

    public static readonly SUN =                      new class EditorVoices_Sun extends EditorVoices.EntityEditorVoices {

        protected override _createEntityReferences() {
            return [Import.Entities.ANGRY_SUN,]
        }

    }('Sun', SoundCreator.singleEditorVoiceWithSigningPart('Sun',),)
    public static readonly MOON =                     new EditorVoices.EntityEditorVoices('Moon',                            SoundCreator.singleEditorVoiceWithSigningPart('Moon',),)

    //endregion -------------------- Dangerous gizmo + enemy-related gizmo + other enemies --------------------
    //region -------------------- Bosses + projectiles --------------------

    public static readonly BOWSER =                   new EditorVoices.EntityEditorVoices('Bowser',                          SoundCreator.singleEditorVoiceWithVoice('bowser',),)
    public static readonly MEOWSER =                  new EditorVoices.EntityEditorVoices('Meowser',                         SoundCreator.singleEditorVoiceWithSigningPart('Meowser',),)

    public static readonly BOWSER_JR =                new EditorVoices.EntityEditorVoices('Bowser Jr.',                      SoundCreator.singleEditorVoiceWithVoice('bowserjr',),)

    public static readonly BOOM_BOOM =                new EditorVoices.EntityEditorVoices('Boom Boom',                       SoundCreator.singleEditorVoiceWithSigningPart('BoomBoom',),)
    public static readonly POM_POM =                  new EditorVoices.EntityEditorVoices('Pom Pom',                         SoundCreator.singleEditorVoiceWithSigningPart('PomPom',),)

    public static readonly LARRY =                    new EditorVoices.EntityEditorVoices('Larry',                           SoundCreator.singleEditorVoiceWithSigningPart('Larry',),)
    public static readonly IGGY =                     new EditorVoices.EntityEditorVoices('Iggy',                            SoundCreator.singleEditorVoiceWithSigningPart('Iggy',),)
    public static readonly WENDY =                    new EditorVoices.EntityEditorVoices('Wendy',                           SoundCreator.singleEditorVoiceWithSigningPart('Wendy',),)
    public static readonly LEMMY =                    new EditorVoices.EntityEditorVoices('Lemmy',                           SoundCreator.singleEditorVoiceWithSigningPart('Lemmy',),)
    public static readonly ROY =                      new EditorVoices.EntityEditorVoices('Roy',                             SoundCreator.singleEditorVoiceWithSigningPart('Roy',),)
    public static readonly MORTON =                   new EditorVoices.EntityEditorVoices('Morton',                          SoundCreator.singleEditorVoiceWithSigningPart('Morton',),)
    public static readonly LUDWIG =                   new EditorVoices.EntityEditorVoices('Ludwig',                          SoundCreator.singleEditorVoiceWithSigningPart('Ludwig',),)

    //endregion -------------------- Bosses + projectiles --------------------
    //region -------------------- Passive gizmo / Key / Warp / Other --------------------

    public static readonly BUMPER =                   new EditorVoices.EntityEditorVoices('Bumper',                          SoundCreator.singleEditorVoiceWithVoice('bumper',),)

    public static readonly SWINGING_CLAW =            new EditorVoices.EntityEditorVoices('Swinging Claw',                   SoundCreator.singleEditorVoiceWithSigningPart('swingingclaw',),)

    public static readonly TWISTER =                  new EditorVoices.EntityEditorVoices('Twister',                         SoundCreator.singleEditorVoiceWithSigningPart('Twister',),)

    public static readonly ONE_WAY_WALL =             new EditorVoices.EntityEditorVoices('One-Way Wall',                    SoundCreator.singleEditorVoiceWithVoice('onewaywall',),)

    public static readonly TRACK =                    new EditorVoices.EntityEditorVoices('Track',                           SoundCreator.singleEditorVoiceWithVoice('track',),)
    public static readonly TRACK_BLOCK =              new EditorVoices.EntityEditorVoices('Track Block',                     SoundCreator.singleEditorVoiceWithSigningPart('TrackBlock',),)

    public static readonly VINE =                     new EditorVoices.EntityEditorVoices('Vine',                            SoundCreator.singleEditorVoiceWithVoice('vine',),)
    public static readonly TREE =                     new EditorVoices.EntityEditorVoices('Tree',                            SoundCreator.singleEditorVoiceWithSigningPart('tree',),)

    public static readonly ARROW_SIGN =               new EditorVoices.EntityEditorVoices('Arrow Sign',                      SoundCreator.singleEditorVoiceWithSigningPart('arrowsign',),)

    public static readonly CHECKPOINT_FLAG =          new EditorVoices.EntityEditorVoices('Checkpoint Flag',                 SoundCreator.singleEditorVoiceWithSigningPart('CheckpointFlag',),)

    public static readonly DASH_BLOCK =               new EditorVoices.EntityEditorVoices('Dash Block',                      SoundCreator.singleEditorVoiceWithSigningPart('DashBlock',),)

    public static readonly SNAKE_BLOCK =              new EditorVoices.EntityEditorVoices('Snake Block',                     SoundCreator.singleEditorVoiceWithSigningPart('SnakeBlock',),)
    public static readonly FAST_SNAKE_BLOCK =         new EditorVoices.EntityEditorVoices('Fast Snake Block',                SoundCreator.singleEditorVoiceWithSigningPart('FastSnakeBlock',),)

    public static readonly CONVEYOR_BELT =            new EditorVoices.EntityEditorVoices('Conveyor Belt',                   SoundCreator.singleEditorVoiceWithVoice('conveyorbelt',),)
    public static readonly FAST_CONVEYOR_BELT =       new EditorVoices.EntityEditorVoices('Fast Conveyor Belt',              SoundCreator.singleEditorVoiceWithSigningPart('fastconveyorbelt',),)

    public static readonly MUSHROOM_TRAMPOLINE =      new EditorVoices.EntityEditorVoices('Mushroom Trampoline',             SoundCreator.singleEditorVoiceWithSigningPart('MushroomTrampoline',),)
    public static readonly ON_OFF_TRAMPOLINE =        new EditorVoices.EntityEditorVoices('ON/OFF Trampoline',               SoundCreator.singleEditorVoiceWithSigningPart('ONOFFTrampoline',),)

    public static readonly LIFT =                     new EditorVoices.EntityEditorVoices('Lift',                            SoundCreator.singleEditorVoiceWithVoice('lift',),)
    public static readonly FLIMSY_LIFT =              new EditorVoices.EntityEditorVoices('Flimsy Lift',                     SoundCreator.singleEditorVoiceWithVoice('flimsylift',),)
    public static readonly CLOUD_LIFT =               new EditorVoices.EntityEditorVoices('Cloud Lift',                      SoundCreator.singleEditorVoiceWithSigningPart('CloudLift',),)

    public static readonly SEESAW =                   new EditorVoices.EntityEditorVoices('Seesaw',                          SoundCreator.singleEditorVoiceWithSigningPart('seesaw',),)

    public static readonly LAVA_LIFT =                new EditorVoices.EntityEditorVoices('Lava Lift',                       SoundCreator.singleEditorVoiceWithVoice('lavalift',),)
    public static readonly FAST_LAVA_LIFT =           new EditorVoices.EntityEditorVoices('Fast Lava Lift',                  SoundCreator.singleEditorVoiceWithSigningPart('FastLavaLift',),)

    public static readonly CRATE =                    new EditorVoices.EntityEditorVoices('Crate',                           SoundCreator.singleEditorVoiceWithSigningPart('crate',),)

    public static readonly KEY =                      new EditorVoices.EntityEditorVoices('Key',                             SoundCreator.singleEditorVoiceWithSigningPart('key',),)
    public static readonly CURSED_KEY =               new EditorVoices.EntityEditorVoices('Cursed Key',                      SoundCreator.singleEditorVoiceWithSigningPart('cursedkey',),)

    public static readonly TRAMPOLINE =               new EditorVoices.EntityEditorVoices('Trampoline',                      SoundCreator.singleEditorVoiceWithVoice('trampline',),)
    public static readonly HOP_CHOPS =                new EditorVoices.EntityEditorVoices('Hop-Chops',                       SoundCreator.singleEditorVoiceWithSigningPart('Hop-Chops',),)

    public static readonly POW_BLOCK =                new EditorVoices.EntityEditorVoices('POW Block',                       SoundCreator.singleEditorVoiceWithVoice('powblock',),)
    public static readonly RED_POW_BLOCK =            new EditorVoices.EntityEditorVoices('Red POW Block',                   SoundCreator.singleEditorVoiceWithSigningPart('redPOWBlock',),)

    public static readonly P_SWITCH =                 new EditorVoices.EntityEditorVoices('P Switch',                        SoundCreator.singleEditorVoiceWithVoice('pswitch',),)

    public static readonly WARP_DOOR =                new EditorVoices.EntityEditorVoices('Warp Door',                       SoundCreator.singleEditorVoiceWithVoice('warpdoor',),)
    public static readonly P_WARP_DOOR =              new EditorVoices.EntityEditorVoices('P Warp Door',                     SoundCreator.singleEditorVoiceWithVoice('pwarpdoor',),)
    public static readonly KEY_DOOR =                 new EditorVoices.EntityEditorVoices('Key Door',                        SoundCreator.singleEditorVoiceWithVoice('keydoor',),)

    public static readonly WARP_BOX =                 new EditorVoices.EntityEditorVoices('Warp Box',                        SoundCreator.singleEditorVoiceWithSigningPart('WarpBox',),)
    public static readonly WARP_BOX_WITH_KEY =        new EditorVoices.EntityEditorVoices('Warp Box (With Key)',             SoundCreator.singleEditorVoiceWithSigningPart('WarpBox_withkey',),)

    public static readonly WING =                     new EditorVoices.EntityEditorVoices('Wing',                            SoundCreator.singleEditorVoiceWithVoice('wings',),)

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
            return this.values.findFirstOrNull(it => hasByArray(it.entityReferences, value,),)
        }

        #findByCharacterName(value: CharacterNames,): NullOr<EditorVoices> {
            return this.values.findFirstOrNull(it => hasByArray(it.characterNameReferences, value,),)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishNameContainer
    readonly #editorVoiceSound
    #references?: Array<PossibleReference>
    #reference?: PossibleReference
    #characterNameReference?: Array<CharacterNames>
    #entityReferences?: Array<Entities>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    protected constructor(englishName: PossibleEnglishName, editorVoiceSoundFile: EditorVoiceSound,) {
        super()
        this.#englishNameContainer = new StringContainer(englishName,)
        this.#editorVoiceSound = editorVoiceSoundFile
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml
    }


    public get editorVoiceSoundFileHolder(): EditorVoiceSound {
        return this.#editorVoiceSound
    }

    //region -------------------- References --------------------

    public get reference(): PossibleReference {
        return this.#reference ??= this._retrieveReference()
    }

    protected abstract _retrieveReference(): PossibleReference


    public get references(): Array<PossibleReference> {
        return this.#references ??= this._retrieveReferences()
    }

    protected abstract _retrieveReferences(): Array<PossibleReference>

    //region -------------------- Character name references --------------------

    protected _createCharacterNameReference(): | PossibleEnglishName | Array<CharacterNames> {
        return this.englishName
    }

    public get characterNameReferences(): Array<CharacterNames> {
        if (this.#characterNameReference != null)
            return this.#characterNameReference

        const reference = this._createCharacterNameReference()
        if (isArray(reference,))
            return this.#characterNameReference = reference

        const Companion = Import.CharacterNames.Companion
        if (Companion.hasValueByName(reference,))
            return this.#characterNameReference = [Companion.getValueByName(reference,),]
        return this.#characterNameReference = EMPTY_ARRAY
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
    protected _createEntityReferences(): | PossibleEnglishName | Array<Entities> {
        return this.englishName
    }

    /**
     *  Get the {@link EntityReferenceHolder entity reference} applicable to a specific editor voice.
     *
     *  It can contain either the entity by the same name as {@link EditorVoices this instance},
     *  a single {@link Entities entity instance} similar to {@link EditorVoices this instance} or
     *  multiple {@link Entities entity instance} (from 2 to 4) associated to {@link EditorVoices this instance}.
     */
    public get entityReferences(): Array<Entities> {
        if (this.#entityReferences != null)
            return this.#entityReferences

        const reference = this._createEntityReferences()
        if (isArray(reference,))
            return this.#entityReferences = reference

        const Companion = Import.Entities.Companion
        if (Companion.hasValueByName(reference,))
            return this.#entityReferences = [Companion.getValueByName(reference,),]
        return this.#entityReferences = EMPTY_ARRAY
    }

    //endregion -------------------- Entity references --------------------

    //endregion -------------------- References --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace EditorVoices {

    /** The companion instance of a {@link EditorVoices} */
    export const Companion = EditorVoices.CompanionEnum.get

    export const ALL = Companion.values.toArray()

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).EditorVoices = EditorVoices
